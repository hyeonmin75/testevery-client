import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalculatedResult } from '../types/test';
import { Button } from './ui/button';
import { ShareModal } from './ShareModal';
import { Heart, RefreshCw, Coffee, Headphones, BookOpen, TreePine } from 'lucide-react';

interface EmotionalTankResultProps {
  result: CalculatedResult;
  onRestart: () => void;
}

interface RecoveryTip {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  link?: string;
}

export function EmotionalTankResult({ result, onRestart }: EmotionalTankResultProps) {
  const [showShareModal, setShowShareModal] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
  const tankPercentage = result.scores.tank || 0;
  const drainScore = result.scores.drain || 0;

  // 감정 기상도 이모지
  const getWeatherEmoji = (percentage: number) => {
    if (percentage >= 75) return '☀️';
    if (percentage >= 50) return '🌤️';
    if (percentage >= 25) return '🌧️';
    return '⛈️';
  };

  // 감정 회복 팁
  const getRecoveryTips = (percentage: number): RecoveryTip[] => {
    if (percentage >= 75) {
      return [
        {
          id: '1',
          title: '감사 일기 쓰기',
          description: '오늘의 좋았던 점 3가지를 적어보세요',
          icon: <BookOpen className="w-5 h-5" />,
          duration: '5분'
        },
        {
          id: '2',
          title: '동료와 차 한잔',
          description: '좋은 에너지를 나누어보세요',
          icon: <Coffee className="w-5 h-5" />,
          duration: '15분'
        }
      ];
    } else if (percentage >= 50) {
      return [
        {
          id: '1',
          title: '5분 명상',
          description: '깊은 호흡으로 마음을 정리해보세요',
          icon: <Heart className="w-5 h-5" />,
          duration: '5분'
        },
        {
          id: '2',
          title: '좋아하는 음악 듣기',
          description: '기분 좋은 음악으로 에너지 충전',
          icon: <Headphones className="w-5 h-5" />,
          duration: '10분',
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
      ];
    } else if (percentage >= 25) {
      return [
        {
          id: '1',
          title: '산책하기',
          description: '신선한 공기를 마시며 기분 전환',
          icon: <TreePine className="w-5 h-5" />,
          duration: '20분'
        },
        {
          id: '2',
          title: '스트레칭',
          description: '몸의 긴장을 풀어주세요',
          icon: <RefreshCw className="w-5 h-5" />,
          duration: '10분'
        }
      ];
    } else {
      return [
        {
          id: '1',
          title: '충분한 휴식',
          description: '오늘은 일찍 잠자리에 들어보세요',
          icon: <Heart className="w-5 h-5" />,
          duration: '8시간'
        },
        {
          id: '2',
          title: '신뢰할 수 있는 사람과 대화',
          description: '혼자 견디지 마시고 도움을 요청하세요',
          icon: <Coffee className="w-5 h-5" />,
          duration: '30분'
        }
      ];
    }
  };

  const recoveryTips = getRecoveryTips(tankPercentage);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedPercentage(prev => {
          if (prev >= tankPercentage) {
            clearInterval(interval);
            return tankPercentage;
          }
          return prev + 2;
        });
      }, 30);
    }, 500);

    return () => clearTimeout(timer);
  }, [tankPercentage]);

  // 공유 문구 생성
  const shareText = `내 감정탱크 ${Math.round(tankPercentage)}% 남음... ${getWeatherEmoji(tankPercentage)} 너도 확인해봐! 💼`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">감정탱크 진단 완료!</h1>
          <p className="text-gray-600">오늘 하루 수고하셨어요</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tank Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {result.result.emoji} {result.result.title}
              </h2>
              <p className="text-gray-600">{result.result.description}</p>
            </div>

            {/* Tank SVG */}
            <div className="relative mx-auto w-48 h-64 mb-6">
              <svg
                viewBox="0 0 200 300"
                className="w-full h-full"
              >
                {/* Tank outline */}
                <rect
                  x="40"
                  y="50"
                  width="120"
                  height="200"
                  rx="10"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="4"
                />
                
                {/* Tank fill */}
                <motion.rect
                  x="44"
                  y={50 + (200 * (100 - animatedPercentage) / 100)}
                  width="112"
                  height={200 * animatedPercentage / 100}
                  rx="6"
                  fill={
                    animatedPercentage >= 75 ? '#10b981' :
                    animatedPercentage >= 50 ? '#f59e0b' :
                    animatedPercentage >= 25 ? '#f97316' : '#ef4444'
                  }
                  initial={{ height: 0 }}
                  animate={{ height: 200 * animatedPercentage / 100 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />

                {/* Tank cap */}
                <rect
                  x="35"
                  y="40"
                  width="130"
                  height="20"
                  rx="5"
                  fill="#6b7280"
                />

                {/* Percentage text */}
                <text
                  x="100"
                  y="160"
                  textAnchor="middle"
                  className="text-lg font-bold fill-gray-800"
                >
                  {Math.round(animatedPercentage)}%
                </text>
              </svg>
            </div>

            {/* Weather emoji */}
            <div className="text-center">
              <div className="text-4xl mb-2">{getWeatherEmoji(tankPercentage)}</div>
              <p className="text-sm text-gray-600">오늘의 감정 기상도</p>
            </div>
          </motion.div>

          {/* Result Details */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">상세 분석</h3>
            
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">감정 소모량</h4>
                <p className="text-2xl font-bold text-orange-600">{drainScore}점</p>
                <p className="text-sm text-gray-600">오늘 경험한 스트레스 총량</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">감정 에너지 잔량</h4>
                <p className="text-2xl font-bold text-green-600">{Math.round(tankPercentage)}%</p>
                <p className="text-sm text-gray-600">현재 당신의 감정 상태</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-800 mb-3">성격 특성</h4>
              <div className="space-y-3">
                {result.result.traits?.map((trait, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span>{trait.emoji}</span>
                      <span className="text-sm font-medium">{trait.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">{trait.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recovery Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            🌱 AI 추천 감정 회복 루틴
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recoveryTips.map((tip, index) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    {tip.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">{tip.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{tip.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-orange-600 font-medium">{tip.duration}</span>
                      {tip.link && (
                        <a
                          href={tip.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline"
                        >
                          바로가기
                        </a>
                      )}
                    </div>
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
          transition={{ delay: 1 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => setShowShareModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            결과 공유하기 📱
          </Button>
          <Button
            onClick={onRestart}
            variant="outline"
            className="border-orange-300 text-orange-600 hover:bg-orange-50"
          >
            다시 테스트하기
          </Button>
        </motion.div>

        {/* Motivational Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            {tankPercentage >= 75 
              ? "오늘도 잘 버텨내셨어요! 이런 긍정적인 에너지를 계속 유지해보세요. 🌟"
              : tankPercentage >= 50
              ? "힘든 하루였지만 잘 견뎌내셨네요. 조금씩 자신을 돌봐주시길 바라요. 💙"
              : tankPercentage >= 25
              ? "오늘은 정말 수고 많으셨어요. 충분한 휴식과 회복이 필요한 시점이에요. 🤗"
              : "오늘 하루 정말 고생하셨습니다. 혼자 견디지 마시고 주변의 도움을 받으세요. ❤️"
            }
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