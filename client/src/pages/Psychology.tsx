import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function Psychology() {
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
              심리학적 기초와 성격 이론
            </h1>
            <p className="text-gray-600 text-lg">
              성격 테스트의 이론적 배경과 심리학적 근거를 알아보세요
            </p>
          </div>

          {/* MBTI 이론 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              🧠 MBTI 성격유형 이론
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">칼 융의 심리유형론</h3>
                <p className="text-gray-600 leading-relaxed">
                  MBTI(Myers-Briggs Type Indicator)는 스위스의 정신과 의사 칼 구스타프 융(Carl Gustav Jung)의 
                  심리유형론을 바탕으로 개발되었습니다. 융은 1921년 저서 『심리유형』에서 사람들이 세상을 
                  인식하고 판단하는 방식에 따라 서로 다른 성격유형으로 분류될 수 있다고 제시했습니다.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-800 mb-3">외향성(E) vs 내향성(I)</h4>
                  <p className="text-blue-700 text-sm">
                    에너지의 방향성을 나타냅니다. 외향성은 외부 세계와의 상호작용에서 에너지를 얻고, 
                    내향성은 내면의 세계에서 에너지를 충전합니다.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-800 mb-3">감각(S) vs 직관(N)</h4>
                  <p className="text-green-700 text-sm">
                    정보 수집 방식을 의미합니다. 감각형은 구체적이고 현실적인 정보를 선호하고, 
                    직관형은 가능성과 패턴을 중시합니다.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-purple-800 mb-3">사고(T) vs 감정(F)</h4>
                  <p className="text-purple-700 text-sm">
                    의사결정 방식을 나타냅니다. 사고형은 논리와 객관적 분석을 중시하고, 
                    감정형은 가치와 인간관계를 우선시합니다.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-orange-800 mb-3">판단(J) vs 인식(P)</h4>
                  <p className="text-orange-700 text-sm">
                    생활양식을 의미합니다. 판단형은 계획적이고 체계적인 생활을 선호하고, 
                    인식형은 융통성 있고 적응적인 생활을 추구합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 성격 심리학 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              📚 성격 심리학의 발전
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">빅 파이브 성격 모델</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  현대 성격 심리학에서 가장 널리 인정받는 모델로, 다음 5가지 차원으로 성격을 설명합니다:
                </p>
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl mb-2">🌊</div>
                    <h4 className="font-semibold text-red-800 text-sm">신경성</h4>
                    <p className="text-red-600 text-xs">정서적 안정성</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl mb-2">🤝</div>
                    <h4 className="font-semibold text-orange-800 text-sm">외향성</h4>
                    <p className="text-orange-600 text-xs">사회적 에너지</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl mb-2">🎨</div>
                    <h4 className="font-semibold text-yellow-800 text-sm">개방성</h4>
                    <p className="text-yellow-600 text-xs">새로운 경험</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl mb-2">🤗</div>
                    <h4 className="font-semibold text-green-800 text-sm">친화성</h4>
                    <p className="text-green-600 text-xs">협력과 신뢰</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🎯</div>
                    <h4 className="font-semibold text-blue-800 text-sm">성실성</h4>
                    <p className="text-blue-600 text-xs">목표 지향성</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 인지 심리학 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              ⚡ 인지 능력과 반응속도
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">정보 처리 이론</h3>
                <p className="text-gray-600 leading-relaxed">
                  인간의 뇌는 컴퓨터와 유사하게 정보를 입력, 처리, 출력하는 과정을 거칩니다. 
                  반응속도 테스트는 이러한 정보 처리 과정의 효율성을 측정하는 도구입니다.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-blue-800 mb-3">반응시간의 구성 요소</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">1.</span>
                    <div>
                      <p className="font-semibold text-blue-800">감각 등록</p>
                      <p className="text-blue-700 text-sm">자극이 감각 기관을 통해 뇌에 전달되는 시간</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <div>
                      <p className="font-semibold text-blue-800">인지 처리</p>
                      <p className="text-blue-700 text-sm">자극을 인식하고 적절한 반응을 결정하는 시간</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <div>
                      <p className="font-semibold text-blue-800">운동 실행</p>
                      <p className="text-blue-700 text-sm">결정된 반응을 실제로 수행하는 시간</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 주의력과 집중력 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              🎯 주의력과 집중력 연구
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">주의력 네트워크 이론</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  마이클 포스너(Michael Posner)의 주의력 네트워크 이론에 따르면, 
                  인간의 주의력은 세 가지 독립적인 네트워크로 구성됩니다:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-800 mb-3">경계 네트워크</h4>
                    <p className="text-purple-700 text-sm">
                      각성 상태를 유지하고 중요한 자극에 대비하는 기능. 
                      위험 신호나 중요한 정보를 빠르게 감지합니다.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-green-800 mb-3">지향 네트워크</h4>
                    <p className="text-green-700 text-sm">
                      특정 위치나 대상에 주의를 집중시키는 기능. 
                      선택적 주의력과 공간적 주의력을 담당합니다.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-orange-800 mb-3">실행 네트워크</h4>
                    <p className="text-orange-700 text-sm">
                      충돌하는 정보를 해결하고 인지적 조절을 담당. 
                      복잡한 상황에서의 의사결정을 지원합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 연구 참고문헌 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              📖 주요 참고문헌
            </h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="border-l-4 border-blue-400 pl-4">
                <p className="font-semibold">Jung, C. G. (1921)</p>
                <p>Psychological Types. Princeton University Press.</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <p className="font-semibold">Myers, I. B., & McCaulley, M. H. (1985)</p>
                <p>Manual: A Guide to the Development and Use of the Myers-Briggs Type Indicator. Consulting Psychologists Press.</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <p className="font-semibold">Costa, P. T., & McCrae, R. R. (1992)</p>
                <p>The Five-Factor Model of Personality and Its Relevance to Personality Disorders. Journal of Personality Disorders, 6(4), 343-359.</p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <p className="font-semibold">Posner, M. I., & Petersen, S. E. (1990)</p>
                <p>The Attention System of the Human Brain. Annual Review of Neuroscience, 13(1), 25-42.</p>
              </div>
            </div>
          </div>

          {/* 면책조항 */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 mt-8">
            <h3 className="font-semibold text-yellow-800 mb-2">📋 학술적 면책조항</h3>
            <p className="text-yellow-700 text-sm leading-relaxed">
              본 페이지에서 제공하는 정보는 교육 목적으로만 사용되며, 전문적인 심리학적 진단이나 
              치료를 대체할 수 없습니다. 심리학적 문제나 정신건강 관련 상담이 필요한 경우 
              반드시 자격을 갖춘 전문가와 상담하시기 바랍니다.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}