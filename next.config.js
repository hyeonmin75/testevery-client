/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['testevery.com'],
  },
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  env: {
    SITE_URL: 'https://www.testevery.com',
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig