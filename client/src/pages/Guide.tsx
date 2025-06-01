import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function Guide() {
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
              테스트 결과 해석 가이드
            </h1>
            <p className="text-gray-600">
              테스트 결과를 더 잘 이해하고 활용하는 방법
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* MBTI Guide */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                🧠 MBTI 성격유형 테스트
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">결과 이해하기</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">E(외향) vs I(내향)</h4>
                      <p className="text-gray-600 text-sm">에너지를 얻는 방식의 차이</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">S(감각) vs N(직관)</h4>
                      <p className="text-gray-600 text-sm">정보를 받아들이는 방식의 차이</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">T(사고) vs F(감정)</h4>
                      <p className="text-gray-600 text-sm">판단하고 결정하는 방식의 차이</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">J(판단) vs P(인식)</h4>
                      <p className="text-gray-600 text-sm">외부 세계에 대처하는 방식의 차이</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">결과 활용법</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>자신의 강점과 약점을 파악하는 데 활용하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>타인과의 관계에서 서로 다른 점을 이해하는 데 도움이 됩니다</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>진로나 업무 스타일을 고민할 때 참고자료로 활용하세요</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance Tests Guide */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                ⚡ 수행능력 테스트 (반응속도, 탭핑지구력)
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">점수 해석</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">우수</span>
                      <span className="text-gray-600">평균보다 높은 수준의 능력</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">보통</span>
                      <span className="text-gray-600">일반적인 수준의 능력</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">개선</span>
                      <span className="text-gray-600">연습을 통해 향상 가능한 영역</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">향상 방법</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>규칙적인 운동으로 전반적인 신체 능력을 향상시키세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>집중력 훈련을 통해 반응속도를 개선할 수 있습니다</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>충분한 휴식과 수면으로 컨디션을 관리하세요</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Intuition Test Guide */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                🎯 직감 테스트
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">결과의 의미</h3>
                  <p className="text-gray-600 leading-relaxed">
                    직감 테스트는 순간적인 판단력과 무의식적 인지능력을 측정합니다. 
                    높은 점수는 직관적 사고가 발달했음을 의미하며, 낮은 점수라고 해서 
                    능력이 부족한 것은 아닙니다. 각자 다른 사고 방식을 가지고 있을 뿐입니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">직감력 기르기</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>명상이나 마음챙김을 통해 내면의 소리에 귀 기울이세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>새로운 경험을 통해 감각을 확장해보세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>과도한 분석보다는 첫 번째 느낌을 신뢰해보세요</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Personality Tests Guide */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                🌈 성격 테스트 (동물, 음식, 색깔 등)
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">결과 활용 팁</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>친구들과 결과를 공유하며 서로에 대해 이야기해보세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>자신이 몰랐던 새로운 면을 발견하는 기회로 활용하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>결과에 너무 얽매이지 말고 재미있는 소재로 즐기세요</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">대화의 소재로 활용하기</h3>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-purple-800 text-sm">
                      "너는 어떤 동물이 나왔어?" "우리 성격이 비슷한가 봐!" 
                      같은 자연스러운 대화로 친구들과 더 가까워질 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6">
              <h3 className="font-semibold text-red-800 mb-2">⚠️ 중요한 알림</h3>
              <div className="space-y-2 text-red-700 text-sm">
                <p>• 모든 테스트 결과는 오락 목적으로만 해석해주세요</p>
                <p>• 과학적 근거나 의학적 진단과는 관련이 없습니다</p>
                <p>• 결과가 절대적인 것은 아니며, 개인차가 존재할 수 있습니다</p>
                <p>• 심리적 고민이나 문제가 있다면 전문가와 상담하시기 바랍니다</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}