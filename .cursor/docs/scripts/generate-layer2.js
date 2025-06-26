#!/usr/bin/env node

/**
 * Layer 2 Architecture Documentation Generator
 * Condenses Layer 3 implementation details into architectural overviews
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../..');
const layer3Dir = path.join(
  __dirname,
  '../llm-layers/3-implementation-reference',
);
const layer2Dir = path.join(__dirname, '../llm-layers/2-component-details');
const diagramsDir = path.join(layer2Dir, 'diagrams');
const structurePath = path.join(__dirname, '../generated/structure.json');

/**
 * Load project structure data
 */
async function loadStructure() {
  const content = await fs.readFile(structurePath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Aggregate Layer 3 documentation by module
 */
async function aggregateLayer3ByModule() {
  const modules = {
    'cli-core': {
      name: 'CLI Core Components',
      patterns: ['cli/src/*.md', 'cli/src/ui/*.md'],
      files: [],
    },
    'cli-components': {
      name: 'UI Components',
      patterns: ['cli/src/ui/components/**/*.md'],
      files: [],
    },
    'cli-hooks': {
      name: 'React Hooks',
      patterns: ['cli/src/ui/hooks/**/*.md'],
      files: [],
    },
    'cli-config': {
      name: 'Configuration System',
      patterns: ['cli/src/config/**/*.md'],
      files: [],
    },
    'core-main': {
      name: 'Core System',
      patterns: ['core/src/*.md', 'core/src/core/*.md'],
      files: [],
    },
    'core-tools': {
      name: 'Tools System',
      patterns: ['core/src/tools/**/*.md'],
      files: [],
    },
    'core-services': {
      name: 'Services',
      patterns: ['core/src/services/**/*.md'],
      files: [],
    },
    'core-utils': {
      name: 'Utilities',
      patterns: ['core/src/utils/**/*.md'],
      files: [],
    },
  };

  // Collect files for each module
  for (const [key, module] of Object.entries(modules)) {
    for (const pattern of module.patterns) {
      const files = await glob(pattern, { cwd: layer3Dir });
      module.files.push(...files);
    }
  }

  return modules;
}

/**
 * Generate architecture overview for a module
 */
async function generateModuleOverview(moduleKey, module) {
  const lines = [];

  // Header
  lines.push(`# ${module.name}`);
  lines.push('');
  lines.push(`## Overview`);
  lines.push('');

  // Module description based on key
  const descriptions = {
    'cli-core':
      'Main entry points and core CLI functionality. Handles application initialization, command processing, and top-level orchestration.',
    'cli-components':
      'React components built with Ink for terminal UI. Includes input handling, message display, dialogs, and visual feedback elements.',
    'cli-hooks':
      'Custom React hooks for state management, side effects, and business logic. Manages streaming, completion, history, and user interactions.',
    'cli-config':
      'Configuration management including authentication, settings persistence, and extension integration.',
    'core-main':
      'Core business logic for interacting with Gemini API. Handles requests, responses, context management, and prompt engineering.',
    'core-tools':
      'Extensible tools system for file operations, shell commands, web interactions, and MCP integration.',
    'core-services':
      'Service layer providing file discovery, Git integration, and other cross-cutting concerns.',
    'core-utils':
      'Utility functions for file operations, error handling, parsing, and common algorithms.',
  };

  lines.push(descriptions[moduleKey] || 'Module components and functionality.');
  lines.push('');

  // Component count
  lines.push(`## Component Summary`);
  lines.push('');
  lines.push(`**Total Components**: ${module.files.length}`);
  lines.push('');

  // Key components
  if (module.files.length > 0) {
    lines.push('## Key Components');
    lines.push('');

    // Group by subdirectory
    const grouped = {};
    for (const file of module.files) {
      const dir = path.dirname(file);
      if (!grouped[dir]) grouped[dir] = [];
      grouped[dir].push(file);
    }

    for (const [dir, files] of Object.entries(grouped)) {
      const dirName = dir === '.' ? 'Root' : path.basename(dir);
      lines.push(`### ${dirName}`);
      lines.push('');

      for (const file of files.slice(0, 10)) {
        // Limit to first 10
        const basename = path.basename(file, '.md');
        const relPath = file.replace(/\.md$/, '.ts');
        lines.push(
          `- \`${basename}\` - [View Details](../3-implementation-reference/${file})`,
        );
      }

      if (files.length > 10) {
        lines.push(`- ... and ${files.length - 10} more`);
      }

      lines.push('');
    }
  }

  // Architecture patterns
  lines.push('## Architecture Patterns');
  lines.push('');

  const patterns = {
    'cli-core': [
      '- **Entry Point Pattern**: Single entry through index.ts',
      '- **Component Composition**: App.tsx orchestrates all UI components',
      '- **Context Providers**: Global state management via React contexts',
    ],
    'cli-components': [
      '- **Functional Components**: All components use React hooks',
      '- **Ink UI Library**: Terminal-specific UI components',
      '- **Composition over Inheritance**: Small, focused components',
    ],
    'cli-hooks': [
      '- **Custom Hook Pattern**: Encapsulate complex logic',
      '- **Effect Management**: Proper cleanup and dependencies',
      '- **State Derivation**: Computed values from core state',
    ],
    'core-tools': [
      '- **Tool Interface**: Common interface for all tools',
      '- **Registry Pattern**: Dynamic tool registration',
      '- **Schema Validation**: JSON schema for parameters',
    ],
  };

  if (patterns[moduleKey]) {
    lines.push(...patterns[moduleKey]);
  }

  lines.push('');

  // Dependencies
  lines.push('## Key Dependencies');
  lines.push('');

  const deps = {
    'cli-core': ['react', 'ink', '@google/gemini-cli-core'],
    'cli-components': [
      'ink',
      'ink-text-input',
      'ink-select-input',
      'ink-spinner',
    ],
    'cli-hooks': ['react', 'stream-transform-zarr'],
    'cli-config': ['google-auth-library', 'fs/promises'],
    'core-main': ['@google/genai', 'google-auth-library'],
    'core-tools': ['glob', 'diff', 'gray-matter'],
    'core-services': ['simple-git', 'glob'],
    'core-utils': ['jsonschema', 'diff'],
  };

  if (deps[moduleKey]) {
    for (const dep of deps[moduleKey]) {
      lines.push(`- \`${dep}\``);
    }
  }

  lines.push('');

  // Integration points
  lines.push('## Integration Points');
  lines.push('');

  const integrations = {
    'cli-core': [
      '- **Core Package**: Uses @google/gemini-cli-core for all API operations',
      '- **Configuration**: Reads from config system for auth and settings',
      '- **Extension API**: Exposes hooks for VS Code integration',
    ],
    'core-main': [
      '- **Gemini API**: Direct integration with Google AI services',
      '- **Tool System**: Invokes tools based on model requests',
      '- **Telemetry**: Reports metrics and usage data',
    ],
    'core-tools': [
      '- **File System**: Direct file operations with safety checks',
      '- **Shell**: Process execution with sandboxing',
      '- **MCP**: External tool integration via Model Context Protocol',
    ],
  };

  if (integrations[moduleKey]) {
    lines.push(...integrations[moduleKey]);
  }

  return lines.join('\n');
}

/**
 * Generate main architecture index
 */
async function generateArchitectureIndex(modules) {
  const lines = [];

  lines.push('# Gemini CLI Architecture Documentation');
  lines.push('');
  lines.push(
    'High-level architectural overview of the gemini-cli system, organized by functional modules.',
  );
  lines.push('');
  lines.push('## System Overview');
  lines.push('');
  lines.push('Gemini CLI is built as a monorepo with two main packages:');
  lines.push('');
  lines.push(
    '- **@google/gemini-cli**: Terminal interface and user interaction layer',
  );
  lines.push(
    '- **@google/gemini-cli-core**: Core business logic and API integration',
  );
  lines.push('');
  lines.push('## Architecture Diagrams');
  lines.push('');
  lines.push('Visual representations of system architecture:');
  lines.push('');
  lines.push('- [Architecture Overview](./diagrams/architecture-overview.md)');
  lines.push('- [Data Flow](./diagrams/data-flow.md)');
  lines.push('- [Package Dependencies](./diagrams/package-dependencies.md)');
  lines.push('- [Tools Ecosystem](./diagrams/tools-ecosystem.md)');
  lines.push('- [CLI Components](./diagrams/cli-components.md)');
  lines.push('');
  lines.push('## Module Documentation');
  lines.push('');

  // CLI Package
  lines.push('### CLI Package (@google/gemini-cli)');
  lines.push('');
  lines.push('| Module | Description | Components |');
  lines.push('|--------|-------------|------------|');

  for (const [key, module] of Object.entries(modules)) {
    if (key.startsWith('cli-')) {
      const link = `./${key}.md`;
      lines.push(
        `| [${module.name}](${link}) | ${getShortDescription(key)} | ${module.files.length} |`,
      );
    }
  }

  lines.push('');

  // Core Package
  lines.push('### Core Package (@google/gemini-cli-core)');
  lines.push('');
  lines.push('| Module | Description | Components |');
  lines.push('|--------|-------------|------------|');

  for (const [key, module] of Object.entries(modules)) {
    if (key.startsWith('core-')) {
      const link = `./${key}.md`;
      lines.push(
        `| [${module.name}](${link}) | ${getShortDescription(key)} | ${module.files.length} |`,
      );
    }
  }

  lines.push('');
  lines.push('## Design Principles');
  lines.push('');
  lines.push(
    '1. **Separation of Concerns**: Clear boundary between UI and business logic',
  );
  lines.push(
    '2. **Extensibility**: Plugin architecture for tools and integrations',
  );
  lines.push('3. **Type Safety**: Full TypeScript coverage with strict typing');
  lines.push(
    '4. **User Control**: Explicit approval for all system modifications',
  );
  lines.push(
    '5. **Performance**: Streaming responses and efficient file handling',
  );
  lines.push('');
  lines.push('## Key Technologies');
  lines.push('');
  lines.push('- **Runtime**: Node.js 18+ with ES modules');
  lines.push('- **UI Framework**: React with Ink for terminal rendering');
  lines.push('- **Language**: TypeScript with strict mode');
  lines.push('- **Testing**: Vitest for unit and integration tests');
  lines.push('- **Build**: ESBuild for fast bundling');

  return lines.join('\n');
}

/**
 * Get short description for module
 */
function getShortDescription(moduleKey) {
  const descriptions = {
    'cli-core': 'Entry points and orchestration',
    'cli-components': 'Terminal UI components',
    'cli-hooks': 'State and effect management',
    'cli-config': 'Settings and authentication',
    'core-main': 'API client and prompts',
    'core-tools': 'File, shell, and web tools',
    'core-services': 'Cross-cutting services',
    'core-utils': 'Common utilities',
  };

  return descriptions[moduleKey] || 'Module components';
}

/**
 * Generate tools overview
 */
async function generateToolsOverview() {
  const toolsIndex = path.join(__dirname, '../generated/tools/index.md');
  const toolsContent = await fs.readFile(toolsIndex, 'utf-8');

  const lines = [];
  lines.push('# Tools System Architecture');
  lines.push('');
  lines.push(
    'The gemini-cli tools system provides extensible capabilities for file operations, shell commands, web interactions, and external integrations.',
  );
  lines.push('');
  lines.push('## Architecture Overview');
  lines.push('');
  lines.push('```');
  lines.push('┌─────────────┐     ┌──────────────┐     ┌─────────────┐');
  lines.push('│ Gemini API  │────▶│ Tool Registry │────▶│ Tool Impl   │');
  lines.push('└─────────────┘     └──────────────┘     └─────────────┘');
  lines.push('       │                    │                     │');
  lines.push('       │                    │                     ▼');
  lines.push('       │                    │              ┌─────────────┐');
  lines.push('       │                    └─────────────▶│ Validation  │');
  lines.push('       │                                   └─────────────┘');
  lines.push('       │                                          │');
  lines.push('       ▼                                          ▼');
  lines.push('┌─────────────┐                            ┌─────────────┐');
  lines.push('│ User Approval│                           │  Execution  │');
  lines.push('└─────────────┘                            └─────────────┘');
  lines.push('```');
  lines.push('');

  // Extract tools section from index
  const toolsMatch = toolsContent.match(
    /## Available Tools[\s\S]*?## Tool Categories/,
  );
  if (toolsMatch) {
    lines.push(toolsMatch[0].replace('## Tool Categories', '').trim());
    lines.push('');
  }

  lines.push('## Tool Interface');
  lines.push('');
  lines.push('All tools implement a common interface:');
  lines.push('');
  lines.push('```typescript');
  lines.push('interface Tool {');
  lines.push('  name: string;');
  lines.push('  description: string;');
  lines.push('  inputSchema?: object;');
  lines.push('  execute(params: any): Promise<ToolResult>;');
  lines.push('}');
  lines.push('```');
  lines.push('');
  lines.push('## Security Model');
  lines.push('');
  lines.push(
    '1. **User Approval**: All tool executions require explicit user consent',
  );
  lines.push(
    '2. **Parameter Validation**: JSON schema validation before execution',
  );
  lines.push(
    '3. **Sandboxing**: Shell commands run in restricted environments',
  );
  lines.push(
    '4. **Path Safety**: File operations restricted to project directory',
  );

  return lines.join('\n');
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log(
      '🚀 Starting Layer 2 architecture documentation generation...\n',
    );

    // Load structure
    const structure = await loadStructure();
    console.log(
      `📊 Project structure loaded: ${structure.summary.totalFiles} files`,
    );

    // Aggregate Layer 3 docs
    const modules = await aggregateLayer3ByModule();
    console.log(
      `📦 Aggregated documentation into ${Object.keys(modules).length} modules\n`,
    );

    // Generate module overviews
    for (const [key, module] of Object.entries(modules)) {
      if (module.files.length > 0) {
        const content = await generateModuleOverview(key, module);
        const outputPath = path.join(layer2Dir, `${key}.md`);
        await fs.writeFile(outputPath, content);
        console.log(
          `   ✅ Generated ${module.name} (${module.files.length} components)`,
        );
      }
    }

    // Generate tools overview
    console.log('\n📧 Generating tools system documentation...');
    const toolsContent = await generateToolsOverview();
    await fs.writeFile(path.join(layer2Dir, 'tools-system.md'), toolsContent);

    // Generate main index
    console.log('📝 Generating architecture index...');
    const indexContent = await generateArchitectureIndex(modules);
    await fs.writeFile(path.join(layer2Dir, 'index.md'), indexContent);

    console.log('\n✅ Layer 2 documentation complete!');
    console.log(
      `💾 Output directory: ${path.relative(projectRoot, layer2Dir)}`,
    );
  } catch (error) {
    console.error('❌ Error generating Layer 2 documentation:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { generateModuleOverview, generateToolsOverview };
