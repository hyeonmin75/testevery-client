import type { VercelRequest, VercelResponse } from '@vercel/node';
import { tests } from '../../client/src/data/tests';
import { generateResultPageSEO, generateSEOHTML } from '../../server/seo';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { testId } = req.query;
  const userAgent = req.headers['user-agent'] || '';
  const isBot = userAgent.includes('bot') || userAgent.includes('crawl') || userAgent.includes('spider');
  
  console.log(`[Vercel API] GET /result/${testId} - User-Agent: ${userAgent.substring(0, 50)}...`);
  
  if (isBot) {
    const test = tests[testId as string];
    if (!test) {
      return res.status(404).send('Test not found');
    }
    
    const seoData = generateResultPageSEO(testId as string);
    const htmlContent = generateSEOHTML(seoData, `
      <div class="result-content">
        <div class="result-header">
          <div class="test-icon">${test.emoji}</div>
          <h1>${test.title} 결과</h1>
          <p class="test-description">당신의 ${test.title} 결과를 확인해보세요</p>
        </div>
        <div class="result-types">
          ${Object.values(test.results).map(result => `
            <div class="result-type">
              <div class="result-emoji">${result.emoji}</div>
              <h3>${result.title}</h3>
              <p>${result.description}</p>
            </div>
          `).join('')}
        </div>
        <div class="test-start">
          <button onclick="window.location.href='/#/test/${testId}'" class="start-button">
            테스트 하러가기
          </button>
        </div>
      </div>
    `);
    
    return res.send(htmlContent);
  }
  
  // For regular users, redirect to SPA
  return res.redirect(`/#/result/${testId}`);
}