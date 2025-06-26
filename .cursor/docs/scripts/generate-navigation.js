#!/usr/bin/env node

/**
 * Main Navigation Generator
 * Creates top-level index and navigation structure
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.join(__dirname, '..');
const projectRoot = path.resolve(__dirname, '../../..');

/**
 * Count files in directory recursively
 */
async function countFiles(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    let count = 0;

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        count += await countFiles(fullPath);
      } else if (entry.name.endsWith('.md')) {
        count++;
      }
    }

    return count;
  } catch (error) {
    return 0;
  }
}

/**
 * Generate main index
 */
async function generateMainIndex() {
  const lines = [];

  lines.push('# Gemini CLI - Complete Documentation');
  lines.push('');
  lines.push(
    '> 🎯 **Purpose**: Enable any LLM to understand and develop gemini-cli with complete context',
  );
  lines.push('');
  lines.push('## 📚 Documentation Layers');
  lines.push('');
  lines.push(
    'This documentation is organized in multiple layers, from high-level overviews to detailed implementation references:',
  );
  lines.push('');
  lines.push(
    '### 🚀 [Layer 1: Quick Reference](./llm-layers/1-quick-reference/index.md)',
  );
  lines.push('**For**: Rapid onboarding and common tasks');
  lines.push('- Quick start guide');
  lines.push('- Developer setup');
  lines.push('- Configuration options');
  lines.push('- Tools overview');
  lines.push('');
  lines.push(
    '### 🏗️ [Layer 2: Architecture & Components](./llm-layers/2-component-details/index.md)',
  );
  lines.push('**For**: Understanding system design and module organization');
  lines.push('- System architecture');
  lines.push('- Module breakdowns');
  lines.push('- Component relationships');
  lines.push('- Visual diagrams');
  lines.push('');
  lines.push(
    '### 🔧 [Layer 3: Implementation Reference](./llm-layers/3-implementation-reference/index.md)',
  );
  lines.push('**For**: Detailed API documentation and code structure');
  lines.push('- Complete API reference');
  lines.push('- Function signatures');
  lines.push('- Type definitions');
  lines.push('- Implementation details');
  lines.push('');
  lines.push('## 🛠️ Additional Resources');
  lines.push('');
  lines.push('### [Tools Documentation](./generated/tools/index.md)');
  lines.push(
    'Complete reference for all available tools with parameters and examples.',
  );
  lines.push('');
  lines.push('### [Project Structure](./generated/structure.json)');
  lines.push('Machine-readable project structure with file metadata.');
  lines.push('');
  lines.push('## 📊 Documentation Statistics');
  lines.push('');

  // Count documentation files
  const layer1Count = await countFiles(
    path.join(docsRoot, 'llm-layers/1-quick-reference'),
  );
  const layer2Count = await countFiles(
    path.join(docsRoot, 'llm-layers/2-component-details'),
  );
  const layer3Count = await countFiles(
    path.join(docsRoot, 'llm-layers/3-implementation-reference'),
  );
  const toolsCount = await countFiles(path.join(docsRoot, 'generated/tools'));
  const totalCount = layer1Count + layer2Count + layer3Count + toolsCount;

  lines.push(`- **Total Documentation Files**: ${totalCount}`);
  lines.push(`- **Layer 1 (Quick Reference)**: ${layer1Count} files`);
  lines.push(`- **Layer 2 (Architecture)**: ${layer2Count} files`);
  lines.push(`- **Layer 3 (Implementation)**: ${layer3Count} files`);
  lines.push(`- **Tools Documentation**: ${toolsCount} files`);
  lines.push('');
  lines.push('## 🎯 Usage Guide for LLMs');
  lines.push('');
  lines.push('### For Understanding the System:');
  lines.push('1. Start with Layer 1 index for overview');
  lines.push('2. Dive into Layer 2 for architectural understanding');
  lines.push('3. Reference Layer 3 for specific implementations');
  lines.push('');
  lines.push('### For Implementing Features:');
  lines.push('1. Check Layer 2 for module to modify');
  lines.push('2. Use Layer 3 for API contracts');
  lines.push('3. Reference tools documentation for capabilities');
  lines.push('');
  lines.push('### For Debugging:');
  lines.push('1. Layer 3 has detailed function signatures');
  lines.push('2. Tools documentation shows exact parameters');
  lines.push('3. Structure.json provides file locations');
  lines.push('');
  lines.push('## 🔄 Navigation Tips');
  lines.push('');
  lines.push('- Each layer has its own index with links to all sections');
  lines.push('- Cross-references between layers for easy navigation');
  lines.push('- Use browser search (Ctrl/Cmd+F) within documents');
  lines.push('- JSON structure file can be parsed programmatically');
  lines.push('');
  lines.push('## 📝 Generated Information');
  lines.push('');
  lines.push(`- **Generated Date**: ${new Date().toISOString()}`);
  lines.push(`- **Project Root**: ${projectRoot}`);
  lines.push('- **Documentation System**: Multi-layer LLM-optimized');
  lines.push('- **Format**: Markdown with Mermaid diagrams');

  return lines.join('\n');
}

/**
 * Generate metadata JSON
 */
async function generateMetadata() {
  const metadata = {
    name: 'gemini-cli-documentation',
    version: '1.0.0',
    generatedAt: new Date().toISOString(),
    purpose: 'Complete documentation for LLM consumption',
    structure: {
      layers: {
        layer1: {
          name: 'Quick Reference',
          path: 'llm-layers/1-quick-reference',
          description: 'High-level guides and quick start',
        },
        layer2: {
          name: 'Architecture & Components',
          path: 'llm-layers/2-component-details',
          description: 'System design and module documentation',
        },
        layer3: {
          name: 'Implementation Reference',
          path: 'llm-layers/3-implementation-reference',
          description: 'Detailed API and code documentation',
        },
      },
      additional: {
        tools: {
          name: 'Tools Documentation',
          path: 'generated/tools',
          description: 'Complete tool reference with examples',
        },
        structure: {
          name: 'Project Structure',
          path: 'generated/structure.json',
          description: 'Machine-readable file structure',
        },
      },
    },
    navigation: {
      entryPoint: 'index.md',
      layerIndexes: [
        'llm-layers/1-quick-reference/index.md',
        'llm-layers/2-component-details/index.md',
        'llm-layers/3-implementation-reference/index.md',
      ],
    },
    statistics: {
      totalFiles: await countFiles(docsRoot),
      generationScripts: 9,
      documentationLayers: 3,
    },
  };

  return JSON.stringify(metadata, null, 2);
}

/**
 * Generate README for the docs folder
 */
function generateDocsReadme() {
  const lines = [];

  lines.push('# Gemini CLI Documentation');
  lines.push('');
  lines.push(
    'This directory contains comprehensive documentation for the gemini-cli project, optimized for LLM consumption.',
  );
  lines.push('');
  lines.push('## Structure');
  lines.push('');
  lines.push('```');
  lines.push('.cursor/docs/');
  lines.push('├── index.md              # Main entry point');
  lines.push('├── metadata.json         # Documentation metadata');
  lines.push('├── llm-layers/          # Multi-layer documentation');
  lines.push('│   ├── 1-quick-reference/');
  lines.push('│   ├── 2-component-details/');
  lines.push('│   └── 3-implementation-reference/');
  lines.push('├── generated/           # Generated artifacts');
  lines.push('│   ├── tools/          # Tools documentation');
  lines.push('│   └── structure.json  # Project structure');
  lines.push('└── scripts/            # Generation scripts');
  lines.push('```');
  lines.push('');
  lines.push('## Usage');
  lines.push('');
  lines.push('1. **For LLMs**: Start with `index.md` for navigation');
  lines.push('2. **For Developers**: Run scripts in `scripts/` to regenerate');
  lines.push('3. **For Browsing**: Each layer has its own index');
  lines.push('');
  lines.push('## Regenerating Documentation');
  lines.push('');
  lines.push('```bash');
  lines.push('cd .cursor/docs/scripts');
  lines.push('npm install');
  lines.push('node init.js  # Run all generators');
  lines.push('```');
  lines.push('');
  lines.push('## Key Files');
  lines.push('');
  lines.push('- `index.md` - Main navigation hub');
  lines.push('- `metadata.json` - Machine-readable documentation structure');
  lines.push('- `llm-layers/*/index.md` - Layer-specific navigation');
  lines.push('- `generated/structure.json` - Complete file structure');

  return lines.join('\n');
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('🚀 Starting navigation generation...\n');

    // Generate main index
    console.log('📝 Generating main index...');
    const indexContent = await generateMainIndex();
    await fs.writeFile(path.join(docsRoot, 'index.md'), indexContent);
    console.log('   ✅ Created index.md');

    // Generate metadata
    console.log('\n📊 Generating metadata...');
    const metadataContent = await generateMetadata();
    await fs.writeFile(path.join(docsRoot, 'metadata.json'), metadataContent);
    console.log('   ✅ Created metadata.json');

    // Generate README
    console.log('\n📄 Generating documentation README...');
    const readmeContent = generateDocsReadme();
    await fs.writeFile(path.join(docsRoot, 'README.md'), readmeContent);
    console.log('   ✅ Created README.md');

    // Create a simple navigation helper
    const navHelper = {
      start: 'index.md',
      layers: {
        quickStart: 'llm-layers/1-quick-reference/index.md',
        architecture: 'llm-layers/2-component-details/index.md',
        implementation: 'llm-layers/3-implementation-reference/index.md',
      },
      tools: 'generated/tools/index.md',
      structure: 'generated/structure.json',
    };

    await fs.writeFile(
      path.join(docsRoot, 'navigation.json'),
      JSON.stringify(navHelper, null, 2),
    );
    console.log('   ✅ Created navigation.json');

    console.log('\n✅ Navigation generation complete!');
    console.log(
      `💾 Documentation root: ${path.relative(projectRoot, docsRoot)}`,
    );
    console.log('\n🎯 Entry point: .cursor/docs/index.md');
  } catch (error) {
    console.error('❌ Error generating navigation:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { generateMainIndex, generateMetadata };
