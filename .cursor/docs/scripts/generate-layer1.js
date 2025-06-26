#!/usr/bin/env node

/**
 * Layer 1 Quick Start Guide Generator
 * Creates high-level documentation for rapid onboarding
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../..');
const layer1Dir = path.join(__dirname, '../llm-layers/1-quick-reference');
const layer2Dir = path.join(__dirname, '../llm-layers/2-component-details');
const toolsDir = path.join(__dirname, '../generated/tools');
const structurePath = path.join(__dirname, '../generated/structure.json');

/**
 * Load project structure
 */
async function loadStructure() {
  const content = await fs.readFile(structurePath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Generate Quick Start Guide
 */
function generateQuickStart() {
  const lines = [];

  lines.push('# Gemini CLI Quick Start Guide');
  lines.push('');
  lines.push('## What is Gemini CLI?');
  lines.push('');
  lines.push(
    "A powerful command-line interface for interacting with Google's Gemini AI model, designed for developers who want AI assistance directly in their terminal.",
  );
  lines.push('');
  lines.push('### Key Features');
  lines.push('- 🤖 Direct terminal access to Gemini AI');
  lines.push('- 📁 File system operations with AI guidance');
  lines.push('- 🔧 Extensible tool system');
  lines.push('- 🎨 Beautiful terminal UI with themes');
  lines.push('- 🔐 Secure authentication');
  lines.push('- 📊 Session management and history');
  lines.push('');
  lines.push('## Installation');
  lines.push('');
  lines.push('```bash');
  lines.push('npm install -g @google/gemini-cli');
  lines.push('```');
  lines.push('');
  lines.push('## First Use');
  lines.push('');
  lines.push('```bash');
  lines.push('gemini');
  lines.push('```');
  lines.push('');
  lines.push("On first run, you'll be prompted to authenticate with Google.");
  lines.push('');
  lines.push('## Basic Commands');
  lines.push('');
  lines.push('| Command | Description |');
  lines.push('|---------|-------------|');
  lines.push('| `gemini` | Start interactive session |');
  lines.push('| `gemini "prompt"` | Single query mode |');
  lines.push('| `gemini --help` | Show all options |');
  lines.push('| `/help` | Show in-session commands |');
  lines.push('| `/exit` | Exit the session |');
  lines.push('');
  lines.push('## Common Use Cases');
  lines.push('');
  lines.push('### 1. Code Generation');
  lines.push('```');
  lines.push('> Create a Python script that sorts files by date');
  lines.push('```');
  lines.push('');
  lines.push('### 2. File Analysis');
  lines.push('```');
  lines.push(
    '> Analyze the structure of this project and suggest improvements',
  );
  lines.push('```');
  lines.push('');
  lines.push('### 3. Documentation');
  lines.push('```');
  lines.push('> Generate API documentation for the functions in utils.js');
  lines.push('```');
  lines.push('');
  lines.push('### 4. Debugging');
  lines.push('```');
  lines.push('> Help me debug this error: [paste error]');
  lines.push('```');
  lines.push('');
  lines.push('## Available Tools');
  lines.push('');
  lines.push('Gemini CLI can perform various operations with your approval:');
  lines.push('');
  lines.push('- **File Operations**: read, write, edit files');
  lines.push('- **Search**: grep patterns, find files');
  lines.push('- **Shell**: execute commands');
  lines.push('- **Web**: fetch URLs, search the web');
  lines.push('- **Memory**: persist information across sessions');
  lines.push('');
  lines.push('## Configuration');
  lines.push('');
  lines.push('Configuration file: `~/.gemini/config.json`');
  lines.push('');
  lines.push('```json');
  lines.push('{');
  lines.push('  "theme": "default",');
  lines.push('  "model": "gemini-1.5-flash",');
  lines.push('  "autoApprove": false');
  lines.push('}');
  lines.push('```');
  lines.push('');
  lines.push('## Tips');
  lines.push('');
  lines.push('1. **Be Specific**: Clear, detailed prompts get better results');
  lines.push('2. **Use Context**: Reference files and previous outputs');
  lines.push('3. **Iterate**: Build on previous responses');
  lines.push(
    '4. **Review Tools**: Always review tool operations before approving',
  );
  lines.push('');
  lines.push('## Next Steps');
  lines.push('');
  lines.push(
    '- [Architecture Overview](../2-component-details/index.md) - Understand the system design',
  );
  lines.push(
    '- [Tools Documentation](../../generated/tools/index.md) - Detailed tool reference',
  );
  lines.push(
    '- [Configuration Guide](./configuration.md) - Advanced configuration options',
  );

  return lines.join('\n');
}

/**
 * Generate Developer Guide
 */
function generateDeveloperGuide(structure) {
  const lines = [];

  lines.push('# Developer Guide');
  lines.push('');
  lines.push('## Project Structure');
  lines.push('');
  lines.push('```');
  lines.push('gemini-cli/');
  lines.push('├── packages/');
  lines.push('│   ├── cli/          # Terminal interface');
  lines.push('│   └── core/         # Business logic');
  lines.push('├── docs/             # Documentation');
  lines.push('├── scripts/          # Build scripts');
  lines.push('└── integration-tests/ # E2E tests');
  lines.push('```');
  lines.push('');
  lines.push('## Development Setup');
  lines.push('');
  lines.push('### Prerequisites');
  lines.push('- Node.js 18+');
  lines.push('- npm 8+');
  lines.push('- TypeScript knowledge');
  lines.push('');
  lines.push('### Installation');
  lines.push('```bash');
  lines.push('git clone https://github.com/google/gemini-cli.git');
  lines.push('cd gemini-cli');
  lines.push('npm install');
  lines.push('npm run build');
  lines.push('```');
  lines.push('');
  lines.push('### Running Locally');
  lines.push('```bash');
  lines.push('npm run start');
  lines.push('```');
  lines.push('');
  lines.push('## Architecture Overview');
  lines.push('');
  lines.push('### Two-Package Monorepo');
  lines.push('');
  lines.push('1. **@google/gemini-cli**: UI layer with React + Ink');
  lines.push('2. **@google/gemini-cli-core**: Core logic and API integration');
  lines.push('');
  lines.push('### Key Components');
  lines.push('');
  lines.push('#### CLI Package');
  lines.push('- **App.tsx**: Main UI component');
  lines.push('- **hooks/**: Custom React hooks for state management');
  lines.push('- **components/**: UI components (input, messages, dialogs)');
  lines.push('- **config/**: Authentication and settings');
  lines.push('');
  lines.push('#### Core Package');
  lines.push('- **client.ts**: Gemini API client');
  lines.push('- **tools/**: Extensible tool system');
  lines.push('- **prompts.ts**: Prompt engineering');
  lines.push('- **services/**: File discovery, Git integration');
  lines.push('');
  lines.push('## Adding a New Tool');
  lines.push('');
  lines.push('1. Create tool file in `packages/core/src/tools/`');
  lines.push('2. Implement the tool interface:');
  lines.push('');
  lines.push('```typescript');
  lines.push('export class MyTool extends BaseTool {');
  lines.push('  name = "my-tool";');
  lines.push('  description = "Does something useful";');
  lines.push('  ');
  lines.push('  async execute(params: MyToolParams): Promise<ToolResult> {');
  lines.push('    // Implementation');
  lines.push('  }');
  lines.push('}');
  lines.push('```');
  lines.push('');
  lines.push('3. Register in tool registry');
  lines.push('4. Add tests');
  lines.push('');
  lines.push('## Testing');
  lines.push('');
  lines.push('### Unit Tests');
  lines.push('```bash');
  lines.push('npm test');
  lines.push('```');
  lines.push('');
  lines.push('### Integration Tests');
  lines.push('```bash');
  lines.push('npm run test:integration');
  lines.push('```');
  lines.push('');
  lines.push('## Code Statistics');
  lines.push('');
  lines.push(`- **Total Files**: ${structure.summary.totalFiles}`);
  lines.push(
    `- **TypeScript Files**: ${(structure.summary.fileTypes?.['.ts'] || 0) + (structure.summary.fileTypes?.['.tsx'] || 0)}`,
  );
  lines.push(
    `- **JavaScript Files**: ${structure.summary.fileTypes?.['.js'] || 0}`,
  );
  lines.push(
    `- **Documentation Files**: ${structure.summary.fileTypes?.['.md'] || 0}`,
  );
  lines.push('');
  lines.push('## Contributing');
  lines.push('');
  lines.push('1. Fork the repository');
  lines.push('2. Create a feature branch');
  lines.push('3. Make your changes');
  lines.push('4. Add tests');
  lines.push('5. Submit a pull request');
  lines.push('');
  lines.push('## Resources');
  lines.push('');
  lines.push('- [Architecture Details](../2-component-details/index.md)');
  lines.push('- [API Reference](../3-implementation-reference/index.md)');
  lines.push('- [Contributing Guidelines](../../../CONTRIBUTING.md)');

  return lines.join('\n');
}

/**
 * Generate Configuration Guide
 */
function generateConfigurationGuide() {
  const lines = [];

  lines.push('# Configuration Guide');
  lines.push('');
  lines.push('## Configuration File');
  lines.push('');
  lines.push('Location: `~/.gemini/config.json`');
  lines.push('');
  lines.push('## Available Options');
  lines.push('');
  lines.push('### Core Settings');
  lines.push('');
  lines.push('```json');
  lines.push('{');
  lines.push('  "model": "gemini-1.5-flash",');
  lines.push('  "temperature": 0.7,');
  lines.push('  "topK": 40,');
  lines.push('  "topP": 0.95,');
  lines.push('  "maxOutputTokens": 8192');
  lines.push('}');
  lines.push('```');
  lines.push('');
  lines.push('### UI Settings');
  lines.push('');
  lines.push('```json');
  lines.push('{');
  lines.push('  "theme": "default",');
  lines.push('  "showStats": true,');
  lines.push('  "showLineNumbers": true,');
  lines.push('  "syntaxHighlighting": true');
  lines.push('}');
  lines.push('```');
  lines.push('');
  lines.push('### Available Themes');
  lines.push('');
  lines.push('- `default` - Default color scheme');
  lines.push('- `default-light` - Light variant');
  lines.push('- `dracula` - Dracula theme');
  lines.push('- `github` - GitHub style');
  lines.push('- `atom-one-dark` - Atom One Dark');
  lines.push('- `ansi` - Classic ANSI colors');
  lines.push('');
  lines.push('### Tool Settings');
  lines.push('');
  lines.push('```json');
  lines.push('{');
  lines.push('  "autoApprove": false,');
  lines.push('  "requireConfirmation": true,');
  lines.push('  "maxFileSize": 1048576,');
  lines.push('  "allowedPaths": ["./src", "./tests"]');
  lines.push('}');
  lines.push('```');
  lines.push('');
  lines.push('### Authentication');
  lines.push('');
  lines.push('```json');
  lines.push('{');
  lines.push('  "authType": "oauth",');
  lines.push('  "tokenCache": true');
  lines.push('}');
  lines.push('```');
  lines.push('');
  lines.push('## Environment Variables');
  lines.push('');
  lines.push('| Variable | Description | Default |');
  lines.push('|----------|-------------|---------|');
  lines.push('| `GEMINI_API_KEY` | API key (if not using OAuth) | - |');
  lines.push(
    '| `GEMINI_MODEL` | Override model selection | gemini-1.5-flash |',
  );
  lines.push('| `GEMINI_CONFIG_DIR` | Config directory | ~/.gemini |');
  lines.push('| `NO_COLOR` | Disable colors | false |');
  lines.push('');
  lines.push('## Command Line Options');
  lines.push('');
  lines.push('```bash');
  lines.push('gemini [options] [prompt]');
  lines.push('```');
  lines.push('');
  lines.push('### Options');
  lines.push('');
  lines.push('- `--model <model>` - Select model');
  lines.push('- `--theme <theme>` - Set theme');
  lines.push('- `--no-stats` - Hide statistics');
  lines.push('- `--auto-approve` - Auto-approve tools (use with caution!)');
  lines.push('- `--config <path>` - Use custom config file');
  lines.push('- `--version` - Show version');
  lines.push('- `--help` - Show help');
  lines.push('');
  lines.push('## VS Code Extension Settings');
  lines.push('');
  lines.push('When using with VS Code extension:');
  lines.push('');
  lines.push('```json');
  lines.push('{');
  lines.push('  "gemini.enabled": true,');
  lines.push('  "gemini.contextFiles": ["README.md", "package.json"],');
  lines.push('  "gemini.includeWorkspace": true');
  lines.push('}');
  lines.push('```');

  return lines.join('\n');
}

/**
 * Generate Tools Quick Reference
 */
async function generateToolsReference() {
  const lines = [];

  lines.push('# Tools Quick Reference');
  lines.push('');
  lines.push('## File System Tools');
  lines.push('');
  lines.push('### read-file');
  lines.push('Read contents of a file');
  lines.push('```');
  lines.push('Parameters: absolute_path, start_line?, end_line?');
  lines.push('```');
  lines.push('');
  lines.push('### write-file');
  lines.push('Create or overwrite a file');
  lines.push('```');
  lines.push('Parameters: absolute_path, content');
  lines.push('```');
  lines.push('');
  lines.push('### edit');
  lines.push('Edit specific parts of a file');
  lines.push('```');
  lines.push('Parameters: absolute_path, edits[]');
  lines.push('```');
  lines.push('');
  lines.push('### ls');
  lines.push('List directory contents');
  lines.push('```');
  lines.push('Parameters: absolute_path');
  lines.push('```');
  lines.push('');
  lines.push('## Search Tools');
  lines.push('');
  lines.push('### grep');
  lines.push('Search for patterns in files');
  lines.push('```');
  lines.push('Parameters: pattern, path?, file_pattern?');
  lines.push('```');
  lines.push('');
  lines.push('### glob');
  lines.push('Find files by pattern');
  lines.push('```');
  lines.push('Parameters: pattern');
  lines.push('```');
  lines.push('');
  lines.push('## System Tools');
  lines.push('');
  lines.push('### shell');
  lines.push('Execute shell commands');
  lines.push('```');
  lines.push('Parameters: command, directory?');
  lines.push('```');
  lines.push('');
  lines.push('## Web Tools');
  lines.push('');
  lines.push('### web-fetch');
  lines.push('Fetch content from URLs');
  lines.push('```');
  lines.push('Parameters: url');
  lines.push('```');
  lines.push('');
  lines.push('### web-search');
  lines.push('Search the web');
  lines.push('```');
  lines.push('Parameters: query');
  lines.push('```');
  lines.push('');
  lines.push('## Memory Tools');
  lines.push('');
  lines.push('### memoryTool');
  lines.push('Store and retrieve persistent data');
  lines.push('```');
  lines.push('Parameters: action, key?, value?');
  lines.push('```');
  lines.push('');
  lines.push('## Tool Approval');
  lines.push('');
  lines.push('All tools require explicit user approval before execution.');
  lines.push('You will see:');
  lines.push('- Tool name and description');
  lines.push('- Exact parameters');
  lines.push('- Expected outcome');
  lines.push('');
  lines.push('Options:');
  lines.push('- `y` - Approve');
  lines.push('- `n` - Reject');
  lines.push('- `e` - Edit parameters');
  lines.push('- `a` - Approve all (current session)');

  return lines.join('\n');
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('🚀 Starting Layer 1 quick reference generation...\n');

    // Create output directory
    await fs.mkdir(layer1Dir, { recursive: true });

    // Load structure
    const structure = await loadStructure();

    // Generate documents
    const documents = [
      { name: 'index.md', generator: generateQuickStart },
      {
        name: 'developer-guide.md',
        generator: () => generateDeveloperGuide(structure),
      },
      { name: 'configuration.md', generator: generateConfigurationGuide },
      { name: 'tools-reference.md', generator: generateToolsReference },
    ];

    console.log(
      `📄 Generating ${documents.length} quick reference documents...`,
    );

    for (const { name, generator } of documents) {
      const content = await generator();
      const filePath = path.join(layer1Dir, name);
      await fs.writeFile(filePath, content);
      console.log(`   ✅ Generated ${name}`);
    }

    console.log('\n✅ Layer 1 documentation complete!');
    console.log(
      `💾 Output directory: ${path.relative(projectRoot, layer1Dir)}`,
    );
  } catch (error) {
    console.error('❌ Error generating Layer 1 documentation:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { generateQuickStart, generateDeveloperGuide };
