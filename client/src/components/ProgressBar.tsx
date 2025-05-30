import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  currentQuestion: number;
  totalQuestions: number;
  testTitle: string;
}

export function ProgressBar({ progress, currentQuestion, totalQuestions, testTitle }: ProgressBarProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">{testTitle}</h2>
        <div className="text-sm text-gray-500">{currentQuestion} / {totalQuestions}</div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3">
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      
      <div className="flex justify-center mt-4">
        <div className="flex gap-2">
          {Array.from({ length: totalQuestions }).map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index < currentQuestion
                  ? 'bg-purple-500'
                  : index === currentQuestion
                  ? 'bg-purple-300'
                  : 'bg-gray-300'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
