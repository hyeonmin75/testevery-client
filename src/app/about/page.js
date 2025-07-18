export const metadata = {
  title: 'TestEvery 소개 | TestEvery',
  description: 'TestEvery는 과학적 기반의 심리테스트와 성격 분석을 제공하는 전문 플랫폼입니다. 정확하고 신뢰할 수 있는 테스트를 무료로 제공합니다.',
  keywords: ['TestEvery', '심리테스트', '플랫폼', '소개', '과학적', '신뢰'],
  openGraph: {
    title: 'TestEvery 소개 | TestEvery',
    description: 'TestEvery는 과학적 기반의 심리테스트와 성격 분석을 제공하는 전문 플랫폼입니다.',
    url: 'https://www.testevery.com/about/',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            TestEvery 소개
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            과학적 기반의 심리테스트와 성격 분석을 제공하는 전문 플랫폼입니다.
            정확하고 신뢰할 수 있는 테스트를 무료로 제공합니다.
          </p>
        </div>
      </section>

      {/* 미션 섹션 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              우리의 미션
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              모든 사람이 자신을 더 깊이 이해하고 성장할 수 있도록 돕는 것
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  정확성
                </h3>
                <p className="text-gray-600">
                  과학적으로 검증된 정확한 심리테스트만을 제공합니다.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🆓</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  접근성
                </h3>
                <p className="text-gray-600">
                  누구나 쉽게 접근할 수 있도록 무료로 제공합니다.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  성장
                </h3>
                <p className="text-gray-600">
                  개인의 성장과 발전을 지원하는 가이드를 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            TestEvery의 특징
          </h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                <span className="text-blue-600 text-xl font-bold">🔬</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  과학적 검증
                </h3>
                <p className="text-gray-600">
                  모든 테스트는 심리학적 연구와 통계적 검증을 거친 신뢰할 수 있는 도구입니다.
                  MBTI, 빅5, 에니어그램 등 세계적으로 인정받는 검사를 제공합니다.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-6">
                <span className="text-green-600 text-xl font-bold">💡</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  전문적 해석
                </h3>
                <p className="text-gray-600">
                  단순한 결과 제시가 아닌 전문적인 해석과 실생활에 적용할 수 있는 
                  구체적인 가이드를 제공합니다.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-6">
                <span className="text-purple-600 text-xl font-bold">🎨</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  사용자 친화적 디자인
                </h3>
                <p className="text-gray-600">
                  직관적이고 아름다운 인터페이스로 테스트 과정을 즐겁게 만듭니다.
                  모바일에서도 편리하게 이용할 수 있습니다.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-6">
                <span className="text-orange-600 text-xl font-bold">🔒</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  개인정보 보호
                </h3>
                <p className="text-gray-600">
                  사용자의 개인정보와 테스트 결과를 안전하게 보호합니다.
                  원하지 않는 데이터 수집은 절대 하지 않습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            TestEvery와 함께한 숫자들
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-xl opacity-90">누적 사용자</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-xl opacity-90">전문 테스트</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-xl opacity-90">만족도</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-xl opacity-90">언제든 이용 가능</div>
            </div>
          </div>
        </div>
      </section>

      {/* 팀 소개 섹션 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              전문가 팀
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600">
                심리학 전문가, 데이터 과학자, UX 디자이너가 함께 만들어가는 TestEvery
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  심리학 전문가
                </h3>
                <p className="text-gray-600 text-sm">
                  임상심리학 박사 및 상담심리사들이 테스트 설계와 결과 해석을 담당합니다.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  데이터 과학자
                </h3>
                <p className="text-gray-600 text-sm">
                  통계학과 머신러닝 전문가들이 테스트의 정확도와 신뢰도를 높입니다.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  UX 디자이너
                </h3>
                <p className="text-gray-600 text-sm">
                  사용자 경험 전문가들이 직관적이고 아름다운 인터페이스를 설계합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            함께 성장해요
          </h2>
          <p className="text-xl mb-8 opacity-90">
            궁금한 점이나 제안사항이 있으시면 언제든 연락주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              문의하기
            </a>
            <a
              href="/tests/"
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              테스트 시작하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}