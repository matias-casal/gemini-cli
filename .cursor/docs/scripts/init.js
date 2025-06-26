#!/usr/bin/env node

/**
 * Initialization script for gemini-cli documentation generator
 * Installs necessary dependencies for documentation generation
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __dirname = dirname(fileURLToPath(import.meta.url));

async function init() {
  console.log('🚀 Initializing gemini-cli documentation generator...\n');

  try {
    console.log('📦 Installing dependencies...');
    const { stdout, stderr } = await execAsync('npm install', {
      cwd: __dirname,
    });

    if (stderr && !stderr.includes('npm notice')) {
      console.error('⚠️  Warning:', stderr);
    }

    console.log(stdout);
    console.log('✅ Dependencies installed successfully!\n');
    console.log('📝 You can now run documentation generation with:');
    console.log('   node generate-all.js\n');
  } catch (error) {
    console.error('❌ Error installing dependencies:', error.message);
    process.exit(1);
  }
}

// Run initialization
init().catch(console.error);
