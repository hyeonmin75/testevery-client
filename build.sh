#!/bin/bash

# Build script for Next.js deployment
echo "Building Next.js application..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm ci
fi

# Build Next.js application using the correct command
echo "Building with Next.js..."
npx next build

echo "Build completed successfully!"
echo "Output directory: ./out"
ls -la out/ || echo "Output directory not found, checking .next..."
ls -la .next/ || echo "No build output found"