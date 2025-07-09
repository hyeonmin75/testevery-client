import { GetServerSideProps } from 'next';

const RobotsTxt = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://testevery.com';
  
  const robots = `# robots.txt for testevery.com - 심리학 교육과 성격 분석 플랫폼

User-agent: *
Allow: /

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

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

# Disallow admin and system areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /node_modules/
Disallow: /*.json$
Disallow: /server/
Disallow: /client/

# Allow important directories
Allow: /test/
Allow: /blog/
Allow: /post/
Allow: /about
Allow: /contact
Allow: /privacy

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robots);
  res.end();

  return {
    props: {},
  };
};

export default RobotsTxt;