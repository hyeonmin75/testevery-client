// SEO 디버깅 도구
import { Request, Response } from 'express';
import { tests } from '../client/src/data/tests';

export function setupDebugRoutes(app: any) {
  // SEO 상태 확인 API
  app.get('/api/debug/seo-status', (req: Request, res: Response) => {
    const testIds = Object.keys(tests);
    const totalTests = testIds.length;
    
    const status = {
      timestamp: new Date().toISOString(),
      totalTests,
      testIds,
      sampleUrls: {
        testPages: testIds.slice(0, 5).map(id => `/test/${id}`),
        resultPages: testIds.slice(0, 5).map(id => `/result/${id}`),
        sitemapUrl: '/sitemap.xml',
        robotsUrl: '/robots.txt'
      },
      environment: process.env.NODE_ENV || 'development',
      serverInfo: {
        userAgent: req.get('User-Agent'),
        host: req.get('Host'),
        originalUrl: req.originalUrl,
        method: req.method,
        isBot: (req.get('User-Agent') || '').includes('bot') || (req.get('User-Agent') || '').includes('crawl') || (req.get('User-Agent') || '').includes('spider') || (req.get('User-Agent') || '').includes('Google')
      },
      crawlableUrls: [
        'https://testevery.com/',
        'https://testevery.com/sitemap.xml',
        'https://testevery.com/robots.txt',
        ...testIds.map(id => `https://testevery.com/test/${id}`),
        ...testIds.map(id => `https://testevery.com/result/${id}`)
      ]
    };
    
    res.json(status);
  });

  // 개별 테스트 SEO 상태 확인
  app.get('/api/debug/test/:testId', (req: Request, res: Response) => {
    const { testId } = req.params;
    const test = tests[testId];
    
    if (!test) {
      return res.status(404).json({
        error: 'Test not found',
        testId,
        availableTests: Object.keys(tests)
      });
    }

    const debugInfo = {
      testId,
      test: {
        title: test.title,
        description: test.description,
        emoji: test.emoji,
        participants: test.participants,
        questionCount: test.questionCount
      },
      urls: {
        testPage: `/test/${testId}`,
        resultPage: `/result/${testId}`
      },
      seoUrls: {
        testPageSeo: `/api/seo/${testId}`,
        canonicalTest: `https://testevery.com/test/${testId}`,
        canonicalResult: `https://testevery.com/result/${testId}`
      },
      requestInfo: {
        userAgent: req.get('User-Agent'),
        isBot: req.get('User-Agent')?.includes('bot') || false,
        host: req.get('Host'),
        timestamp: new Date().toISOString()
      }
    };

    res.json(debugInfo);
  });
}