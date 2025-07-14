import type { VercelRequest, VercelResponse } from '@vercel/node';

// Complete blog posts data
const blogPosts = [
  {
    id: "psychology-research-methods",
    title: "심리학 연구 방법론: 과학적 접근법과 측정 도구의 이해",
    excerpt: "심리학 연구의 과학적 방법론과 신뢰할 수 있는 측정 도구 개발 과정을 상세히 분석합니다.",
    date: "2024-12-07",
    category: "연구 방법론",
    readTime: "12분",
    content: "심리학은 인간의 마음과 행동을 과학적으로 연구하는 학문입니다. 신뢰할 수 있는 연구 결과를 얻기 위해서는 엄격한 방법론적 접근이 필요합니다.",
    tags: ["심리학", "연구방법론", "측정도구", "과학적접근"]
  },
  {
    id: "concentration-focus-psychology",
    title: "집중력과 주의력의 심리학: 디지털 시대의 인지적 도전과 해결책",
    excerpt: "현대 디지털 환경에서 집중력 저하 문제를 심리학적 관점에서 분석하고, 효과적인 집중력 향상 전략을 제시합니다.",
    date: "2024-11-20",
    category: "인지 심리학",
    readTime: "15분",
    content: "디지털 시대의 집중력 문제는 현대인이 직면한 가장 중요한 인지적 도전 중 하나입니다. 스마트폰, 소셜미디어, 멀티태스킹 환경이 우리의 주의력 체계에 미치는 영향을 심리학적으로 분석해보겠습니다.",
    tags: ["집중력", "주의력", "디지털", "인지심리학"]
  },
  {
    id: "intuition-psychology-decision",
    title: "직감의 심리학: 무의식적 의사결정과 직관적 판단의 과학",
    excerpt: "직감과 직관의 심리학적 메커니즘을 탐구하고, 일상 생활에서 직관적 판단을 활용하는 방법과 한계를 분석합니다.",
    date: "2024-12-01",
    category: "의사결정 심리학",
    readTime: "12분",
    content: "직감은 인간의 고유한 능력으로, 적절히 활용하면 삶의 질을 크게 향상시킬 수 있습니다. 논리와 직감의 균형 잡힌 활용이 현명한 의사결정의 열쇠입니다.",
    tags: ["직감", "의사결정", "무의식", "인지편향"]
  }
];

// Simple SEO HTML generator
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
    <meta property="og:url" content="https://testevery.com/blog/${seoData.postId}">
    <link rel="canonical" href="https://testevery.com/blog/${seoData.postId}">
    <script type="application/ld+json">${JSON.stringify(seoData.jsonLd)}</script>
</head>
<body>
    ${content}
</body>
</html>`;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { postId } = req.query;
  const userAgent = req.headers['user-agent'] || '';
  const isBot = userAgent.includes('bot') || userAgent.includes('crawl') || userAgent.includes('spider');
  
  console.log(`[Vercel API] GET /blog/${postId} - User-Agent: ${userAgent.substring(0, 50)}...`);
  
  if (isBot) {
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
      postId: post.id,
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
  
  // For regular users, redirect to SPA
  return res.redirect(301, `/#/blog/${postId}`);
}