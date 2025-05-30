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

    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      const history = getTestHistory();
      const latestResult = history
        .filter(r => r.testId === testId)
        .sort((a, b) => b.completedAt - a.completedAt)[0];

      if (latestResult) {
        setResult(latestResult);
      } else {
        setLocation('/');
      }
      setIsLoading(false);
    }, 2000);

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
      green: 'from-green-100 to-emerald-100'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  const bgGradient = getColorClasses(testData.color);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgGradient}`}>
      <div className="max-w-4xl mx-auto p-4 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-8xl mb-6"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {result.result.emoji}
          </motion.div>
          
          <motion.h1
            className="text-4xl font-bold mb-4 text-gray-800 break-keep"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            당신은 <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent break-keep">
              {result.result.title}
            </span>입니다!
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed break-keep hyphens-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {result.result.detailedDescription}
          </motion.p>
        </motion.div>

        {/* Traits */}
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

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.button
            onClick={handleShare}
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg flex items-center justify-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="fas fa-share-alt"></i>
            결과 공유하기
          </motion.button>
          
          <motion.button
            onClick={handleRetakeTest}
            className="flex-1 bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-gray-300 transition-all flex items-center justify-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="fas fa-redo"></i>
            다시 테스트하기
          </motion.button>
          
          <motion.button
            onClick={handleGoHome}
            className="flex-1 bg-purple-100 text-purple-700 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-200 transition-all flex items-center justify-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="fas fa-home"></i>
            다른 테스트 해보기
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
