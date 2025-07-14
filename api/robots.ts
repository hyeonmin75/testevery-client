import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://testevery.com/sitemap.xml

# Block crawling of test results with specific IDs to prevent indexing of user-generated content
Disallow: /result/*?id=*
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow all psychological test pages
Allow: /test/
Allow: /result/
Allow: /blog/

# Crawl-delay for polite crawling
Crawl-delay: 1`;

  res.setHeader('Content-Type', 'text/plain');
  return res.send(robotsContent);
}