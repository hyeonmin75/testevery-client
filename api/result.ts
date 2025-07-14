import type { VercelRequest, VercelResponse } from '@vercel/node';

// Test results data
const tests: Record<string, any> = {
  "mbti": {
    id: "mbti",
    title: "MBTI 성격유형 테스트",
    description: "16가지 성격 유형으로 나누어 보는 성격 검사",
    emoji: "🧭",
    results: {
      "INTJ": { title: "건축가", emoji: "🏗️", description: "전략적이고 독립적인 사상가" },
      "INFP": { title: "중재자", emoji: "🌈", description: "창의적이고 이상주의적인 몽상가" }
    }
  }
};

function generateSEOHTML(seoData: any, content: string) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${seoData.title}</title>
    <meta name="description" content="${seoData.description}">
    <meta name="keywords" content="${seoData.keywords}">
    <meta property="og:title" content="${seoData.ogTitle}">
    <meta property="og:description" content="${seoData.ogDescription}">
    <meta property="og:image" content="${seoData.ogImage}">
    <link rel="canonical" href="https://testevery.com/result/${seoData.testId}">
    <script type="application/ld+json">${JSON.stringify(seoData.jsonLd)}</script>
</head>
<body>
    ${content}
</body>
</html>`;
}

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
    
    const seoData = {
      title: `${test.title} 결과 | 모두의 테스트`,
      description: `${test.title} 결과를 확인해보세요`,
      keywords: `${test.title}, 결과, 성격검사`,
      ogTitle: `${test.title} 결과`,
      ogDescription: `${test.title} 결과를 확인해보세요`,
      ogImage: 'https://testevery.com/og-image.png',
      testId: test.id,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${test.title} 결과`,
        "description": `${test.title} 결과를 확인해보세요`,
        "url": `https://testevery.com/result/${testId}`
      }
    };
    
    const htmlContent = generateSEOHTML(seoData, `
      <div class="result-content">
        <div class="result-header">
          <div class="test-icon">${test.emoji}</div>
          <h1>${test.title} 결과</h1>
          <p class="test-description">당신의 ${test.title} 결과를 확인해보세요</p>
        </div>
        <div class="result-types">
          ${Object.values(test.results).map((result: any) => `
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
  return res.redirect(301, `/#/result/${testId}`);
}