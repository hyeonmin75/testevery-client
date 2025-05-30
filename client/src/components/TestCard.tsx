import { motion } from 'framer-motion';
import { TestData } from '../types/test';
import { formatParticipants } from '../utils/testLogic';

interface TestCardProps {
  test: TestData;
  onStartTest: (testId: string) => void;
}

export function TestCard({ test, onStartTest }: TestCardProps) {
  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: {
        border: 'hover:border-orange-200',
        bg: 'bg-orange-50',
        text: 'text-orange-700',
        button: 'from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600',
        progress: 'bg-orange-500'
      },
      pink: {
        border: 'hover:border-pink-200',
        bg: 'bg-pink-50',
        text: 'text-pink-700',
        button: 'from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600',
        progress: 'bg-pink-500'
      },
      blue: {
        border: 'hover:border-blue-200',
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        button: 'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
        progress: 'bg-blue-500'
      },
      purple: {
        border: 'hover:border-purple-200',
        bg: 'bg-purple-50',
        text: 'text-purple-700',
        button: 'from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600',
        progress: 'bg-purple-500'
      },
      red: {
        border: 'hover:border-red-200',
        bg: 'bg-red-50',
        text: 'text-red-700',
        button: 'from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600',
        progress: 'bg-red-500'
      },
      green: {
        border: 'hover:border-green-200',
        bg: 'bg-green-50',
        text: 'text-green-700',
        button: 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
        progress: 'bg-green-500'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  const colors = getColorClasses(test.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`test-card-hover bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl border-2 border-transparent ${colors.border} cursor-pointer relative overflow-hidden h-full flex flex-col`}
      onClick={() => onStartTest(test.id)}
    >

      
      <div className="text-center flex flex-col h-full">
        <motion.div 
          className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {test.emoji}
        </motion.div>
        
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 break-keep">{test.title}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed break-keep hyphens-auto flex-grow">{test.description}</p>
        
        <div className={`${colors.bg} rounded-xl p-2 sm:p-3 mb-4 sm:mb-6`}>
          <div className={`flex justify-between text-xs sm:text-sm ${colors.text}`}>
            <span><i className="fas fa-clock mr-1"></i>{test.duration}</span>
            <span><i className="fas fa-list mr-1"></i>{test.questionCount}문항</span>
            <span><i className="fas fa-users mr-1"></i>{formatParticipants(test.participants)}명</span>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`bg-gradient-to-r ${colors.button} text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base lg:text-lg font-semibold transition-all shadow-lg w-full break-keep whitespace-nowrap`}
        >
          <i className="fas fa-play mr-2"></i>
          <span className="break-keep">테스트 시작하기</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
