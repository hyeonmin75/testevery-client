import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '심리학 블로그 | 모두의 테스트',
  description: '심리학 전문가들이 작성한 양질의 콘텐츠로 심리학의 다양한 분야를 깊이 있게 탐구해보세요.',
  keywords: ['심리학블로그', '심리학콘텐츠', '집중력', '창의력', '성격심리학', '인지심리학'],
  openGraph: {
    title: '심리학 블로그 | 모두의 테스트',
    description: '심리학 전문가들이 작성한 양질의 콘텐츠',
    url: 'https://www.testevery.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.testevery.com/blog',
  },
}

const blogPosts = [
  {
    id: 'psychology-research-methods',
    title: '심리학 연구 방법론: 과학적 접근법과 측정 도구의 이해',
    excerpt: '심리학 연구의 과학적 방법론과 신뢰할 수 있는 측정 도구 개발 과정을 상세히 분석합니다.',
    date: '2024-12-07',
    category: '연구 방법론',
    readTime: '12분',
    tags: ['연구방법론', '심리측정', '실험설계', '통계분석'],
  },
  {
    id: 'concentration-focus-psychology',
    title: '집중력과 주의력의 심리학: 디지털 시대의 인지적 도전과 해결책',
    excerpt: '현대 디지털 환경에서 집중력의 중요성과 주의력 향상을 위한 과학적 방법들을 제시합니다.',
    date: '2024-11-20',
    category: '인지 심리학',
    readTime: '15분',
    tags: ['집중력', '주의력', '디지털디톡스', '인지훈련'],
  },
  {
    id: 'intuition-psychology-decision',
    title: '직감의 심리학: 무의식적 의사결정과 직관적 판단의 과학',
    excerpt: '직감과 직관의 심리학적 메커니즘을 탐구하고, 효과적인 의사결정 방법을 제안합니다.',
    date: '2024-12-01',
    category: '의사결정 심리학',
    readTime: '10분',
    tags: ['직감', '의사결정', '직관', '무의식'],
  },
  {
    id: 'attention-psychology-mechanism',
    title: '주의 메커니즘의 신경과학적 이해: 뇌가 정보를 선택하는 방법',
    excerpt: '주의력의 신경과학적 기전과 뇌에서 정보 처리가 이루어지는 과정을 상세히 설명합니다.',
    date: '2024-11-15',
    category: '신경 심리학',
    readTime: '18분',
    tags: ['신경과학', '주의메커니즘', '뇌과학', '정보처리'],
  },
  {
    id: 'memory-psychology-cognitive',
    title: '기억의 심리학: 인지적 과정과 기억 향상 전략',
    excerpt: '기억의 형성, 저장, 인출 과정을 탐구하고 효과적인 기억 향상 방법을 제시합니다.',
    date: '2024-11-10',
    category: '인지 심리학',
    readTime: '14분',
    tags: ['기억심리학', '학습전략', '인지과정', '기억향상'],
  },
  {
    id: 'personality-psychology-development',
    title: '성격 심리학의 발전: 특성론부터 현대 이론까지',
    excerpt: '성격 심리학의 역사적 발전 과정과 현대의 주요 성격 이론들을 체계적으로 정리합니다.',
    date: '2024-10-25',
    category: '성격 심리학',
    readTime: '16분',
    tags: ['성격심리학', '특성론', '성격이론', '개인차'],
  },
  {
    id: 'emotion-psychology-regulation',
    title: '감정 조절의 심리학: 건강한 감정 관리 전략',
    excerpt: '감정의 기능과 조절 메커니즘을 이해하고, 효과적인 감정 관리 방법을 제안합니다.',
    date: '2024-10-20',
    category: '감정 심리학',
    readTime: '13분',
    tags: ['감정조절', '감정관리', '정서지능', '스트레스관리'],
  },
  {
    id: 'social-psychology-interaction',
    title: '사회 심리학: 인간관계와 집단 역학의 이해',
    excerpt: '사회적 상호작용의 심리학적 원리와 집단 내에서의 행동 패턴을 분석합니다.',
    date: '2024-10-15',
    category: '사회 심리학',
    readTime: '11분',
    tags: ['사회심리학', '인간관계', '집단역학', '사회적영향'],
  },
  {
    id: 'cognitive-psychology-thinking',
    title: '인지 심리학의 사고 과정: 문제 해결과 창의적 사고',
    excerpt: '인간의 사고 과정을 과학적으로 분석하고, 창의적 문제 해결 능력을 향상시키는 방법을 제시합니다.',
    date: '2024-10-10',
    category: '인지 심리학',
    readTime: '17분',
    tags: ['인지심리학', '사고과정', '문제해결', '창의적사고'],
  },
  {
    id: 'developmental-psychology-stages',
    title: '발달 심리학: 생애 전반에 걸친 인간 발달의 이해',
    excerpt: '인간의 전 생애에 걸친 발달 과정과 각 단계별 특성을 체계적으로 정리합니다.',
    date: '2024-10-05',
    category: '발달 심리학',
    readTime: '19분',
    tags: ['발달심리학', '생애발달', '발달단계', '심리발달'],
  },
  {
    id: 'abnormal-psychology-disorders',
    title: '이상 심리학: 정신 건강의 이해와 접근 방법',
    excerpt: '정신 건강과 심리적 장애에 대한 과학적 이해와 예방 및 치료 접근법을 제시합니다.',
    date: '2024-09-30',
    category: '이상 심리학',
    readTime: '20분',
    tags: ['이상심리학', '정신건강', '심리장애', '치료접근'],
  },
  {
    id: 'positive-psychology-wellbeing',
    title: '긍정 심리학: 웰빙과 행복의 과학적 접근',
    excerpt: '행복과 웰빙의 심리학적 요인을 탐구하고, 긍정적 삶을 위한 실천 방안을 제시합니다.',
    date: '2024-09-25',
    category: '긍정 심리학',
    readTime: '12분',
    tags: ['긍정심리학', '웰빙', '행복', '삶의질'],
  },
  {
    id: 'neuropsychology-brain-behavior',
    title: '신경 심리학: 뇌와 행동의 연결고리',
    excerpt: '뇌의 구조와 기능이 인간의 행동과 인지에 미치는 영향을 신경과학적 관점에서 탐구합니다.',
    date: '2024-09-20',
    category: '신경 심리학',
    readTime: '22분',
    tags: ['신경심리학', '뇌과학', '행동신경과학', '인지신경과학'],
  },
  {
    id: 'educational-psychology-learning',
    title: '교육 심리학: 효과적인 학습과 교육의 심리학적 원리',
    excerpt: '학습의 심리학적 메커니즘을 이해하고, 효과적인 교육 방법과 학습 전략을 제시합니다.',
    date: '2024-09-15',
    category: '교육 심리학',
    readTime: '15분',
    tags: ['교육심리학', '학습이론', '교육방법', '학습전략'],
  },
  {
    id: 'health-psychology-lifestyle',
    title: '건강 심리학: 심리적 요인이 신체 건강에 미치는 영향',
    excerpt: '심리적 요인과 신체 건강의 상호작용을 탐구하고, 건강한 라이프스타일을 위한 심리학적 접근법을 제시합니다.',
    date: '2024-09-10',
    category: '건강 심리학',
    readTime: '14분',
    tags: ['건강심리학', '심신건강', '라이프스타일', '예방심리학'],
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            홈
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">블로그</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            심리학 블로그
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            심리학 전문가들이 작성한 양질의 콘텐츠로 심리학의 다양한 분야를 깊이 있게 탐구해보세요.
            최신 연구 결과와 실용적인 인사이트를 제공합니다.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <article>
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{new Date(post.date).toLocaleDateString('ko-KR')}</span>
                  <span>⏱️ {post.readTime}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <section className="text-center mt-16 bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            심리테스트로 나를 더 깊이 알아보세요
          </h2>
          <p className="text-gray-600 mb-8">
            이론적 지식과 함께 실제 테스트를 통해 자신을 이해해보세요.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            심리테스트 하러가기
          </Link>
        </section>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "모두의 테스트 심리학 블로그",
            "description": "심리학 전문가들이 작성한 양질의 콘텐츠",
            "url": "https://www.testevery.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "모두의 테스트",
              "url": "https://www.testevery.com"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://www.testevery.com/blog/${post.id}`,
              "datePublished": post.date,
              "author": {
                "@type": "Organization",
                "name": "모두의 테스트"
              },
              "publisher": {
                "@type": "Organization",
                "name": "모두의 테스트"
              }
            }))
          })
        }}
      />
    </main>
  )
}