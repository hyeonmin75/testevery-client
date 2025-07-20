import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { TestData, CalculatedResult } from '../types/test';
import { Button } from './ui/button';
import { ArrowLeft, Lightbulb, Plus, X } from 'lucide-react';

interface CreativityTestProps {
  testData: TestData;
  onComplete: (result: CalculatedResult) => void;
}

interface CreativityItem {
  id: string;
  name: string;
  description: string;
  examples: string[];
}

const creativityItems: CreativityItem[] = [
  {
    id: 'brick',
    name: '벽돌',
    description: '건축에 사용되는 단단한 직사각형 블록',
    examples: ['집 짓기', '담 쌓기', '화단 경계']
  },
  {
    id: 'newspaper',
    name: '신문지',
    description: '뉴스와 정보가 인쇄된 종이',
    examples: ['뉴스 읽기', '포장지로 사용', '청소용']
  },
  {
    id: 'paperclip',
    name: '클립',
    description: '종이를 고정하는 작은 금속 도구',
    examples: ['서류 정리', '북마크', '휴대폰 심카드 제거']
  },
  {
    id: 'bottle',
    name: '플라스틱 병',
    description: '액체를 담는 투명한 플라스틱 용기',
    examples: ['물 마시기', '화분으로 활용', '저금통']
  },
  {
    id: 'shoelace',
    name: '신발끈',
    description: '신발을 묶는 긴 끈',
    examples: ['신발 묶기', '묶음 도구', '줄넘기']
  }
];

export function CreativityTest({ testData, onComplete }: CreativityTestProps) {
  const [, setLocation] = useLocation();
  const [currentItem, setCurrentItem] = useState<CreativityItem | null>(null);
  const [ideas, setIdeas] = useState<string[]>(['']);
  const [isCompleting, setIsCompleting] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);

  const handleBack = () => {
    setLocation('/');
  };

  useEffect(() => {
    // 랜덤 아이템 선택
    const randomItem = creativityItems[Math.floor(Math.random() * creativityItems.length)];
    setCurrentItem(randomItem);
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    if (startTime) {
      const interval = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTime]);

  const handleIdeaChange = (index: number, value: string) => {
    const newIdeas = [...ideas];
    newIdeas[index] = value;
    setIdeas(newIdeas);
  };

  const addNewIdea = () => {
    if (ideas.length < 10 && ideas[ideas.length - 1].trim() !== '') {
      setIdeas([...ideas, '']);
    }
  };

  const removeIdea = (index: number) => {
    if (ideas.length > 1) {
      const newIdeas = ideas.filter((_, i) => i !== index);
      setIdeas(newIdeas);
    }
  };

  const calculateCreativityScores = (ideas: string[]) => {
    const validIdeas = ideas.filter(idea => idea.trim().length > 0);
    
    // 1. 유창성 (Fluency): 아이디어 개수
    const fluency = Math.min(100, (validIdeas.length / 10) * 100);
    
    // 2. 독창성 (Originality): 단어 길이, 복잡성, 전문용어 사용도
    let originalityScore = 0;
    validIdeas.forEach(idea => {
      const words = idea.trim().split(/\s+/);
      const avgWordLength = words.reduce((sum, word) => sum + word.length, 0) / words.length;
      const complexWords = words.filter(word => word.length > 4).length;
      const ideaScore = (avgWordLength * 5) + (complexWords * 10) + (idea.length > 20 ? 15 : 0);
      originalityScore += Math.min(25, ideaScore);
    });
    const originality = Math.min(100, originalityScore / validIdeas.length * 4);
    
    // 3. 유연성 (Flexibility): 다양한 분야/카테고리 사용
    const categories = new Set<string>();
    validIdeas.forEach(idea => {
      const lowerIdea = idea.toLowerCase();
      if (lowerIdea.includes('건축') || lowerIdea.includes('집') || lowerIdea.includes('건물')) categories.add('건축');
      if (lowerIdea.includes('운동') || lowerIdea.includes('스포츠') || lowerIdea.includes('게임')) categories.add('운동');
      if (lowerIdea.includes('예술') || lowerIdea.includes('미술') || lowerIdea.includes('그림')) categories.add('예술');
      if (lowerIdea.includes('도구') || lowerIdea.includes('기구') || lowerIdea.includes('장비')) categories.add('도구');
      if (lowerIdea.includes('장식') || lowerIdea.includes('인테리어') || lowerIdea.includes('꾸미기')) categories.add('장식');
      if (lowerIdea.includes('교육') || lowerIdea.includes('학습') || lowerIdea.includes('공부')) categories.add('교육');
      if (lowerIdea.includes('요리') || lowerIdea.includes('음식') || lowerIdea.includes('주방')) categories.add('요리');
      if (lowerIdea.includes('정리') || lowerIdea.includes('청소') || lowerIdea.includes('수납')) categories.add('정리');
      
      // 카테고리에 속하지 않으면 기타로 분류
      if (categories.size === 0) categories.add('기타');
    });
    const flexibility = Math.min(100, (categories.size / 8) * 100);
    
    // 4. 정교성 (Elaboration): 설명의 상세함
    let elaborationScore = 0;
    validIdeas.forEach(idea => {
      const sentences = idea.split(/[.!?]/).filter(s => s.trim().length > 0);
      const wordCount = idea.trim().split(/\s+/).length;
      const detailScore = (sentences.length * 10) + (wordCount > 10 ? 20 : wordCount > 5 ? 10 : 0);
      elaborationScore += Math.min(25, detailScore);
    });
    const elaboration = Math.min(100, elaborationScore / validIdeas.length * 4);
    
    return {
      fluency: Math.round(fluency),
      originality: Math.round(originality),
      flexibility: Math.round(flexibility),
      elaboration: Math.round(elaboration)
    };
  };

  const getCreativityLevel = (scores: any) => {
    const average = (scores.fluency + scores.originality + scores.flexibility + scores.elaboration) / 4;
    
    if (average >= 85) return 'creative_genius';
    if (average >= 70) return 'creative_innovator';
    if (average >= 55) return 'creative_explorer';
    return 'creative_builder';
  };

  const handleComplete = useCallback(async () => {
    if (!currentItem) return;
    
    const validIdeas = ideas.filter(idea => idea.trim().length > 0);
    if (validIdeas.length === 0) return;
    
    setIsCompleting(true);
    
    const scores = calculateCreativityScores(validIdeas);
    const resultType = getCreativityLevel(scores);
    
    const result: CalculatedResult = {
      resultId: resultType,
      result: testData.results[resultType],
      scores: {
        fluency: scores.fluency,
        originality: scores.originality,
        flexibility: scores.flexibility,
        elaboration: scores.elaboration,
        ideaCount: validIdeas.length,
        timeSpent: timeElapsed
      },
      completedAt: Date.now(),
      testId: testData.id,
      averageReactionTime: timeElapsed
    };

    setTimeout(() => {
      onComplete(result);
    }, 1500);
  }, [currentItem, ideas, timeElapsed, testData, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isCompleting) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-yellow-300 border-t-yellow-600 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">창의력 분석 중...</h3>
          <p className="text-gray-600">당신의 아이디어를 4가지 관점에서 분석하고 있어요</p>
        </motion.div>
      </div>
    );
  }

  if (!currentItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full mx-auto mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-yellow-600 font-semibold">테스트를 준비하고 있습니다...</p>
        </div>
      </div>
    );
  }

  const validIdeasCount = ideas.filter(idea => idea.trim().length > 0).length;
  const canComplete = validIdeasCount > 0;
  const canAddMore = ideas.length < 10 && ideas[ideas.length - 1].trim() !== '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Header */}
      <motion.div 
        className="bg-white shadow-lg p-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
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
            {formatTime(timeElapsed)} | {validIdeasCount}/10
          </div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto p-4">
        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 mt-4"
        >
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">💡</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              창의력 테스트에 오신 것을 환영합니다!
            </h2>
            <p className="text-gray-600">
              제시된 사물의 다양한 활용법을 생각해보세요. 최대 10개까지 입력할 수 있습니다.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <div className="flex items-center mb-2">
              <Lightbulb className="w-5 h-5 text-yellow-600 mr-2" />
              <h3 className="font-semibold text-yellow-800">평가 기준</h3>
            </div>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• <strong>유창성:</strong> 아이디어의 개수</li>
              <li>• <strong>독창성:</strong> 참신하고 독특한 아이디어</li>
              <li>• <strong>유연성:</strong> 다양한 분야의 활용법</li>
              <li>• <strong>정교성:</strong> 구체적이고 상세한 설명</li>
            </ul>
          </div>
        </motion.div>

        {/* Current Item */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">🧱</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {currentItem.name}
            </h2>
            <p className="text-gray-600 text-lg mb-4">{currentItem.description}</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-2">일반적인 사용법 예시:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {currentItem.examples.map((example, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              이 사물을 어떻게 활용할 수 있을까요?
            </h3>
            
            <div className="space-y-4">
              <AnimatePresence>
                {ideas.map((idea, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <textarea
                      value={idea}
                      onChange={(e) => handleIdeaChange(index, e.target.value)}
                      placeholder={`아이디어 ${index + 1}을 입력하세요... (예: 책받침으로 사용하기)`}
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                      rows={2}
                      maxLength={200}
                    />
                    {ideas.length > 1 && (
                      <button
                        onClick={() => removeIdea(index)}
                        className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {canAddMore && (
                <motion.button
                  onClick={addNewIdea}
                  className="w-full p-4 border-2 border-dashed border-yellow-300 rounded-lg text-yellow-600 hover:border-yellow-400 hover:bg-yellow-50 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Plus className="w-5 h-5" />
                  아이디어 추가하기 ({ideas.length}/10)
                </motion.button>
              )}
            </div>

            <div className="mt-8 text-center">
              <Button
                onClick={handleComplete}
                disabled={!canComplete}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg"
              >
                {validIdeasCount > 0 
                  ? `${validIdeasCount}개 아이디어로 결과 보기` 
                  : '최소 1개 아이디어를 입력해주세요'
                }
              </Button>
              <p className="text-sm text-gray-500 mt-2">
                언제든지 완료할 수 있습니다. 더 많은 아이디어일수록 정확한 분석이 가능해요!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}