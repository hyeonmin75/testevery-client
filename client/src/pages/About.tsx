import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ContactButton } from "../components/ContactButton";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-korean">
      <div className="max-w-4xl mx-auto p-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <button
              onClick={() => setLocation('/')}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors mb-6"
            >
              ← 홈으로 돌아가기
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              모두의 테스트 - 전문 심리 분석 플랫폼
            </h1>
            <p className="text-gray-600 text-lg">
              심리학 연구를 기반으로 한 신뢰할 수 있는 성격 분석과 교육적 콘텐츠를 제공합니다
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                🎯 우리의 미션
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                모두의 테스트는 심리학 이론과 연구를 바탕으로 개발된 전문적인 성격 분석 플랫폼입니다. 
                칼 융의 심리유형론, 빅 파이브 성격 모델 등 검증된 심리학 이론을 적용하여 
                신뢰할 수 있는 성격 분석 결과를 제공하며, 사용자의 자기 이해와 성장을 지원합니다.
              </p>
            </div>

            {/* What We Offer */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                ✨ 제공 서비스
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧠</span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">MBTI 성격유형 테스트</h3>
                      <p className="text-gray-600 text-sm">16가지 성격유형으로 나만의 특성 발견</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">반응속도 테스트</h3>
                      <p className="text-gray-600 text-sm">순발력과 집중력 측정</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">직감 테스트</h3>
                      <p className="text-gray-600 text-sm">좌우 선택을 통한 직관력 분석</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌈</span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">다양한 재미 테스트</h3>
                      <p className="text-gray-600 text-sm">동물, 음식, 색깔 등 흥미로운 주제들</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">상세한 결과 분석</h3>
                      <p className="text-gray-600 text-sm">개인별 맞춤 결과와 해석 제공</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">간편한 공유</h3>
                      <p className="text-gray-600 text-sm">결과를 친구들과 쉽게 공유</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                💝 우리의 가치
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">재미 우선</h3>
                  <p className="text-gray-600 text-sm">
                    무엇보다 즐거움을 추구하며, 스트레스 해소와 힐링을 제공합니다.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">소통 증진</h3>
                  <p className="text-gray-600 text-sm">
                    친구, 가족, 연인 간의 대화 소재와 이해의 기회를 제공합니다.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">개인정보 보호</h3>
                  <p className="text-gray-600 text-sm">
                    사용자의 개인정보를 철저히 보호하며, 로컬 저장만 사용합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-800 mb-2">⚠️ 중요한 안내</h3>
              <p className="text-yellow-700 text-sm leading-relaxed">
                모든 테스트 결과는 오락 목적으로만 제공되며, 과학적 또는 의학적 근거를 바탕으로 하지 않습니다. 
                전문적인 심리 상담이나 진단이 필요한 경우 관련 전문가와 상담하시기 바랍니다.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                문의 및 제안
              </h2>
              <p className="text-gray-600 mb-6">
                새로운 테스트 아이디어나 개선사항이 있으시면 언제든 연락해 주세요!
              </p>
              <ContactButton />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}