#!/usr/bin/env node

/**
 * Tool Analyzer for gemini-cli
 * Extracts tool definitions, schemas, and usage examples
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import { extractAPIs } from './typescript-parser.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../..');
const toolsDir = path.join(projectRoot, 'packages/core/src/tools');
const outputDir = path.join(__dirname, '../generated/tools');

/**
 * Extract tool schema from JSON file if exists
 */
async function extractToolSchema(toolName) {
  const schemaPath = path.join(toolsDir, `${toolName}.json`);

  try {
    const schemaContent = await fs.readFile(schemaPath, 'utf-8');
    return JSON.parse(schemaContent);
  } catch (error) {
    return null;
  }
}

/**
 * Extract examples from test file
 */
async function extractExamples(toolName) {
  const testPath = path.join(toolsDir, `${toolName}.test.ts`);
  const examples = [];

  try {
    const testContent = await fs.readFile(testPath, 'utf-8');

    // Extract test cases that show tool usage
    const testMatches = testContent.matchAll(
      /it\(['"`](.*?)['"`].*?async.*?\{([\s\S]*?)\}\)/g,
    );

    for (const match of testMatches) {
      const testName = match[1];
      const testBody = match[2];

      // Look for tool function calls
      const toolCallMatch = testBody.match(/await\s+(\w+)\(([\s\S]*?)\)/);

      if (toolCallMatch) {
        examples.push({
          description: testName,
          code: toolCallMatch[0].trim(),
        });
      }

      // Limit to first 3 examples
      if (examples.length >= 3) break;
    }
  } catch (error) {
    // No test file or parsing error
  }

  return examples;
}

/**
 * Analyze a single tool file
 */
async function analyzeTool(toolFile) {
  const toolName = path.basename(toolFile, '.ts');

  // Skip test files and non-tool files
  if (
    toolName.includes('.test') ||
    toolName === 'tools' ||
    toolName === 'tool-registry' ||
    toolName === 'modifiable-tool' ||
    toolName === 'diffOptions'
  ) {
    return null;
  }

  const toolPath = path.join(toolsDir, toolFile);

  try {
    // Extract API information
    const apiInfo = await extractAPIs(toolPath);
    if (!apiInfo || apiInfo.stats.totalExports === 0) {
      return null;
    }

    // Extract schema if exists
    const schema = await extractToolSchema(toolName);

    // Extract examples from tests
    const examples = await extractExamples(toolName);

    // Find the main tool function
    let mainFunction = apiInfo.functions.find(
      (f) =>
        f.name === toolName ||
        f.name === toolName.replace(/-/g, '') ||
        f.name === 'execute' ||
        f.name === 'run',
    );

    if (!mainFunction && apiInfo.functions.length > 0) {
      mainFunction = apiInfo.functions[0];
    }

    return {
      name: toolName,
      displayName: toolName
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      filePath: `packages/core/src/tools/${toolFile}`,
      mainFunction,
      schema,
      examples,
      apiInfo: {
        functions: apiInfo.functions.length,
        interfaces: apiInfo.interfaces.length,
        types: apiInfo.types.length,
        classes: apiInfo.classes.length,
      },
    };
  } catch (error) {
    console.warn(`Failed to analyze ${toolFile}: ${error.message}`);
    return null;
  }
}

/**
 * Generate markdown documentation for a tool
 */
function generateToolMarkdown(tool) {
  const lines = [];

  lines.push(`# ${tool.displayName}`);
  lines.push('');
  lines.push(`**File**: \`${tool.filePath}\``);
  lines.push('');

  // Description based on tool name
  const descriptions = {
    'read-file': 'Reads the contents of a file from the file system.',
    'write-file': "Writes content to a file, creating it if it doesn't exist.",
    edit: 'Edits a file by applying specified changes.',
    ls: 'Lists files and directories in a specified path.',
    grep: 'Searches for patterns in files using regular expressions.',
    glob: 'Finds files matching glob patterns.',
    shell: 'Executes shell commands in the system.',
    'web-fetch': 'Fetches content from web URLs.',
    'web-search': 'Performs web searches and returns results.',
    memoryTool: 'Manages persistent memory across sessions.',
    'read-many-files': 'Reads multiple files in a single operation.',
    'mcp-client': 'Manages MCP (Model Context Protocol) client connections.',
    'mcp-tool': 'Handles MCP tool execution.',
  };

  if (descriptions[tool.name]) {
    lines.push('## Description');
    lines.push('');
    lines.push(descriptions[tool.name]);
    lines.push('');
  }

  // Schema
  if (tool.schema) {
    lines.push('## Parameters Schema');
    lines.push('');
    lines.push('```json');
    lines.push(JSON.stringify(tool.schema, null, 2));
    lines.push('```');
    lines.push('');

    // Parameter details
    if (tool.schema.properties) {
      lines.push('### Parameter Details');
      lines.push('');
      lines.push('| Parameter | Type | Required | Description |');
      lines.push('|-----------|------|----------|-------------|');

      const required = tool.schema.required || [];

      for (const [param, details] of Object.entries(tool.schema.properties)) {
        const isRequired = required.includes(param);
        const desc = details.description || '-';
        lines.push(
          `| \`${param}\` | \`${details.type}\` | ${isRequired ? 'Yes' : 'No'} | ${desc} |`,
        );
      }

      lines.push('');
    }
  }

  // Main function signature
  if (tool.mainFunction) {
    lines.push('## Function Signature');
    lines.push('');

    const params = tool.mainFunction.params
      .map((p) => `${p.name}: ${p.type}`)
      .join(', ');
    const asyncStr = tool.mainFunction.async ? 'async ' : '';

    lines.push('```typescript');
    lines.push(
      `${asyncStr}function ${tool.mainFunction.name}(${params}): ${tool.mainFunction.returnType}`,
    );
    lines.push('```');
    lines.push('');
  }

  // Examples
  if (tool.examples && tool.examples.length > 0) {
    lines.push('## Usage Examples');
    lines.push('');

    for (const example of tool.examples) {
      lines.push(`### ${example.description}`);
      lines.push('');
      lines.push('```typescript');
      lines.push(example.code);
      lines.push('```');
      lines.push('');
    }
  }

  // API Summary
  lines.push('## API Summary');
  lines.push('');
  lines.push(`- Functions: ${tool.apiInfo.functions}`);
  lines.push(`- Interfaces: ${tool.apiInfo.interfaces}`);
  lines.push(`- Types: ${tool.apiInfo.types}`);
  lines.push(`- Classes: ${tool.apiInfo.classes}`);

  return lines.join('\n');
}

/**
 * Generate tools index
 */
function generateToolsIndex(tools) {
  const lines = [];

  lines.push('# Gemini CLI Tools Reference');
  lines.push('');
  lines.push(
    'Complete documentation for all available tools in the gemini-cli system.',
  );
  lines.push('');
  lines.push(`**Total Tools**: ${tools.length}`);
  lines.push('');
  lines.push('## Available Tools');
  lines.push('');
  lines.push('| Tool | Description | Has Schema |');
  lines.push('|------|-------------|------------|');

  for (const tool of tools) {
    const desc = tool.displayName;
    const hasSchema = tool.schema ? '✅' : '❌';
    lines.push(
      `| [${tool.name}](./${tool.name}.md) | ${desc} | ${hasSchema} |`,
    );
  }

  lines.push('');
  lines.push('## Tool Categories');
  lines.push('');
  lines.push('### File System Tools');
  lines.push('- [read-file](./read-file.md) - Read file contents');
  lines.push('- [write-file](./write-file.md) - Write to files');
  lines.push('- [edit](./edit.md) - Edit existing files');
  lines.push('- [ls](./ls.md) - List directory contents');
  lines.push('- [glob](./glob.md) - Find files by pattern');
  lines.push('- [grep](./grep.md) - Search in files');
  lines.push('- [read-many-files](./read-many-files.md) - Read multiple files');
  lines.push('');
  lines.push('### System Tools');
  lines.push('- [shell](./shell.md) - Execute shell commands');
  lines.push('');
  lines.push('### Web Tools');
  lines.push('- [web-fetch](./web-fetch.md) - Fetch web content');
  lines.push('- [web-search](./web-search.md) - Search the web');
  lines.push('');
  lines.push('### Memory & State');
  lines.push('- [memoryTool](./memoryTool.md) - Persistent memory');
  lines.push('');
  lines.push('### MCP Integration');
  lines.push('- [mcp-client](./mcp-client.md) - MCP client management');
  lines.push('- [mcp-tool](./mcp-tool.md) - MCP tool execution');

  return lines.join('\n');
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('🚀 Starting tools analysis...\n');

    // Create output directory
    await fs.mkdir(outputDir, { recursive: true });

    // Get all tool files
    const toolFiles = await fs.readdir(toolsDir);
    const tsFiles = toolFiles.filter(
      (f) => f.endsWith('.ts') && !f.includes('.test'),
    );

    console.log(`📦 Found ${tsFiles.length} potential tool files`);

    const tools = [];

    // Analyze each tool
    for (const toolFile of tsFiles) {
      const tool = await analyzeTool(toolFile);
      if (tool) {
        tools.push(tool);

        // Generate documentation
        const markdown = generateToolMarkdown(tool);
        const outputPath = path.join(outputDir, `${tool.name}.md`);
        await fs.writeFile(outputPath, markdown);

        console.log(`   ✅ Documented ${tool.name}`);
      }
    }

    // Generate index
    console.log('\n📝 Generating tools index...');
    const indexContent = generateToolsIndex(tools);
    await fs.writeFile(path.join(outputDir, 'index.md'), indexContent);

    console.log('\n✅ Tools analysis complete!');
    console.log(`📄 Total tools documented: ${tools.length}`);
    console.log(
      `💾 Output directory: ${path.relative(projectRoot, outputDir)}`,
    );
  } catch (error) {
    console.error('❌ Error analyzing tools:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { analyzeTool, generateToolMarkdown };
