import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { TestData, TestQuestion, CalculatedResult } from '../types/test';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Check, ArrowLeft } from 'lucide-react';

interface EmotionalTankTestProps {
  testData: TestData;
  onComplete: (result: CalculatedResult) => void;
}

interface SelectedOptions {
  [questionId: number]: string[];
}

export function EmotionalTankTest({ testData, onComplete }: EmotionalTankTestProps) {
  const [, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const [isCompleting, setIsCompleting] = useState(false);

  const handleBack = () => {
    setLocation('/');
  };

  const currentQuestion = testData.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / testData.questions.length) * 100;

  const handleOptionToggle = useCallback((optionId: string) => {
    setSelectedOptions(prev => {
      const questionId = currentQuestion.id;
      const currentSelections = prev[questionId] || [];
      
      if (currentSelections.includes(optionId)) {
        // 이미 선택된 경우 제거
        return {
          ...prev,
          [questionId]: currentSelections.filter(id => id !== optionId)
        };
      } else {
        // 새로 선택하는 경우 추가
        return {
          ...prev,
          [questionId]: [...currentSelections, optionId]
        };
      }
    });
  }, [currentQuestion.id]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < testData.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleComplete();
    }
  }, [currentQuestionIndex, testData.questions.length]);

  const handleComplete = useCallback(async () => {
    setIsCompleting(true);
    
    // 선택된 모든 옵션의 drain 점수 합계 계산
    let totalDrainScore = 0;
    
    Object.entries(selectedOptions).forEach(([questionId, optionIds]) => {
      const question = testData.questions.find(q => q.id === parseInt(questionId));
      if (question) {
        optionIds.forEach(optionId => {
          const option = question.options.find(opt => opt.id === optionId);
          if (option) {
            totalDrainScore += option.scores.drain || 0;
          }
        });
      }
    });

    // 감정탱크 잔량 계산 (최대 350점 기준)
    const maxPossibleScore = 350; // 모든 옵션을 선택했을 때의 최대 점수
    const tankPercentage = Math.max(0, Math.min(100, ((maxPossibleScore - totalDrainScore) / maxPossibleScore) * 100));

    // 결과 타입 결정
    let resultType: string;
    if (tankPercentage >= 75) {
      resultType = 'full_tank';
    } else if (tankPercentage >= 50) {
      resultType = 'half_tank';
    } else if (tankPercentage >= 25) {
      resultType = 'low_tank';
    } else {
      resultType = 'empty_tank';
    }

    const result: CalculatedResult = {
      resultId: resultType,
      result: testData.results[resultType],
      scores: { drain: totalDrainScore, tank: tankPercentage },
      completedAt: Date.now(),
      testId: testData.id
    };

    setTimeout(() => {
      onComplete(result);
    }, 1000);
  }, [selectedOptions, testData, onComplete]);

  if (isCompleting) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-orange-300 border-t-orange-600 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">감정탱크 분석 중...</h3>
          <p className="text-gray-600">당신의 감정 에너지 상태를 계산하고 있어요</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <motion.div 
        className="bg-white shadow-lg p-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <motion.button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>홈으로 돌아가기</span>
          </motion.button>
          <div className="text-lg font-semibold text-gray-800">
            {testData.emoji} {testData.title}
          </div>
          <div className="text-sm text-gray-500">
            {currentQuestionIndex + 1}/{testData.questions.length}
          </div>
        </div>
      </motion.div>

      <div className="max-w-2xl mx-auto p-4">
        {/* Progress Bar */}
        <div className="mb-8 mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              {currentQuestionIndex + 1} / {testData.questions.length}
            </span>
            <span className="text-sm font-medium text-orange-600">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Question Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{currentQuestion.emoji}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {currentQuestion.text}
                </h2>
                <p className="text-gray-600">{currentQuestion.subtitle}</p>
              </div>

              {/* Options */}
              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedOptions[currentQuestion.id]?.includes(option.id) || false;
                  
                  return (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleOptionToggle(option.id)}
                        className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                          isSelected
                            ? 'border-orange-400 bg-orange-50 scale-[1.02]'
                            : 'border-gray-200 bg-white hover:border-orange-200 hover:bg-orange-25'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">{option.emoji}</div>
                            <div>
                              <h3 className="font-semibold text-gray-800 text-lg">
                                {option.text}
                              </h3>
                              <p className="text-gray-600 text-sm mt-1">
                                {option.description}
                              </p>
                            </div>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            isSelected 
                              ? 'border-orange-400 bg-orange-400' 
                              : 'border-gray-300'
                          }`}>
                            {isSelected && <Check className="w-4 h-4 text-white" />}
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                disabled={currentQuestionIndex === 0}
                className="min-w-[100px]"
              >
                이전
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-500">
                  {selectedOptions[currentQuestion.id]?.length || 0}개 선택됨
                </p>
              </div>

              <Button
                onClick={handleNext}
                className="min-w-[100px] bg-orange-500 hover:bg-orange-600"
              >
                {currentQuestionIndex === testData.questions.length - 1 ? '결과 보기' : '다음'}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}