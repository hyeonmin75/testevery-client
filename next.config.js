/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Vercel optimized deployment
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Images optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Disable experimental features for stability
  experimental: {
    // Removed experimental features that might cause issues
  },
  
  // SEO optimized redirects for deleted pages
  async redirects() {
    return [
      // 301 redirects for old or deleted pages
      {
        source: '/old-test/:slug*',
        destination: '/test/:slug*',
        permanent: true,
      },
      {
        source: '/legacy/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // SEO and security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
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
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          },
        ],
      },
    ];
  },
  
  // Webpack optimization for better performance
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };
    return config;
  },
};

module.exports = nextConfig;