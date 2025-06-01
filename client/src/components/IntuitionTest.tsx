import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntuitionTestProps {
  onComplete: (score: number, reactionTimes: number[]) => void;
}

interface Round {
  leftImage: string;
  rightImage: string;
  correctSide: 'left' | 'right';
  difference: string;
}

export function IntuitionTest({ onComplete }: IntuitionTestProps) {
  const [gameState, setGameState] = useState<'ready' | 'countdown' | 'showing' | 'choosing' | 'result' | 'finished'>('ready');
  const [currentRound, setCurrentRound] = useState(1);
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [timeLeft, setTimeLeft] = useState(2);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [currentRoundData, setCurrentRoundData] = useState<Round | null>(null);
  const [roundStartTime, setRoundStartTime] = useState(0);
  const [selectedSide, setSelectedSide] = useState<'left' | 'right' | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // 라운드 데이터 생성
  const generateRound = useCallback(() => {
    const rounds: Round[] = [
      { leftImage: '🐶', rightImage: '🐱', correctSide: 'right', difference: '다른 동물' },
      { leftImage: '🍎', rightImage: '🍎', correctSide: 'left', difference: '왼쪽이 더 밝음' },
      { leftImage: '⭐', rightImage: '🌟', correctSide: 'right', difference: '다른 별 모양' },
      { leftImage: '🏠', rightImage: '🏡', correctSide: 'right', difference: '지붕 색깔' },
      { leftImage: '🚗', rightImage: '🚙', correctSide: 'right', difference: '차량 크기' },
      { leftImage: '🌸', rightImage: '🌺', correctSide: 'right', difference: '꽃 종류' },
      { leftImage: '☀️', rightImage: '🌤️', correctSide: 'right', difference: '구름 유무' },
      { leftImage: '🎵', rightImage: '🎶', correctSide: 'right', difference: '음표 개수' },
      { leftImage: '👑', rightImage: '👑', correctSide: 'left', difference: '왼쪽이 기울어짐' },
      { leftImage: '🎈', rightImage: '🎀', correctSide: 'right', difference: '다른 아이템' }
    ];
    
    return rounds[currentRound - 1];
  }, [currentRound]);

  const startGame = () => {
    setGameState('countdown');
    setCountdown(3);
    setScore(0);
    setCurrentRound(1);
    setReactionTimes([]);
  };

  const startRound = () => {
    const roundData = generateRound();
    setCurrentRoundData(roundData);
    setGameState('showing');
    setRoundStartTime(Date.now());
    
    // 1초 후 선택 단계로 이동
    setTimeout(() => {
      setGameState('choosing');
      setTimeLeft(2);
    }, 1000);
  };

  const handleChoice = (side: 'left' | 'right') => {
    if (gameState !== 'choosing' || !currentRoundData) return;
    
    const reactionTime = Date.now() - roundStartTime - 1000; // 1초 표시 시간 제외
    setSelectedSide(side);
    const correct = side === currentRoundData.correctSide;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    setReactionTimes(prev => [...prev, reactionTime]);
    setGameState('result');
    
    // 1.5초 후 다음 라운드 또는 종료
    setTimeout(() => {
      if (currentRound >= 10) {
        setGameState('finished');
        onComplete(score + (correct ? 1 : 0), [...reactionTimes, reactionTime]);
      } else {
        setCurrentRound(prev => prev + 1);
        setSelectedSide(null);
        setIsCorrect(null);
        startRound();
      }
    }, 1500);
  };

  // 카운트다운 로직
  useEffect(() => {
    if (gameState === 'countdown' && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (gameState === 'countdown' && countdown === 0) {
      startRound();
    }
  }, [gameState, countdown]);

  // 선택 시간 제한
  useEffect(() => {
    if (gameState === 'choosing' && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (gameState === 'choosing' && timeLeft === 0) {
      // 시간 초과 - 틀린 것으로 처리
      handleChoice(currentRoundData?.correctSide === 'left' ? 'right' : 'left');
    }
  }, [gameState, timeLeft, currentRoundData]);

  if (gameState === 'ready') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <motion.div 
          className="text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-6xl mb-6">👀</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">좌우 선택 눈치 테스트</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            빠르게 스쳐가는 이미지에서<br/>
            이상한 부분을 찾아보세요!<br/>
            총 10라운드가 진행됩니다.
          </p>
          
          <motion.button
            onClick={startGame}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg"
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
            className="text-8xl font-bold text-green-600 mb-4"
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

  if (gameState === 'showing' && currentRoundData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <div className="text-center mb-8">
          <div className="text-lg font-bold text-gray-800 mb-2">
            라운드 {currentRound}/10 - 점수: {score}
          </div>
          <div className="text-sm text-gray-600">이미지를 잘 보세요!</div>
        </div>

        <motion.div
          className="flex items-center justify-center space-x-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-center">
            <div className="text-8xl mb-4">{currentRoundData.leftImage}</div>
            <div className="text-lg font-semibold text-gray-700">좌</div>
          </div>
          
          <div className="text-6xl text-gray-400">VS</div>
          
          <div className="text-center">
            <div className="text-8xl mb-4">{currentRoundData.rightImage}</div>
            <div className="text-lg font-semibold text-gray-700">우</div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (gameState === 'choosing' && currentRoundData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <div className="text-center mb-8">
          <div className="text-lg font-bold text-gray-800 mb-2">
            라운드 {currentRound}/10 - 점수: {score}
          </div>
          <div className="text-red-600 font-bold text-xl mb-4">
            남은 시간: {timeLeft}초
          </div>
          <div className="text-gray-600">어느 쪽이 이상했나요?</div>
        </div>

        <div className="flex items-center justify-center space-x-8">
          <motion.button
            onClick={() => handleChoice('left')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-8 rounded-2xl font-bold text-2xl transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            좌
          </motion.button>
          
          <motion.button
            onClick={() => handleChoice('right')}
            className="bg-red-500 hover:bg-red-600 text-white px-12 py-8 rounded-2xl font-bold text-2xl transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            우
          </motion.button>
        </div>
      </div>
    );
  }

  if (gameState === 'result' && currentRoundData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <motion.div
          className="text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={`text-6xl mb-4 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? '✅' : '❌'}
          </div>
          <div className="text-2xl font-bold mb-2">
            {isCorrect ? '정답!' : '틀렸습니다!'}
          </div>
          <div className="text-gray-600 mb-4">
            정답: {currentRoundData.correctSide === 'left' ? '좌' : '우'}측
          </div>
          <div className="text-sm text-gray-500">
            차이점: {currentRoundData.difference}
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}