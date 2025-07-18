#!/bin/bash

# Build script for Next.js deployment
echo "Building Next.js application for deployment..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm ci
fi

# Clean previous builds
echo "Cleaning previous builds..."
rm -rf .next out dist

# Build Next.js application using the correct command
echo "Building with Next.js..."
npx next build

echo "Build completed successfully!"
echo "Output directory: ./out"
ls -la out/ || echo "Output directory not found, checking .next..."
ls -la .next/ || echo "No build output found"

# Verify critical files exist
if [ -f "out/index.html" ]; then
  echo "✅ Static export successful - index.html found"
else
  echo "❌ Build may have failed - no index.html found"
  exit 1
fi