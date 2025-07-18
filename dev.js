#!/usr/bin/env node
const { spawn } = require('child_process');

// Start Next.js development server
console.log('🚀 Starting Next.js development server...');
const nextProcess = spawn('npx', ['next', 'dev', '-p', '5000'], {
  stdio: 'inherit',
  shell: true
});

nextProcess.on('close', (code) => {
  console.log(`Next.js dev server exited with code ${code}`);
});

process.on('SIGINT', () => {
  console.log('Shutting down development server...');
  nextProcess.kill();
  process.exit(0);
});