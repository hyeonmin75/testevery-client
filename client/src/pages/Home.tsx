import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { TestCard } from '../components/TestCard';
import { tests } from '../data/tests';

export default function Home() {
  const [, setLocation] = useLocation();

  const handleStartTest = (testId: string) => {
    setLocation(`/test/${testId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-korean">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="text-7xl mb-6"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <i className="fas fa-brain text-purple-500"></i>
            </motion.div>
            
            <motion.h1 
              className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent break-keep"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              심리테스트 모음집
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto break-keep hyphens-auto">
                당신의 숨겨진 성격을 발견해보세요!<br />
                <span className="text-purple-600 font-semibold break-keep">{Object.keys(tests).length}가지 재미있는 테스트</span>로 나만의 특별함을 찾아보세요
              </p>
              <div className="mt-6 flex justify-center gap-4 text-2xl">
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}>✨</motion.span>
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}>🎯</motion.span>
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}>💫</motion.span>
              </div>
            </motion.div>
          </motion.div>



          {/* Test Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {Object.values(tests).map((test) => {
              return (
                <motion.div key={test.id} variants={itemVariants}>
                  <TestCard
                    test={test}
                    onStartTest={handleStartTest}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Popular Tests */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">🔥 인기 테스트 TOP 3</h2>
              <p className="text-purple-100 mb-6">가장 많이 참여한 테스트들을 확인해보세요!</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.values(tests).slice(0, 3).map((test, index) => (
                  <motion.div
                    key={test.id}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleStartTest(test.id)}
                  >
                    <div className="text-4xl mb-3">{test.emoji}</div>
                    <div className="font-semibold">{test.title.replace(' 테스트', '')}</div>
                    <div className="text-sm text-purple-100">{index + 1}위 • {test.participants}명 참여</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="text-center text-gray-500 text-sm bg-white/50 backdrop-blur-sm rounded-3xl p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <div className="flex justify-center gap-6 mb-4">
              <motion.a 
                href="#" 
                className="text-purple-500 hover:text-purple-600 text-xl transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fab fa-facebook"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-blue-500 hover:text-blue-600 text-xl transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-green-500 hover:text-green-600 text-xl transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
            </div>
            <p className="mb-2">모든 테스트는 재미를 위한 것이며, 과학적 근거를 바탕으로 하지 않습니다.</p>
            <p>결과를 친구들과 공유하고 함께 즐겨보세요! ✨</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
