import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from './ui/button';

interface FocusDurationTestProps {
  onComplete: (score: number, reactionTimes: number[]) => void;
}

export function FocusDurationTest({ onComplete }: FocusDurationTestProps) {
  const [phase, setPhase] = useState<'ready' | 'testing' | 'complete'>('ready');
  const [currentRound, setCurrentRound] = useState(1);
  const [score, setScore] = useState(0);
  const [targetPosition, setTargetPosition] = useState<number | null>(null);
  const [isTargetVisible, setIsTargetVisible] = useState(false);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [roundStartTime, setRoundStartTime] = useState<number>(0);
  
  const timeoutRef = useRef<NodeJS.Timeout>();
  const targetTimeoutRef = useRef<NodeJS.Timeout>();

  const totalRounds = 20;

  const startRound = useCallback(() => {
    if (currentRound > totalRounds) {
      endTest();
      return;
    }

    // 0.8초 후에 무작위 위치에 타겟 표시
    timeoutRef.current = setTimeout(() => {
      const randomPosition = Math.floor(Math.random() * 9);
      setTargetPosition(randomPosition);
      setIsTargetVisible(true);
      setRoundStartTime(Date.now());
      
      // 2초 후에 타겟이 사라짐 (놓친 것으로 처리)
      targetTimeoutRef.current = setTimeout(() => {
        if (isTargetVisible) {
          setIsTargetVisible(false);
          setTargetPosition(null);
          // 반응시간을 2000ms로 기록 (놓친 경우)
          setReactionTimes(prev => [...prev, 2000]);
          setCurrentRound(prev => prev + 1);
          setTimeout(startRound, 500);
        }
      }, 2000);
    }, 800);
  }, [currentRound, isTargetVisible]);

  const startTest = () => {
    setPhase('testing');
    setCurrentRound(1);
    setScore(0);
    setReactionTimes([]);
    startRound();
  };

  const handleTargetClick = (position: number) => {
    if (!isTargetVisible || targetPosition !== position) return;
    
    const reactionTime = Date.now() - roundStartTime;
    setReactionTimes(prev => [...prev, reactionTime]);
    setScore(prev => prev + 1);
    setIsTargetVisible(false);
    setTargetPosition(null);
    
    if (targetTimeoutRef.current) {
      clearTimeout(targetTimeoutRef.current);
    }
    
    setCurrentRound(prev => prev + 1);
    setTimeout(startRound, 500);
  };

  const handleWrongClick = () => {
    // 잘못된 위치 클릭 시 반응시간을 패널티로 기록
    if (isTargetVisible) {
      const reactionTime = Date.now() - roundStartTime + 500; // 패널티 추가
      setReactionTimes(prev => [...prev, reactionTime]);
      setIsTargetVisible(false);
      setTargetPosition(null);
      
      if (targetTimeoutRef.current) {
        clearTimeout(targetTimeoutRef.current);
      }
      
      setCurrentRound(prev => prev + 1);
      setTimeout(startRound, 500);
    }
  };

  const endTest = () => {
    setPhase('complete');
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (targetTimeoutRef.current) clearTimeout(targetTimeoutRef.current);
    
    onComplete(score, reactionTimes);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (targetTimeoutRef.current) clearTimeout(targetTimeoutRef.current);
    };
  }, []);

  const renderGrid = () => {
    return (
      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        {Array.from({ length: 9 }, (_, index) => (
          <div
            key={index}
            className={`
              w-20 h-20 rounded-full border-4 cursor-pointer transition-all duration-200
              ${targetPosition === index && isTargetVisible
                ? 'bg-red-500 border-red-600 animate-pulse shadow-lg scale-110'
                : 'bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-800'
              }
            `}
            onClick={() => {
              if (targetPosition === index && isTargetVisible) {
                handleTargetClick(index);
              } else {
                handleWrongClick();
              }
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          
          {phase === 'ready' && (
            <div className="space-y-6">
              <div className="text-6xl mb-4">🎯</div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                집중력 지속시간 측정 테스트
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                3x3 격자의 9개 원 중 빨간색으로 깜박이는 원을 빠르게 클릭하세요.<br/>
                총 20라운드를 진행합니다.
              </p>
              <Button 
                onClick={startTest}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                테스트 시작
              </Button>
            </div>
          )}

          {phase === 'testing' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-8">
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  라운드: {currentRound}/{totalRounds}
                </div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  점수: {score}/{totalRounds}
                </div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  정확도: {currentRound > 1 ? Math.round((score / (currentRound - 1)) * 100) : 0}%
                </div>
              </div>

              {renderGrid()}

              <div className="mt-6 text-gray-600 dark:text-gray-400">
                {!isTargetVisible ? (
                  <div className="animate-pulse">다음 타겟을 기다리세요...</div>
                ) : (
                  <div className="text-red-600 dark:text-red-400 font-semibold">
                    빨간 원을 클릭하세요!
                  </div>
                )}
              </div>

              <Button 
                onClick={endTest}
                variant="outline"
                className="mt-4"
              >
                테스트 종료
              </Button>
            </div>
          )}

          {phase === 'complete' && (
            <div className="space-y-6">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                테스트 완료!
              </h2>
              <div className="text-lg text-gray-600 dark:text-gray-300 space-y-2">
                <p>총 점수: {score}/{totalRounds}점</p>
                <p>정확도: {Math.round((score / totalRounds) * 100)}%</p>
                <p>평균 반응시간: {Math.round(reactionTimes.reduce((sum, time) => sum + time, 0) / reactionTimes.length)}ms</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}