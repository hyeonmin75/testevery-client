import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.testevery.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/test/',
          '/result/',
          '/blog/',
          '/about',
          '/contact',
          '/privacy',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/',
          '/analytics/',
          '/temp/',
          '/*.json$',
          '/tracking/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/analytics/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/analytics/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}