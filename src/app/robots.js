export const dynamic = 'force-static'
export const revalidate = false

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/private/',
        '/temp/',
        '/*.json$',
        '/*?*utm_*',
        '/*?*fbclid*',
        '/*?*gclid*',
      ],
    },
    sitemap: 'https://www.testevery.com/sitemap.xml',
    host: 'https://www.testevery.com',
  };
}