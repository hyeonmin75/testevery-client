import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { QuestionCard } from '../components/QuestionCard';
import { ProgressBar } from '../components/ProgressBar';
import { ReactionTest } from '../components/ReactionTest';
import { tests } from '../data/tests';
import { useTest } from '../hooks/useTest';

export default function Test() {
  const { testId } = useParams<{ testId: string }>();
  const [, setLocation] = useLocation();
  const [selectedOptionId, setSelectedOptionId] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [currentReactionRound, setCurrentReactionRound] = useState(1);

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

  const handleReactionComplete = (reactionTime: number) => {
    const newReactionTimes = [...reactionTimes, reactionTime];
    setReactionTimes(newReactionTimes);
    
    if (currentReactionRound < 5) {
      setCurrentReactionRound(prev => prev + 1);
    } else {
      // 모든 라운드 완료 - 평균 계산하여 결과 도출
      const averageTime = newReactionTimes.reduce((sum, time) => sum + time, 0) / newReactionTimes.length;
      
      // 반응속도에 따른 결과 결정
      let resultType = 'steady';
      if (averageTime < 250) {
        resultType = 'lightning';
      } else if (averageTime < 350) {
        resultType = 'cheetah';
      } else if (averageTime < 450) {
        resultType = 'eagle';
      }
      
      // 세션 스토리지에 반응속도 결과 저장
      const result = {
        resultId: resultType,
        result: testData!.results[resultType],
        scores: { [resultType]: 100 },
        completedAt: Date.now(),
        testId: testId!,
        averageReactionTime: Math.round(averageTime),
        allReactionTimes: newReactionTimes
      };
      
      sessionStorage.setItem('currentTestResult', JSON.stringify(result));
      setLocation(`/result/${testId}`);
    }
  };

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
            className="text-4xl sm:text-5xl lg:text-6xl mb-4"
          >
            🧠
          </motion.div>
          <p className="text-gray-600 text-sm sm:text-base px-4">곧 결과가 나옵니다 잠시만 기다려주세요</p>
        </div>
      </div>
    );
  }

  // 반응속도 테스트인 경우 특별한 렌더링
  if (testData.id === 'reaction_speed') {
    return (
      <div className="min-h-screen bg-gradient-korean">
        {/* Header */}
        <motion.div 
          className="bg-white shadow-lg p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <motion.button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-arrow-left"></i>
              <span>홈으로 돌아가기</span>
            </motion.button>
            <div className="text-lg font-semibold text-gray-800">
              {testData.emoji} {testData.title}
            </div>
            <div className="text-sm text-gray-500">
              {currentReactionRound}/5 라운드
            </div>
          </div>
        </motion.div>

        {/* Reaction Test Component */}
        <ReactionTest
          onComplete={handleReactionComplete}
          round={currentReactionRound}
          totalRounds={5}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-korean">
      <div className="max-w-4xl mx-auto p-2 sm:p-4 py-2 sm:py-4">
        {/* Header */}
        <motion.div 
          className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-lg mb-3 sm:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <motion.button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-arrow-left"></i>
              <span className="hidden sm:inline">홈으로 돌아가기</span>
              <span className="sm:hidden">홈</span>
            </motion.button>
            <div className="text-xs sm:text-sm text-gray-500 break-keep">
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
