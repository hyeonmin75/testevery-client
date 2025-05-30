import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

interface ReactionTestProps {
  onComplete: (reactionTime: number) => void;
  round: number;
  totalRounds: number;
}

export function ReactionTest({ onComplete, round, totalRounds }: ReactionTestProps) {
  const [phase, setPhase] = useState<'waiting' | 'ready' | 'go' | 'clicked' | 'too_early'>('waiting');
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [countdown, setCountdown] = useState(3);
  const startTimeRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startTest = useCallback(() => {
    setPhase('ready');
    setCountdown(3);
    
    // 카운트다운
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          // 랜덤한 시간 후 초록색으로 변경 (1-5초)
          const delay = Math.random() * 4000 + 1000;
          timeoutRef.current = setTimeout(() => {
            setPhase('go');
            startTimeRef.current = performance.now();
          }, delay);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const handleClick = useCallback(() => {
    if (phase === 'waiting') {
      startTest();
    } else if (phase === 'go') {
      const endTime = performance.now();
      const reaction = Math.round(endTime - startTimeRef.current);
      setReactionTime(reaction);
      setPhase('clicked');
      
      // 2초 후 결과 전달
      setTimeout(() => {
        onComplete(reaction);
      }, 2000);
    } else if (phase === 'ready') {
      setPhase('too_early');
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // 3초 후 다시 시작
      setTimeout(() => {
        setPhase('waiting');
        setReactionTime(null);
      }, 3000);
    }
  }, [phase, onComplete, startTest]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // 라운드가 변경될 때 상태 초기화
  useEffect(() => {
    setPhase('waiting');
    setReactionTime(null);
    setCountdown(3);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [round]);

  const getPhaseColor = () => {
    switch (phase) {
      case 'ready': return 'bg-red-500';
      case 'go': return 'bg-green-500';
      case 'clicked': return 'bg-blue-500';
      case 'too_early': return 'bg-yellow-500';
      default: return 'bg-gray-300';
    }
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'waiting': return '준비하기';
      case 'ready': return countdown > 0 ? `${countdown}` : '기다리세요...';
      case 'go': return '지금 클릭!';
      case 'clicked': return `${reactionTime}ms`;
      case 'too_early': return '너무 빨라요!';
      default: return '';
    }
  };

  const getInstruction = () => {
    switch (phase) {
      case 'waiting': return '클릭하여 테스트를 시작하세요';
      case 'ready': return '빨간색 화면에서 기다리세요';
      case 'go': return '초록색으로 바뀌었습니다! 클릭하세요!';
      case 'clicked': return '훌륭합니다! 반응속도가 측정되었습니다';
      case 'too_early': return '초록색이 되기 전에 클릭했습니다. 다시 시도하세요';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4 break-keep">
          반응속도 테스트 - {round}/{totalRounds} 라운드
        </h2>
        <p className="text-lg text-gray-600 break-keep">
          {getInstruction()}
        </p>
      </motion.div>

      <motion.div
        className={`w-80 h-80 rounded-3xl flex items-center justify-center cursor-pointer transition-all duration-200 ${getPhaseColor()} shadow-2xl`}
        onClick={handleClick}
        whileHover={{ scale: phase === 'waiting' ? 1.05 : 1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="text-center text-white">
          <div className="text-6xl font-bold mb-4 whitespace-nowrap">
            {getPhaseText()}
          </div>
          {phase === 'clicked' && reactionTime && (
            <div className="text-2xl">
              {reactionTime < 200 ? '⚡ 매우 빠름!' :
               reactionTime < 300 ? '🔥 빠름!' :
               reactionTime < 400 ? '👍 좋음!' :
               reactionTime < 500 ? '😊 보통!' : '🐌 느림'}
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-sm text-gray-500 break-keep">
          {phase === 'ready' && countdown === 0 && '언제 초록색으로 바뀔지 모르니 집중하세요!'}
          {phase === 'waiting' && '큰 원을 클릭하여 시작하세요'}
          {phase === 'too_early' && '인내심을 가지고 초록색이 될 때까지 기다리세요'}
        </div>
      </motion.div>
    </div>
  );
}