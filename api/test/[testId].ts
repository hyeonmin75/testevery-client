import type { VercelRequest, VercelResponse } from '@vercel/node';
import { tests } from '../../client/src/data/tests';
import { generateTestPageSEO, generateSEOHTML } from '../../server/seo';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { testId } = req.query;
  const userAgent = req.headers['user-agent'] || '';
  const isBot = userAgent.includes('bot') || userAgent.includes('crawl') || userAgent.includes('spider');
  
  console.log(`[Vercel API] GET /test/${testId} - User-Agent: ${userAgent.substring(0, 50)}...`);
  
  if (isBot) {
    const test = tests[testId as string];
    if (!test) {
      return res.status(404).send('Test not found');
    }
    
    const seoData = generateTestPageSEO(testId as string);
    const htmlContent = generateSEOHTML(seoData, `
      <div class="test-content">
        <div class="test-header">
          <div class="test-icon">${test.emoji}</div>
          <h1>${test.title}</h1>
          <p class="test-description">${test.description}</p>
          <div class="test-meta">
            <span class="duration">${test.duration}</span>
            <span class="questions">${test.questionCount}개 질문</span>
            <span class="participants">${test.participants.toLocaleString()}명 참여</span>
          </div>
        </div>
        <div class="test-start">
          <button onclick="window.location.href='/#/test/${testId}'" class="start-button">
            테스트 시작하기
          </button>
        </div>
      </div>
    `);
    
    return res.send(htmlContent);
  }
  
  // For regular users, redirect to SPA
  return res.redirect(`/#/test/${testId}`);
}