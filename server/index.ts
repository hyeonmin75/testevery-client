#!/usr/bin/env node

// Simple server that starts Next.js dev server
// This matches the workflow configuration while keeping Next.js functionality

import { spawn } from 'child_process';
import { join } from 'path';

const projectDir = join(process.cwd());

console.log('Starting Next.js development server...');

// Start Next.js dev server on port 5000
const nextProcess = spawn('npx', ['next', 'dev', '-p', '5000'], {
  cwd: projectDir,
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'development',
    PORT: '5000'
  }
});

nextProcess.on('close', (code) => {
  console.log(`Next.js process exited with code ${code}`);
  process.exit(code || 0);
});

nextProcess.on('error', (err) => {
  console.error('Failed to start Next.js server:', err);
  process.exit(1);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nShutting down Next.js server...');
  nextProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('Shutting down Next.js server...');
  nextProcess.kill('SIGTERM');
});