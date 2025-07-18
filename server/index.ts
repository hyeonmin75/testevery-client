// Simple development server that redirects to Next.js
import { createServer } from 'http';
import { spawn } from 'child_process';

const PORT = process.env.PORT || 5000;

// Start Next.js development server
const nextProcess = spawn('npx', ['next', 'dev', '-p', PORT.toString()], {
  stdio: 'inherit',
  env: { ...process.env }
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('Shutting down server...');
  nextProcess.kill();
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Shutting down server...');
  nextProcess.kill();
  process.exit(0);
});

nextProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`Next.js process exited with code ${code}`);
    process.exit(code);
  }
});

console.log(`Starting Next.js development server on port ${PORT}...`);