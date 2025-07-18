import Link from 'next/link';
import { notFound } from 'next/navigation';

// 테스트 데이터 (실제 구현에서는 데이터베이스에서 가져올 것)
const tests = {
  'mbti-personality-test': {
    title: 'MBTI 성격 유형 검사',
    description: '16가지 성격 유형으로 나누어 분석하는 세계에서 가장 유명한 성격 검사입니다.',
    fullDescription: `
      MBTI(Myers-Briggs Type Indicator)는 칼 융의 심리학적 유형론을 바탕으로 개발된 
      성격 유형 지표입니다. 4가지 선호 경향을 조합하여 16가지 성격 유형을 제시합니다.
      
      이 검사는 다음과 같은 4가지 차원으로 성격을 분류합니다:
      - 외향(E) vs 내향(I)
      - 감각(S) vs 직관(N)
      - 사고(T) vs 감정(F)
      - 판단(J) vs 인식(P)
    `,
    category: '성격분석',
    duration: '10-15분',
    participants: '25,000명',
    difficulty: '쉬움',
    questions: 60,
    scientific: true,
    tags: ['성격', '유형', '16가지', '인기', 'MBTI'],
    benefits: [
      '자신의 성격 유형을 명확히 이해',
      '타인과의 관계 개선 방법 습득',
      '직업 선택과 진로 개발에 도움',
      '팀워크와 협업 능력 향상',
      '스트레스 관리 방법 제시'
    ],
    targetAudience: [
      '자신의 성격을 정확히 알고 싶은 사람',
      '인간관계에서 어려움을 겪는 사람',
      '진로나 직업 선택을 고민하는 사람',
      '팀 리더십을 개발하고 싶은 사람',
      '개인 성장을 추구하는 사람'
    ],
    resultTypes: [
      { type: 'INTJ', name: '건축가', description: '상상력이 풍부하고 전략적인 사고를 하는 완벽주의자' },
      { type: 'INTP', name: '논리술사', description: '혁신적인 발명가로 지식에 대한 갈증이 강함' },
      { type: 'ENTJ', name: '통솔자', description: '대담하고 상상력이 풍부한 강력한 의지의 리더' },
      { type: 'ENTP', name: '변론가', description: '똑똑하고 호기심이 많은 사색가' },
      { type: 'INFJ', name: '옹호자', description: '조용하고 신비로우며 영감을 주는 이상주의자' },
      { type: 'INFP', name: '중재자', description: '항상 선을 행할 준비가 되어 있는 시적이고 친절한 이타주의자' },
      { type: 'ENFJ', name: '선도자', description: '카리스마 있고 영감을 주는 지도자' },
      { type: 'ENFP', name: '활동가', description: '열정적이고 창의적인 사회적 자유로운 영혼' },
      { type: 'ISTJ', name: '현실주의자', description: '실용적이고 사실에 근거한 믿음직한 사람' },
      { type: 'ISFJ', name: '수호자', description: '따뜻하고 헌신적인 수호자' },
      { type: 'ESTJ', name: '경영자', description: '전통과 질서를 중시하는 훌륭한 관리자' },
      { type: 'ESFJ', name: '집정관', description: '배려심이 많고 사교적인 인기쟁이' },
      { type: 'ISTP', name: '만능재주꾼', description: '대담하고 실용적인 실험정신이 강한 사람' },
      { type: 'ISFP', name: '모험가', description: '유연하고 매력적인 예술가' },
      { type: 'ESTP', name: '사업가', description: '똑똑하고 에너지 넘치는 인기쟁이' },
      { type: 'ESFP', name: '연예인', description: '자발적이고 열정적인 사교적 연예인' }
    ]
  },
  'big5-personality-test': {
    title: '빅5 성격 검사',
    description: '과학적으로 가장 검증된 5가지 성격 차원으로 정확하게 분석하는 성격 검사입니다.',
    fullDescription: `
      빅5 성격 검사는 현대 심리학에서 가장 과학적으로 검증된 성격 모델입니다.
      수십 년간의 연구를 통해 개발된 이 모델은 인간의 성격을 5가지 주요 차원으로 설명합니다.
      
      5가지 성격 차원:
      - 개방성(Openness): 새로운 경험에 대한 개방성
      - 성실성(Conscientiousness): 목표 지향적이고 조직적인 성향
      - 외향성(Extraversion): 사회적 활동과 자극 추구
      - 친화성(Agreeableness): 타인에 대한 신뢰와 협력
      - 신경증(Neuroticism): 정서적 불안정성과 스트레스 반응
    `,
    category: '성격분석',
    duration: '15-20분',
    participants: '18,000명',
    difficulty: '보통',
    questions: 44,
    scientific: true,
    tags: ['과학적', '정확', '5차원', '신뢰', '빅5'],
    benefits: [
      '과학적으로 검증된 정확한 성격 분석',
      '각 차원별 상세한 점수와 해석',
      '성격 특성에 따른 직업 적합도 분석',
      '대인관계 개선 전략 제시',
      '개인 성장 방향 가이드 제공'
    ],
    targetAudience: [
      '과학적으로 정확한 성격 분석을 원하는 사람',
      '심리학적 근거가 확실한 검사를 선호하는 사람',
      '직업 선택에 객관적 근거가 필요한 사람',
      '개인적 성장을 체계적으로 추구하는 사람',
      '학술적 목적으로 성격 연구를 하는 사람'
    ],
    resultTypes: [
      { type: 'high-openness', name: '개방적 탐험가', description: '새로운 경험과 아이디어에 적극적으로 개방적' },
      { type: 'high-conscientiousness', name: '체계적 성취자', description: '목표 지향적이고 조직적인 성향이 강함' },
      { type: 'high-extraversion', name: '사교적 리더', description: '활발하고 사교적이며 에너지가 넘침' },
      { type: 'high-agreeableness', name: '협력적 조화자', description: '타인을 배려하고 협력을 중시함' },
      { type: 'low-neuroticism', name: '안정적 균형자', description: '정서적으로 안정되고 스트레스에 강함' }
    ]
  },
  'enneagram-personality-test': {
    title: '에니어그램 성격 검사',
    description: '9가지 성격 유형으로 내적 동기와 행동 패턴을 깊이 있게 분석하는 검사입니다.',
    fullDescription: `
      에니어그램은 그리스어로 '9개의 점'을 의미하며, 인간의 성격을 9가지 유형으로 분류하는 
      고대부터 전해 내려온 지혜와 현대 심리학이 결합된 성격 분류 시스템입니다.
      
      에니어그램의 특징:
      - 각 유형의 핵심 동기와 두려움 분석
      - 스트레스와 안정 상태에서의 행동 변화
      - 성장과 통합의 방향 제시
      - 날개(Wing) 유형을 통한 세밀한 분석
      - 본능적 변형을 통한 3가지 하위 유형
    `,
    category: '성격분석',
    duration: '12-18분',
    participants: '12,000명',
    difficulty: '보통',
    questions: 108,
    scientific: true,
    tags: ['9가지', '동기', '행동', '심화', '에니어그램'],
    benefits: [
      '내적 동기와 두려움의 근본 원인 파악',
      '스트레스 상황에서의 행동 패턴 이해',
      '성장과 발전을 위한 구체적 방향 제시',
      '타인의 동기를 이해하여 관계 개선',
      '자아 발견과 영적 성장에 도움'
    ],
    targetAudience: [
      '자신의 내적 동기를 깊이 이해하고 싶은 사람',
      '반복되는 행동 패턴을 바꾸고 싶은 사람',
      '영적 성장과 자아 발견에 관심있는 사람',
      '타인의 행동 동기를 이해하고 싶은 사람',
      '상담이나 코칭 분야에서 활용하고 싶은 사람'
    ],
    resultTypes: [
      { type: '1', name: '개혁가', description: '완벽을 추구하는 이상주의자' },
      { type: '2', name: '조력자', description: '타인을 돕고 사랑받고 싶어하는 사람' },
      { type: '3', name: '성취자', description: '성공과 인정을 추구하는 목표 지향적인 사람' },
      { type: '4', name: '예술가', description: '독창성과 정체성을 추구하는 개인주의자' },
      { type: '5', name: '탐구자', description: '지식과 이해를 추구하는 관찰자' },
      { type: '6', name: '충성가', description: '안정과 지지를 추구하는 신뢰할 수 있는 사람' },
      { type: '7', name: '열정가', description: '다양한 경험과 즐거움을 추구하는 모험가' },
      { type: '8', name: '도전자', description: '힘과 통제를 추구하는 강력한 지도자' },
      { type: '9', name: '조정자', description: '평화와 조화를 추구하는 중재자' }
    ]
  },
  'creativity-assessment-test': {
    title: '창의력 진단 테스트',
    description: '다양한 관점에서 창의적 사고 능력을 측정하고 분석하는 종합적인 검사입니다.',
    fullDescription: `
      창의력 진단 테스트는 토런스 창의성 검사(TTCT)와 길포드의 발산적 사고 이론을 
      기반으로 개발된 종합적인 창의력 측정 도구입니다.
      
      측정 영역:
      - 유창성(Fluency): 아이디어를 많이 생성하는 능력
      - 독창성(Originality): 남들과 다른 독창적인 아이디어
      - 유연성(Flexibility): 다양한 관점에서 접근하는 능력
      - 정교성(Elaboration): 아이디어를 구체화하고 발전시키는 능력
      - 문제 해결력: 창의적 문제 해결 능력
    `,
    category: '능력검사',
    duration: '20-25분',
    participants: '9,000명',
    difficulty: '어려움',
    questions: 35,
    scientific: true,
    tags: ['창의력', '사고', '능력', '분석', '토런스'],
    benefits: [
      '창의적 사고의 강점과 약점 파악',
      '창의력 향상을 위한 구체적 방법 제시',
      '직업 선택 시 창의적 능력 고려',
      '문제 해결 스타일 개선',
      '혁신적 아이디어 생성 능력 개발'
    ],
    targetAudience: [
      '창의적 직업을 꿈꾸는 사람',
      '혁신적 아이디어가 필요한 직장인',
      '예술가나 디자이너 지망생',
      '창의력 교육에 관심있는 교육자',
      '창업이나 새로운 도전을 계획하는 사람'
    ],
    resultTypes: [
      { type: 'creative-genius', name: '창의적 천재', description: '모든 영역에서 뛰어난 창의적 능력을 보임' },
      { type: 'innovative-thinker', name: '혁신적 사고자', description: '독창적이고 혁신적인 아이디어를 자주 생성' },
      { type: 'flexible-explorer', name: '유연한 탐험가', description: '다양한 관점에서 문제를 바라보는 능력이 뛰어남' },
      { type: 'detail-elaborator', name: '세밀한 발전가', description: '아이디어를 구체화하고 발전시키는 능력이 뛰어남' },
      { type: 'fluent-generator', name: '유창한 생성자', description: '많은 양의 아이디어를 빠르게 생성하는 능력' }
    ]
  }
};

// 메타데이터 생성 함수
export async function generateMetadata({ params }) {
  const test = tests[params.slug];
  
  if (!test) {
    return {
      title: '테스트를 찾을 수 없습니다 | TestEvery',
      description: '요청하신 테스트를 찾을 수 없습니다.',
    };
  }

  return {
    title: `${test.title} | TestEvery`,
    description: test.description,
    keywords: [test.title, ...test.tags, test.category, '심리테스트'],
    openGraph: {
      title: `${test.title} | TestEvery`,
      description: test.description,
      url: `https://www.testevery.com/test/${params.slug}/`,
      type: 'article',
      images: [
        {
          url: `/images/tests/${params.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: test.title,
        },
      ],
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: test.title,
      description: test.description,
      url: `https://www.testevery.com/test/${params.slug}/`,
      isPartOf: {
        '@type': 'WebSite',
        name: 'TestEvery',
        url: 'https://www.testevery.com'
      }
    }
  };
}

// 정적 매개변수 생성 (빌드 시 사용)
export async function generateStaticParams() {
  return Object.keys(tests).map((slug) => ({
    slug: slug,
  }));
}

export default function TestPage({ params }) {
  const test = tests[params.slug];

  if (!test) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mr-4">
                {test.category}
              </span>
              {test.scientific && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  과학적 검증
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {test.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {test.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <span className="mr-2">⏱️</span>
                <span>소요시간: {test.duration}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">❓</span>
                <span>문항수: {test.questions}문항</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">👥</span>
                <span>참여자: {test.participants}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📊</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  test.difficulty === '쉬움' ? 'bg-green-100 text-green-700' :
                  test.difficulty === '보통' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {test.difficulty}
                </span>
              </div>
            </div>
            <Link
              href={`/test/${params.slug}/start/`}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-block"
            >
              테스트 시작하기
            </Link>
          </div>
        </div>
      </section>

      {/* 상세 설명 섹션 */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              테스트 소개
            </h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              {test.fullDescription.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-4">
                    {paragraph.trim()}
                  </p>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 혜택 섹션 */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            이 테스트로 얻을 수 있는 것들
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {test.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대상 섹션 */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              이런 분들께 추천합니다
            </h2>
            <div className="space-y-4">
              {test.targetAudience.map((audience, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-sm font-bold">👤</span>
                  </div>
                  <p className="text-gray-700">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 결과 유형 미리보기 */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            가능한 결과 유형 미리보기
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {test.resultTypes.slice(0, 6).map((result, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {result.type} {result.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
          {test.resultTypes.length > 6 && (
            <div className="text-center mt-8">
              <p className="text-gray-600">
                그 외 {test.resultTypes.length - 6}개 유형이 더 있습니다
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 태그 섹션 */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {test.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <Link
              href={`/test/${params.slug}/start/`}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-block"
            >
              지금 테스트 시작하기
            </Link>
          </div>
        </div>
      </section>

      {/* 관련 테스트 섹션 */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            다른 테스트도 확인해보세요
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(tests)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 4)
              .map(([slug, otherTest]) => (
                <Link
                  key={slug}
                  href={`/test/${slug}/`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {otherTest.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {otherTest.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{otherTest.category}</span>
                    <span>{otherTest.duration}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}