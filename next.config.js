/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic development configuration
  trailingSlash: true,
  
  // Images optimization for development
  images: {
    unoptimized: true,
  },
  
  // Webpack optimization
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };
    return config;
  },
};

module.exports = nextConfig;