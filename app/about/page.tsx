import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '모두의 테스트 소개 | 과학적 심리테스트 플랫폼',
  description: '과학적으로 검증된 심리테스트를 제공하는 모두의 테스트에 대해 자세히 알아보세요. 우리의 미션과 비전을 소개합니다.',
  keywords: ['모두의테스트', '심리테스트플랫폼', '과학적검증', '심리학연구'],
  openGraph: {
    title: '모두의 테스트 소개',
    description: '과학적으로 검증된 심리테스트를 제공하는 플랫폼',
    url: 'https://www.testevery.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.testevery.com/about',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            홈
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">소개</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            모두의 테스트
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            과학적으로 검증된 심리테스트로 자신을 더 깊이 이해하는 여정을 시작하세요
          </p>
        </div>

        {/* Mission Section */}
        <section className="bg-white rounded-2xl p-12 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            우리의 미션
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">정확한 진단</h3>
              <p className="text-gray-600">
                과학적으로 검증된 측정 도구를 사용하여 개인의 심리적 특성을 정확히 파악합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3">개인 성장</h3>
              <p className="text-gray-600">
                자신에 대한 깊은 이해를 통해 개인의 성장과 발전을 지원합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">접근성</h3>
              <p className="text-gray-600">
                누구나 쉽게 이용할 수 있는 무료 심리테스트 플랫폼을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white rounded-2xl p-12 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            특별한 점
          </h2>
          <div className="space-y-8">
            <div className="flex md:flex-row flex-col items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  과학적 검증
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  모든 테스트는 심리학 연구를 바탕으로 개발되었으며, 신뢰도와 타당도가 검증된 도구만을 사용합니다. 
                  학술적 근거를 바탕으로 한 정확한 결과를 제공합니다.
                </p>
              </div>
              <div className="md:w-1/2 text-center">
                <div className="bg-blue-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                  <span className="text-4xl">🔬</span>
                </div>
              </div>
            </div>

            <div className="flex md:flex-row-reverse flex-col items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  다양한 테스트
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  성격 분석부터 인지 능력, 창의력, 감정 상태까지 다양한 영역의 심리테스트를 제공합니다. 
                  각자의 관심사와 필요에 맞는 테스트를 찾을 수 있습니다.
                </p>
              </div>
              <div className="md:w-1/2 text-center">
                <div className="bg-green-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                  <span className="text-4xl">🧩</span>
                </div>
              </div>
            </div>

            <div className="flex md:flex-row flex-col items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  교육적 콘텐츠
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  단순한 테스트 결과를 넘어서 심리학에 대한 깊이 있는 지식을 제공합니다. 
                  전문가가 작성한 블로그 콘텐츠를 통해 심리학을 쉽게 이해할 수 있습니다.
                </p>
              </div>
              <div className="md:w-1/2 text-center">
                <div className="bg-purple-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                  <span className="text-4xl">📚</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white rounded-2xl p-12 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            핵심 가치
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">신뢰성</h3>
                <p className="text-gray-600">
                  과학적 근거를 바탕으로 한 신뢰할 수 있는 정보만을 제공합니다.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">개인정보 보호</h3>
                <p className="text-gray-600">
                  사용자의 개인정보와 테스트 결과를 엄격히 보호합니다.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">무료 접근</h3>
                <p className="text-gray-600">
                  누구나 차별 없이 이용할 수 있는 무료 서비스를 지향합니다.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">지속적 개선</h3>
                <p className="text-gray-600">
                  사용자 피드백을 바탕으로 서비스를 지속적으로 개선합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            지금 바로 시작해보세요
          </h2>
          <p className="text-xl mb-8 opacity-90">
            나를 더 깊이 이해하는 여정을 시작해보세요
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              심리테스트 하기
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              블로그 둘러보기
            </Link>
          </div>
        </section>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "모두의 테스트 소개",
            "description": "과학적으로 검증된 심리테스트를 제공하는 플랫폼",
            "url": "https://www.testevery.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "모두의 테스트",
              "url": "https://www.testevery.com",
              "description": "과학적으로 검증된 심리테스트 플랫폼",
              "foundingDate": "2024",
              "knowsAbout": [
                "심리학",
                "성격 테스트",
                "인지 능력 측정",
                "심리 진단"
              ],
              "serviceType": "Educational Platform",
              "areaServed": "KR"
            }
          })
        }}
      />
    </main>
  )
}