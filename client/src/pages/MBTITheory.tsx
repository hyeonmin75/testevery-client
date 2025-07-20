import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function MBTITheory() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-korean">
      <div className="max-w-6xl mx-auto p-6 py-12">
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
              MBTI 심리유형 이론의 과학적 근거
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              칼 구스타프 융의 심리유형론부터 현대 MBTI까지, 성격 심리학의 발전사와 과학적 타당성을 탐구합니다
            </p>
          </div>

          {/* 목차 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">목차</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <a href="#jung-theory" className="block text-purple-600 hover:text-purple-800 transition-colors">
                  1. 칼 융의 심리유형론
                </a>
                <a href="#mbti-development" className="block text-purple-600 hover:text-purple-800 transition-colors">
                  2. MBTI의 개발과 발전
                </a>
                <a href="#four-dimensions" className="block text-purple-600 hover:text-purple-800 transition-colors">
                  3. 4가지 선호 지표 분석
                </a>
                <a href="#cognitive-functions" className="block text-purple-600 hover:text-purple-800 transition-colors">
                  4. 인지 기능 이론
                </a>
              </div>
              <div className="space-y-2">
                <a href="#research-validity" className="block text-purple-600 hover:text-purple-800 transition-colors">
                  5. 연구와 타당성 검증
                </a>
                <a href="#neuroscience" className="block text-purple-600 hover:text-purple-800 transition-colors">
                  6. 신경과학적 근거
                </a>
                <a href="#applications" className="block text-purple-600 hover:text-purple-800 transition-colors">
                  7. 실제 적용과 활용
                </a>
                <a href="#limitations" className="block text-purple-600 hover:text-purple-800 transition-colors">
                  8. 한계와 비판점
                </a>
              </div>
            </div>
          </div>

          {/* 1. 칼 융의 심리유형론 */}
          <section id="jung-theory" className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">1. 칼 융의 심리유형론</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">역사적 배경</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  칼 구스타프 융(Carl Gustav Jung, 1875-1961)은 20세기 초 프로이드와 함께 정신분석학의 발전에 핵심적 역할을 했습니다. 
                  1921년 출간된 「심리유형(Psychological Types)」에서 융은 인간의 성격을 체계적으로 분류하는 이론적 틀을 제시했습니다.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  융의 심리유형론은 그가 환자들을 치료하면서 관찰한 개인차에서 출발했습니다. 
                  같은 치료법이 어떤 환자에게는 효과적이지만 다른 환자에게는 그렇지 않다는 점에 주목한 융은, 
                  이러한 차이가 개인의 근본적인 심리적 선호 차이에서 비롯된다고 가설을 세웠습니다.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">기본 개념: 태도(Attitudes)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">외향성(Extraversion)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      외향성은 정신적 에너지가 외부 세계로 향하는 태도를 의미합니다. 
                      외향적인 사람은 객체(사물, 사람, 상황)에 주의를 집중하며, 
                      외부 자극을 통해 에너지를 얻습니다.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• 객체 지향적 사고</li>
                      <li>• 사회적 상호작용 선호</li>
                      <li>• 폭넓은 관심사</li>
                      <li>• 행동 지향적</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-green-800 mb-3">내향성(Introversion)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      내향성은 정신적 에너지가 내부 세계로 향하는 태도입니다. 
                      내향적인 사람은 주체(자신의 생각, 감정, 내적 경험)에 주의를 집중하며, 
                      내적 반성을 통해 에너지를 얻습니다.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• 주체 지향적 사고</li>
                      <li>• 독립적 작업 선호</li>
                      <li>• 깊이 있는 관심사</li>
                      <li>• 숙고 지향적</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">심리 기능(Psychological Functions)</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  융은 인간의 의식이 네 가지 기본적인 심리 기능을 통해 작동한다고 보았습니다. 
                  이는 인식 기능(지각하는 방식) 두 가지와 판단 기능(결정하는 방식) 두 가지로 구분됩니다.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-4">인식 기능 (Perceiving Functions)</h4>
                    <div className="space-y-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-purple-700 mb-2">감각(Sensing)</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          오감을 통해 현실적이고 구체적인 정보를 받아들이는 기능입니다. 
                          현재에 집중하며, 사실과 세부사항을 중시합니다. 
                          실용적이고 경험 중심적인 접근을 특징으로 합니다.
                        </p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-purple-700 mb-2">직관(Intuition)</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          패턴, 가능성, 의미를 파악하는 기능입니다. 
                          미래 지향적이며, 상상력과 창의성을 중시합니다. 
                          전체적인 맥락과 숨겨진 관련성을 찾는데 특화되어 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-orange-800 mb-4">판단 기능 (Judging Functions)</h4>
                    <div className="space-y-4">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-orange-700 mb-2">사고(Thinking)</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          논리적 분석과 객관적 기준에 따라 판단하는 기능입니다. 
                          인과관계를 파악하고, 일관성과 공정성을 중시합니다. 
                          비개인적이고 분석적인 접근을 특징으로 합니다.
                        </p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-orange-700 mb-2">감정(Feeling)</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          가치와 의미에 따라 판단하는 기능입니다. 
                          인간관계와 조화를 중시하며, 개인적 가치관을 기준으로 합니다. 
                          인간 중심적이고 협력적인 접근을 특징으로 합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">기능의 위계와 발달</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  융에 따르면, 개인은 네 가지 기능 중 하나를 주기능(dominant function)으로 발달시키며, 
                  이와 대립되는 기능은 열등기능(inferior function)으로 남게 됩니다. 
                  나머지 두 기능은 보조기능(auxiliary)과 3차기능(tertiary)의 역할을 합니다.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">개성화 과정(Individuation Process)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    융은 인생의 목표를 개성화, 즉 자신의 모든 심리적 기능을 균형있게 발달시키는 것으로 보았습니다. 
                    이는 단순히 선호하는 기능만 사용하는 것이 아니라, 
                    상황에 따라 적절한 기능을 유연하게 활용할 수 있는 능력을 기르는 것을 의미합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. MBTI의 개발과 발전 */}
          <section id="mbti-development" className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">2. MBTI의 개발과 발전</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">캐서린 쿡 브릭스와 이저벨 브릭스 마이어스</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">캐서린 쿡 브릭스 (1875-1968)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      캐서린 브릭스는 1920년대부터 인간의 성격 차이에 대해 연구하기 시작했습니다. 
                      딸 이저벨의 약혼자를 만나면서 그가 가족과 완전히 다른 사고방식을 가지고 있다는 점에 흥미를 느꼈고, 
                      이것이 성격 유형 연구의 출발점이 되었습니다.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• 초기 성격 분류 체계 개발</li>
                      <li>• 융의 이론 발견 및 연구</li>
                      <li>• 관찰 중심의 실증적 접근</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-800 mb-3">이저벨 브릭스 마이어스 (1897-1980)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      이저벨 마이어스는 어머니의 연구를 계승하여 MBTI를 실제 측정도구로 발전시켰습니다. 
                      제2차 대전 중 여성들이 적성에 맞는 직업을 찾을 수 있도록 돕기 위해 실용적인 도구 개발에 집중했습니다.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• MBTI 설문지 개발</li>
                      <li>• 통계적 검증 수행</li>
                      <li>• 실용적 응용 개발</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">MBTI 개발 과정</h3>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">1단계: 이론적 기반 구축 (1940년대)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      융의 심리유형론을 기반으로 하되, 실제 측정 가능한 형태로 구체화했습니다. 
                      특히 융이 명시적으로 다루지 않았던 J-P 차원을 추가하여 4가지 선호 지표로 확장했습니다.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">2단계: 문항 개발 및 검증 (1950-1960년대)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      수천 명의 피험자를 대상으로 문항을 개발하고 통계적 검증을 수행했습니다. 
                      신뢰도와 타당도를 높이기 위해 지속적으로 문항을 수정하고 보완했습니다.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-purple-800 mb-3">3단계: 상업화 및 확산 (1970년대 이후)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      CPP(Consulting Psychologists Press)를 통해 공식 출간되었고, 
                      기업, 교육기관, 상담 분야에서 광범위하게 활용되기 시작했습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">J-P 차원의 추가</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  MBTI의 독창적 기여 중 하나는 J-P(Judging-Perceiving) 차원의 추가입니다. 
                  이는 융의 원래 이론에서 명시적으로 다뤄지지 않았지만, 
                  마이어스가 관찰을 통해 발견한 중요한 개인차 요소입니다.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-yellow-800 mb-3">판단형(Judging)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      외부 세계에 대해 판단 기능(사고 또는 감정)을 사용하는 것을 선호합니다. 
                      구조화되고 계획적인 접근을 좋아하며, 결정을 내리고 마무리하는 것을 선호합니다.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• 계획성과 조직화</li>
                      <li>• 확정성 선호</li>
                      <li>• 목표 지향적</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-orange-800 mb-3">인식형(Perceiving)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      외부 세계에 대해 인식 기능(감각 또는 직관)을 사용하는 것을 선호합니다. 
                      유연하고 적응적인 접근을 좋아하며, 가능성을 열어두는 것을 선호합니다.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• 유연성과 적응성</li>
                      <li>• 개방성 선호</li>
                      <li>• 과정 지향적</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 테스트 시작 버튼 */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">MBTI 성격유형 검사 체험하기</h3>
              <p className="text-purple-600 mb-6">
                과학적으로 검증된 이론을 바탕으로 한 신뢰성 높은 MBTI 검사를 통해 
                자신의 성격유형을 정확히 파악해보세요
              </p>
              <button
                onClick={() => setLocation('/test/career')}
                className="bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 transition-colors shadow-lg text-lg"
              >
                🧠 MBTI 테스트 시작하기
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}