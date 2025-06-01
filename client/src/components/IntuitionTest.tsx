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
  criterion: string; // 판단 기준
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

  // 라운드 데이터 생성 (20개 문항 중 랜덤 10개 선택)
  const [selectedRounds, setSelectedRounds] = useState<Round[]>([]);

  const generateRandomRounds = useCallback(() => {
    const allRounds: Round[] = [
      { leftImage: '🔴', rightImage: '🔵', correctSide: 'right', difference: '파란색이 더 차가운 색상', criterion: '더 차가운 색상을 선택하세요' },
      { leftImage: '⬆️', rightImage: '⬇️', correctSide: 'left', difference: '위쪽 화살표가 더 높은 위치', criterion: '더 높은 방향을 선택하세요' },
      { leftImage: '🟩', rightImage: '🟨', correctSide: 'right', difference: '노란색이 더 밝은 색상', criterion: '더 밝은 색상을 선택하세요' },
      { leftImage: '🌕', rightImage: '🌑', correctSide: 'left', difference: '보름달이 더 밝음', criterion: '더 밝은 것을 선택하세요' },
      { leftImage: '❄️', rightImage: '🔥', correctSide: 'right', difference: '불이 더 뜨거움', criterion: '더 뜨거운 것을 선택하세요' },
      { leftImage: '⭐', rightImage: '🌟', correctSide: 'right', difference: '반짝이는 별이 더 밝음', criterion: '더 밝은 것을 선택하세요' },
      { leftImage: '🔺', rightImage: '🔻', correctSide: 'left', difference: '위쪽 삼각형이 더 높은 방향', criterion: '더 높은 방향을 선택하세요' },
      { leftImage: '🌞', rightImage: '🌙', correctSide: 'left', difference: '태양이 더 밝음', criterion: '더 밝은 것을 선택하세요' },
      { leftImage: '📈', rightImage: '📉', correctSide: 'left', difference: '상승 그래프가 더 긍정적', criterion: '더 긍정적인 것을 선택하세요' },
      { leftImage: '🟫', rightImage: '⬜', correctSide: 'right', difference: '흰색이 더 밝은 색상', criterion: '더 밝은 색상을 선택하세요' },
      { leftImage: '🔊', rightImage: '🔇', correctSide: 'left', difference: '스피커가 더 큰 소리', criterion: '더 큰 소리를 선택하세요' },
      { leftImage: '🌊', rightImage: '🏔️', correctSide: 'right', difference: '산이 더 높음', criterion: '더 높은 것을 선택하세요' },
      { leftImage: '⚡', rightImage: '🌈', correctSide: 'left', difference: '번개가 더 강한 에너지', criterion: '더 강한 에너지를 선택하세요' },
      { leftImage: '🔥', rightImage: '💧', correctSide: 'left', difference: '불이 더 뜨거움', criterion: '더 뜨거운 것을 선택하세요' },
      { leftImage: '🌻', rightImage: '🌹', correctSide: 'left', difference: '해바라기가 더 큰 꽃', criterion: '더 큰 꽃을 선택하세요' },
      { leftImage: '🎯', rightImage: '⚪', correctSide: 'left', difference: '과녁이 더 복잡한 패턴', criterion: '더 복잡한 것을 선택하세요' },
      { leftImage: '📱', rightImage: '📞', correctSide: 'left', difference: '스마트폰이 더 현대적', criterion: '더 현대적인 것을 선택하세요' },
      { leftImage: '🚀', rightImage: '✈️', correctSide: 'left', difference: '로켓이 더 빠름', criterion: '더 빠른 것을 선택하세요' },
      { leftImage: '💎', rightImage: '🪨', correctSide: 'left', difference: '다이아몬드가 더 귀중함', criterion: '더 귀중한 것을 선택하세요' },
      { leftImage: '🏆', rightImage: '🥉', correctSide: 'left', difference: '금컵이 더 높은 등급', criterion: '더 높은 등급을 선택하세요' }
    ];
    
    // 20개 중 랜덤하게 10개 선택
    const shuffled = [...allRounds].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }, []);

  // 게임 시작 시 랜덤 라운드 생성
  useEffect(() => {
    if (gameState === 'countdown' && selectedRounds.length === 0) {
      setSelectedRounds(generateRandomRounds());
    }
  }, [gameState, selectedRounds.length, generateRandomRounds]);

  const getCurrentRoundData = () => {
    return selectedRounds[currentRound - 1];
  };

  const startGame = () => {
    setGameState('countdown');
    setCountdown(5); // 5초로 카운트다운 연장
    setScore(0);
    setCurrentRound(1);
    setReactionTimes([]);
    setSelectedRounds([]); // 새 게임 시작 시 라운드 초기화
  };

  const startRound = () => {
    const roundData = getCurrentRoundData();
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
            <strong className="text-blue-600">각 문제에 맞는 기준</strong>에 따라 선택하세요!<br/>
            (문제마다 다른 선택 기준이 제시됩니다)<br/>
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
          <div className="text-sm text-blue-600 font-semibold">{currentRoundData?.criterion}</div>
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
          <div className="text-blue-600 font-semibold">{currentRoundData?.criterion}</div>
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