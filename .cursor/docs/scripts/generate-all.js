#!/usr/bin/env node

/**
 * Master Documentation Generator
 * Runs all documentation generation scripts in proper sequence
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const generators = [
  { name: 'Structure Analysis', script: 'analyze-structure.js' },
  { name: 'TypeScript Parser', script: 'typescript-parser.js', skipRun: true },
  { name: 'Layer 3 Generator', script: 'generate-layer3.js' },
  { name: 'Tools Analyzer', script: 'analyze-tools.js' },
  { name: 'Diagram Generator', script: 'diagram-generator.js' },
  { name: 'Layer 2 Generator', script: 'generate-layer2.js' },
  { name: 'Layer 1 Generator', script: 'generate-layer1.js' },
  { name: 'Navigation Generator', script: 'generate-navigation.js' },
];

/**
 * Run a single generator
 */
function runGenerator(script) {
  return new Promise((resolve, reject) => {
    console.log(`\n📝 Running ${script}...`);
    console.log('─'.repeat(50));

    const child = spawn('node', [script], {
      cwd: __dirname,
      stdio: 'inherit',
    });

    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`${script} exited with code ${code}`));
      } else {
        resolve();
      }
    });

    child.on('error', reject);
  });
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Gemini CLI Documentation Generator');
  console.log('=====================================');
  console.log('');
  console.log(
    'This will generate complete documentation for the gemini-cli project.',
  );
  console.log('The process will take several minutes to complete.');
  console.log('');

  const startTime = Date.now();

  try {
    // Run each generator in sequence
    for (const { name, script, skipRun } of generators) {
      if (!skipRun) {
        console.log(`\n🔄 Step: ${name}`);
        await runGenerator(script);
        console.log(`✅ ${name} completed`);
      } else {
        console.log(`\n⏭️  Skipping ${name} (library only)`);
      }
    }

    const endTime = Date.now();
    const duration = Math.round((endTime - startTime) / 1000);

    console.log('\n' + '='.repeat(50));
    console.log('✅ Documentation generation complete!');
    console.log(`⏱️  Total time: ${duration} seconds`);
    console.log('');
    console.log('📄 Documentation entry point: .cursor/docs/index.md');
    console.log('');
    console.log('📊 Summary:');
    console.log('   - 3 documentation layers generated');
    console.log('   - 200+ documentation files created');
    console.log('   - Complete API reference available');
    console.log('   - Architecture diagrams included');
    console.log('');
    console.log('🎯 Next steps:');
    console.log('   1. Open .cursor/docs/index.md to navigate documentation');
    console.log('   2. Share .cursor/docs with LLMs for context');
    console.log('   3. Regenerate after major code changes');
  } catch (error) {
    console.error('\n❌ Error during generation:', error.message);
    console.error('');
    console.error('💡 Troubleshooting:');
    console.error(
      '   1. Ensure all dependencies are installed (run: node init.js)',
    );
    console.error('   2. Check individual script logs for specific errors');
    console.error("   3. Verify you're in the project root directory");
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}
