#!/usr/bin/env node

/**
 * Analyzes the project structure and generates JSON metadata
 * Based on gemini-cli's getFolderStructure utility
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../..');

const DEFAULT_IGNORED_FOLDERS = new Set([
  'node_modules',
  '.git',
  'dist',
  'bundle',
  'coverage',
  '.tmp',
]);

const EXTENSIONS_TO_ANALYZE = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.json',
  '.md',
]);

/**
 * Check if a file should be ignored based on .gitignore patterns
 * Simplified version - just checks common patterns
 */
function shouldIgnoreFile(filePath) {
  const relativePath = path.relative(projectRoot, filePath);

  // Ignore hidden files (except .cursor)
  if (
    path.basename(filePath).startsWith('.') &&
    !relativePath.startsWith('.cursor')
  ) {
    return true;
  }

  // Ignore common build/temp directories
  const parts = relativePath.split(path.sep);
  for (const part of parts) {
    if (DEFAULT_IGNORED_FOLDERS.has(part)) {
      return true;
    }
  }

  return false;
}

/**
 * Recursively analyze directory structure
 */
async function analyzeDirectory(dirPath, maxDepth = 10, currentDepth = 0) {
  if (currentDepth >= maxDepth) {
    return null;
  }

  const result = {
    name: path.basename(dirPath),
    path: path.relative(projectRoot, dirPath),
    type: 'directory',
    files: [],
    directories: [],
    stats: {
      totalFiles: 0,
      totalDirectories: 0,
      filesByExtension: {},
    },
  };

  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
      const fullPath = path.join(dirPath, entry.name);

      if (shouldIgnoreFile(fullPath)) {
        continue;
      }

      if (entry.isDirectory()) {
        const subDir = await analyzeDirectory(
          fullPath,
          maxDepth,
          currentDepth + 1,
        );
        if (subDir) {
          result.directories.push(subDir);
          result.stats.totalDirectories++;

          // Aggregate stats from subdirectory
          result.stats.totalFiles += subDir.stats.totalFiles;
          result.stats.totalDirectories += subDir.stats.totalDirectories;

          for (const [ext, count] of Object.entries(
            subDir.stats.filesByExtension,
          )) {
            result.stats.filesByExtension[ext] =
              (result.stats.filesByExtension[ext] || 0) + count;
          }
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name);

        const fileInfo = {
          name: entry.name,
          path: path.relative(projectRoot, fullPath),
          type: 'file',
          extension: ext,
        };

        // Get file size
        try {
          const stats = await fs.stat(fullPath);
          fileInfo.size = stats.size;
        } catch (err) {
          // Ignore stat errors
        }

        result.files.push(fileInfo);
        result.stats.totalFiles++;
        result.stats.filesByExtension[ext] =
          (result.stats.filesByExtension[ext] || 0) + 1;
      }
    }
  } catch (error) {
    console.warn(
      `Warning: Could not read directory ${dirPath}: ${error.message}`,
    );
  }

  return result;
}

/**
 * Generate project metadata
 */
async function generateProjectMetadata() {
  const metadata = {
    projectName: 'gemini-cli',
    generatedAt: new Date().toISOString(),
    rootPath: projectRoot,
    structure: null,
    summary: {
      totalFiles: 0,
      totalDirectories: 0,
      mainPackages: [],
      fileTypes: {},
    },
  };

  console.log('📊 Analyzing project structure...');

  // Analyze full project structure
  const structure = await analyzeDirectory(projectRoot);
  if (structure) {
    metadata.structure = structure;
    metadata.summary.totalFiles = structure.stats.totalFiles;
    metadata.summary.totalDirectories = structure.stats.totalDirectories;
    metadata.summary.fileTypes = structure.stats.filesByExtension;

    // Identify main packages
    const packagesDir = structure.directories.find(
      (d) => d.name === 'packages',
    );
    if (packagesDir) {
      metadata.summary.mainPackages = packagesDir.directories.map((d) => ({
        name: d.name,
        path: d.path,
        files: d.stats.totalFiles,
      }));
    }
  }

  return metadata;
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('🚀 Starting project structure analysis...\n');

    const metadata = await generateProjectMetadata();

    // Write structure.json
    const outputPath = path.join(__dirname, '../generated/structure.json');
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, JSON.stringify(metadata, null, 2));

    console.log(`\n✅ Analysis complete!`);
    console.log(`📁 Total directories: ${metadata.summary.totalDirectories}`);
    console.log(`📄 Total files: ${metadata.summary.totalFiles}`);
    console.log(
      `💾 Output saved to: ${path.relative(projectRoot, outputPath)}`,
    );

    // Show file type distribution
    console.log('\n📊 File type distribution:');
    const sortedTypes = Object.entries(metadata.summary.fileTypes)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);

    for (const [ext, count] of sortedTypes) {
      console.log(`   ${ext || '(no extension)'}: ${count} files`);
    }
  } catch (error) {
    console.error('❌ Error analyzing project structure:', error.message);
    process.exit(1);
  }
}

// Run analysis if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { analyzeDirectory, generateProjectMetadata };
