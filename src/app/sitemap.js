export const dynamic = 'force-static'
export const revalidate = false

// 모든 테스트 데이터 정의
const tests = [
  {
    slug: 'mbti-personality-test',
    title: 'MBTI 성격 유형 검사',
    lastModified: '2025-01-18',
    priority: 0.9,
  },
  {
    slug: 'big5-personality-test',
    title: '빅5 성격 검사',
    lastModified: '2025-01-18',
    priority: 0.8,
  },
  {
    slug: 'enneagram-personality-test',
    title: '에니어그램 성격 검사',
    lastModified: '2025-01-18',
    priority: 0.8,
  },
  {
    slug: 'creativity-assessment-test',
    title: '창의력 진단 테스트',
    lastModified: '2025-01-18',
    priority: 0.7,
  },
  {
    slug: 'emotional-intelligence-test',
    title: '감정지능 테스트',
    lastModified: '2025-01-18',
    priority: 0.7,
  },
  {
    slug: 'stress-resilience-test',
    title: '스트레스 회복력 검사',
    lastModified: '2025-01-18',
    priority: 0.6,
  },
  {
    slug: 'depression-self-test',
    title: '우울증 자가진단 테스트',
    lastModified: '2025-01-18',
    priority: 0.6,
  },
  {
    slug: 'anxiety-assessment-test',
    title: '불안장애 진단 테스트',
    lastModified: '2025-01-18',
    priority: 0.6,
  },
  {
    slug: 'attention-concentration-test',
    title: '집중력 테스트',
    lastModified: '2025-01-18',
    priority: 0.6,
  },
  {
    slug: 'memory-ability-test',
    title: '기억력 테스트',
    lastModified: '2025-01-18',
    priority: 0.6,
  },
  {
    slug: 'leadership-style-test',
    title: '리더십 스타일 검사',
    lastModified: '2025-01-18',
    priority: 0.5,
  },
  {
    slug: 'communication-style-test',
    title: '의사소통 스타일 검사',
    lastModified: '2025-01-18',
    priority: 0.5,
  },
  {
    slug: 'relationship-attachment-test',
    title: '애착 유형 검사',
    lastModified: '2025-01-18',
    priority: 0.5,
  },
  {
    slug: 'career-aptitude-test',
    title: '진로 적성 검사',
    lastModified: '2025-01-18',
    priority: 0.7,
  },
  {
    slug: 'learning-style-test',
    title: '학습 스타일 검사',
    lastModified: '2025-01-18',
    priority: 0.6,
  },
];

// 블로그 포스트 데이터
const blogPosts = [
  {
    slug: 'mbti-guide-complete',
    title: 'MBTI 완벽 가이드',
    lastModified: '2025-01-18',
    priority: 0.7,
  },
  {
    slug: 'big5-personality-science',
    title: '빅5 성격 이론의 과학적 근거',
    lastModified: '2025-01-18',
    priority: 0.6,
  },
  {
    slug: 'enneagram-psychology-deep-dive',
    title: '에니어그램 심리학 심화 분석',
    lastModified: '2025-01-18',
    priority: 0.6,
  },
  {
    slug: 'creativity-psychology-research',
    title: '창의력과 심리학 연구',
    lastModified: '2025-01-18',
    priority: 0.5,
  },
  {
    slug: 'emotional-intelligence-importance',
    title: '감정지능의 중요성과 개발 방법',
    lastModified: '2025-01-18',
    priority: 0.5,
  },
];

// 카테고리 페이지
const categories = [
  { id: 'personality', name: '성격분석' },
  { id: 'ability', name: '능력검사' },
  { id: 'mental-health', name: '정신건강' },
  { id: 'relationship', name: '관계분석' },
];

export default function sitemap() {
  const baseUrl = 'https://www.testevery.com';
  
  // 기본 페이지들
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date('2025-01-18'),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/tests/`,
      lastModified: new Date('2025-01-18'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date('2025-01-18'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date('2025-01-18'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date('2025-01-18'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy/`,
      lastModified: new Date('2025-01-18'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms/`,
      lastModified: new Date('2025-01-18'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // 카테고리 페이지 추가
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/tests/category/${category.id}/`,
    lastModified: new Date('2025-01-18'),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 테스트 페이지 추가
  const testRoutes = tests.map((test) => ({
    url: `${baseUrl}/test/${test.slug}/`,
    lastModified: new Date(test.lastModified),
    changeFrequency: 'monthly',
    priority: test.priority,
  }));

  // 테스트 결과 페이지 추가
  const resultRoutes = tests.map((test) => ({
    url: `${baseUrl}/result/${test.slug}/`,
    lastModified: new Date(test.lastModified),
    changeFrequency: 'monthly',
    priority: test.priority - 0.1,
  }));

  // 블로그 포스트 페이지 추가
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'monthly',
    priority: post.priority,
  }));

  return [
    ...routes,
    ...categoryRoutes,
    ...testRoutes,
    ...resultRoutes,
    ...blogRoutes,
  ];
}