
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConcentrationTestProps {
  onComplete: (result: {
    score: number;
    correctCount: number;
    totalCount: number;
    averageReactionTime: number;
    missedCount: number;
  }) => void;
}

interface GameState {
  round: number;
  score: number;
  correctCount: number;
  missedCount: number;
  activeCircle: number | null;
  reactionTimes: number[];
  gameStarted: boolean;
  gameEnded: boolean;
  startTime: number | null;
}

export function ConcentrationTest({ onComplete }: ConcentrationTestProps) {
  const [gameState, setGameState] = useState<GameState>({
    round: 0,
    score: 0,
    correctCount: 0,
    missedCount: 0,
    activeCircle: null,
    reactionTimes: [],
    gameStarted: false,
    gameEnded: false,
    startTime: null
  });

  const [countdown, setCountdown] = useState<number | null>(null);
  const [showInstructions, setShowInstructions] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const circleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const TOTAL_ROUNDS = 20;
  const CIRCLE_DURATION = 800; // 0.8초

  const startGame = () => {
    setShowInstructions(false);
    setCountdown(3);
    
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev === 1) {
          clearInterval(countdownInterval);
          setCountdown(null);
          setGameState(prev => ({ ...prev, gameStarted: true }));
          return null;
        }
        return prev! - 1;
      });
    }, 1000);
  };

  const showNextCircle = () => {
    if (gameState.round >= TOTAL_ROUNDS) {
      endGame();
      return;
    }

    const randomCircle = Math.floor(Math.random() * 9);
    const startTime = Date.now();
    
    setGameState(prev => ({
      ...prev,
      activeCircle: randomCircle,
      startTime,
      round: prev.round + 1
    }));

    // 0.8초 후 자동으로 놓친 것으로 처리
    circleTimeoutRef.current = setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        activeCircle: null,
        missedCount: prev.missedCount + 1,
        startTime: null
      }));

      // 다음 라운드로 이동
      timeoutRef.current = setTimeout(showNextCircle, 500);
    }, CIRCLE_DURATION);
  };

  const handleCircleClick = (circleIndex: number) => {
    if (!gameState.gameStarted || gameState.activeCircle !== circleIndex || !gameState.startTime) {
      return;
    }

    const reactionTime = Date.now() - gameState.startTime;
    
    // 타이머 클리어
    if (circleTimeoutRef.current) {
      clearTimeout(circleTimeoutRef.current);
    }

    setGameState(prev => ({
      ...prev,
      score: prev.score + 1,
      correctCount: prev.correctCount + 1,
      activeCircle: null,
      reactionTimes: [...prev.reactionTimes, reactionTime],
      startTime: null
    }));

    // 다음 라운드로 이동
    timeoutRef.current = setTimeout(showNextCircle, 500);
  };

  const endGame = () => {
    const averageReactionTime = gameState.reactionTimes.length > 0
      ? Math.round(gameState.reactionTimes.reduce((a, b) => a + b, 0) / gameState.reactionTimes.length)
      : 0;

    setGameState(prev => ({ ...prev, gameEnded: true }));

    onComplete({
      score: gameState.score,
      correctCount: gameState.correctCount,
      totalCount: TOTAL_ROUNDS,
      averageReactionTime,
      missedCount: gameState.missedCount
    });
  };

  useEffect(() => {
    if (gameState.gameStarted && gameState.round === 0) {
      timeoutRef.current = setTimeout(showNextCircle, 1000);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (circleTimeoutRef.current) clearTimeout(circleTimeoutRef.current);
    };
  }, [gameState.gameStarted]);

  const renderCircle = (index: number) => {
    const isActive = gameState.activeCircle === index;
    
    return (
      <motion.div
        key={index}
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full cursor-pointer transition-all duration-200 ${
          isActive 
            ? 'bg-red-500 shadow-lg shadow-red-300 scale-110' 
            : 'bg-gray-300 hover:bg-gray-400'
        }`}
        onClick={() => handleCircleClick(index)}
        whileTap={{ scale: 0.95 }}
        animate={isActive ? { 
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 0 0px rgba(239, 68, 68, 0.5)',
            '0 0 20px rgba(239, 68, 68, 0.8)',
            '0 0 0px rgba(239, 68, 68, 0.5)'
          ]
        } : {}}
        transition={{ duration: 0.3 }}
      />
    );
  };

  if (showInstructions) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl md:text-8xl mb-6">🎯</div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            집중력 지속시간 측정 테스트
          </h1>
          
          <div className="text-left mb-8 space-y-4">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-blue-800 mb-3 text-lg">🎮 게임 방법</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• 화면에 9개의 원이 3×3 격자로 배치됩니다</li>
                <li>• 무작위로 1개씩 빨간색으로 깜박입니다</li>
                <li>• 빨간 원을 빠르게 클릭하세요</li>
                <li>• 총 20라운드 진행됩니다</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-bold text-green-800 mb-3 text-lg">⏱️ 주의사항</h3>
              <ul className="space-y-2 text-green-700">
                <li>• 각 원은 0.8초 동안만 깜박입니다</li>
                <li>• 놓치면 다음 라운드로 자동 진행됩니다</li>
                <li>• 집중력이 떨어질수록 실수가 증가할 수 있습니다</li>
              </ul>
            </div>
          </div>

          <motion.button
            onClick={startGame}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-12 py-4 rounded-2xl text-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            테스트 시작하기
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* 카운트다운 */}
        <AnimatePresence>
          {countdown && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-white text-8xl md:text-9xl font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                key={countdown}
              >
                {countdown}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 게임 헤더 */}
        {gameState.gameStarted && !gameState.gameEnded && (
          <motion.div
            className="bg-white rounded-2xl p-6 mb-8 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-between items-center text-lg font-semibold">
              <div className="text-blue-600">
                라운드: {gameState.round}/{TOTAL_ROUNDS}
              </div>
              <div className="text-green-600">
                점수: {gameState.score}
              </div>
              <div className="text-purple-600">
                정확도: {gameState.round > 0 ? Math.round((gameState.correctCount / gameState.round) * 100) : 0}%
              </div>
            </div>
          </motion.div>
        )}

        {/* 게임 영역 */}
        {gameState.gameStarted && !gameState.gameEnded && (
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-md mx-auto">
              {Array.from({ length: 9 }, (_, i) => renderCircle(i))}
            </div>
          </motion.div>
        )}

        {/* 게임 완료 */}
        {gameState.gameEnded && (
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              테스트 완료!
            </h2>
            <div className="text-lg text-gray-600 mb-4">
              결과를 분석하고 있습니다...
            </div>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
