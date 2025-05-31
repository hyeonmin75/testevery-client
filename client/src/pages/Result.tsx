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

    // 세션 스토리지에서 현재 테스트 결과 가져오기
    const timer = setTimeout(() => {
      const savedResult = sessionStorage.getItem('currentTestResult');
      
      if (savedResult) {
        try {
          const parsedResult = JSON.parse(savedResult);
          // 테스트 ID가 일치하는지 확인
          if (parsedResult.testId === testId) {
            setResult(parsedResult);
            setIsLoading(false);
            return;
          }
        } catch (error) {
          console.error('결과 파싱 오류:', error);
        }
      }
      
      // 결과를 찾을 수 없으면 홈으로 이동
      setLocation('/');
    }, 1000);

    return () => clearTimeout(timer);
  }, [testData, testId, setLocation]);

  const handleShare = () => {
    setShowShareModal(true);
  };

  const handleRetakeTest = () => {
    setLocation(`/test/${testId}`);
  };

  const handleGoHome = () => {
    setLocation('/');
  };

  const handleStartOtherTest = (otherTestId: string) => {
    setLocation(`/test/${otherTestId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-korean flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <motion.div
            className="text-8xl mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            🧠
          </motion.div>
          <h2 className="text-3xl font-bold text-purple-600 mb-4">결과를 분석하고 있습니다...</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            당신의 답변을 바탕으로<br />최적의 성격 유형을 찾고 있어요
          </p>
          
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

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: 'from-orange-100 to-red-100',
      pink: 'from-pink-100 to-purple-100',
      blue: 'from-blue-100 to-cyan-100',
      purple: 'from-purple-100 to-indigo-100',
      red: 'from-red-100 to-orange-100',
      green: 'from-emerald-100 to-cyan-100'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
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

        {/* Tapping Endurance Test Results */}
        {testData.id === 'tapping_endurance' && result.scores?.tapCount ? (
          <div className="space-y-8">
            {/* Main Stats */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">⚡</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">탭핑 스피드 테스트 결과</h2>
                <p className="text-gray-600">1분간의 집중력과 손목 지구력을 측정했습니다</p>
              </div>

              {/* Core Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="text-2xl mb-3">📊</div>
                  <div className="text-sm font-semibold text-blue-700 mb-1">총 탭핑 횟수</div>
                  <div className="text-3xl font-bold text-blue-800">{result.scores.tapCount}회</div>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  <div className="text-2xl mb-3">⚡</div>
                  <div className="text-sm font-semibold text-purple-700 mb-1">초당 속도</div>
                  <div className="text-3xl font-bold text-purple-800">{(result.scores.tapCount / 60).toFixed(1)}회/초</div>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="text-2xl mb-3">🎯</div>
                  <div className="text-sm font-semibold text-green-700 mb-1">분당 속도</div>
                  <div className="text-3xl font-bold text-green-800">{result.scores.tapCount}회/분</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Ranking System */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">속도 등급 시스템</h3>
              
              {/* Vertical Progress Bar */}
              <div className="flex justify-center mb-8">
                <div className="relative w-16 h-96 bg-gray-200 rounded-full overflow-hidden">
                  {/* Background levels */}
                  {[
                    { level: 10, color: 'from-purple-500 to-pink-500', min: 400, label: '전설' },
                    { level: 9, color: 'from-red-500 to-purple-500', min: 350, label: '마스터' },
                    { level: 8, color: 'from-orange-500 to-red-500', min: 300, label: '그랜드마스터' },
                    { level: 7, color: 'from-yellow-500 to-orange-500', min: 270, label: '다이아몬드' },
                    { level: 6, color: 'from-green-500 to-yellow-500', min: 240, label: '플래티넘' },
                    { level: 5, color: 'from-blue-500 to-green-500', min: 210, label: '골드' },
                    { level: 4, color: 'from-indigo-500 to-blue-500', min: 180, label: '실버' },
                    { level: 3, color: 'from-gray-500 to-indigo-500', min: 150, label: '브론즈' },
                    { level: 2, color: 'from-gray-400 to-gray-500', min: 120, label: '초보자' },
                    { level: 1, color: 'from-gray-300 to-gray-400', min: 0, label: '입문자' }
                  ].reverse().map((rank, index) => {
                    const isCurrentRank = result.scores!.tapCount >= rank.min && 
                      (index === 9 || result.scores!.tapCount < [400, 350, 300, 270, 240, 210, 180, 150, 120][index + 1]);
                    const heightPercent = 10;
                    const topPercent = index * 10;
                    
                    return (
                      <div
                        key={rank.level}
                        className={`absolute w-full transition-all duration-1000 ${
                          isCurrentRank ? `bg-gradient-to-b ${rank.color} opacity-100 scale-110` : 'bg-gray-300 opacity-40'
                        }`}
                        style={{ 
                          height: `${heightPercent}%`,
                          top: `${topPercent}%`
                        }}
                      />
                    );
                  })}
                  
                  {/* Current position indicator */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-yellow-400 rounded-full shadow-lg"
                    initial={{ top: '100%' }}
                    animate={{ 
                      top: `${Math.max(5, 100 - (Math.min(result.scores!.tapCount, 400) / 400) * 90)}%`
                    }}
                    transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                  />
                </div>

                {/* Level Labels */}
                <div className="ml-8 space-y-4">
                  {[
                    { level: '전설', color: 'text-purple-600', min: 400, emoji: '👑' },
                    { level: '마스터', color: 'text-red-600', min: 350, emoji: '🔥' },
                    { level: '그랜드마스터', color: 'text-orange-600', min: 300, emoji: '⭐' },
                    { level: '다이아몬드', color: 'text-yellow-600', min: 270, emoji: '💎' },
                    { level: '플래티넘', color: 'text-green-600', min: 240, emoji: '🏆' },
                    { level: '골드', color: 'text-blue-600', min: 210, emoji: '🥇' },
                    { level: '실버', color: 'text-indigo-600', min: 180, emoji: '🥈' },
                    { level: '브론즈', color: 'text-gray-600', min: 150, emoji: '🥉' },
                    { level: '초보자', color: 'text-gray-500', min: 120, emoji: '📈' },
                    { level: '입문자', color: 'text-gray-400', min: 0, emoji: '🌱' }
                  ].map((rank, index) => {
                    const isCurrentRank = result.scores!.tapCount >= rank.min && 
                      (index === 0 || result.scores!.tapCount < [400, 350, 300, 270, 240, 210, 180, 150, 120][index]);
                    
                    return (
                      <motion.div
                        key={rank.level}
                        className={`flex items-center space-x-3 p-2 rounded-lg transition-all ${
                          isCurrentRank ? 'bg-yellow-100 scale-110 font-bold' : 'opacity-60'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isCurrentRank ? 1 : 0.6, x: 0 }}
                        transition={{ delay: 2.5 + index * 0.1 }}
                      >
                        <span className="text-xl">{rank.emoji}</span>
                        <span className={`${rank.color} ${isCurrentRank ? 'font-bold' : ''}`}>
                          {rank.level}
                        </span>
                        <span className="text-sm text-gray-500">
                          {rank.min}회+
                        </span>
                        {isCurrentRank && (
                          <span className="text-yellow-600 font-bold">← 현재 등급</span>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Challenge Message */}
              <motion.div
                className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.8 }}
              >
                <h4 className="text-lg font-bold text-gray-800 mb-3">
                  {result.scores.tapCount >= 350 ? '🔥 절대 고수의 경지!' :
                   result.scores.tapCount >= 300 ? '⚡ 놀라운 실력입니다!' :
                   result.scores.tapCount >= 240 ? '💪 상위권 진입!' :
                   result.scores.tapCount >= 180 ? '👍 평균 이상의 실력!' :
                   result.scores.tapCount >= 120 ? '📈 꾸준한 성장 중!' : '🌱 시작이 반입니다!'}
                </h4>
                <p className="text-gray-600 mb-4">
                  {result.scores.tapCount >= 350 ? '당신은 탭핑 마스터입니다! 반응속도와 지구력이 최상급 수준이에요.' :
                   result.scores.tapCount >= 300 ? '프로 게이머 수준의 반응속도를 보여주고 있습니다!' :
                   result.scores.tapCount >= 240 ? '상당한 집중력과 손목 지구력을 가지고 있습니다.' :
                   result.scores.tapCount >= 180 ? '좋은 리듬감과 안정적인 속도를 유지하고 있어요.' :
                   result.scores.tapCount >= 120 ? '연습을 통해 더 빠른 속도를 낼 수 있을 것 같습니다.' : '꾸준한 연습으로 실력을 향상시켜보세요!'}
                </p>
                
                {result.scores.tapCount < 400 && (
                  <div className="bg-white rounded-lg p-4 inline-block">
                    <p className="text-sm text-gray-700">
                      다음 등급까지 <span className="font-bold text-purple-600">
                        {result.scores.tapCount >= 350 ? 400 - result.scores.tapCount :
                         result.scores.tapCount >= 300 ? 350 - result.scores.tapCount :
                         result.scores.tapCount >= 270 ? 300 - result.scores.tapCount :
                         result.scores.tapCount >= 240 ? 270 - result.scores.tapCount :
                         result.scores.tapCount >= 210 ? 240 - result.scores.tapCount :
                         result.scores.tapCount >= 180 ? 210 - result.scores.tapCount :
                         result.scores.tapCount >= 150 ? 180 - result.scores.tapCount :
                         result.scores.tapCount >= 120 ? 150 - result.scores.tapCount : 120 - result.scores.tapCount}회
                      </span> 더 필요해요!
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        ) : testData.id === 'reaction_speed' && result.averageReactionTime ? (
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center break-keep">반응속도 측정 결과</h3>
            
            {/* Average Reaction Time */}
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl">
                <div className="text-lg font-semibold mb-1">평균 반응속도</div>
                <div className="text-4xl font-bold">{result.averageReactionTime || 0}ms</div>
                <div className="text-sm opacity-90 mt-1">
                  {(result.averageReactionTime || 0) < 250 ? '⚡ 매우 빠름!' :
                   (result.averageReactionTime || 0) < 350 ? '🔥 빠름!' :
                   (result.averageReactionTime || 0) < 450 ? '👍 좋음!' : '🐌 보통'}
                </div>
              </div>
            </div>

            {/* Individual Round Results */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              {result.allReactionTimes?.map((time, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-gray-50 rounded-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                >
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-semibold text-gray-800">{index + 1}라운드</div>
                  <div className="text-lg font-bold text-red-500">{time}ms</div>
                </motion.div>
              ))}
            </div>

            {/* Performance Comparison */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">일반적인 반응속도와 비교</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">프로 게이머 수준</span>
                  <span className="text-sm font-semibold text-green-500">150-200ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">매우 빠름</span>
                  <span className="text-sm font-semibold text-blue-500">200-300ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">평균 수준</span>
                  <span className="text-sm font-semibold text-yellow-500">300-500ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">느림</span>
                  <span className="text-sm font-semibold text-red-500">500ms 이상</span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center break-keep">성격 특성</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {result.result.traits.map((trait, index) => (
                <motion.div
                  key={trait.name}
                  className="text-center p-4 bg-gray-50 rounded-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                >
                  <div className="text-3xl mb-2">{trait.emoji}</div>
                  <div className="font-semibold text-gray-800 break-keep">{trait.name}</div>
                  <div className="text-sm text-gray-600">{trait.percentage}%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${trait.percentage}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 break-keep">
              <i className="fas fa-star text-yellow-500"></i>
              당신의 강점
            </h3>
            <ul className="space-y-3 text-gray-600">
              {result.result.strengths.map((strength, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <i className="fas fa-check text-green-500 mt-1 flex-shrink-0"></i>
                  <span className="break-keep hyphens-auto">{strength}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 break-keep">
              <i className="fas fa-lightbulb text-yellow-500"></i>
              성장 포인트
            </h3>
            <ul className="space-y-3 text-gray-600">
              {result.result.improvements.map((improvement, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <i className="fas fa-arrow-up text-blue-500 mt-1 flex-shrink-0"></i>
                  <span className="break-keep hyphens-auto">{improvement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Compatible Types */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center break-keep">나와 잘 맞는 타입들</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {result.result.compatibleTypes.map((type, index) => (
              <motion.div
                key={type.id}
                className="text-center p-4 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1, type: "spring" }}
              >
                <div className="text-4xl mb-2">{type.emoji}</div>
                <div className="font-semibold text-gray-800 break-keep">{type.title}</div>
                <div className="text-xs text-green-600 font-semibold break-keep">{type.compatibility}% 궁합</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Share Buttons */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center break-keep">빠른 공유</h3>
          <div className="flex justify-center gap-4">
            <motion.button
              onClick={() => {
                const text = `나는 ${result.result.title}입니다! ${result.result.description} 🎯 심리테스트에서 확인해보세요!`;
                const url = window.location.href;
                if (navigator.share) {
                  navigator.share({ title: '심리테스트 결과', text: text, url: url });
                } else {
                  const kakaoUrl = `kakaotalk://share?text=${encodeURIComponent(text + ' ' + url)}`;
                  window.location.href = kakaoUrl;
                }
              }}
              className="w-12 h-12 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-comment text-white"></i>
            </motion.button>
            
            <motion.button
              onClick={() => {
                const text = `나는 ${result.result.title}입니다! ${result.result.description} 🎯 심리테스트에서 확인해보세요!`;
                const url = encodeURIComponent(window.location.href);
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodeURIComponent(text)}`, '_blank', 'width=600,height=400');
              }}
              className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-facebook-f text-white"></i>
            </motion.button>
            
            <motion.button
              onClick={() => {
                const text = `나는 ${result.result.title}입니다! ${result.result.description} 🎯 심리테스트에서 확인해보세요!`;
                const url = encodeURIComponent(window.location.href);
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank', 'width=600,height=400');
              }}
              className="w-12 h-12 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-twitter text-white"></i>
            </motion.button>
            
            <motion.button
              onClick={async () => {
                const text = `나는 ${result.result.title}입니다! ${result.result.description} 🎯 심리테스트에서 확인해보세요!`;
                const fullText = `${text}\n${window.location.href}`;
                try {
                  await navigator.clipboard.writeText(fullText);
                  alert('결과 텍스트와 링크가 복사되었습니다!');
                } catch (err) {
                  prompt('다음 텍스트를 복사해주세요:', fullText);
                }
              }}
              className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-link text-white"></i>
            </motion.button>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.button
            onClick={handleShare}
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg flex items-center justify-center gap-3 break-keep"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="fas fa-share-alt"></i>
            <span className="break-keep">더 많은 공유 옵션</span>
          </motion.button>
          
          <motion.button
            onClick={handleRetakeTest}
            className="flex-1 bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-gray-300 transition-all flex items-center justify-center gap-3 break-keep"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="fas fa-redo"></i>
            <span className="break-keep">다시 테스트하기</span>
          </motion.button>
          
          <motion.button
            onClick={handleGoHome}
            className="flex-1 bg-purple-100 text-purple-700 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-200 transition-all flex items-center justify-center gap-3 break-keep"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="fas fa-home"></i>
            <span className="break-keep">다른 테스트 해보기</span>
          </motion.button>
        </motion.div>

        {/* Recommended Tests */}
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">🎯 추천 테스트</h3>
          <p className="text-purple-100 mb-6">비슷한 성향의 사람들이 많이 한 테스트예요!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.values(tests)
              .filter(test => test.id !== testId)
              .slice(0, 3)
              .map((test, index) => (
                <motion.button
                  key={test.id}
                  onClick={() => handleStartOtherTest(test.id)}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                >
                  <div className="text-3xl mb-2">{test.emoji}</div>
                  <div className="font-semibold">{test.title.replace(' 테스트', '')}</div>
                  <div className="text-sm text-purple-100">추천도 {90 - index * 5}%</div>
                </motion.button>
              ))}
          </div>
        </motion.div>

        {/* Share Modal */}
        <ShareModal
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          result={result}
        />
      </div>
    </div>
  );
}
