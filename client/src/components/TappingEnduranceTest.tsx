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
  const [currentTapsPerSecond, setCurrentTapsPerSecond] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [lastTapTime, setLastTapTime] = useState(0);
  const [recentTaps, setRecentTaps] = useState<number[]>([]);
  const [motivationMessage, setMotivationMessage] = useState('');
  const startGame = () => {
    setGameState('countdown');
    setCountdown(3);
    setTapCount(0);
    setCurrentTapsPerSecond(0);
    setRecentTaps([]);
    setMotivationMessage('');
  };

  const handleTap = useCallback(() => {
    if (gameState === 'active') {
      const now = Date.now();
      setTapCount(prev => prev + 1);
      setIsPressed(true);
      setLastTapTime(now);
      
      // 최근 5초간의 탭 기록 업데이트
      setRecentTaps(prev => {
        const newTaps = [...prev, now].filter(time => now - time <= 5000);
        const tapsPerSecond = newTaps.length / 5;
        setCurrentTapsPerSecond(Math.round(tapsPerSecond * 10) / 10);
        return newTaps;
      });
      
      setTimeout(() => setIsPressed(false), 100);
    }
  }, [gameState]);

  // 카운트다운 및 게임 시작 로직
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

  // 게임 타이머 로직
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (gameState === 'active') {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameState('finished');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [gameState]);

  // 게임 완료 처리
  useEffect(() => {
    if (gameState === 'finished' && timeLeft <= 0) {
      onComplete(tapCount);
    }
  }, [gameState, timeLeft, tapCount, onComplete]);

  // 격려 메시지 로직
  useEffect(() => {
    if (gameState === 'active') {
      const messageTimer = setInterval(() => {
        const now = Date.now();
        const timeSinceLastTap = now - lastTapTime;
        
        if (timeSinceLastTap > 2000) { // 2초 이상 탭하지 않으면
          const messages = [
            '계속 탭하세요!',
            '속도를 올려보세요!',
            '집중하세요!',
            '더 빠르게!',
            '포기하지 마세요!',
            '힘내세요!',
            '거의 다 왔어요!',
            '최고 속도로!'
          ];
          setMotivationMessage(messages[Math.floor(Math.random() * messages.length)]);
        } else {
          setMotivationMessage('');
        }
      }, 1000);

      return () => clearInterval(messageTimer);
    }
  }, [gameState, lastTapTime]);

  const getPerformanceMessage = () => {
    if (tapCount < 50) return "시작이 좋습니다!";
    if (tapCount < 100) return "좋은 속도에요!";
    if (tapCount < 150) return "훌륭해요!";
    if (tapCount < 200) return "대단한 실력!";
    if (tapCount < 250) return "놀라운 속도!";
    if (tapCount < 300) return "마스터급 실력!";
    return "전설적인 속도!";
  };

  if (gameState === 'ready') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 sm:p-8">
        <motion.div 
          className="text-center max-w-xs sm:max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">⚡</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">1분 탭핑 챌린지</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
            60초 동안 화면을 최대한 빠르게 탭해보세요!<br/>
            당신의 지구력과 집중력을 테스트합니다.
          </p>
          
          <motion.button
            onClick={startGame}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:scale-105 transition-transform shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            시작하기
          </motion.button>
        </motion.div>
      </div>
    );
  }

  if (gameState === 'countdown') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <motion.div
          className="text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="text-8xl font-bold text-purple-600 mb-4"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {countdown}
          </motion.div>
          <div className="text-xl text-gray-600">준비하세요...</div>
        </motion.div>
      </div>
    );
  }

  if (gameState === 'active') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 sm:p-8">
        {/* 상단 정보 */}
        <div className="text-center mb-3 sm:mb-6 md:mb-8">
          <div className="flex justify-center items-center gap-3 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-600">{timeLeft}</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">초 남음</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple-600">{currentTapsPerSecond}</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">초당 속도</div>
            </div>
          </div>
        </div>

        {/* 탭핑 영역 */}
        <div
          className={`w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-100 select-none ${
            isPressed 
              ? 'bg-blue-600 scale-95 shadow-lg' 
              : 'bg-blue-500 scale-100 hover:bg-blue-600 shadow-xl'
          }`}
          onClick={handleTap}
          style={{ touchAction: 'manipulation', userSelect: 'none' }}
        >
          <div className="text-white text-center pointer-events-none">
            <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-1 sm:mb-2">{tapCount}</div>
            <div className="text-sm xs:text-base sm:text-lg md:text-xl">탭</div>
          </div>
        </div>

        {/* 하단 성과 메시지 및 격려 문구 */}
        <div className="mt-4 sm:mt-8 text-center px-4">
          <div className="text-base sm:text-lg font-semibold text-gray-700">
            {getPerformanceMessage()}
          </div>
          <div className="text-xs sm:text-sm text-gray-500 mt-2">
            분당 속도: {tapCount}회/분
          </div>
          
          {motivationMessage && (
            <motion.div
              className="text-sm sm:text-lg font-semibold text-orange-600 bg-orange-100 px-3 sm:px-4 py-2 rounded-full mt-3 sm:mt-4 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {motivationMessage}
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  return null;
}