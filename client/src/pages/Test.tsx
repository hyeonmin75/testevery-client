import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { QuestionCard } from '../components/QuestionCard';
import { ProgressBar } from '../components/ProgressBar';
import { tests } from '../data/tests';
import { useTest } from '../hooks/useTest';

export default function Test() {
  const { testId } = useParams<{ testId: string }>();
  const [, setLocation] = useLocation();
  const [selectedOptionId, setSelectedOptionId] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);

  const {
    session,
    isLoading,
    startTest,
    answerQuestion,
    finishTest,
    getCurrentQuestion,
    getProgress,
    isTestComplete
  } = useTest();

  const testData = testId ? tests[testId] : null;
  const currentQuestion = testData ? getCurrentQuestion(testData) : null;
  const progress = testData ? getProgress(testData) : 0;

  useEffect(() => {
    if (!testData) {
      setLocation('/');
      return;
    }

    if (!session) {
      startTest(testData);
    }
  }, [testData, session, startTest, setLocation]);

  useEffect(() => {
    if (testData && isTestComplete(testData) && !isLoading) {
      // 테스트 완료 시 결과 계산 및 페이지 이동
      const processResult = async () => {
        await finishTest(testData);
        // 결과 계산 완료 후 페이지 이동
        setTimeout(() => {
          setLocation(`/result/${testId}`);
        }, 1000);
      };
      
      processResult();
    }
  }, [testData, isTestComplete, finishTest, isLoading, setLocation, testId]);

  const handleSelectOption = async (optionId: string) => {
    if (isAnimating || !testData || !session) return;
    
    setSelectedOptionId(optionId);
    setIsAnimating(true);

    // Wait for selection animation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    answerQuestion(optionId);
    
    // 답변 후 테스트 완료 여부 확인
    const nextQuestionIndex = session.currentQuestionIndex + 1;
    if (nextQuestionIndex >= testData.questions.length) {
      // 마지막 질문 완료 - 결과 계산 시작
      await finishTest(testData);
      // 결과 페이지로 이동
      setLocation(`/result/${testId}`);
    }
    
    setSelectedOptionId('');
    setIsAnimating(false);
  };

  const handleBack = () => {
    setLocation('/');
  };

  if (!testData || !session || !currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-korean flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="text-6xl mb-4"
          >
            🧠
          </motion.div>
          <p className="text-gray-600">테스트를 준비하고 있습니다...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-korean">
      <div className="max-w-4xl mx-auto p-4 py-8">
        {/* Header */}
        <motion.div 
          className="bg-white rounded-3xl p-6 shadow-lg mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <motion.button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-arrow-left"></i>
              <span>홈으로 돌아가기</span>
            </motion.button>
            <div className="text-sm text-gray-500">
              {testData.emoji} {testData.title}
            </div>
          </div>
          
          <ProgressBar
            progress={progress}
            currentQuestion={session.currentQuestionIndex + 1}
            totalQuestions={testData.questions.length}
            testTitle={testData.title}
          />
        </motion.div>

        {/* Question */}
        <QuestionCard
          question={currentQuestion}
          questionNumber={session.currentQuestionIndex + 1}
          totalQuestions={testData.questions.length}
          onSelectOption={handleSelectOption}
          selectedOptionId={selectedOptionId}
        />

        {/* Navigation */}
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.button
            onClick={handleBack}
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-2xl transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-home"></i>
            <span>처음으로</span>
          </motion.button>
          
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-2">
              {session.currentQuestionIndex + 1} / {testData.questions.length}
            </div>
            <div className="text-xs text-gray-400">
              남은 시간: 약 {Math.ceil((testData.questions.length - session.currentQuestionIndex) * 0.5)}분
            </div>
          </div>
          
          <div className="w-24"> {/* Spacer for symmetry */}
            {selectedOptionId && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-purple-600 font-semibold"
              >
                <i className="fas fa-spinner fa-spin mr-2"></i>
                처리중...
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
