import { tests } from '../client/src/data/tests';

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  jsonLd: any;
}

export function generateTestPageSEO(testId: string): SEOData {
  const test = tests[testId];
  
  if (!test) {
    return getDefaultSEO();
  }

  const title = `${test.title} | 모두의 테스트`;
  const description = `${test.description} 지금 바로 ${test.title}를 통해 자신을 더 깊이 알아보세요. ${test.participants.toLocaleString()}명이 참여한 인기 테스트입니다.`;
  const keywords = `${test.title}, 심리테스트, 성격테스트, 자가진단, ${testId}, 온라인테스트`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": `https://testevery.com/test/${testId}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "모두의 테스트",
      "url": "https://testevery.com"
    },
    "about": {
      "@type": "Thing",
      "name": test.title,
      "description": test.description
    },
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/PlayAction",
      "userInteractionCount": test.participants
    }
  };

  return {
    title,
    description,
    keywords,
    ogTitle: title,
    ogDescription: description,
    ogImage: "https://testevery.com/og-image.png",
    jsonLd
  };
}

export function generateResultPageSEO(testId: string, resultId?: string): SEOData {
  const test = tests[testId];
  
  if (!test) {
    return getDefaultSEO();
  }

  let title = `${test.title} 결과 | 모두의 테스트`;
  let description = `${test.title} 결과를 확인하고 자신의 성격을 더 깊이 알아보세요.`;

  if (resultId && test.results[resultId]) {
    const result = test.results[resultId];
    title = `${result.title} - ${test.title} 결과 | 모두의 테스트`;
    description = `당신은 ${result.title}입니다! ${result.description} ${test.title} 결과를 친구들과 공유해보세요.`;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": `https://testevery.com/result/${testId}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "모두의 테스트",
      "url": "https://testevery.com"
    }
  };

  return {
    title,
    description,
    keywords: `${test.title}, 결과, 심리테스트 결과, 성격분석`,
    ogTitle: title,
    ogDescription: description,
    ogImage: "https://testevery.com/og-image.png",
    jsonLd
  };
}

export function getDefaultSEO(): SEOData {
  return {
    title: "모두의 테스트 - 재미있는 심리테스트와 성격진단",
    description: "MBTI, 에겐-테토, 창의력 진단 등 다양한 심리테스트로 자신을 알아보세요. 200,000명이 선택한 신뢰할 수 있는 온라인 테스트 플랫폼입니다.",
    keywords: "심리테스트, 성격테스트, MBTI, 에겐테토, 창의력테스트, 자가진단, 온라인테스트",
    ogTitle: "모두의 테스트 - 재미있는 심리테스트와 성격진단",
    ogDescription: "MBTI, 에겐-테토, 창의력 진단 등 다양한 심리테스트로 자신을 알아보세요.",
    ogImage: "https://testevery.com/og-image.png",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "모두의 테스트",
      "url": "https://testevery.com",
      "description": "재미있는 심리테스트와 성격진단 플랫폼",
      "publisher": {
        "@type": "Organization",
        "name": "모두의 테스트"
      }
    }
  };
}

export function generateSEOHTML(seoData: SEOData, content: string): string {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${seoData.title}</title>
    <meta name="description" content="${seoData.description}">
    <meta name="keywords" content="${seoData.keywords}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${seoData.ogTitle}">
    <meta property="og:description" content="${seoData.ogDescription}">
    <meta property="og:image" content="${seoData.ogImage}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="모두의 테스트">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${seoData.ogTitle}">
    <meta name="twitter:description" content="${seoData.ogDescription}">
    <meta name="twitter:image" content="${seoData.ogImage}">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://testevery.com${content.includes('/test/') ? content : '/'}">
    
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    ${JSON.stringify(seoData.jsonLd, null, 2)}
    </script>
    
    <!-- CSS -->
    <link rel="stylesheet" href="/assets/index.css">
    
    <!-- Robots -->
    <meta name="robots" content="index, follow">
    
    <!-- Additional SEO -->
    <meta name="author" content="모두의 테스트">
    <meta name="language" content="Korean">
    <meta name="revisit-after" content="7 days">
</head>
<body>
    <div id="root">${content}</div>
    
    <!-- JavaScript will hydrate this -->
    <script>
        // Redirect to SPA after SEO crawling
        if (typeof window !== 'undefined' && window.navigator.userAgent.indexOf('bot') === -1) {
            // Only redirect for real users, not bots
            setTimeout(() => {
                window.location.href = window.location.pathname;
            }, 100);
        }
    </script>
    <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;
}