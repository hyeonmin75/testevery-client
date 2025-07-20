import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Test data
const tests = {
  'mbti': {
    id: 'mbti',
    title: 'MBTI 성격유형 테스트',
    description: '16가지 성격 유형으로 나누어 보는 가장 널리 사용되는 성격 검사입니다.',
    content: `
      <h2>MBTI 성격유형 검사란?</h2>
      <p>Myers-Briggs Type Indicator(MBTI)는 칼 융의 심리학적 유형론을 바탕으로 개발된 성격 유형 지표입니다.</p>
      
      <h3>4가지 선호 지표</h3>
      <ul>
        <li><strong>외향(E) vs 내향(I)</strong>: 에너지의 방향</li>
        <li><strong>감각(S) vs 직관(N)</strong>: 정보 수집 방법</li>
        <li><strong>사고(T) vs 감정(F)</strong>: 판단 기준</li>
        <li><strong>판단(J) vs 인식(P)</strong>: 생활 양식</li>
      </ul>
      
      <h3>16가지 성격 유형</h3>
      <p>이 4가지 선호 지표의 조합으로 총 16가지 성격 유형이 만들어집니다. 각 유형은 고유한 특성과 강점을 가지고 있습니다.</p>
    `,
    keywords: ['MBTI', '성격유형검사', '16personalities', '성격테스트', '심리유형'],
    time: '10분',
    questions: 60,
  },
  'concentration': {
    id: 'concentration',
    title: '집중력 테스트',
    description: '주의력과 집중력을 과학적으로 측정하는 인지 능력 테스트입니다.',
    content: `
      <h2>집중력 테스트란?</h2>
      <p>집중력은 특정 자극이나 활동에 주의를 지속적으로 유지하는 인지적 능력입니다.</p>
      
      <h3>측정 영역</h3>
      <ul>
        <li><strong>지속적 주의력</strong>: 장시간 집중을 유지하는 능력</li>
        <li><strong>선택적 주의력</strong>: 필요한 정보에만 집중하는 능력</li>
        <li><strong>분할된 주의력</strong>: 여러 작업을 동시에 처리하는 능력</li>
        <li><strong>주의 전환</strong>: 상황에 따라 주의를 전환하는 능력</li>
      </ul>
      
      <h3>활용 분야</h3>
      <p>학습, 업무, 운동 등 다양한 분야에서 집중력 향상이 필요한 상황을 파악할 수 있습니다.</p>
    `,
    keywords: ['집중력테스트', '주의력검사', '인지능력', '집중력향상', 'ADHD'],
    time: '5분',
    questions: 30,
  },
  'creativity': {
    id: 'creativity',
    title: '창의력 진단 테스트',
    description: '창의적 사고력과 혁신적 아이디어 생성 능력을 측정하는 테스트입니다.',
    content: `
      <h2>창의력 진단 테스트</h2>
      <p>창의력은 새롭고 유용한 아이디어를 생성하는 능력으로, 현대 사회에서 매우 중요한 역량입니다.</p>
      
      <h3>측정 요소</h3>
      <ul>
        <li><strong>유창성</strong>: 많은 아이디어를 생성하는 능력</li>
        <li><strong>독창성</strong>: 독특하고 새로운 아이디어를 만드는 능력</li>
        <li><strong>유연성</strong>: 다양한 관점에서 생각하는 능력</li>
        <li><strong>정교성</strong>: 아이디어를 구체화하고 발전시키는 능력</li>
      </ul>
      
      <h3>결과 해석</h3>
      <p>4가지 창의력 유형(창의적 천재, 혁신가, 탐험가, 실행가)으로 분류하여 개인의 창의적 특성을 분석합니다.</p>
    `,
    keywords: ['창의력테스트', '창의성진단', '혁신적사고', '아이디어생성', '창의력향상'],
    time: '15분',
    questions: 20,
  },
  'emotional_tank': {
    id: 'emotional_tank',
    title: '감정탱크 진단기',
    description: '현재 감정 상태와 스트레스 수준을 파악하는 직장인 전용 진단 도구입니다.',
    content: `
      <h2>감정탱크 진단기</h2>
      <p>직장 생활에서 경험하는 다양한 스트레스와 감정 소모 상황을 분석하여 현재 감정 상태를 진단합니다.</p>
      
      <h3>진단 영역</h3>
      <ul>
        <li><strong>업무 스트레스</strong>: 과도한 업무량, 마감 압박 등</li>
        <li><strong>인간관계</strong>: 동료, 상사와의 갈등 상황</li>
        <li><strong>환경적 요인</strong>: 사무실 환경, 통근 스트레스 등</li>
        <li><strong>개인적 요인</strong>: 완벽주의, 자기 압박 등</li>
      </ul>
      
      <h3>결과 제공</h3>
      <p>감정 탱크 수준을 시각적으로 표시하고, 감정 회복을 위한 맞춤형 루틴을 제안합니다.</p>
    `,
    keywords: ['감정진단', '스트레스테스트', '번아웃진단', '직장인감정', '감정회복'],
    time: '8분',
    questions: 25,
  },
  'egen_teto': {
    id: 'egen_teto',
    title: '에겐-테토 성격 테스트',
    description: '4가지 성격 유형으로 개인의 특성과 행동 패턴을 분석하는 테스트입니다.',
    content: `
      <h2>에겐-테토 성격 테스트</h2>
      <p>에겐-테토는 개인의 성격을 4가지 기본 유형으로 분류하여 분석하는 성격 진단 도구입니다.</p>
      
      <h3>4가지 성격 유형</h3>
      <ul>
        <li><strong>리더형 (에겐)</strong>: 주도적이고 결단력 있는 성격</li>
        <li><strong>관계형 (테토)</strong>: 협력적이고 배려심 많은 성격</li>
        <li><strong>분석형</strong>: 논리적이고 체계적인 성격</li>
        <li><strong>창조형</strong>: 창의적이고 자유로운 성격</li>
      </ul>
      
      <h3>활용 방안</h3>
      <p>개인의 강점과 약점을 파악하여 대인관계, 학습, 업무 스타일 개선에 활용할 수 있습니다.</p>
    `,
    keywords: ['에겐테토', '성격유형', '4가지성격', '성격분석', '행동패턴'],
    time: '12분',
    questions: 40,
  },
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const test = tests[slug as keyof typeof tests]
  
  if (!test) {
    return {
      title: '테스트를 찾을 수 없습니다 | 모두의 테스트',
    }
  }

  return {
    title: `${test.title} | 모두의 테스트`,
    description: test.description,
    keywords: test.keywords,
    openGraph: {
      title: `${test.title} | 모두의 테스트`,
      description: test.description,
      url: `https://www.testevery.com/test/${test.id}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${test.title} | 모두의 테스트`,
      description: test.description,
    },
    alternates: {
      canonical: `https://www.testevery.com/test/${test.id}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(tests).map((slug) => ({
    slug,
  }))
}

export default async function TestPage({ params }: Props) {
  const { slug } = await params
  const test = tests[slug as keyof typeof tests]

  if (!test) {
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
          <span className="text-gray-700">{test.title}</span>
        </nav>

        {/* Test Header */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {test.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {test.description}
          </p>
          
          <div className="flex gap-4 mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              ⏱️ 소요시간: {test.time}
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              📝 문항수: {test.questions}개
            </span>
          </div>

          <div className="flex gap-4">
            <Link
              href={`/result/${test.id}`}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              테스트 시작하기
            </Link>
            <Link
              href="/"
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200"
            >
              다른 테스트 보기
            </Link>
          </div>
        </div>

        {/* Test Content */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: test.content }}
          />
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            "name": test.title,
            "description": test.description,
            "url": `https://www.testevery.com/test/${test.id}`,
            "publisher": {
              "@type": "Organization",
              "name": "모두의 테스트",
              "url": "https://www.testevery.com"
            },
            "timeRequired": test.time,
            "numberOfQuestions": test.questions,
            "keywords": test.keywords.join(", "),
            "educationalUse": "assessment",
            "typicalAgeRange": "18-"
          })
        }}
      />
    </main>
  )
}