import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '모두의 테스트 | 과학적 심리테스트 플랫폼',
  description: '과학적으로 검증된 심리테스트로 나를 더 깊이 이해해보세요. MBTI, 창의력 진단, 집중력 테스트 등 다양한 심리 진단 도구를 무료로 제공합니다.',
  keywords: ['심리테스트', 'MBTI', '성격테스트', '창의력진단', '집중력테스트', '무료심리테스트'],
  openGraph: {
    title: '모두의 테스트 | 과학적 심리테스트 플랫폼',
    description: '과학적으로 검증된 심리테스트로 나를 더 깊이 이해해보세요.',
    url: 'https://www.testevery.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '모두의 테스트 | 과학적 심리테스트 플랫폼',
    description: '과학적으로 검증된 심리테스트로 나를 더 깊이 이해해보세요.',
  },
  alternates: {
    canonical: 'https://www.testevery.com',
  },
}

const tests = [
  {
    id: 'mbti',
    title: 'MBTI 성격유형 테스트',
    description: '16가지 성격 유형으로 나누어 보는 성격 검사',
    icon: '🧠',
    category: '성격 분석',
    time: '10분',
  },
  {
    id: 'concentration',
    title: '집중력 테스트',
    description: '주의력과 집중력을 과학적으로 측정하는 테스트',
    icon: '🎯',
    category: '인지 능력',
    time: '5분',
  },
  {
    id: 'creativity',
    title: '창의력 진단 테스트',
    description: '창의적 사고력과 혁신적 아이디어 생성 능력 측정',
    icon: '💡',
    category: '창의성',
    time: '15분',
  },
  {
    id: 'emotional_tank',
    title: '감정탱크 진단기',
    description: '현재 감정 상태와 스트레스 수준 파악',
    icon: '❤️',
    category: '감정 분석',
    time: '8분',
  },
  {
    id: 'egen_teto',
    title: '에겐-테토 성격 테스트',
    description: '4가지 성격 유형으로 보는 개인 특성 분석',
    icon: '🌟',
    category: '성격 분석',
    time: '12분',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            모두의 테스트
            <span className="block text-3xl font-medium text-blue-600 mt-2">
              과학적 심리테스트 플랫폼
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            과학적으로 검증된 심리테스트로 나를 더 깊이 이해해보세요. 
            전문적인 심리학 이론을 바탕으로 한 다양한 진단 도구를 무료로 제공합니다.
          </p>
        </div>

        {/* Test Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tests.map((test) => (
            <Link
              key={test.id}
              href={`/test/${test.id}`}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{test.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {test.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {test.description}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {test.category}
                  </span>
                  <span className="text-gray-500">⏱️ {test.time}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <section className="bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            왜 모두의 테스트인가요?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-3">과학적 검증</h3>
              <p className="text-gray-600">
                심리학 연구를 바탕으로 한 검증된 측정 도구만을 사용합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">정확한 분석</h3>
              <p className="text-gray-600">
                개인의 특성을 정확히 파악할 수 있는 맞춤형 분석을 제공합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">💝</div>
              <h3 className="text-xl font-semibold mb-3">완전 무료</h3>
              <p className="text-gray-600">
                모든 테스트와 결과 분석을 무료로 이용하실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            지금 바로 나를 알아가는 여정을 시작해보세요
          </h2>
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            심리학 콘텐츠 둘러보기
          </Link>
        </section>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "모두의 테스트",
            "description": "과학적으로 검증된 심리테스트 플랫폼",
            "url": "https://www.testevery.com",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "KRW"
            },
            "creator": {
              "@type": "Organization",
              "name": "모두의 테스트"
            }
          })
        }}
      />
    </main>
  )
}