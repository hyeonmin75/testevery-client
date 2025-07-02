import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function CognitivePsychology() {
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
              onClick={() => setLocation('/psychology/education')}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors mb-6"
            >
              ← 교육센터로 돌아가기
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              인지 심리학의 이해
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              인간의 기억, 주의, 학습, 사고 과정을 과학적으로 탐구하고 일상 적용법을 배웁니다
            </p>
          </div>

          {/* 개요 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">인지 심리학이란?</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                인지 심리학(Cognitive Psychology)은 인간의 정신적 과정을 연구하는 심리학의 한 분야입니다. 
                1950년대 '인지 혁명'을 통해 등장한 이 분야는 인간의 마음을 정보 처리 시스템으로 접근하여 
                기억, 주의, 지각, 학습, 사고, 언어 등의 정신적 과정을 과학적으로 분석합니다.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">정보 처리 관점</h3>
                  <p className="text-blue-700 text-sm">
                    인간의 마음을 컴퓨터와 유사한 정보 처리 시스템으로 보고, 
                    입력-처리-출력의 과정을 통해 인지 과정을 설명합니다.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">실험적 방법론</h3>
                  <p className="text-green-700 text-sm">
                    통제된 실험을 통해 인지 과정을 객관적으로 측정하고 
                    분석하여 과학적 근거를 제시합니다.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">실용적 응용</h3>
                  <p className="text-purple-700 text-sm">
                    교육, 치료, 인간-컴퓨터 상호작용, 광고 등 
                    다양한 분야에서 실용적으로 활용됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 주요 연구 영역 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">주요 연구 영역</h2>
            
            <div className="space-y-8">
              {/* 기억 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">🧠 기억 (Memory)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">기억의 구조</h4>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-800 mb-1">감각 기억 (Sensory Memory)</h5>
                        <p className="text-gray-600 text-sm">
                          감각 기관을 통해 들어온 정보를 매우 짧은 시간(0.5-3초) 동안 저장하는 기억 저장소입니다.
                          시각적 정보는 도상 기억(iconic memory), 청각적 정보는 반향 기억(echoic memory)으로 처리됩니다.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-800 mb-1">단기 기억 (Short-term Memory)</h5>
                        <p className="text-gray-600 text-sm">
                          제한된 용량(7±2개 항목)으로 15-30초간 정보를 유지합니다. 
                          작업 기억(working memory)의 개념이 도입되면서 단순 저장뿐만 아니라 
                          정보 처리와 조작의 기능도 포함하게 되었습니다.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-800 mb-1">장기 기억 (Long-term Memory)</h5>
                        <p className="text-gray-600 text-sm">
                          무제한 용량으로 영구적 저장이 가능합니다. 
                          선언적 기억(사실과 사건)과 절차적 기억(기술과 습관)으로 구분되며, 
                          각각 다른 뇌 영역에서 처리됩니다.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">기억 과정</h4>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium text-blue-800 mb-1">부호화 (Encoding)</h5>
                        <p className="text-blue-700 text-sm">
                          정보를 기억 시스템에 입력하는 과정입니다. 
                          시각적, 청각적, 의미적 부호화 방식이 있으며, 
                          정교화와 조직화를 통해 효과성을 높일 수 있습니다.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-medium text-green-800 mb-1">저장 (Storage)</h5>
                        <p className="text-green-700 text-sm">
                          부호화된 정보를 기억 시스템에 보관하는 과정입니다. 
                          신경 연결의 강화와 단백질 합성을 통해 
                          기억 흔적(memory trace)이 형성됩니다.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-medium text-purple-800 mb-1">인출 (Retrieval)</h5>
                        <p className="text-purple-700 text-sm">
                          저장된 정보를 필요시 꺼내어 사용하는 과정입니다. 
                          재인(recognition)과 회상(recall)으로 구분되며, 
                          단서와 맥락이 인출 성공에 중요한 역할을 합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-3">기억 향상 전략</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-yellow-700 text-sm space-y-2">
                      <li>• <strong>정교화:</strong> 새 정보를 기존 지식과 연결</li>
                      <li>• <strong>조직화:</strong> 정보를 의미있는 구조로 배열</li>
                      <li>• <strong>이미지화:</strong> 시각적 이미지로 변환</li>
                    </ul>
                    <ul className="text-yellow-700 text-sm space-y-2">
                      <li>• <strong>분산 학습:</strong> 시간을 두고 반복 학습</li>
                      <li>• <strong>검색 연습:</strong> 능동적 회상 연습</li>
                      <li>• <strong>맥락 다양화:</strong> 다양한 환경에서 학습</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 주의 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">🎯 주의 (Attention)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">주의의 특성</h4>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-800 mb-1">선택적 주의</h5>
                        <p className="text-gray-600 text-sm">
                          수많은 자극 중에서 특정 자극에만 집중하는 능력입니다. 
                          칵테일 파티 효과처럼 소음 속에서도 원하는 소리에 집중할 수 있습니다.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-800 mb-1">분할 주의</h5>
                        <p className="text-gray-600 text-sm">
                          동시에 여러 과제에 주의를 배분하는 능력입니다. 
                          하지만 인간의 주의 자원은 제한적이므로 과제 수행 효율이 저하될 수 있습니다.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-800 mb-1">지속 주의</h5>
                        <p className="text-gray-600 text-sm">
                          장시간 동안 집중력을 유지하는 능력입니다. 
                          시간이 지날수록 각성 수준이 감소하여 수행이 저하되는 경향을 보입니다.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">주의 이론</h4>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium text-blue-800 mb-1">여과기 이론</h5>
                        <p className="text-blue-700 text-sm">
                          브로드벤트가 제안한 이론으로, 감각 정보가 여과기를 통해 선택적으로 처리된다고 봅니다. 
                          물리적 특성에 따라 초기 선택이 이루어집니다.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-medium text-green-800 mb-1">감쇠 이론</h5>
                        <p className="text-green-700 text-sm">
                          트레이스먼이 제안한 이론으로, 선택되지 않은 정보도 완전히 차단되지 않고 
                          약화된 형태로 처리된다고 봅니다.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-medium text-purple-800 mb-1">자원 배분 이론</h5>
                        <p className="text-purple-700 text-sm">
                          카네만이 제안한 이론으로, 주의를 제한된 자원으로 보고 
                          과제의 난이도와 중요도에 따라 자원을 배분한다고 봅니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 학습 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">📚 학습 (Learning)</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-3">고전적 조건형성</h4>
                    <p className="text-red-700 text-sm mb-3">
                      파블로프가 발견한 학습 원리로, 중성 자극이 무조건 자극과 반복적으로 짝지어져 
                      조건 자극이 되는 과정입니다.
                    </p>
                    <ul className="text-red-600 text-xs space-y-1">
                      <li>• 무조건 자극 → 무조건 반응</li>
                      <li>• 조건 자극 + 무조건 자극 반복</li>
                      <li>• 조건 자극 → 조건 반응</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-3">조작적 조건형성</h4>
                    <p className="text-orange-700 text-sm mb-3">
                      스키너가 발전시킨 학습 이론으로, 행동의 결과에 따른 강화나 처벌을 통해 
                      행동 빈도가 변화하는 과정입니다.
                    </p>
                    <ul className="text-orange-600 text-xs space-y-1">
                      <li>• 정적 강화: 좋은 결과 제시</li>
                      <li>• 부적 강화: 나쁜 자극 제거</li>
                      <li>• 처벌: 불쾌한 결과 제시</li>
                    </ul>
                  </div>
                  
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-teal-800 mb-3">사회인지 학습</h4>
                    <p className="text-teal-700 text-sm mb-3">
                      반두라가 제안한 이론으로, 타인의 행동을 관찰하고 모방함으로써 
                      새로운 행동을 학습하는 과정입니다.
                    </p>
                    <ul className="text-teal-600 text-xs space-y-1">
                      <li>• 주의: 모델의 행동에 집중</li>
                      <li>• 보유: 관찰한 행동을 기억</li>
                      <li>• 재생: 행동을 실제로 수행</li>
                      <li>• 동기: 행동 수행의 의지</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 현대 연구 동향 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">현대 연구 동향</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">신경인지과학</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  fMRI, EEG, PET 등의 뇌 영상 기술을 활용하여 인지 과정의 신경학적 기반을 연구합니다. 
                  이를 통해 기억, 주의, 언어 등의 인지 기능이 뇌의 어느 부위에서 어떻게 처리되는지 
                  실시간으로 관찰할 수 있게 되었습니다.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">주요 발견</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• 해마의 기억 형성 역할 규명</li>
                    <li>• 전전두엽의 작업기억 기능 확인</li>
                    <li>• 편도체의 감정과 기억 연결 메커니즘</li>
                    <li>• 기본 모드 네트워크의 발견</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">인공지능과의 융합</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  딥러닝과 인지과학의 융합을 통해 인간의 인지 과정을 모델링하고, 
                  역으로 AI 시스템의 성능을 향상시키는 연구가 활발히 진행되고 있습니다. 
                  특히 주의 메커니즘과 기억 시스템의 모델링에서 큰 진전을 보이고 있습니다.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">응용 분야</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• 자연어 처리에서의 주의 메커니즘</li>
                    <li>• 컴퓨터 비전의 시각적 주의 모델</li>
                    <li>• 추천 시스템의 기억 네트워크</li>
                    <li>• 인간-컴퓨터 상호작용 개선</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 실생활 적용 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">실생활 적용법</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">📖 효과적인 학습법</h3>
                <ul className="text-purple-700 text-sm space-y-2">
                  <li>• <strong>간격 반복:</strong> 시간을 두고 복습</li>
                  <li>• <strong>교대 학습:</strong> 다른 주제를 번갈아 학습</li>
                  <li>• <strong>자기 설명:</strong> 학습 내용을 스스로 설명</li>
                  <li>• <strong>연상 기법:</strong> 이미지와 이야기 활용</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">🎯 집중력 향상</h3>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>• <strong>포모도로 기법:</strong> 25분 집중 + 5분 휴식</li>
                  <li>• <strong>환경 정리:</strong> 방해 요소 제거</li>
                  <li>• <strong>단일 과제:</strong> 멀티태스킹 피하기</li>
                  <li>• <strong>마음챙김:</strong> 현재 순간에 집중</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">🧠 기억력 증진</h3>
                <ul className="text-green-700 text-sm space-y-2">
                  <li>• <strong>충분한 수면:</strong> 기억 공고화에 필수</li>
                  <li>• <strong>규칙적인 운동:</strong> 뇌 혈류 개선</li>
                  <li>• <strong>스트레스 관리:</strong> 코르티솔 수치 조절</li>
                  <li>• <strong>사회적 상호작용:</strong> 인지 자극 제공</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 추천 자료 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">추천 학습 자료</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">📚 도서</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800">인지심리학 (로버트 J. 스턴버그)</h4>
                    <p className="text-gray-600 text-sm">인지심리학의 기초부터 최신 연구까지 포괄적으로 다룬 교과서</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800">생각에 관한 생각 (대니얼 카너먼)</h4>
                    <p className="text-gray-600 text-sm">노벨경제학상 수상자가 들려주는 인간 사고의 비합리성</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800">기억의 일곱 가지 죄악 (대니얼 샥터)</h4>
                    <p className="text-gray-600 text-sm">기억의 오류와 왜곡에 대한 흥미로운 사례와 설명</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">🎓 온라인 강의</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800">MIT 인지과학 입문</h4>
                    <p className="text-gray-600 text-sm">MIT에서 제공하는 무료 온라인 강의 시리즈</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800">스탠포드 기억과 학습</h4>
                    <p className="text-gray-600 text-sm">기억과 학습의 과학적 원리를 다룬 강의</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800">하버드 주의와 의식</h4>
                    <p className="text-gray-600 text-sm">주의 메커니즘과 의식의 신경과학적 기반</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 관련 테스트 */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">인지 능력 테스트 체험하기</h3>
              <p className="text-blue-600 mb-6">
                인지 심리학 이론을 바탕으로 한 다양한 테스트를 통해 
                자신의 인지 특성을 파악해보세요
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setLocation('/test/concentration')}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
                >
                  🎯 집중력 테스트
                </button>
                <button
                  onClick={() => setLocation('/test/career')}
                  className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors shadow-lg"
                >
                  🧠 인지 스타일 테스트
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}