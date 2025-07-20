// @vercel/node

// Blog posts data
const blogPosts = [
  {id: "psychology-research-methods", title: "심리학 연구 방법론: 과학적 접근법과 측정 도구의 이해", date: "2024-12-07"},
  {id: "concentration-focus-psychology", title: "집중력과 주의력의 심리학: 디지털 시대의 인지적 도전과 해결책", date: "2024-11-20"},
  {id: "intuition-psychology-decision", title: "직감의 심리학: 무의식적 의사결정과 직관적 판단의 과학", date: "2024-12-01"}
];

// Test data
const tests = {
  "mbti": {id: "mbti"},
  "concentration": {id: "concentration"},
  "egen_teto": {id: "egen_teto"},
  "emotional_tank": {id: "emotional_tank"},
  "creativity": {id: "creativity"}
};

module.exports = function handler(req, res) {
  const baseUrl = 'https://testevery.com';
  
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main pages -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Blog posts -->
  ${blogPosts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.id}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  
  <!-- Test pages -->
  ${Object.keys(tests).map(testId => `
  <url>
    <loc>${baseUrl}/test/${testId}</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/result/${testId}</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  return res.send(sitemapContent);
}