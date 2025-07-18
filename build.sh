#!/bin/bash

echo "🚀 Building TestEvery website..."

# Install dependencies if not present
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the Next.js application
echo "🏗️ Building Next.js application..."
npx next build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files generated in 'out' directory"
    echo "🌐 Ready for deployment to Vercel or other static hosting"
else
    echo "❌ Build failed!"
    exit 1
fi

# Display build output info
echo ""
echo "📊 Build Summary:"
echo "- Next.js version: $(npx next --version)"
echo "- Output directory: ./out"
echo "- Deployment target: static"
echo "- Site ready for: www.testevery.com"

echo ""
echo "🚀 Deployment Instructions:"
echo "1. Upload 'out' directory to your static host"
echo "2. Or use 'vercel' command for Vercel deployment"
echo "3. Configure domain: www.testevery.com"