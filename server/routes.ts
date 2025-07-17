import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateTestPageSEO, generateResultPageSEO, generateSEOHTML, getDefaultSEO } from "./seo";
import { tests } from "../client/src/data/tests";
import { blogPosts } from "../client/src/data/blogPosts";
import { setupDebugRoutes } from "./debug";
import path from "path";

export async function registerRoutes(app: Express): Promise<void> {
  // Debug middleware to log all requests
  app.use((req: Request, res: Response, next) => {
    if (req.path.startsWith('/test/') || req.path.startsWith('/result/') || req.path.startsWith('/blog/') || req.path === '/sitemap.xml' || req.path === '/robots.txt') {
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

  // Blog post redirects for common variations
  app.get('/blog/mbti-personality-workplace', (req: Request, res: Response) => {
    console.log(`[REDIRECT] Redirecting /blog/mbti-personality-workplace -> /blog/mbti-workplace-dynamics`);
    return res.redirect(301, '/blog/mbti-workplace-dynamics');
  });

  // SEO-optimized blog pages
  app.get('/blog/:postId', (req: Request, res: Response) => {
    const { postId } = req.params;
    const userAgent = req.get('User-Agent') || '';
    const isBot = userAgent.includes('bot') || userAgent.includes('crawl') || userAgent.includes('spider');

    console.log(`[DEBUG] GET /blog/${postId} (path: ${req.path}) - User-Agent: ${userAgent.substring(0, 50)}...`);

    if (isBot) {
      console.log(`[SEO Route] Handling /blog/${postId} for User-Agent: ${userAgent.substring(0, 50)}`);

      const post = blogPosts.find(p => p.id === postId);
      if (!post) {
        console.log(`[SEO Route] Blog post not found: ${postId}`);
        return res.status(404).send('Blog post not found');
      }

      console.log(`[SEO Route] Found blog post: ${post.title}`);

      const seoData = {
        title: `${post.title} | 모두의 테스트`,
        description: post.excerpt,
        keywords: post.tags.join(', '),
        ogTitle: post.title,
        ogDescription: post.excerpt,
        ogImage: 'https://testevery.com/og-image.png',
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "datePublished": post.date,
          "author": {
            "@type": "Organization",
            "name": "모두의 테스트"
          },
          "publisher": {
            "@type": "Organization",
            "name": "모두의 테스트",
            "url": "https://testevery.com"
          }
        }
      };

      const htmlContent = generateSEOHTML(seoData, `
      <div class="blog-content">
        <article>
          <header>
            <h1>${post.title}</h1>
            <div class="meta">
              <time datetime="${post.date}">${post.date}</time>
              <span class="category">${post.category}</span>
              <span class="read-time">${post.readTime}</span>
            </div>
          </header>
          <div class="content">
            ${post.content.split('\n').map(line => 
              line.trim() ? `<p>${line}</p>` : ''
            ).join('')}
          </div>
          <footer>
            <div class="tags">
              ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
          </footer>
        </article>
      </div>
    `);

      return res.send(htmlContent);
    }

    // For regular users, serve the SPA
    return res.redirect(`/#/blog/${postId}`);
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

  // Dynamic sitemap.xml generation
  app.get('/sitemap.xml', (req: Request, res: Response) => {
    console.log('[SEO Route] Generating sitemap.xml');

    const baseUrl = 'https://testevery.com';
    const currentDate = new Date().toISOString().split('T')[0];

    const testIds = Object.keys(tests);
    const blogPostIds = Object.keys(blogPosts);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Main Pages -->
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${baseUrl}/psychology</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>${baseUrl}/privacy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>

  <!-- Test Pages -->
  ${testIds.map(testId => `
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
  </url>`).join('')}

  <!-- Blog Posts -->
  ${blogPostIds.map(postId => `
  <url>
    <loc>${baseUrl}/blog/${postId}</loc>
    <lastmod>${blogPosts[postId].date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

    res.set('Content-Type', 'application/xml');
    res.set('Cache-Control', 'public, max-age=3600'); // 1시간 캐시
    res.send(sitemap);
  });

  // robots.txt
  app.get('/robots.txt', (req: Request, res: Response) => {
    console.log('[SEO Route] Serving robots.txt');

    const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://testevery.com/sitemap.xml

# Allow specific crawlers
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: NaverBot
Allow: /
Crawl-delay: 1

# Allow all important pages
Allow: /about
Allow: /psychology
Allow: /blog
Allow: /contact
Allow: /test/
Allow: /result/
Allow: /privacy
Allow: /terms

# Block unwanted areas
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /node_modules/
Disallow: /server/
Disallow: /client/
Disallow: /*.json$

# Crawl delay for better server performance
Crawl-delay: 1`;

    res.set('Content-Type', 'text/plain');
    res.set('Cache-Control', 'public, max-age=86400'); // 24시간 캐시
    res.send(robotsContent);
  });

  // Meta tags API for dynamic SEO
  app.get('/api/seo/:testId', (req: Request, res: Response) => {
    const { testId } = req.params;
    const seoData = generateTestPageSEO(testId);
    res.json(seoData);
  });

  // Setup debug routes
  setupDebugRoutes(app);

  // 일반적인 SPA 라우팅 (봇이 아닌 경우)
  app.get('*', (req: Request, res: Response) => {
    const userAgent = req.get('User-Agent') || '';
    const isBot = userAgent.includes('bot') || userAgent.includes('crawl') || userAgent.includes('spider') || userAgent.includes('Google');

    console.log(`[Catch-all] ${req.path} - User-Agent: ${userAgent.substring(0, 50)}... (Bot: ${isBot})`);

    // 정적 파일 요청인 경우 404 반환
    if (req.path.includes('.')) {
      console.log(`[Catch-all] Static file request: ${req.path}`);
      return res.status(404).send('File not found');
    }

    // 봇인 경우 기본 SEO 페이지 반환
    if (isBot) {
      const seoData = getDefaultSEO();
      const content = `
        <div class="seo-content">
          <h1>모두의 테스트</h1>
          <p>재미있는 심리테스트와 성격진단 플랫폼</p>
          <div class="test-info">
            <span>🧠 다양한 심리테스트</span>
            <span>📊 과학적 분석</span>
            <span>🎯 정확한 결과</span>
          </div>
        </div>
      `;

      const html = generateSEOHTML(seoData, content);
      return res.send(html);
    }

    // SPA 서빙
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });
}