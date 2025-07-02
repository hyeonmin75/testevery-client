/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 이미지 최적화 설정
  images: {
    domains: ['testevery.com'],
  },
  // SEO 및 성능 최적화
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  // 환경 변수 설정
  env: {
    SITE_URL: 'https://testevery.com',
  },
}

module.exports = nextConfig