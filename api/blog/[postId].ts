import type { VercelRequest, VercelResponse } from '@vercel/node';
import { blogPosts } from '../../client/src/data/blogPosts';
import { generateSEOHTML } from '../../server/seo';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { postId } = req.query;
  const userAgent = req.headers['user-agent'] || '';
  const isBot = userAgent.includes('bot') || userAgent.includes('crawl') || userAgent.includes('spider');
  
  console.log(`[Vercel API] GET /blog/${postId} - User-Agent: ${userAgent.substring(0, 50)}...`);
  
  if (isBot) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) {
      return res.status(404).send('Blog post not found');
    }
    
    const seoData = {
      title: `${post.title} | 모두의 테스트`,
      description: post.excerpt,
      keywords: post.tags.join(', '),
      ogTitle: post.title,
      ogDescription: post.excerpt,
      ogImage: 'https://testevery.com/og-image.png',
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
  return res.redirect(`/#/blog/${postId}`);
}