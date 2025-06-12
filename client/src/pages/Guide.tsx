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
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">점수 해석과 심리학적 의미</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">우수 (상위 10%)</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        평균보다 높은 수준의 능력으로, 주의 집중력과 정신 운동 협응이 뛰어납니다. 
                        빠른 정보 처리와 정확한 반응을 요구하는 업무에 적합할 수 있습니다.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">보통 (중간 60%)</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        일반적인 수준의 능력으로, 대부분의 일상 활동과 업무에 충분한 수행 능력을 보입니다. 
                        지속적인 연습을 통해 향상시킬 수 있는 영역입니다.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">개선 필요 (하위 30%)</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        현재 수준에서 개선의 여지가 있습니다. 충분한 휴식, 규칙적인 운동, 
                        집중력 훈련을 통해 능력을 향상시킬 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">능력 향상 방법</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">반응속도 개선</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 충분한 수면과 휴식</li>
                        <li>• 규칙적인 유산소 운동</li>
                        <li>• 카페인 섭취량 조절</li>
                        <li>• 집중력 향상 게임</li>
                      </ul>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-medium text-pink-800 mb-2">지구력 향상</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 점진적 운동량 증가</li>
                        <li>• 손목과 팔 스트레칭</li>
                        <li>• 균형잡힌 영양 섭취</li>
                        <li>• 정신적 집중력 훈련</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animal Test Guide */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                🐾 동물 성격 테스트
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">동물 상징의 심리학적 의미</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    동물 성격 테스트는 칼 융의 원형(Archetype) 이론을 바탕으로 합니다. 
                    각 동물은 인간의 무의식 속에 내재된 특정한 심리적 특성과 욕구를 상징합니다.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">사자형 - 리더십</h4>
                      <p className="text-gray-600 text-sm">권위, 카리스마, 보호본능을 나타내며 리더십 역할을 선호합니다.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">늑대형 - 협력</h4>
                      <p className="text-gray-600 text-sm">팀워크, 충성심, 가족애를 중시하며 협력적 관계를 추구합니다.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">독수리형 - 통찰</h4>
                      <p className="text-gray-600 text-sm">높은 이상, 넓은 시야, 자유로운 정신을 상징합니다.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">고양이형 - 독립</h4>
                      <p className="text-gray-600 text-sm">독립성, 직감력, 신비로운 매력을 나타냅니다.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">결과 활용 시 주의사항</h3>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-amber-800 text-sm leading-relaxed">
                      동물 성격 테스트는 자기 이해와 재미를 위한 도구입니다. 
                      실제 동물의 행동과 인간의 성격을 직접적으로 연결하는 것은 과학적 근거가 부족하므로, 
                      결과를 절대적 기준으로 받아들이지 마시고 참고용으로만 활용하세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Burnout Risk Guide */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                🔥 번아웃 위험도 테스트
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">번아웃 단계별 특징</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-medium text-green-800 mb-2">안전 구간 (0-2점)</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        현재 스트레스 수준이 관리 가능한 범위에 있습니다. 
                        예방적 차원에서 규칙적인 휴식과 취미 활동을 유지하세요.
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-medium text-yellow-800 mb-2">주의 구간 (3-5점)</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        경미한 스트레스 증상이 나타나기 시작했습니다. 
                        업무량 조절과 충분한 수면, 규칙적인 운동을 통해 관리가 필요합니다.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <h4 className="font-medium text-orange-800 mb-2">위험 구간 (6-8점)</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        번아웃 증상이 명확하게 나타나고 있습니다. 
                        즉시 스트레스 요인을 파악하고 적극적인 대처 방안을 마련해야 합니다.
                      </p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <h4 className="font-medium text-red-800 mb-2">심각 구간 (9-10점)</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        심각한 번아웃 상태입니다. 전문가 상담을 받고 
                        근본적인 환경 변화나 치료적 개입이 필요할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">단계별 대처 방법</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">예방적 관리</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 일과 삶의 균형 유지</li>
                        <li>• 정기적인 휴식과 여가</li>
                        <li>• 사회적 지지체계 구축</li>
                        <li>• 현실적 목표 설정</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">적극적 개입</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 전문가 상담 받기</li>
                        <li>• 업무 환경 개선</li>
                        <li>• 스트레스 관리 기법 학습</li>
                        <li>• 의료적 지원 고려</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* General Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                📋 테스트 결과 활용을 위한 일반 지침
              </h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">올바른 활용법</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>자기 이해와 성찰의 도구로 활용</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>개인 성장의 방향 설정에 참고</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>타인과의 소통 개선에 활용</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>전문가 상담 시 참고 자료 제공</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">주의사항</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>절대적 기준으로 받아들이기</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>타인을 판단하거나 차별하는 근거</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>중요한 인생 결정의 유일한 근거</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>의학적 진단의 대체 수단</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">전문가 상담이 필요한 경우</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    테스트 결과가 일상생활에 부정적 영향을 미치거나, 
                    지속적인 스트레스나 심리적 어려움을 경험하는 경우 전문가의 도움을 받으세요.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🏥</div>
                      <h4 className="font-medium text-gray-800 mb-1">임상심리사</h4>
                      <p className="text-gray-600 text-sm">종합적 심리평가</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">💼</div>
                      <h4 className="font-medium text-gray-800 mb-1">상담심리사</h4>
                      <p className="text-gray-600 text-sm">개인 상담 및 코칭</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <h4 className="font-medium text-gray-800 mb-1">진로상담사</h4>
                      <p className="text-gray-600 text-sm">직업 적성 분석</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}