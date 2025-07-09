/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Google AdSense를 위한 외부 스크립트 허용
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
      },
      {
        source: '/robots.txt',
        destination: '/robots.txt',
      },
    ];
  },
  // 사이트맵 및 robots.txt 생성을 위한 설정
  trailingSlash: false,
  poweredByHeader: false,
};

module.exports = nextConfig;