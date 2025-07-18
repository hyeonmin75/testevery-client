import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

// Import your data
const tests = {
  'mbti': { id: 'mbti', title: 'MBTI 성격유형 테스트' },
  'concentration': { id: 'concentration', title: '집중력 테스트' },
  'egen_teto': { id: 'egen_teto', title: '에겐-테토 성격 테스트' },
  'emotional_tank': { id: 'emotional_tank', title: '감정탱크 진단기' },
  'creativity': { id: 'creativity', title: '창의력 진단 테스트' }
}

const blogPosts = [
  { id: 'psychology-research-methods', date: '2024-12-07' },
  { id: 'concentration-focus-psychology', date: '2024-11-20' },
  { id: 'intuition-psychology-decision', date: '2024-12-01' },
  { id: 'attention-psychology-mechanism', date: '2024-11-15' },
  { id: 'memory-psychology-cognitive', date: '2024-11-10' },
  { id: 'personality-psychology-development', date: '2024-10-25' },
  { id: 'emotion-psychology-regulation', date: '2024-10-20' },
  { id: 'social-psychology-interaction', date: '2024-10-15' },
  { id: 'cognitive-psychology-thinking', date: '2024-10-10' },
  { id: 'developmental-psychology-stages', date: '2024-10-05' },
  { id: 'abnormal-psychology-disorders', date: '2024-09-30' },
  { id: 'positive-psychology-wellbeing', date: '2024-09-25' },
  { id: 'neuropsychology-brain-behavior', date: '2024-09-20' },
  { id: 'educational-psychology-learning', date: '2024-09-15' },
  { id: 'health-psychology-lifestyle', date: '2024-09-10' }
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.testevery.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]
  
  // Test pages
  const testPages = Object.keys(tests).map(testId => ({
    url: `${baseUrl}/test/${testId}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  // Test result pages
  const resultPages = Object.keys(tests).map(testId => ({
    url: `${baseUrl}/result/${testId}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Blog post pages
  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  return [
    ...staticPages,
    ...testPages,
    ...resultPages,
    ...blogPages,
  ]
}