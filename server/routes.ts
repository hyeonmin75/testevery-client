import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateTestPageSEO, generateResultPageSEO, generateSEOHTML, getDefaultSEO } from "./seo";
import { tests } from "../client/src/data/tests";
import { setupDebugRoutes } from "./debug";

export async function registerRoutes(app: Express): Promise<void> {
  // Debug middleware to log all requests
  app.use((req: Request, res: Response, next) => {
    if (req.path.startsWith('/test/') || req.path.startsWith('/result/') || req.path === '/sitemap.xml' || req.path === '/robots.txt') {
      console.log(`[DEBUG] ${req.method} ${req.originalUrl} (path: ${req.path}) - User-Agent: ${req.get('User-Agent')?.substring(0, 50)}...`);
    }
    next();
  });

  // Case-insensitive redirect for test URLs (backup for external links)
  app.get('/Test/:testId', (req: Request, res: Response) => {
    const { testId } = req.params;
    console.log(`[REDIRECT] Original URL: ${req.originalUrl}, Path: ${req.path}, Redirecting /Test/${testId} -> /test/${testId.toLowerCase()}`);
    return res.redirect(301, `/test/${testId.toLowerCase()}`);
  });

  // SEO-optimized routes for test pages (EXACT MATCH ONLY)
  app.get('/test/:testId', (req: Request, res: Response) => {
    console.log(`[SEO Route] Handling /test/${req.params.testId} for User-Agent: ${req.get('User-Agent')}`);
    
    // 존재하지 않는 testId인지 먼저 확인
    const { testId } = req.params;
    if (!testId || typeof testId !== 'string') {
      console.log(`[SEO Route] Invalid testId: ${testId}`);
      return res.status(404).send('Test not found');
    }
    
    const test = tests[testId];
    
    if (!test) {
      console.log(`[SEO Route] Test not found: ${testId}. Available tests:`, Object.keys(tests));
      return res.status(404).send(`Test '${testId}' not found`);
    }
    
    console.log(`[SEO Route] Found test: ${test.title}`);
    
    const seoData = generateTestPageSEO(testId);
    const content = `
      <div class="seo-content">
        <h1>${test.emoji} ${test.title}</h1>
        <p>${test.description}</p>
        <div class="test-info">
          <span>⏱️ 소요시간: ${test.duration}</span>
          <span>📊 참여자: ${test.participants.toLocaleString()}명</span>
          <span>❓ 문항 수: ${test.questionCount}개</span>
        </div>
        <a href="/test/${testId}" class="start-test-btn">테스트 시작하기</a>
      </div>
    `;
    
    const html = generateSEOHTML(seoData, content);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(html);
  });

  // SEO-optimized routes for result pages (EXACT MATCH ONLY)
  app.get('/result/:testId', (req: Request, res: Response) => {
    console.log(`[SEO Route] Handling /result/${req.params.testId} for User-Agent: ${req.get('User-Agent')}`);
    
    const { testId } = req.params;
    if (!testId || typeof testId !== 'string') {
      console.log(`[SEO Route] Invalid resultId: ${testId}`);
      return res.status(404).send('Test not found');
    }
    
    const test = tests[testId];
    
    if (!test) {
      console.log(`[SEO Route] Test not found for result: ${testId}. Available tests:`, Object.keys(tests));
      return res.status(404).send(`Test '${testId}' not found`);
    }
    
    console.log(`[SEO Route] Found test for result: ${test.title}`);
    
    const seoData = generateResultPageSEO(testId);
    const content = `
      <div class="seo-content">
        <h1>${test.title} 결과</h1>
        <p>당신의 ${test.title} 결과를 확인해보세요!</p>
        <div class="results-info">
          <h2>가능한 결과 유형:</h2>
          <ul>
            ${Object.values(test.results).map(result => 
              `<li>${result.emoji} ${result.title}: ${result.description}</li>`
            ).join('')}
          </ul>
        </div>
        <a href="/test/${testId}" class="start-test-btn">테스트 다시하기</a>
      </div>
    `;
    
    const html = generateSEOHTML(seoData, content);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(html);
  });

  // Dynamic sitemap.xml
  app.get('/sitemap.xml', (req: Request, res: Response) => {
    const baseUrl = 'https://testevery.com';
    const currentDate = new Date().toISOString().split('T')[0];
    
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;

    // Add test pages
    Object.keys(tests).forEach(testId => {
      sitemap += `
  <url>
    <loc>${baseUrl}/test/${testId}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/result/${testId}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

    sitemap += `
</urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  // Enhanced robots.txt
  app.get('/robots.txt', (req: Request, res: Response) => {
    const robotsTxt = `User-agent: *
Allow: /
Allow: /test/*
Allow: /result/*
Allow: /about
Allow: /contact

Disallow: /api/*
Disallow: /admin/*
Disallow: /_next/*
Disallow: /*.json$

Sitemap: https://testevery.com/sitemap.xml

# Additional crawl delay for respectful crawling
Crawl-delay: 1`;

    res.setHeader('Content-Type', 'text/plain');
    res.send(robotsTxt);
  });

  // Meta tags API for dynamic SEO
  app.get('/api/seo/:testId', (req: Request, res: Response) => {
    const { testId } = req.params;
    const seoData = generateTestPageSEO(testId);
    res.json(seoData);
  });

  // Setup debug routes
  setupDebugRoutes(app);

  // Routes are now registered, no need to create server here
}
