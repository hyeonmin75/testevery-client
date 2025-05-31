import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'wouter';
import { motion } from 'framer-motion';
import { ShareModal } from '../components/ShareModal';
import { tests } from '../data/tests';
import { getTestHistory } from '../utils/testLogic';
import { CalculatedResult } from '../types/test';

export default function Result() {
  const { testId } = useParams<{ testId: string }>();
  const [, setLocation] = useLocation();
  const [showShareModal, setShowShareModal] = useState(false);
  const [result, setResult] = useState<CalculatedResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const testData = testId ? tests[testId] : null;

  useEffect(() => {
    if (!testData) {
      setLocation('/');
      return;
    }

    const timer = setTimeout(() => {
      const savedResult = sessionStorage.getItem('currentTestResult');
      
      if (savedResult) {
        try {
          const parsedResult = JSON.parse(savedResult);
          setResult(parsedResult);
        } catch (error) {
          console.error('Failed to parse result:', error);
          const history = getTestHistory();
          const latestResult = history.find(r => r.testId === testId);
          if (latestResult) {
            setResult(latestResult);
          } else {
            setLocation('/');
            return;
          }
        }
      } else {
        const history = getTestHistory();
        const latestResult = history.find(r => r.testId === testId);
        if (latestResult) {
          setResult(latestResult);
        } else {
          setLocation('/');
          return;
        }
      }
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [testData, testId, setLocation]);

  const handleGoHome = () => {
    setLocation('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-korean flex items-center justify-center">
        <div className="text-center">
          <motion.div
            className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="bg-white rounded-full p-2 w-80 mx-auto">
            <div className="bg-gray-200 rounded-full h-4">
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="mt-4 text-purple-600 font-semibold">거의 완료되었습니다...</div>
        </div>
      </div>
    );
  }

  if (!result || !testData) {
    return (
      <div className="min-h-screen bg-gradient-korean flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">결과를 찾을 수 없습니다</h2>
          <button
            onClick={handleGoHome}
            className="bg-purple-500 text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition-colors"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  // 탭핑 테스트 전용 결과 페이지
  if (testData.id === 'tapping_endurance' && result.scores?.tapCount) {
    const tapCount = result.scores.tapCount;
    const tapsPerSecond = (tapCount / 60).toFixed(1);
    
    const getRankInfo = (count: number) => {
      if (count >= 400) return { name: '전설', emoji: '👑', color: 'purple', next: null };
      if (count >= 350) return { name: '마스터', emoji: '🔥', color: 'red', next: 400 };
      if (count >= 300) return { name: '그랜드마스터', emoji: '⭐', color: 'orange', next: 350 };
      if (count >= 270) return { name: '다이아몬드', emoji: '💎', color: 'yellow', next: 300 };
      if (count >= 240) return { name: '플래티넘', emoji: '🏆', color: 'green', next: 270 };
      if (count >= 210) return { name: '골드', emoji: '🥇', color: 'blue', next: 240 };
      if (count >= 180) return { name: '실버', emoji: '🥈', color: 'indigo', next: 210 };
      if (count >= 150) return { name: '브론즈', emoji: '🥉', color: 'gray', next: 180 };
      if (count >= 120) return { name: '초보자', emoji: '📈', color: 'gray', next: 150 };
      return { name: '입문자', emoji: '🌱', color: 'gray', next: 120 };
    };

    const rankInfo = getRankInfo(tapCount);
    const allRanks = [
      { name: '전설', emoji: '👑', min: 400 },
      { name: '마스터', emoji: '🔥', min: 350 },
      { name: '그랜드마스터', emoji: '⭐', min: 300 },
      { name: '다이아몬드', emoji: '💎', min: 270 },
      { name: '플래티넘', emoji: '🏆', min: 240 },
      { name: '골드', emoji: '🥇', min: 210 },
      { name: '실버', emoji: '🥈', min: 180 },
      { name: '브론즈', emoji: '🥉', min: 150 },
      { name: '초보자', emoji: '📈', min: 120 },
      { name: '입문자', emoji: '🌱', min: 0 }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto p-4 py-8">
          {/* Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-7xl mb-6">⚡</div>
            <h1 className="text-5xl font-black text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              탭핑 스피드 결과
            </h1>
            <p className="text-xl text-gray-600">1분간의 집중력과 손목 지구력을 측정했습니다</p>
          </motion.div>

          {/* Main Performance Stats */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl">
                <div className="text-4xl mb-4">📊</div>
                <div className="text-lg font-bold text-blue-700 mb-2">총 탭핑 횟수</div>
                <div className="text-5xl font-black text-blue-800 mb-2">{tapCount}</div>
                <div className="text-blue-600">회</div>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl">
                <div className="text-4xl mb-4">⚡</div>
                <div className="text-lg font-bold text-purple-700 mb-2">초당 속도</div>
                <div className="text-5xl font-black text-purple-800 mb-2">{tapsPerSecond}</div>
                <div className="text-purple-600">회/초</div>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl">
                <div className="text-4xl mb-4">🎯</div>
                <div className="text-lg font-bold text-green-700 mb-2">분당 속도</div>
                <div className="text-5xl font-black text-green-800 mb-2">{tapCount}</div>
                <div className="text-green-600">회/분</div>
              </div>
            </div>
          </motion.div>

          {/* Current Rank Display */}
          <motion.div
            className="bg-white rounded-3xl p-10 shadow-2xl mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-8xl mb-6">{rankInfo.emoji}</div>
              <h2 className="text-4xl font-black text-gray-800 mb-4">
                당신은 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {rankInfo.name}급
                </span> 입니다!
              </h2>
              
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  {tapCount >= 350 ? '절대 고수의 경지! 당신은 탭핑 마스터입니다! 반응속도와 지구력이 최상급 수준이에요.' :
                   tapCount >= 300 ? '놀라운 실력입니다! 프로 게이머 수준의 반응속도를 보여주고 있습니다!' :
                   tapCount >= 240 ? '상위권 진입! 상당한 집중력과 손목 지구력을 가지고 있습니다!' :
                   tapCount >= 180 ? '평균 이상의 실력! 좋은 리듬감과 안정적인 속도를 유지하고 있어요!' :
                   tapCount >= 120 ? '꾸준한 성장 중! 연습을 통해 더 빠른 속도를 낼 수 있을 것 같습니다!' : '좋은 시작입니다! 꾸준한 연습으로 실력을 향상시켜보세요!'}
                </p>
              </div>

              {rankInfo.next && (
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">다음 등급까지</h3>
                  <div className="text-4xl font-black text-purple-600 mb-2">
                    {rankInfo.next - tapCount}회
                  </div>
                  <p className="text-gray-600">더 탭핑하면 한 단계 승급!</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Ranking Ladder */}
          <motion.div
            className="bg-white rounded-3xl p-10 shadow-2xl mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">전체 등급표</h3>
            
            <div className="flex flex-col space-y-6">
              {/* Vertical Progress Bar - Full Height */}
              <div className="w-full">
                <div className="relative w-16 mx-auto bg-gray-200 rounded-full overflow-hidden" style={{ height: `${allRanks.length * 80}px` }}>
                  {/* Background gradient fill */}
                  <motion.div
                    className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 rounded-full"
                    initial={{ height: '0%' }}
                    animate={{ height: `${Math.min(95, (tapCount / 400) * 95)}%` }}
                    transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
                  />
                  
                  {/* Current position indicator */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-yellow-400 border-4 border-white rounded-full shadow-xl z-10"
                    initial={{ bottom: '2%' }}
                    animate={{ bottom: `${Math.min(92, (tapCount / 400) * 92)}%` }}
                    transition={{ delay: 2, duration: 2, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Rank Labels - Full List */}
              <div className="space-y-3">
                {allRanks.map((rank, index) => {
                  const isCurrentRank = tapCount >= rank.min && (rank.min === 400 || tapCount < allRanks[index - 1]?.min);
                  
                  return (
                    <motion.div
                      key={rank.name}
                      className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                        isCurrentRank 
                          ? 'bg-gradient-to-r from-yellow-100 to-yellow-200 scale-105 border-2 border-yellow-400 shadow-lg' 
                          : 'bg-gray-50 opacity-70'
                      }`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: isCurrentRank ? 1 : 0.7, x: 0 }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl">{rank.emoji}</span>
                        <div>
                          <span className={`font-bold text-lg ${isCurrentRank ? 'text-yellow-800' : 'text-gray-700'}`}>
                            {rank.name}
                          </span>
                          <div className="text-sm text-gray-500">{rank.min}회 이상</div>
                        </div>
                      </div>
                      {isCurrentRank && (
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          현재 등급
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <button
              onClick={() => setShowShareModal(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              결과 공유하기
            </button>
            <button
              onClick={() => setLocation('/test/tapping_endurance')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              다시 도전하기
            </button>
            <button
              onClick={handleGoHome}
              className="bg-white text-gray-700 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl border-2 border-gray-300"
            >
              다른 테스트 하기
            </button>
          </motion.div>
        </div>

        <ShareModal
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          result={result}
        />
      </div>
    );
  }

  // 기존 일반 테스트 결과 페이지
  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: 'from-orange-100 to-red-100',
      pink: 'from-pink-100 to-purple-100',
      blue: 'from-blue-100 to-cyan-100',
      purple: 'from-purple-100 to-indigo-100',
      red: 'from-red-100 to-orange-100',
      green: 'from-green-100 to-teal-100',
      yellow: 'from-yellow-100 to-orange-100',
    } as const;
    return colorMap[color as keyof typeof colorMap] || 'from-gray-100 to-blue-100';
  };

  const bgGradient = getColorClasses(testData.color);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgGradient}`}>
      <div className="max-w-4xl mx-auto p-2 sm:p-4 py-6 sm:py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-5xl sm:text-6xl lg:text-8xl mb-4 sm:mb-6"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {result.result.emoji}
          </motion.div>
          
          <motion.h1
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 text-gray-800 break-keep px-4 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            당신은 <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent break-keep">
              {result.result.title}
            </span>입니다!
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-loose break-keep hyphens-auto px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {result.result.detailedDescription}
          </motion.p>
        </motion.div>

        {/* Regular Test Results */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center break-keep">성격 특성</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {result.result.traits.map((trait, index) => (
              <motion.div
                key={trait.name}
                className="text-center p-4 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
              >
                <div className="text-3xl mb-2">{trait.emoji}</div>
                <div className="font-semibold text-gray-800 text-sm md:text-base break-keep">{trait.name}</div>
                <div className="text-2xl font-bold text-purple-600 mt-2">{trait.percentage}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Description */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center break-keep">상세 분석</h3>
          <p className="text-lg text-gray-600 leading-relaxed text-center break-keep hyphens-auto">
            {result.result.detailedDescription}
          </p>
        </motion.div>

        {/* Strengths and Improvements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8">
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-green-600 mb-6 text-center break-keep">당신의 강점</h3>
            <ul className="space-y-3">
              {result.result.strengths.map((strength, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 break-keep hyphens-auto"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <span className="text-green-500 text-lg flex-shrink-0">✓</span>
                  {strength}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center break-keep">성장 포인트</h3>
            <ul className="space-y-3">
              {result.result.improvements.map((improvement, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 break-keep hyphens-auto"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <span className="text-blue-500 text-lg flex-shrink-0">→</span>
                  {improvement}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Compatible Types */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center break-keep">궁합이 좋은 유형</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {result.result.compatibleTypes.map((type, index) => (
              <motion.div
                key={type.id}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.1, type: "spring" }}
              >
                <div className="text-3xl mb-3">{type.emoji}</div>
                <div className="font-bold text-gray-800 mb-2 break-keep">{type.title}</div>
                <div className="text-purple-600 font-semibold">{type.compatibility}% 궁합</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.6 }}
        >
          <button
            onClick={() => setShowShareModal(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            결과 공유하기
          </button>
          <button
            onClick={() => setLocation(`/test/${testId}`)}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            다시 테스트하기
          </button>
          <button
            onClick={handleGoHome}
            className="bg-white text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform shadow-lg border-2 border-gray-200"
          >
            다른 테스트 하기
          </button>
        </motion.div>
      </div>

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        result={result}
      />
    </div>
  );
}