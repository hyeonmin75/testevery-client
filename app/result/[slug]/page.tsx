import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Test results data
const testResults = {
  'mbti': {
    id: 'mbti',
    title: 'MBTI 성격유형 테스트',
    description: '16가지 성격 유형 결과 분석',
    types: ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'],
    sampleResult: {
      type: 'ENFP',
      title: '재기발랄한 활동가',
      description: '열정적이고 창의적인 성격으로 다양한 가능성을 탐구하는 것을 좋아합니다.',
    }
  },
  'concentration': {
    id: 'concentration',
    title: '집중력 테스트',
    description: '주의력과 집중력 수준 분석',
    types: ['높음', '보통', '낮음'],
    sampleResult: {
      type: '보통',
      title: '평균적인 집중력',
      description: '일반적인 수준의 집중력을 보유하고 있으며, 훈련을 통해 향상 가능합니다.',
    }
  },
  'creativity': {
    id: 'creativity',
    title: '창의력 진단 테스트',
    description: '창의적 사고력과 혁신 능력 분석',
    types: ['창의적 천재', '혁신가', '탐험가', '실행가'],
    sampleResult: {
      type: '혁신가',
      title: '혁신적 사고의 소유자',
      description: '기존의 틀을 벗어나 새로운 아이디어를 창출하는 능력이 뛰어납니다.',
    }
  },
  'emotional_tank': {
    id: 'emotional_tank',
    title: '감정탱크 진단기',
    description: '현재 감정 상태와 스트레스 수준 분석',
    types: ['충만', '보통', '고갈 위험', '심각한 고갈'],
    sampleResult: {
      type: '보통',
      title: '적절한 감정 균형',
      description: '현재 감정 상태는 안정적이지만, 지속적인 관리가 필요합니다.',
    }
  },
  'egen_teto': {
    id: 'egen_teto',
    title: '에겐-테토 성격 테스트',
    description: '4가지 성격 유형으로 개인 특성 분석',
    types: ['리더형 (에겐)', '관계형 (테토)', '분석형', '창조형'],
    sampleResult: {
      type: '리더형 (에겐)',
      title: '주도적이고 결단력 있는 리더',
      description: '목표 지향적이며 다른 사람들을 이끄는 천연의 리더십을 가지고 있습니다.',
    }
  },
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const result = testResults[slug as keyof typeof testResults]
  
  if (!result) {
    return {
      title: '결과를 찾을 수 없습니다 | 모두의 테스트',
    }
  }

  return {
    title: `${result.title} 결과 | 모두의 테스트`,
    description: result.description,
    openGraph: {
      title: `${result.title} 결과 | 모두의 테스트`,
      description: result.description,
      url: `https://www.testevery.com/result/${result.id}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${result.title} 결과 | 모두의 테스트`,
      description: result.description,
    },
    alternates: {
      canonical: `https://www.testevery.com/result/${result.id}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(testResults).map((slug) => ({
    slug,
  }))
}

export default async function ResultPage({ params }: Props) {
  const { slug } = await params
  const result = testResults[slug as keyof typeof testResults]

  if (!result) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            홈
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href={`/test/${result.id}`} className="text-blue-600 hover:text-blue-800">
            {result.title}
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">결과</span>
        </nav>

        {/* Result Header */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {result.title} 결과
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {result.description}
          </p>
          
          {/* Sample Result Display */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {result.sampleResult.type}
            </h2>
            <h3 className="text-xl font-medium mb-4">
              {result.sampleResult.title}
            </h3>
            <p className="text-lg leading-relaxed">
              {result.sampleResult.description}
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <Link
              href={`/test/${result.id}`}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              테스트 다시하기
            </Link>
            <Link
              href="/"
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200"
            >
              다른 테스트 하기
            </Link>
          </div>
        </div>

        {/* Possible Results */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            가능한 결과 유형
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {result.types.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-lg font-semibold text-gray-800">
                  {type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": `${result.title} 결과`,
            "description": result.description,
            "url": `https://www.testevery.com/result/${result.id}`,
            "isPartOf": {
              "@type": "WebSite",
              "name": "모두의 테스트",
              "url": "https://www.testevery.com"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "홈",
                  "item": "https://www.testevery.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": result.title,
                  "item": `https://www.testevery.com/test/${result.id}`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "결과",
                  "item": `https://www.testevery.com/result/${result.id}`
                }
              ]
            }
          })
        }}
      />
    </main>
  )
}