import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalculatedResult } from '../types/test';
import { Button } from './ui/button';
import { ShareModal } from './ShareModal';
import { Home, RefreshCw, Lightbulb, TrendingUp, Zap, Target } from 'lucide-react';
import { useLocation } from 'wouter';

interface CreativityResultProps {
  result: CalculatedResult;
  onRestart: () => void;
}

export function CreativityResult({ result, onRestart }: CreativityResultProps) {
  const [, setLocation] = useLocation();
  const [showShareModal, setShowShareModal] = useState(false);
  const [animatedScores, setAnimatedScores] = useState({
    fluency: 0,
    originality: 0,
    flexibility: 0,
    elaboration: 0
  });

  const handleGoHome = () => {
    setLocation('/');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScores({
        fluency: result.scores.fluency || 0,
        originality: result.scores.originality || 0,
        flexibility: result.scores.flexibility || 0,
        elaboration: result.scores.elaboration || 0
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [result.scores]);

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'bg-green-500';
    if (score >= 70) return 'bg-yellow-500';
    if (score >= 55) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getScoreDescription = (score: number) => {
    if (score >= 85) return '매우 우수';
    if (score >= 70) return '우수';
    if (score >= 55) return '보통';
    return '개선 필요';
  };

  const averageScore = Math.round(
    (animatedScores.fluency + animatedScores.originality + animatedScores.flexibility + animatedScores.elaboration) / 4
  );

  const getCreativityStyle = () => {
    const { fluency, originality, flexibility, elaboration } = animatedScores;
    
    if (originality >= 80 && flexibility >= 80) {
      return "혁신적 창의가";
    } else if (fluency >= 80 && elaboration >= 80) {
      return "체계적 창의가";
    } else if (flexibility >= 80) {
      return "융합형 창의가";
    } else if (elaboration >= 80) {
      return "정교한 창의가";
    } else if (fluency >= 80) {
      return "아이디어 제너레이터";
    } else if (originality >= 80) {
      return "독창적 사고가";
    } else {
      return "발전하는 창의가";
    }
  };

  const shareText = `나의 창의력 스타일은 "${getCreativityStyle()}"입니다! 🧠✨\n종합 점수: ${averageScore}점\n💡 유창성 ${animatedScores.fluency}점 | ✨ 독창성 ${animatedScores.originality}점\n🤸 유연성 ${animatedScores.flexibility}점 | 🔍 정교성 ${animatedScores.elaboration}점\n\n너도 창의력 테스트 해보자!`;

  const creativityTips = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "브레인스토밍 연습",
      description: "매일 하나의 주제로 5분간 아이디어 발산 연습하기"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "다양한 분야 탐구",
      description: "관심 없던 분야의 책이나 영상을 접하며 시야 넓히기"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "연상법 활용",
      description: "하나의 단어에서 시작해 연상되는 것들을 계속 이어가기"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "제약 조건 활용",
      description: "특정 조건을 설정하고 그 안에서 창의적 해결책 찾기"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">창의력 분석 완료!</h1>
          <p className="text-gray-600">당신의 창의적 사고 패턴을 분석했습니다</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Overall Result */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 lg:col-span-2"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {result.result.emoji} {result.result.title}
              </h2>
              <p className="text-gray-600 mb-4">{result.result.description}</p>
              
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  당신의 창의력 스타일은 "{getCreativityStyle()}"입니다!
                </h3>
                <div className="text-3xl font-bold text-yellow-600">
                  종합 점수: {averageScore}점
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {result.scores.ideaCount}개의 아이디어 • {Math.floor(result.scores.timeSpent / 60)}분 {result.scores.timeSpent % 60}초 소요
                </p>
              </div>
            </div>
          </motion.div>

          {/* Detailed Scores */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">창의력 4요소 분석</h3>
            
            <div className="space-y-6">
              {/* Fluency */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🌊</span>
                    <span className="font-semibold text-gray-800">유창성</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-lg">{animatedScores.fluency}점</span>
                    <span className="text-sm text-gray-500 ml-2">({getScoreDescription(animatedScores.fluency)})</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${getScoreColor(animatedScores.fluency)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedScores.fluency}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1">아이디어를 많이 생성하는 능력</p>
              </div>

              {/* Originality */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✨</span>
                    <span className="font-semibold text-gray-800">독창성</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-lg">{animatedScores.originality}점</span>
                    <span className="text-sm text-gray-500 ml-2">({getScoreDescription(animatedScores.originality)})</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${getScoreColor(animatedScores.originality)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedScores.originality}%` }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1">참신하고 독특한 아이디어를 만드는 능력</p>
              </div>

              {/* Flexibility */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🤸</span>
                    <span className="font-semibold text-gray-800">유연성</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-lg">{animatedScores.flexibility}점</span>
                    <span className="text-sm text-gray-500 ml-2">({getScoreDescription(animatedScores.flexibility)})</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${getScoreColor(animatedScores.flexibility)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedScores.flexibility}%` }}
                    transition={{ duration: 1, delay: 0.9 }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1">다양한 관점과 분야에서 사고하는 능력</p>
              </div>

              {/* Elaboration */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🔍</span>
                    <span className="font-semibold text-gray-800">정교성</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-lg">{animatedScores.elaboration}점</span>
                    <span className="text-sm text-gray-500 ml-2">({getScoreDescription(animatedScores.elaboration)})</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${getScoreColor(animatedScores.elaboration)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedScores.elaboration}%` }}
                    transition={{ duration: 1, delay: 1.1 }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1">아이디어를 구체적으로 발전시키는 능력</p>
              </div>
            </div>
          </motion.div>

          {/* Detailed Analysis */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6">상세 분석</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <span className="text-lg mr-2">💪</span>
                  강점
                </h4>
                <ul className="text-sm text-green-700 space-y-1">
                  {result.result.strengths?.map((strength, index) => (
                    <li key={index}>• {strength}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <span className="text-lg mr-2">🎯</span>
                  발전 방향
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  {result.result.improvements?.map((improvement, index) => (
                    <li key={index}>• {improvement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Creativity Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            🚀 창의력 향상 팁
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {creativityTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="p-4 border border-gray-200 rounded-lg hover:border-yellow-300 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                    {tip.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">{tip.title}</h4>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => setShowShareModal(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            결과 공유하기 📱
          </Button>
          <Button
            onClick={onRestart}
            variant="outline"
            className="border-yellow-300 text-yellow-600 hover:bg-yellow-50"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            다시 테스트하기
          </Button>
          <Button
            onClick={handleGoHome}
            variant="outline"
            className="border-gray-300 text-gray-600 hover:bg-gray-50"
          >
            <Home className="w-4 h-4 mr-2" />
            홈으로 가기
          </Button>
        </motion.div>

        {/* Motivational Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            창의력은 훈련을 통해 계속 발전시킬 수 있습니다. 
            다양한 경험과 새로운 시각으로 세상을 바라보며 
            당신만의 창의적 사고를 계속 키워나가세요! ✨
          </p>
        </motion.div>
      </div>

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        result={result}
        customMessage={shareText}
      />
    </div>
  );
}