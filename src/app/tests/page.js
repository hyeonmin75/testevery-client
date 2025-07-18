import Link from 'next/link';

export const metadata = {
  title: '심리테스트 목록 | TestEvery',
  description: '다양한 심리테스트를 한 곳에서 만나보세요. MBTI, 빅5, 에니어그램 등 전문적인 심리검사를 무료로 제공합니다.',
  keywords: ['심리테스트', '성격검사', 'MBTI', '빅5', '에니어그램', '창의력검사', '감정지능', '스트레스'],
  openGraph: {
    title: '심리테스트 목록 | TestEvery',
    description: '다양한 심리테스트를 한 곳에서 만나보세요. MBTI, 빅5, 에니어그램 등 전문적인 심리검사를 무료로 제공합니다.',
    url: 'https://www.testevery.com/tests/',
    type: 'website',
  },
};

// 전체 테스트 데이터
const allTests = [
  {
    id: 'mbti',
    title: 'MBTI 성격 유형 검사',
    description: '16가지 성격 유형으로 나누어 분석하는 가장 유명한 성격 검사입니다.',
    category: '성격분석',
    duration: '10-15분',
    participants: '25,000명',
    difficulty: '쉬움',
    slug: 'mbti-personality-test',
    featured: true,
    tags: ['성격', '유형', '16가지', '인기'],
  },
  {
    id: 'big5',
    title: '빅5 성격 검사',
    description: '과학적으로 검증된 5가지 성격 차원으로 정확하게 분석합니다.',
    category: '성격분석',
    duration: '15-20분',
    participants: '18,000명',
    difficulty: '보통',
    slug: 'big5-personality-test',
    featured: true,
    tags: ['과학적', '정확', '5차원', '신뢰'],
  },
  {
    id: 'enneagram',
    title: '에니어그램 성격 검사',
    description: '9가지 성격 유형으로 내적 동기와 행동 패턴을 분석합니다.',
    category: '성격분석',
    duration: '12-18분',
    participants: '12,000명',
    difficulty: '보통',
    slug: 'enneagram-personality-test',
    featured: true,
    tags: ['9가지', '동기', '행동', '심화'],
  },
  {
    id: 'creativity',
    title: '창의력 진단 테스트',
    description: '다양한 관점에서 창의적 사고 능력을 측정하고 분석합니다.',
    category: '능력검사',
    duration: '20-25분',
    participants: '9,000명',
    difficulty: '어려움',
    slug: 'creativity-assessment-test',
    featured: false,
    tags: ['창의력', '사고', '능력', '분석'],
  },
  {
    id: 'emotional-intelligence',
    title: '감정지능 테스트',
    description: '감정 인식, 이해, 조절 능력을 종합적으로 평가합니다.',
    category: '능력검사',
    duration: '15-20분',
    participants: '11,000명',
    difficulty: '보통',
    slug: 'emotional-intelligence-test',
    featured: false,
    tags: ['감정', '지능', '조절', '평가'],
  },
  {
    id: 'stress-resilience',
    title: '스트레스 회복력 검사',
    description: '스트레스 상황에서의 대처 능력과 회복력을 측정합니다.',
    category: '정신건강',
    duration: '10-15분',
    participants: '8,000명',
    difficulty: '쉬움',
    slug: 'stress-resilience-test',
    featured: false,
    tags: ['스트레스', '회복력', '대처', '측정'],
  },
  {
    id: 'depression-self',
    title: '우울증 자가진단 테스트',
    description: '우울증 증상을 스스로 체크하고 전문적인 가이드를 받아보세요.',
    category: '정신건강',
    duration: '8-12분',
    participants: '15,000명',
    difficulty: '쉬움',
    slug: 'depression-self-test',
    featured: false,
    tags: ['우울증', '자가진단', '증상', '가이드'],
  },
  {
    id: 'anxiety-assessment',
    title: '불안장애 진단 테스트',
    description: '불안 수준을 측정하고 불안장애 여부를 체크합니다.',
    category: '정신건강',
    duration: '10-15분',
    participants: '7,500명',
    difficulty: '쉬움',
    slug: 'anxiety-assessment-test',
    featured: false,
    tags: ['불안', '장애', '측정', '체크'],
  },
  {
    id: 'attention-concentration',
    title: '집중력 테스트',
    description: '주의력과 집중력을 다양한 방법으로 측정하고 개선 방안을 제시합니다.',
    category: '능력검사',
    duration: '15-20분',
    participants: '6,800명',
    difficulty: '보통',
    slug: 'attention-concentration-test',
    featured: false,
    tags: ['집중력', '주의력', '개선', '측정'],
  },
  {
    id: 'memory-ability',
    title: '기억력 테스트',
    description: '단기기억과 장기기억 능력을 종합적으로 평가합니다.',
    category: '능력검사',
    duration: '12-18분',
    participants: '5,200명',
    difficulty: '보통',
    slug: 'memory-ability-test',
    featured: false,
    tags: ['기억력', '단기', '장기', '종합'],
  },
  {
    id: 'leadership-style',
    title: '리더십 스타일 검사',
    description: '리더십 유형과 스타일을 분석하여 개선 방향을 제시합니다.',
    category: '관계분석',
    duration: '15-20분',
    participants: '4,800명',
    difficulty: '보통',
    slug: 'leadership-style-test',
    featured: false,
    tags: ['리더십', '스타일', '분석', '개선'],
  },
  {
    id: 'communication-style',
    title: '의사소통 스타일 검사',
    description: '의사소통 방식과 패턴을 분석하여 관계 개선 방법을 제안합니다.',
    category: '관계분석',
    duration: '12-18분',
    participants: '3,900명',
    difficulty: '쉬움',
    slug: 'communication-style-test',
    featured: false,
    tags: ['의사소통', '방식', '패턴', '관계'],
  },
  {
    id: 'career-aptitude',
    title: '진로 적성 검사',
    description: '개인의 적성과 흥미를 분석하여 최적의 진로를 추천합니다.',
    category: '능력검사',
    duration: '20-25분',
    participants: '12,500명',
    difficulty: '보통',
    slug: 'career-aptitude-test',
    featured: true,
    tags: ['진로', '적성', '흥미', '추천'],
  },
  {
    id: 'learning-style',
    title: '학습 스타일 검사',
    description: '개인의 학습 방식과 선호도를 분석하여 효과적인 학습법을 제안합니다.',
    category: '능력검사',
    duration: '10-15분',
    participants: '8,900명',
    difficulty: '쉬움',
    slug: 'learning-style-test',
    featured: false,
    tags: ['학습', '스타일', '방식', '효과'],
  },
  {
    id: 'relationship-attachment',
    title: '애착 유형 검사',
    description: '인간관계에서의 애착 유형과 패턴을 분석합니다.',
    category: '관계분석',
    duration: '15-20분',
    participants: '6,200명',
    difficulty: '보통',
    slug: 'relationship-attachment-test',
    featured: false,
    tags: ['애착', '유형', '관계', '패턴'],
  },
];

const categories = [
  { id: 'all', name: '전체', icon: '🎯' },
  { id: 'personality', name: '성격분석', icon: '🧠' },
  { id: 'ability', name: '능력검사', icon: '⚡' },
  { id: 'mental-health', name: '정신건강', icon: '💚' },
  { id: 'relationship', name: '관계분석', icon: '👥' },
];

const difficulties = [
  { id: 'all', name: '전체' },
  { id: 'easy', name: '쉬움' },
  { id: 'medium', name: '보통' },
  { id: 'hard', name: '어려움' },
];

export default function TestsPage() {
  const featuredTests = allTests.filter(test => test.featured);
  const regularTests = allTests.filter(test => !test.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              심리테스트 목록
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              과학적으로 검증된 다양한 심리테스트를 통해 자신을 더 깊이 이해해보세요.
              <br />
              모든 테스트는 무료로 제공됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* 카테고리 필터 */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors duration-200"
              >
                <span>{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 인기 테스트 섹션 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            인기 테스트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTests.map((test) => (
              <Link
                key={test.id}
                href={`/test/${test.slug}/`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 relative p-8">
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    ⭐ 인기
                  </div>
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-2">
                        {test.category === '성격분석' ? '🧠' : test.category === '능력검사' ? '⚡' : '💚'}
                      </div>
                      <div className="text-gray-600 font-medium">{test.category}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {test.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {test.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {test.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 모든 테스트 섹션 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            모든 테스트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTests.map((test) => (
              <Link
                key={test.id}
                href={`/test/${test.slug}/`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-500"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative p-6">
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {test.category}
                  </div>
                  <div className="h-full flex items-center justify-center">
                    <div className="text-4xl">
                      {test.category === '성격분석' ? '🧠' : test.category === '능력검사' ? '⚡' : test.category === '정신건강' ? '💚' : '👥'}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {test.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {test.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center gap-3">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">
            더 많은 테스트를 원하시나요?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            새로운 테스트가 정기적으로 추가됩니다. 알림을 받아보세요!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              테스트 요청하기
            </Link>
            <Link
              href="/blog/"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
            >
              심리학 블로그 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}