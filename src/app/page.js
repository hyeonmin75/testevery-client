import Link from 'next/link';

export const metadata = {
  title: 'TestEvery - 모든 심리테스트의 시작',
  description: '과학적 기반의 심리테스트와 성격 분석을 제공하는 전문 플랫폼입니다. MBTI, 빅5, 에니어그램 등 다양한 테스트를 무료로 이용하세요.',
  keywords: ['심리테스트', '성격검사', 'MBTI', '빅5', '에니어그램', '창의력검사', '감정지능', '무료테스트'],
  authors: [{ name: 'TestEvery' }],
  creator: 'TestEvery',
  publisher: 'TestEvery',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.testevery.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TestEvery - 모든 심리테스트의 시작',
    description: '과학적 기반의 심리테스트와 성격 분석을 제공하는 전문 플랫폼입니다.',
    url: 'https://www.testevery.com',
    siteName: 'TestEvery',
    images: [
      {
        url: '/images/testevery-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TestEvery - 심리테스트 플랫폼',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TestEvery - 모든 심리테스트의 시작',
    description: '과학적 기반의 심리테스트와 성격 분석을 제공하는 전문 플랫폼입니다.',
    images: ['/images/testevery-og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
  },
};

export default function HomePage() {
  const featuredTests = [
    {
      slug: 'mbti-personality-test',
      title: 'MBTI 성격 유형 검사',
      description: '16가지 성격 유형으로 나누어 분석하는 가장 유명한 성격 검사',
      participants: '25,000+',
      icon: '🧠',
      category: '성격분석',
      duration: '10-15분',
      difficulty: '쉬움',
      featured: true,
    },
    {
      slug: 'big5-personality-test',
      title: '빅5 성격 검사',
      description: '과학적으로 검증된 5가지 성격 차원으로 정확하게 분석',
      participants: '18,000+',
      icon: '📊',
      category: '성격분석',
      duration: '15-20분',
      difficulty: '보통',
      featured: true,
    },
    {
      slug: 'enneagram-personality-test',
      title: '에니어그램 성격 검사',
      description: '9가지 성격 유형으로 내적 동기와 행동 패턴을 분석',
      participants: '12,000+',
      icon: '🎯',
      category: '성격분석',
      duration: '12-18분',
      difficulty: '보통',
      featured: true,
    },
    {
      slug: 'creativity-assessment-test',
      title: '창의력 진단 테스트',
      description: '다양한 관점에서 창의적 사고 능력을 측정하고 분석',
      participants: '9,000+',
      icon: '💡',
      category: '능력검사',
      duration: '20-25분',
      difficulty: '어려움',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              모든 심리테스트의 시작
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              과학적 기반의 심리테스트와 성격 분석을 제공하는 전문 플랫폼입니다.
              <br />
              MBTI, 빅5, 에니어그램 등 다양한 테스트를 무료로 이용하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/tests/"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg"
              >
                테스트 시작하기
              </Link>
              <Link
                href="/about/"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 text-lg border-2 border-blue-500"
              >
                더 알아보기
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                <span>과학적 검증</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🆓</span>
                <span>완전 무료</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🔒</span>
                <span>개인정보 보호</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                <span>빠른 결과</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">누적 사용자</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">전문 테스트</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">만족도</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">언제든 이용 가능</div>
            </div>
          </div>
        </div>
      </section>

      {/* 인기 테스트 섹션 */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              인기 테스트
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              가장 많은 사람들이 선택한 검증된 심리테스트들을 만나보세요
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTests.slice(0, 3).map((test) => (
              <Link
                key={test.slug}
                href={`/test/${test.slug}/`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 relative p-8">
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    ⭐ 인기
                  </div>
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{test.icon}</div>
                      <div className="text-gray-600 font-medium">{test.category}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {test.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {test.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <span>⏱️ {test.duration}</span>
                      <span>👥 {test.participants}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      test.difficulty === '쉬움' ? 'bg-green-100 text-green-700' :
                      test.difficulty === '보통' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {test.difficulty}
                    </span>
                  </div>
                  <div className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                    지금 시작하기 →
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/tests/"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              모든 테스트 보기
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              왜 TestEvery를 선택해야 할까요?
            </h2>
            <p className="text-xl text-gray-600">
              과학적 검증과 사용자 경험을 모두 고려한 최고의 심리테스트 플랫폼
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                과학적 검증
              </h3>
              <p className="text-gray-600">
                모든 테스트는 심리학적 연구와 통계적 검증을 거친 신뢰할 수 있는 도구입니다.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <span className="text-3xl">🆓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                완전 무료
              </h3>
              <p className="text-gray-600">
                모든 테스트는 무료로 제공되며, 숨겨진 비용이나 제한이 없습니다.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                사용자 친화적
              </h3>
              <p className="text-gray-600">
                직관적이고 아름다운 인터페이스로 테스트 과정을 즐겁게 만듭니다.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                개인정보 보호
              </h3>
              <p className="text-gray-600">
                개인정보와 테스트 결과를 안전하게 보호하며, 불필요한 정보는 수집하지 않습니다.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                빠른 결과
              </h3>
              <p className="text-gray-600">
                테스트 완료 즉시 상세한 분석 결과와 개인화된 가이드를 제공합니다.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                모바일 최적화
              </h3>
              <p className="text-gray-600">
                언제 어디서든 모바일 기기에서도 편리하게 테스트를 진행할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            지금 시작해보세요!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            자신을 더 깊이 이해하고 성장할 수 있는 첫 걸음을 내딛어보세요.
            <br />
            과학적으로 검증된 테스트가 당신을 기다리고 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tests/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              테스트 시작하기
            </Link>
            <Link
              href="/contact/"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 text-lg border-2 border-blue-500"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}