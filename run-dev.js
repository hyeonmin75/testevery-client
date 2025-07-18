#!/usr/bin/env node
/**
 * Development server startup script for TestEvery
 * This script starts the Next.js development server on port 5000
 */

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting TestEvery (Next.js) development server...');
console.log('Port: 5000');
console.log('Environment: development');

// Start Next.js development server
const nextProcess = spawn('npx', ['next', 'dev', '-p', '5000'], {
  stdio: 'inherit',
  shell: true,
  cwd: process.cwd()
});

// Handle process events
nextProcess.on('close', (code) => {
  console.log(`\n🛑 Development server exited with code ${code}`);
  process.exit(code);
});

nextProcess.on('error', (error) => {
  console.error('❌ Failed to start development server:', error);
  process.exit(1);
});

// Handle shutdown gracefully
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down development server...');
  nextProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Terminating development server...');
  nextProcess.kill('SIGTERM');
});