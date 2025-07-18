import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { updateMetaTags, addStructuredData } from '../utils/seo';
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

  // 홈페이지 SEO 설정
  useEffect(() => {
    updateMetaTags({
      title: "모두의 테스트 - 재미있는 심리테스트와 성격진단",
      description: "MBTI, 에겐-테토, 창의력 진단 등 다양한 심리테스트로 자신을 알아보세요. 200,000명이 선택한 신뢰할 수 있는 온라인 테스트 플랫폼입니다.",
      keywords: "심리테스트, 성격테스트, MBTI, 에겐테토, 창의력테스트, 자가진단, 온라인테스트",
      ogTitle: "모두의 테스트 - 재미있는 심리테스트와 성격진단",
      ogDescription: "MBTI, 에겐-테토, 창의력 진단 등 다양한 심리테스트로 자신을 알아보세요.",
      ogImage: 'https://testevery.com/og-image.png',
      canonicalUrl: 'https://testevery.com/'
    });

    // 홈페이지 구조화된 데이터
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "모두의 테스트",
      "url": "https://testevery.com",
      "description": "재미있는 심리테스트와 성격진단 플랫폼",
      "publisher": {
        "@type": "Organization",
        "name": "모두의 테스트"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://testevery.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "ko"
    };
    addStructuredData(structuredData);
  }, []);

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

          {/* Quick Scientific Note */}
          <motion.div
            className="mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  과학적으로 검증된 심리 검사
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  100년 이상의 심리학 연구 성과를 기반으로 한 신뢰도 높은 측정 도구를 제공합니다.
                </p>
                <button
                  onClick={() => setLocation('/about')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"
                >
                  전문성과 학술적 배경 자세히 보기 →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Educational Content Links */}
          <motion.div
            className="mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setLocation('/psychology')}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-200 border border-purple-100 hover:border-purple-300"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🧠</div>
                  <div className="text-left">
                    <h3 className="text-sm font-semibold text-gray-800">심리학 이론과 배경</h3>
                    <p className="text-xs text-gray-600">전문적인 학술 내용 보기</p>
                  </div>
                  <div className="text-purple-500 text-sm">→</div>
                </div>
              </button>

              <button
                onClick={() => setLocation('/blog')}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-200 border border-green-100 hover:border-green-300"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📝</div>
                  <div className="text-left">
                    <h3 className="text-sm font-semibold text-gray-800">심리학 인사이트 블로그</h3>
                    <p className="text-xs text-gray-600">최신 연구와 실생활 활용법</p>
                  </div>
                  <div className="text-green-500 text-sm">→</div>
                </div>
              </button>
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
