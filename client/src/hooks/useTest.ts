import { useState, useCallback } from 'react';
import { TestData, UserAnswer, TestSession, CalculatedResult } from '../types/test';
import { calculateTestResult, saveTestResult } from '../utils/testLogic';

export function useTest() {
  const [session, setSession] = useState<TestSession | null>(null);
  const [result, setResult] = useState<CalculatedResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const startTest = useCallback((testData: TestData) => {
    const newSession: TestSession = {
      testId: testData.id,
      currentQuestionIndex: 0,
      answers: [],
      startTime: Date.now()
    };
    setSession(newSession);
    setResult(null);
  }, []);

  const answerQuestion = useCallback((optionId: string) => {
    if (!session) return;

    const answer: UserAnswer = {
      questionId: session.currentQuestionIndex + 1,
      optionId,
      timestamp: Date.now()
    };

    const newAnswers = [...session.answers, answer];
    setSession({
      ...session,
      answers: newAnswers,
      currentQuestionIndex: session.currentQuestionIndex + 1
    });
  }, [session]);

  const finishTest = useCallback(async (testData: TestData) => {
    if (!session) return;

    setIsLoading(true);
    
    // Simulate processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const calculatedResult = calculateTestResult(testData, session.answers);
    
    // 결과를 세션 스토리지에 임시 저장
    sessionStorage.setItem('currentTestResult', JSON.stringify(calculatedResult));
    
    setResult(calculatedResult);
    setSession({
      ...session,
      endTime: Date.now()
    });
    setIsLoading(false);
  }, [session]);

  const resetTest = useCallback(() => {
    setSession(null);
    setResult(null);
    setIsLoading(false);
  }, []);

  const getCurrentQuestion = useCallback((testData: TestData) => {
    if (!session || session.currentQuestionIndex >= testData.questions.length) {
      return null;
    }
    return testData.questions[session.currentQuestionIndex];
  }, [session]);

  const getProgress = useCallback((testData: TestData) => {
    if (!session) return 0;
    return Math.round((session.currentQuestionIndex / testData.questions.length) * 100);
  }, [session]);

  const isTestComplete = useCallback((testData: TestData) => {
    return session && session.currentQuestionIndex >= testData.questions.length;
  }, [session]);

  return {
    session,
    result,
    isLoading,
    startTest,
    answerQuestion,
    finishTest,
    resetTest,
    getCurrentQuestion,
    getProgress,
    isTestComplete
  };
}
