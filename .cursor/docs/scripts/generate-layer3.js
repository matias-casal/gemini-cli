#!/usr/bin/env node

/**
 * Layer 3 Documentation Generator
 * Creates exhaustive documentation for all components
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import { extractAPIs } from './typescript-parser.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../..');
const outputDir = path.join(
  __dirname,
  '../llm-layers/3-implementation-reference',
);

/**
 * Generate markdown for a component
 */
function generateComponentMarkdown(apiInfo, relativePath) {
  const lines = [];
  const componentName = path.basename(
    apiInfo.filePath,
    path.extname(apiInfo.filePath),
  );

  lines.push(`# ${componentName}`);
  lines.push('');
  lines.push(`**File**: \`${relativePath}\``);
  lines.push(
    `**Package**: ${relativePath.startsWith('packages/cli') ? 'CLI' : 'Core'}`,
  );
  lines.push('');

  // Summary
  lines.push('## Summary');
  lines.push('');
  lines.push(`- **Total Exports**: ${apiInfo.stats.totalExports}`);
  lines.push(`- **Interfaces**: ${apiInfo.stats.interfaces}`);
  lines.push(`- **Types**: ${apiInfo.stats.types}`);
  lines.push(`- **Functions**: ${apiInfo.stats.functions}`);
  lines.push(`- **Classes**: ${apiInfo.stats.classes}`);
  lines.push('');

  // Interfaces
  if (apiInfo.interfaces.length > 0) {
    lines.push('## Interfaces');
    lines.push('');

    for (const iface of apiInfo.interfaces) {
      lines.push(`### \`${iface.name}\``);
      lines.push('');

      if (iface.extends.length > 0) {
        lines.push(`**Extends**: ${iface.extends.join(', ')}`);
        lines.push('');
      }

      lines.push('#### Properties');
      lines.push('');

      if (iface.properties.length > 0) {
        lines.push('| Property | Type | Optional |');
        lines.push('|----------|------|----------|');

        for (const prop of iface.properties) {
          lines.push(
            `| \`${prop.name}\` | \`${prop.type}\` | ${prop.optional ? 'Yes' : 'No'} |`,
          );
        }
      } else {
        lines.push('*No properties defined*');
      }

      lines.push('');
    }
  }

  // Types
  if (apiInfo.types.length > 0) {
    lines.push('## Type Aliases');
    lines.push('');

    for (const type of apiInfo.types) {
      lines.push(`### \`${type.name}\``);
      lines.push('');
      lines.push('```typescript');
      lines.push(`type ${type.name} = ${type.definition};`);
      lines.push('```');
      lines.push('');
    }
  }

  // Functions
  if (apiInfo.functions.length > 0) {
    lines.push('## Functions');
    lines.push('');

    for (const func of apiInfo.functions) {
      lines.push(`### \`${func.name}\``);
      lines.push('');

      // Function signature
      const params = func.params
        .map((p) => `${p.name}${p.optional ? '?' : ''}: ${p.type}`)
        .join(', ');
      const asyncStr = func.async ? 'async ' : '';

      lines.push('```typescript');
      lines.push(
        `${asyncStr}function ${func.name}(${params}): ${func.returnType}`,
      );
      lines.push('```');
      lines.push('');

      // Parameters table
      if (func.params.length > 0) {
        lines.push('#### Parameters');
        lines.push('');
        lines.push('| Name | Type | Optional | Description |');
        lines.push('|------|------|----------|-------------|');

        for (const param of func.params) {
          lines.push(
            `| \`${param.name}\` | \`${param.type}\` | ${param.optional ? 'Yes' : 'No'} | - |`,
          );
        }

        lines.push('');
      }

      lines.push(`**Returns**: \`${func.returnType}\``);
      lines.push('');
    }
  }

  // Classes
  if (apiInfo.classes.length > 0) {
    lines.push('## Classes');
    lines.push('');

    for (const cls of apiInfo.classes) {
      lines.push(`### \`${cls.name}\``);
      lines.push('');

      if (cls.extends) {
        lines.push(`**Extends**: \`${cls.extends}\``);
        lines.push('');
      }

      // Properties
      if (cls.properties.length > 0) {
        lines.push('#### Properties');
        lines.push('');
        lines.push('| Name | Static | Readonly |');
        lines.push('|------|--------|----------|');

        for (const prop of cls.properties) {
          lines.push(
            `| \`${prop.name}\` | ${prop.static ? 'Yes' : 'No'} | ${prop.readonly ? 'Yes' : 'No'} |`,
          );
        }

        lines.push('');
      }

      // Methods
      if (cls.methods.length > 0) {
        lines.push('#### Methods');
        lines.push('');

        for (const method of cls.methods) {
          const params = method.params
            .map((p) => `${p.name}: ${p.type}`)
            .join(', ');
          const staticStr = method.static ? 'static ' : '';
          const asyncStr = method.async ? 'async ' : '';

          lines.push(
            `##### \`${staticStr}${asyncStr}${method.name}(${params})\``,
          );
          lines.push('');
        }
      }
    }
  }

  // Code example
  lines.push('## Usage Example');
  lines.push('');
  lines.push('```typescript');
  lines.push(
    `import { /* components */ } from '${relativePath.replace(/\.ts$/, '.js')}';`,
  );
  lines.push('```');

  return lines.join('\n');
}

/**
 * Process all TypeScript files in a directory
 */
async function processDirectory(dirPath, outputSubDir) {
  const files = await glob('**/*.{ts,tsx}', {
    cwd: dirPath,
    ignore: [
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/node_modules/**',
      '**/dist/**',
    ],
  });

  let processedCount = 0;
  const failedFiles = [];

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const relativePath = path.relative(projectRoot, fullPath);

    try {
      const apiInfo = await extractAPIs(fullPath);

      if (apiInfo && apiInfo.stats.totalExports > 0) {
        // Generate markdown
        const markdown = generateComponentMarkdown(apiInfo, relativePath);

        // Create output path
        const outputPath = path.join(
          outputSubDir,
          file.replace(/\.tsx?$/, '.md'),
        );
        await fs.mkdir(path.dirname(outputPath), { recursive: true });

        // Write file
        await fs.writeFile(outputPath, markdown);
        processedCount++;
      }
    } catch (error) {
      console.warn(`Failed to process ${file}: ${error.message}`);
      failedFiles.push(file);
    }
  }

  return { processedCount, failedFiles, totalFiles: files.length };
}

/**
 * Generate index for Layer 3
 */
async function generateIndex(stats) {
  const lines = [];

  lines.push('# Layer 3: Implementation Reference');
  lines.push('');
  lines.push(
    'Complete API documentation for all components in the gemini-cli project.',
  );
  lines.push('');
  lines.push('## Overview');
  lines.push('');
  lines.push(`- **Total Components Documented**: ${stats.totalProcessed}`);
  lines.push(`- **CLI Package Components**: ${stats.cli.processedCount}`);
  lines.push(`- **Core Package Components**: ${stats.core.processedCount}`);
  lines.push('');

  // CLI Components
  lines.push('## CLI Package Components');
  lines.push('');
  lines.push('### UI Components');
  lines.push('- [Components](./cli/src/ui/components/)');
  lines.push('- [Hooks](./cli/src/ui/hooks/)');
  lines.push('- [Contexts](./cli/src/ui/contexts/)');
  lines.push('');
  lines.push('### Configuration');
  lines.push('- [Config](./cli/src/config/)');
  lines.push('- [Utils](./cli/src/utils/)');
  lines.push('');

  // Core Components
  lines.push('## Core Package Components');
  lines.push('');
  lines.push('### Core Systems');
  lines.push('- [Core](./core/src/core/)');
  lines.push('- [Tools](./core/src/tools/)');
  lines.push('- [Services](./core/src/services/)');
  lines.push('');
  lines.push('### Utilities');
  lines.push('- [Utils](./core/src/utils/)');
  lines.push('- [Config](./core/src/config/)');
  lines.push('');

  return lines.join('\n');
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('🚀 Starting Layer 3 documentation generation...\n');

    // Clean output directory
    await fs.rm(outputDir, { recursive: true, force: true });
    await fs.mkdir(outputDir, { recursive: true });

    const stats = {
      cli: { processedCount: 0, failedFiles: [], totalFiles: 0 },
      core: { processedCount: 0, failedFiles: [], totalFiles: 0 },
      totalProcessed: 0,
    };

    // Process CLI package
    console.log('📦 Processing CLI package...');
    const cliDir = path.join(projectRoot, 'packages/cli');
    const cliOutput = path.join(outputDir, 'cli');
    stats.cli = await processDirectory(cliDir, cliOutput);
    console.log(
      `   ✅ Processed ${stats.cli.processedCount}/${stats.cli.totalFiles} files`,
    );

    // Process Core package
    console.log('\n📦 Processing Core package...');
    const coreDir = path.join(projectRoot, 'packages/core');
    const coreOutput = path.join(outputDir, 'core');
    stats.core = await processDirectory(coreDir, coreOutput);
    console.log(
      `   ✅ Processed ${stats.core.processedCount}/${stats.core.totalFiles} files`,
    );

    stats.totalProcessed = stats.cli.processedCount + stats.core.processedCount;

    // Generate index
    console.log('\n📝 Generating Layer 3 index...');
    const indexContent = await generateIndex(stats);
    await fs.writeFile(path.join(outputDir, 'index.md'), indexContent);

    console.log('\n✅ Layer 3 documentation generation complete!');
    console.log(`📄 Total components documented: ${stats.totalProcessed}`);
    console.log(
      `💾 Output directory: ${path.relative(projectRoot, outputDir)}`,
    );

    // Report failures
    const totalFailed =
      stats.cli.failedFiles.length + stats.core.failedFiles.length;
    if (totalFailed > 0) {
      console.log(`\n⚠️  ${totalFailed} files could not be processed`);
    }
  } catch (error) {
    console.error('❌ Error generating Layer 3 documentation:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { generateComponentMarkdown, processDirectory };
