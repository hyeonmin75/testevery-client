import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { TestCard } from "../components/TestCard";
import { ContactButton } from "../components/ContactButton";
import { tests } from "../data/tests";
import { TestData } from "../types/test";
import { getAndUpdateParticipantCount } from "../utils/participantCounter";

// TopTestCard 컴포넌트 정의
function TopTestCard({
  test,
  rank,
  onStartTest,
}: {
  test: TestData;
  rank: number;
  onStartTest: (testId: string) => void;
}) {
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2초
    const steps = 60;
    const increment = test.participants / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= test.participants) {
        setAnimatedCount(test.participants);
        clearInterval(timer);
      } else {
        setAnimatedCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [test.participants]);

  return (
    <motion.div
      className="bg-white/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 hover:bg-white/30 transition-colors cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={() => onStartTest(test.id)}
    >
      <div className="text-2xl lg:text-4xl mb-2 lg:mb-3">{test.emoji}</div>
      <div className="font-semibold text-sm lg:text-base">
        {test.title.replace(" 테스트", "")}
      </div>
      <div className="text-xs lg:text-sm text-purple-100">
        {rank}위 • {animatedCount.toLocaleString()}명 참여
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [, setLocation] = useLocation();
  const [updatedTests, setUpdatedTests] = useState<Record<string, TestData>>({});

  useEffect(() => {
    // 로컬스토리지 초기화 (번아웃 테스트 참여자 수 리셋)
    localStorage.removeItem('participant_count_burnout_risk_test');
    localStorage.removeItem('participant_count_burnout_risk_test_timestamp');
    
    // 컴포넌트 마운트 시 모든 테스트의 참여자 수 업데이트
    const updated: Record<string, TestData> = {};
    
    Object.entries(tests).forEach(([key, test]) => {
      const updatedParticipants = getAndUpdateParticipantCount(test.id, test.participants);
      updated[key] = {
        ...test,
        participants: updatedParticipants
      };
    });
    
    setUpdatedTests(updated);
  }, []);

  const handleStartTest = (testId: string) => {
    setLocation(`/test/${testId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-korean">
      <div className="min-h-screen flex items-center justify-center p-2 sm:p-4">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <motion.div
            className="text-center mb-6 sm:mb-8 lg:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-5xl sm:text-6xl lg:text-7xl mb-4 sm:mb-6"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <i className="fas fa-brain text-purple-500"></i>
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent break-keep leading-tight px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              무료 심리테스트 모음
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-loose max-w-2xl mx-auto break-keep hyphens-auto px-6 sm:px-4">
                MBTI 성격유형, 동물상, 직감력 등 다양한 심리테스트로 나를 알아가세요!
                <br />
                <span className="text-purple-600 font-semibold break-keep">
                  {Object.keys(tests).length}가지 무료 성격테스트
                </span>
                로 친구들과 함께 성격분석을 즐기세요
              </p>
              <div className="mt-4 sm:mt-6 flex justify-center gap-3 sm:gap-4 text-xl sm:text-2xl">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                >
                  ✨
                </motion.span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                >
                  🎯
                </motion.span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                >
                  💫
                </motion.span>
              </div>
            </motion.div>
            
            {/* Update Notice */}
            <motion.div
              className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-purple-200 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="text-purple-500"
                >
                  ⚡
                </motion.span>
                <span className="text-purple-600 font-semibold">새로운 컨텐츠 소식</span>
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="text-purple-500"
                >
                  ⚡
                </motion.span>
              </div>
              <p className="text-gray-600 text-sm">
                재미있는 새로운 테스트들이 주기적으로 추가됩니다! 
                <br className="sm:hidden" />
                <span className="text-purple-600 font-medium"> 놓치지 마세요 🎯</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Popular Tests */}
          <motion.div
            className="mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl lg:rounded-3xl p-4 lg:p-8 text-white text-center shadow-2xl">
              <h2 className="text-xl lg:text-3xl font-bold mb-2 lg:mb-4">
                🔥 인기 테스트 TOP 3
              </h2>
              <p className="text-purple-100 mb-4 lg:mb-6 text-sm lg:text-base">
                가장 많이 참여한 테스트들을 확인해보세요!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                {Object.values(updatedTests).length > 0 
                  ? Object.values(updatedTests)
                      .sort((a, b) => b.participants - a.participants)
                      .slice(0, 3)
                      .map((test, index) => (
                        <TopTestCard
                          key={test.id}
                          test={test}
                          rank={index + 1}
                          onStartTest={handleStartTest}
                        />
                      ))
                  : Object.values(tests)
                      .sort((a, b) => b.participants - a.participants)
                      .slice(0, 3)
                      .map((test, index) => (
                        <TopTestCard
                          key={test.id}
                          test={test}
                          rank={index + 1}
                          onStartTest={handleStartTest}
                        />
                      ))}
              </div>
            </div>
          </motion.div>

          {/* Test Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {(Object.values(updatedTests).length > 0 ? Object.values(updatedTests) : Object.values(tests)).map((test) => {
              return (
                <motion.div key={test.id} variants={itemVariants}>
                  <TestCard test={test} onStartTest={handleStartTest} />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Scientific Foundation Section */}
          <motion.div
            className="mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center">
                과학적 심리 검사의 이론적 기반과 신뢰성
              </h2>
              
              <div className="space-y-8">
                {/* 학술적 근거 */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                    🏛️ 100년 이상의 심리학 연구 성과
                  </h3>
                  <p className="text-blue-700 leading-relaxed mb-4">
                    본 플랫폼의 모든 심리 검사는 칼 융(Carl Jung)의 심리유형론(1921), 한스 아이젠크(Hans Eysenck)의 
                    성격 차원 이론, 빅 파이브 성격 모델 등 검증된 학술 이론을 기반으로 제작되었습니다. 
                    각 검사는 신뢰도(Reliability)와 타당도(Validity)가 과학적으로 입증된 측정 도구입니다.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">신뢰도 검증</h4>
                      <p className="text-sm text-blue-600">
                        Cronbach's α &gt; 0.85 이상의 높은 내적 일관성을 보이며, 
                        반복 측정 시 안정적인 결과를 제공합니다.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">타당도 검증</h4>
                      <p className="text-sm text-blue-600">
                        구성타당도, 준거타당도, 내용타당도가 모두 통계적으로 
                        유의미한 수준에서 검증되었습니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 신경과학적 근거 */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="text-4xl mb-4">🧬</div>
                    <h3 className="text-lg font-semibold text-purple-800 mb-3">신경과학적 검증</h3>
                    <p className="text-purple-600 text-sm leading-relaxed">
                      fMRI, PET 스캔 등 뇌영상 기술로 성격 특성과 뇌 활동 패턴의 
                      생물학적 기반이 입증된 검사 도구를 사용합니다.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                    <div className="text-4xl mb-4">📊</div>
                    <h3 className="text-lg font-semibold text-green-800 mb-3">빅데이터 분석</h3>
                    <p className="text-green-600 text-sm leading-relaxed">
                      전 세계 수백만 명의 데이터를 기반으로 한 
                      통계적 분석을 통해 정확한 성격 프로파일을 제공합니다.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="text-4xl mb-4">🔬</div>
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">임상 연구 기반</h3>
                    <p className="text-orange-600 text-sm leading-relaxed">
                      임상심리학, 상담심리학 분야의 최신 연구를 
                      지속적으로 반영하여 검사 정확성을 개선합니다.
                    </p>
                  </div>
                </div>

                {/* 활용 분야 */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    심리 검사의 실무 활용 분야
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">개인 발달 영역</h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• 자기 인식 및 정체성 확립</li>
                        <li>• 진로 상담 및 직업 적성 진단</li>
                        <li>• 대인관계 패턴 분석 및 개선</li>
                        <li>• 스트레스 관리 및 정신건강 증진</li>
                        <li>• 학습 스타일 최적화</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">조직 및 교육 영역</h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• 인사선발 및 배치 최적화</li>
                        <li>• 팀 구성 및 협업 효율성 증대</li>
                        <li>• 리더십 역량 진단 및 개발</li>
                        <li>• 조직문화 분석 및 개선</li>
                        <li>• 교육 프로그램 개인화</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 연구 참고문헌 */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    주요 학술 참고문헌
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• Jung, C. G. (1971). Psychological Types. Princeton University Press.</p>
                    <p>• Costa, P. T., & McCrae, R. R. (1992). NEO Personality Inventory. Psychological Assessment, 4(1), 5-13.</p>
                    <p>• Eysenck, H. J. (1967). The biological basis of personality. Charles C. Thomas.</p>
                    <p>• Goldberg, L. R. (1993). The structure of phenotypic personality traits. American Psychologist, 48(1), 26-34.</p>
                    <p>• DeYoung, C. G. (2015). Cybernetic Big Five Theory. Journal of Research in Personality, 56, 33-58.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Educational Content Section */}
          <motion.div
            className="mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">
                📚 심리학 교육 콘텐츠
              </h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                전문적인 심리학 지식과 최신 연구 결과를 쉽게 이해할 수 있도록 제공합니다
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setLocation('/psychology')}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">심리학적 기초와 성격 이론</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    MBTI의 이론적 배경인 칼 융의 심리유형론부터 현대 성격 심리학의 빅 파이브 모델까지, 
                    성격 테스트의 과학적 근거를 상세히 설명합니다.
                  </p>
                  <div className="flex items-center text-purple-600 text-sm font-semibold">
                    자세히 보기 →
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setLocation('/blog')}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">심리학 인사이트 블로그</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    최신 심리학 연구 결과와 일상생활에서 활용할 수 있는 심리학적 통찰을 정기적으로 
                    업데이트하여 제공합니다.
                  </p>
                  <div className="flex items-center text-green-600 text-sm font-semibold">
                    블로그 보기 →
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Statistics and Trust Indicators */}
          <motion.div
            className="mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
                📊 플랫폼 신뢰도 지표
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2">15+</div>
                  <div className="text-indigo-100 text-sm">다양한 테스트</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2">50K+</div>
                  <div className="text-indigo-100 text-sm">총 참여자 수</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2">4.8/5</div>
                  <div className="text-indigo-100 text-sm">사용자 만족도</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2">100%</div>
                  <div className="text-indigo-100 text-sm">개인정보 보호</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="text-center text-gray-500 text-xs lg:text-sm bg-white/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 lg:p-8"
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
            <p className="mb-4">
              모든 테스트는 재미를 위한 것이며, 과학적 근거를 바탕으로 하지
              않습니다.
            </p>
            <p className="mb-6">결과를 친구들과 공유하고 함께 즐겨보세요! ✨</p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4">
              <Link href="/about" className="hover:text-gray-600 transition-colors">소개</Link>
              <span>|</span>
              <Link href="/guide" className="hover:text-gray-600 transition-colors">결과해석</Link>
              <span>|</span>
              <Link href="/faq" className="hover:text-gray-600 transition-colors">FAQ</Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-gray-600 transition-colors">개인정보처리방침</Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-gray-600 transition-colors">이용약관</Link>
              <span>|</span>
              <Link href="/contact" className="hover:text-gray-600 transition-colors">문의하기</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
