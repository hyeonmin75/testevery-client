import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from './ui/button';

interface FocusDurationTestProps {
  onComplete: (focusTime: number) => void;
}

export function FocusDurationTest({ onComplete }: FocusDurationTestProps) {
  const [phase, setPhase] = useState<'ready' | 'testing' | 'waiting' | 'complete'>('ready');
  const [focusTime, setFocusTime] = useState(0);
  const [targetAppeared, setTargetAppeared] = useState(false);
  const [missedTargets, setMissedTargets] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [isActive, setIsActive] = useState(false);
  
  const startTimeRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const intervalRef = useRef<NodeJS.Timeout>();
  const targetTimeoutRef = useRef<NodeJS.Timeout>();

  const getRandomDelay = () => Math.random() * 4000 + 2000; // 2-6초 랜덤

  const showTarget = useCallback(() => {
    if (!isActive) return;
    
    setTargetAppeared(true);
    setPhase('waiting');
    
    // 3초 후에 타겟이 사라지고 놓쳤다고 판단
    targetTimeoutRef.current = setTimeout(() => {
      if (targetAppeared && isActive) {
        setMissedTargets(prev => prev + 1);
        setTargetAppeared(false);
        
        // 3번 놓치면 테스트 종료
        if (missedTargets >= 2) {
          endTest();
        } else {
          setPhase('testing');
          scheduleNextTarget();
        }
      }
    }, 3000);
  }, [isActive, targetAppeared, missedTargets]);

  const scheduleNextTarget = useCallback(() => {
    if (!isActive) return;
    
    const delay = getRandomDelay();
    timeoutRef.current = setTimeout(showTarget, delay);
  }, [isActive, showTarget]);

  const startTest = () => {
    setPhase('testing');
    setIsActive(true);
    setFocusTime(0);
    setMissedTargets(0);
    setCurrentRound(1);
    setTargetAppeared(false);
    startTimeRef.current = Date.now();
    
    // 시간 카운터 시작
    intervalRef.current = setInterval(() => {
      if (isActive) {
        setFocusTime(prev => prev + 0.1);
      }
    }, 100);
    
    // 첫 번째 타겟 스케줄
    scheduleNextTarget();
  };

  const handleTargetClick = () => {
    if (targetAppeared && phase === 'waiting') {
      setTargetAppeared(false);
      setPhase('testing');
      setCurrentRound(prev => prev + 1);
      
      if (targetTimeoutRef.current) {
        clearTimeout(targetTimeoutRef.current);
      }
      
      scheduleNextTarget();
    }
  };

  const endTest = () => {
    setIsActive(false);
    setPhase('complete');
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (targetTimeoutRef.current) clearTimeout(targetTimeoutRef.current);
    
    const finalTime = Math.round(focusTime * 10) / 10;
    onComplete(finalTime);
  };

  const handleMissClick = () => {
    if (phase === 'testing' && !targetAppeared) {
      // 타겟이 없을 때 클릭하면 집중력 저하로 판단
      setMissedTargets(prev => prev + 0.5);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (targetTimeoutRef.current) clearTimeout(targetTimeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          
          {phase === 'ready' && (
            <div className="space-y-6">
              <div className="text-6xl mb-4">🎯</div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                집중력 지속시간 테스트
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                화면에 나타나는 원을 클릭하세요. 3번 놓치거나 잘못 클릭하면 테스트가 종료됩니다.
              </p>
              <Button 
                onClick={startTest}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
              >
                테스트 시작
              </Button>
            </div>
          )}

          {(phase === 'testing' || phase === 'waiting') && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-8">
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  시간: {focusTime.toFixed(1)}초
                </div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  라운드: {currentRound}
                </div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  실수: {missedTargets}/3
                </div>
              </div>

              <div 
                className="relative w-full h-96 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-600 cursor-crosshair"
                onClick={handleMissClick}
              >
                {targetAppeared && (
                  <div
                    className="absolute w-16 h-16 bg-orange-500 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 animate-pulse shadow-lg"
                    style={{
                      left: `${Math.random() * 80 + 10}%`,
                      top: `${Math.random() * 80 + 10}%`,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTargetClick();
                    }}
                  />
                )}
                
                {phase === 'testing' && !targetAppeared && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                    집중하고 기다리세요...
                  </div>
                )}
                
                {phase === 'waiting' && targetAppeared && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-orange-600 font-semibold">
                    원을 클릭하세요!
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
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {focusTime.toFixed(1)}초 동안 집중을 유지했습니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}