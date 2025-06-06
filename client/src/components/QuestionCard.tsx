import { motion, AnimatePresence } from 'framer-motion';
import { TestQuestion } from '../types/test';

interface QuestionCardProps {
  question: TestQuestion;
  questionNumber: number;
  totalQuestions: number;
  onSelectOption: (optionId: string) => void;
  selectedOptionId?: string;
}

export function QuestionCard({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onSelectOption,
  selectedOptionId 
}: QuestionCardProps) {
  const getOptionColor = (index: number) => {
    const colors = [
      'from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border-gray-200',
      'from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border-gray-200',
      'from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border-gray-200',
      'from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 border-gray-200'
    ];
    return colors[index % colors.length];
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-xl mb-3 sm:mb-6"
      >
        <div className="text-center mb-4 sm:mb-6">
          <motion.div 
            className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            {question.emoji}
          </motion.div>
          
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 sm:px-3 py-1 rounded-full">
              질문 {questionNumber} / {totalQuestions}
            </div>
          </div>
          
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight break-keep px-2">
            {question.text}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 break-keep hyphens-auto px-2 leading-relaxed">{question.subtitle}</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {question.options.map((option, index) => (
            <motion.button
              key={option.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectOption(option.id)}
              className={`question-option-hover w-full p-3 sm:p-4 lg:p-5 text-left border-2 border-transparent rounded-xl sm:rounded-2xl transition-all duration-200 ${
                selectedOptionId === option.id 
                  ? 'border-purple-500 bg-purple-100' 
                  : `bg-gradient-to-r ${getOptionColor(index)} hover:border-opacity-100`
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="text-xl sm:text-2xl flex-shrink-0">{option.emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-800 mb-1 break-keep text-sm sm:text-base lg:text-lg leading-tight">{option.text}</div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600 break-keep hyphens-auto leading-relaxed">{option.description}</div>
                </div>
                <div className={`w-6 h-6 border-2 rounded-full transition-colors ${
                  selectedOptionId === option.id
                    ? 'border-purple-500 bg-purple-500'
                    : 'border-gray-300'
                }`}>
                  {selectedOptionId === option.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-full h-full rounded-full bg-purple-500 flex items-center justify-center"
                    >
                      <i className="fas fa-check text-white text-xs"></i>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
