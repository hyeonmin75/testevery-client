/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://testevery.com',
  generateRobotsTxt: true, // robots.txt 자동 생성
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  
  // robots.txt 설정
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://testevery.com/sitemap.xml',
    ],
  },
  
  // 특정 페이지별 설정
  transform: async (config, path) => {
    // 홈페이지는 우선순위 높게
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }
    
    // 블로그 포스트는 월별 업데이트
    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }
    
    // 주요 페이지들
    if (['/about', '/contact', '/psychology'].includes(path)) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }
    
    // 기본 설정
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  
  // 제외할 경로
  exclude: [
    '/admin/*',
    '/api/*',
    '/404',
    '/500',
  ],
}