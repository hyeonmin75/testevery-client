import type { VercelRequest, VercelResponse } from '@vercel/node';

// Test data
const tests: Record<string, any> = {
  "mbti": {
    id: "mbti",
    title: "MBTI 성격유형 테스트",
    description: "16가지 성격 유형으로 나누어 보는 성격 검사",
    emoji: "🧭",
    color: "from-blue-400 to-purple-600",
    duration: "10-15분",
    questionCount: 60,
    participants: 1250000,
    results: {}
  },
  "concentration": {
    id: "concentration",
    title: "집중력 테스트",
    description: "당신의 집중력과 주의력을 측정해보세요",
    emoji: "🎯",
    color: "from-green-400 to-blue-500",
    duration: "5분",
    questionCount: 15,
    participants: 450000,
    results: {}
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
    <link rel="canonical" href="https://testevery.com/test/${seoData.testId}">
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
  
  console.log(`[Vercel API] GET /test/${testId} - User-Agent: ${userAgent.substring(0, 50)}...`);
  
  if (isBot) {
    const test = tests[testId as string];
    if (!test) {
      return res.status(404).send('Test not found');
    }
    
    const seoData = {
      title: `${test.title} | 모두의 테스트`,
      description: test.description,
      keywords: `${test.title}, 심리테스트, 성격검사`,
      ogTitle: test.title,
      ogDescription: test.description,
      ogImage: 'https://testevery.com/og-image.png',
      testId: test.id,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": test.title,
        "description": test.description,
        "url": `https://testevery.com/test/${testId}`
      }
    };
    
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
  return res.redirect(301, `/#/test/${testId}`);
}