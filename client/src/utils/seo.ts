// Client-side SEO utilities
export function updateMetaTags(data: {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}) {
  // Update title
  if (data.title) {
    document.title = data.title;
  }
  
  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, property = false) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', name);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  };
  
  // Update standard meta tags
  if (data.description) {
    updateMetaTag('description', data.description);
  }
  
  if (data.keywords) {
    updateMetaTag('keywords', data.keywords);
  }
  
  // Update Open Graph tags
  if (data.ogTitle) {
    updateMetaTag('og:title', data.ogTitle, true);
  }
  
  if (data.ogDescription) {
    updateMetaTag('og:description', data.ogDescription, true);
  }
  
  if (data.ogImage) {
    updateMetaTag('og:image', data.ogImage, true);
  }
  
  // Update canonical URL
  if (data.canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', data.canonicalUrl);
  }
}

export function addStructuredData(data: any) {
  // Remove existing structured data
  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) {
    existing.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data, null, 2);
  document.head.appendChild(script);
}

export function generateTestPageStructuredData(testId: string, testData: any) {
  const baseUrl = window.location.origin;
  
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${testData.title} | 모두의 테스트`,
    "description": testData.description,
    "url": `${baseUrl}/test/${testId}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "모두의 테스트",
      "url": baseUrl
    },
    "about": {
      "@type": "Thing",
      "name": testData.title,
      "description": testData.description
    },
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/PlayAction",
      "userInteractionCount": testData.participants
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "일반인"
    },
    "inLanguage": "ko"
  };
}