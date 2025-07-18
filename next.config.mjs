/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for optimal SEO
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Optimize images for better performance
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Enable experimental features for better SEO
  experimental: {
    optimizeCss: true,
  },
  
  // Redirects for old URLs (prevent 404s)
  async redirects() {
    return [
      // Legacy redirects
      {
        source: '/old-page/:path*',
        destination: '/new-page/:path*',
        permanent: true, // 301 redirect
      },
    ]
  },
  
  // Headers for better SEO and security
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
        ],
      },
    ]
  },
}

export default nextConfig