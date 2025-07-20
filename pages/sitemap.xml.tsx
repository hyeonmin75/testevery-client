import { GetServerSideProps } from 'next';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://testevery.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // 테스트 페이지 ID 목록
  const testIds = [
    'mbti',
    'egen_teto',
    'burnout_risk_test',
    'tapping_endurance',
    'intuition_test',
    'animal',
    'love',
    'career',
    'reaction_speed',
    'travel',
    'color',
    'food',
    'game_character',
    'season',
    'disney',
    'food_personality',
    'study_style',
    'healing_style',
    'fairytale',
    'pet',
    'friendship'
  ];

  // 블로그 포스트 ID 목록
  const blogPostIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

<!-- Homepage -->
<url>
  <loc>${baseUrl}</loc>
  <lastmod>${currentDate}T00:00:00+00:00</lastmod>
  <changefreq>daily</changefreq>
  <priority>1.0</priority>
</url>

<!-- Main Pages -->
<url>
  <loc>${baseUrl}/about</loc>
  <lastmod>${currentDate}T00:00:00+00:00</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>

<url>
  <loc>${baseUrl}/contact</loc>
  <lastmod>${currentDate}T00:00:00+00:00</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>

<url>
  <loc>${baseUrl}/privacy</loc>
  <lastmod>${currentDate}T00:00:00+00:00</lastmod>
  <changefreq>yearly</changefreq>
  <priority>0.5</priority>
</url>

<!-- Blog -->
<url>
  <loc>${baseUrl}/blog</loc>
  <lastmod>${currentDate}T00:00:00+00:00</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>

<!-- Tests -->
${testIds.map(testId => `<url>
  <loc>${baseUrl}/test/${testId}</loc>
  <lastmod>${currentDate}T00:00:00+00:00</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>`).join('\n')}

<!-- Blog Posts -->
${blogPostIds.map(postId => `<url>
  <loc>${baseUrl}/post/${postId}</loc>
  <lastmod>${currentDate}T00:00:00+00:00</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>`).join('\n')}

</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;