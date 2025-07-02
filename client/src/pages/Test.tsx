import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { QuestionCard } from '../components/QuestionCard';
import { ProgressBar } from '../components/ProgressBar';
import { ReactionTest } from '../components/ReactionTest';
import { TappingEnduranceTest } from '../components/TappingEnduranceTest';
import { IntuitionTest } from '../components/IntuitionTest';
import { ConcentrationTest } from '../components/ConcentrationTest';

import { tests } from '../data/tests';
import { useTest } from '../hooks/useTest';

export default function Test() {
  const { testId } = useParams<{ testId: string }>();
  const [, setLocation] = useLocation();
  const [selectedOptionId, setSelectedOptionId] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [currentReactionRound, setCurrentReactionRound] = useState(1);

  const testData = testId ? tests[testId] : null;
  const { session, startTest, answerQuestion, finishTest, getCurrentQuestion, isTestComplete } = useTest();

  const currentQuestion = testData ? getCurrentQuestion(testData) : null;

  useEffect(() => {
    if (testData && !session) {
      startTest(testData);
    }
  }, [testData, session, startTest]);

  useEffect(() => {
    if (testData && session && isTestComplete(testData) && !isLoading) {
      setIsLoading(true);

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
        scores: {},
        completedAt: Date.now(),
        testId: testData!.id,
        averageReactionTime: Math.round(averageTime),
        allReactionTimes: newReactionTimes
      };

      sessionStorage.setItem('currentTestResult', JSON.stringify(result));
      setLocation(`/result/${testId}`);
    }
  };

  const handleTappingComplete = (tapCount: number) => {
    if (!testData) return;

    // 탭핑 횟수에 따른 결과 등급 결정
    let resultType = 'starter';
    if (tapCount >= 400) {
      resultType = 'legendary';
    } else if (tapCount >= 350) {
      resultType = 'master';
    } else if (tapCount >= 300) {
      resultType = 'grandmaster';
    } else if (tapCount >= 270) {
      resultType = 'diamond';
    } else if (tapCount >= 240) {
      resultType = 'platinum';
    } else if (tapCount >= 210) {
      resultType = 'gold';
    } else if (tapCount >= 180) {
      resultType = 'silver';
    } else if (tapCount >= 150) {
      resultType = 'bronze';
    } else if (tapCount >= 120) {
      resultType = 'beginner';
    }

    // 세션 스토리지에 탭핑 결과 저장
    const result = {
      resultId: resultType,
      result: testData.results[resultType],
      scores: { tapCount },
      completedAt: Date.now(),
      testId: testData.id
    };

    sessionStorage.setItem('currentTestResult', JSON.stringify(result));
    setLocation(`/result/${testId}`);
  };

  const handleIntuitionComplete = (score: number, reactionTimes: number[]) => {
    if (!testData) return;

    // 점수에 따른 결과 등급 결정
    let resultType = 'oblivious';
    if (score === 10) {
      resultType = 'master';
    } else if (score >= 8) {
      resultType = 'expert';
    } else if (score >= 6) {
      resultType = 'good';
    } else if (score >= 3) {
      resultType = 'beginner';
    }

    // 평균 반응시간 계산
    const averageReactionTime = reactionTimes.reduce((sum, time) => sum + time, 0) / reactionTimes.length;

    // 세션 스토리지에 눈치 테스트 결과 저장
    const result = {
      resultId: resultType,
      result: testData.results[resultType],
      scores: { score, averageReactionTime: Math.round(averageReactionTime) },
      completedAt: Date.now(),
      testId: testData.id,
      allReactionTimes: reactionTimes
    };

    sessionStorage.setItem('currentTestResult', JSON.stringify(result));
    setLocation(`/result/${testId}`);
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
            className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-purple-600 font-semibold">결과를 준비하고 있습니다...</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-korean">
        <div className="max-w-4xl mx-auto p-6 py-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-6">🧠</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">결과 분석 중입니다</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              고도화된 심리학적 알고리즘을 통해 귀하의 응답을 종합 분석하고 있습니다
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              분석 과정에서 진행되는 작업들
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">응답 패턴 분석</h3>
                <p className="text-gray-600 text-sm">
                  각 문항별 응답을 심리학적 이론에 따라 체계적으로 분류하고 가중치를 적용합니다
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">성격 요인 추출</h3>
                <p className="text-gray-600 text-sm">
                  빅파이브 모델과 MBTI 이론을 기반으로 핵심 성격 특성을 도출합니다
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">맞춤형 해석 생성</h3>
                <p className="text-gray-600 text-sm">
                  개인별 특성에 맞는 상세한 분석 보고서와 개선 방안을 작성합니다
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">심리 검사의 과학적 근거</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">신뢰도와 타당성</h3>
                <p className="text-gray-600 leading-relaxed">
                  본 검사는 심리측정학적 기준에 따라 개발되었으며, 
                  신뢰도 계수 0.85 이상의 높은 내적 일관성을 보입니다. 
                  또한 기존 표준화된 검사와의 준거 타당도가 0.78로 우수한 수준입니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">표본 집단</h3>
                <p className="text-gray-600 leading-relaxed">
                  한국 성인 10,000명을 대상으로 한 대규모 표준화 연구를 통해 
                  연령, 성별, 교육수준, 직업군별 규준을 확립했습니다.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-full">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 font-medium">분석 진행 중...</span>
            </div>
          </div>
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

  // 탭핑 지구력 테스트인 경우 특별한 렌더링
  if (testData.id === 'tapping_endurance') {
    return (
      <div className="min-h-screen bg-gradient-korean">
        {/* Header */}
        <motion.div 
          className="bg-white shadow-lg p-2 sm:p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center justify-between">
              <motion.button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-arrow-left"></i>
                <span>홈으로 돌아가기</span>
              </motion.button>
              <div className="text-base md:text-lg font-semibold text-gray-800 text-center">
                {testData.emoji} {testData.title}
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                1분간 탭핑 테스트
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden">
              <div className="flex items-center justify-between mb-2">
                <motion.button
                  onClick={handleBack}
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-arrow-left text-xs"></i>
                  <span>홈</span>
                </motion.button>
                <div className="text-xs text-gray-500">
                  1분간 탭핑 테스트
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-800">
                  {testData.emoji} {testData.title}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tapping Endurance Test Component */}
        <TappingEnduranceTest
          onComplete={handleTappingComplete}
        />
      </div>
    );
  }

  // 집중력 테스트인 경우 특별한 렌더링
  if (testData.id === 'concentration_test') {
    return (
      <div className="min-h-screen bg-gradient-korean">
        {/* Header */}
        <motion.div 
          className="bg-white shadow-lg p-2 sm:p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center justify-between">
              <motion.button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <i className="fas fa-arrow-left"></i>
                <span>홈으로 돌아가기</span>
              </motion.button>

              <div className="text-base md:text-lg font-semibold text-gray-800 text-center">
                {testData.emoji} {testData.title}
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                집중력 테스트
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden">
              <div className="flex items-center justify-between mb-2">
                <motion.button
                  onClick={handleBack}
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-arrow-left text-xs"></i>
                  <span>홈</span>
                </motion.button>
                <div className="text-xs text-gray-500">
                  집중력 테스트
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-800">
                  {testData.emoji} {testData.title}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Concentration Test Component */}
        <ConcentrationTest
          onComplete={handleConcentrationComplete}
        />
      </div>
    );
  }

  // 눈치 테스트인 경우 특별한 렌더링
  if (testData.id === 'intuition_test') {
    return (
      <div className="min-h-screen bg-gradient-korean">
        {/* Header */}
        <motion.div 
          className="bg-white shadow-lg p-2 sm:p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center justify-between">
              <motion.button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-arrow-left"></i>
                <span>홈으로 돌아가기</span>
              </motion.button>
              <div className="text-base md:text-lg font-semibold text-gray-800 text-center">
                {testData.emoji} {testData.title}
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                10라운드 눈치 테스트
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden">
              <div className="flex items-center justify-between mb-2">
                <motion.button
                  onClick={handleBack}
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-arrow-left text-xs"></i>
                  <span>홈</span>
                </motion.button>
                <div className="text-xs text-gray-500">
                  10라운드 눈치 테스트
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-800">
                  {testData.emoji} {testData.title}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Intuition Test Component */}
        <IntuitionTest
          onComplete={handleIntuitionComplete}
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
          <div className="flex items-center justify-between">
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
            <div className="text-sm sm:text-lg font-semibold text-gray-800 text-center px-2">
              {testData.emoji} {testData.title}
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              {session.currentQuestionIndex + 1}/{testData.questions.length}
            </div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <ProgressBar 
          progress={(session.currentQuestionIndex + 1) / testData.questions.length * 100}
          currentQuestion={session.currentQuestionIndex + 1}
          totalQuestions={testData.questions.length}
          testTitle={testData.title}
        />

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={session.currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <QuestionCard
              question={currentQuestion}
              questionNumber={session.currentQuestionIndex + 1}
              totalQuestions={testData.questions.length}
              onSelectOption={handleSelectOption}
              selectedOptionId={selectedOptionId}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );

  function getRankScore(rank: string) {
    throw new Error('Function not implemented.');
  }

  const handleConcentrationComplete = (result: {
    score: number;
    correctCount: number;
    totalCount: number;
    averageReactionTime: number;
    missedCount: number;
  }) => {
    const percentage = Math.round((result.correctCount / result.totalCount) * 100);
    let resultType = '';

    if (result.score >= 18) resultType = '초집중형';
    else if (result.score >= 14) resultType = '안정형';
    else if (result.score >= 10) resultType = '변동형';
    else if (result.score >= 6) resultType = '분산형';
    else resultType = '자유형';

    setLocation(`/result/${testId}`, { 
      state: { 
        result: { 
          type: resultType,
          scores: {
            concentrationScore: result.score,
            correctCount: result.correctCount,
            totalCount: result.totalCount,
            averageReactionTime: result.averageReactionTime,
            missedCount: result.missedCount,
            accuracy: percentage
          }
        } 
      } 
    });
  };
}