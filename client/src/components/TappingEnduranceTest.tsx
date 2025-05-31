import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface TappingEnduranceTestProps {
  onComplete: (tapCount: number) => void;
}

export function TappingEnduranceTest({ onComplete }: TappingEnduranceTestProps) {
  const [gameState, setGameState] = useState<'ready' | 'countdown' | 'active' | 'finished'>('ready');
  const [countdown, setCountdown] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);
  const [tapCount, setTapCount] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  const startTest = () => {
    setGameState('countdown');
    setCountdown(3);
    setTapCount(0);
  };

  const handleTap = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (gameState === 'active') {
      setTapCount(prev => prev + 1);
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 100);
    }
  }, [gameState]);

  useEffect(() => {
    if (gameState === 'countdown' && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (gameState === 'countdown' && countdown === 0) {
      setGameState('active');
      setTimeLeft(60);
    }
  }, [gameState, countdown]);

  useEffect(() => {
    if (gameState === 'active' && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (gameState === 'active' && timeLeft === 0) {
      setGameState('finished');
      onComplete(tapCount);
    }
  }, [gameState, timeLeft, tapCount, onComplete]);

  const getMotivationMessage = () => {
    if (tapCount < 50) return "계속하세요!";
    if (tapCount < 100) return "좋아요! 더 빠르게!";
    if (tapCount < 150) return "훌륭해요! 집중!";
    if (tapCount < 200) return "대단해요! 계속!";
    if (tapCount < 250) return "놀라워요! 최고속도!";
    return "마스터급 실력!";
  };

  if (gameState === 'ready') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <motion.div 
          className="text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-6xl mb-6">👆</div>
          <h2 className="text-2xl font-bold mb-4">1분 탭핑 지구력 테스트</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            60초 동안 화면을 최대한 빠르게 탭해보세요!<br/>
            집중력과 지구력을 동시에 테스트합니다.
          </p>
          <motion.button
            onClick={startTest}
            className="bg-blue-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            테스트 시작하기
          </motion.button>
        </motion.div>
      </div>
    );
  }

  if (gameState === 'countdown') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <motion.div
          key={countdown}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-8xl font-bold text-blue-500 mb-4"
        >
          {countdown || 'GO!'}
        </motion.div>
        <p className="text-xl text-gray-600">준비하세요...</p>
      </div>
    );
  }

  if (gameState === 'active') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-blue-500 mb-2">
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
          <div className="text-xl text-gray-600">남은 시간</div>
        </div>

        <motion.div
          className={`w-64 h-64 rounded-full flex items-center justify-center cursor-pointer transition-all duration-100 select-none ${
            isPressed 
              ? 'bg-blue-600 scale-95 shadow-lg' 
              : 'bg-blue-500 scale-100 hover:bg-blue-600 shadow-xl'
          }`}
          onClick={handleTap}
          onMouseDown={handleTap}
          onTouchStart={handleTap}
          whileTap={{ scale: 0.9 }}
        >
          <div className="text-white text-center pointer-events-none">
            <div className="text-4xl font-bold">{tapCount}</div>
            <div className="text-lg">탭</div>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <div className="text-lg font-semibold text-blue-600 mb-2">
            {getMotivationMessage()}
          </div>
          <div className="text-sm text-gray-500">
            초당 {(tapCount / (60 - timeLeft) || 0).toFixed(1)} 탭
          </div>
        </div>
      </div>
    );
  }

  return null;
}