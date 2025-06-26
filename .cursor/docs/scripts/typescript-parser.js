#!/usr/bin/env node

/**
 * TypeScript parser for extracting API information
 * Uses @typescript-eslint/parser to analyze TypeScript files
 */

import { parse } from '@typescript-eslint/parser';
import fs from 'fs/promises';
import path from 'path';

/**
 * Parse a TypeScript file and extract its AST
 */
export async function parseTypeScriptFile(filePath) {
  try {
    const code = await fs.readFile(filePath, 'utf-8');

    const ast = parse(code, {
      sourceType: 'module',
      ecmaVersion: 'latest',
      ecmaFeatures: {
        jsx: true,
      },
      // Allow parsing of TypeScript
      project: null,
      // Don't require tsconfig for simple parsing
      createDefaultProgram: false,
    });

    return { ast, code, filePath };
  } catch (error) {
    console.warn(`Warning: Could not parse ${filePath}: ${error.message}`);
    return null;
  }
}

/**
 * Extract exported interfaces and type aliases
 */
export function extractInterfaces(ast, code) {
  const interfaces = [];
  const types = [];

  function visitNode(node, isExported = false) {
    // Handle export declarations
    if (node.type === 'ExportNamedDeclaration' && node.declaration) {
      visitNode(node.declaration, true);
      return;
    }

    // Handle default exports
    if (node.type === 'ExportDefaultDeclaration' && node.declaration) {
      visitNode(node.declaration, true);
      return;
    }

    // Extract interfaces
    if (node.type === 'TSInterfaceDeclaration' && isExported) {
      const interfaceInfo = {
        name: node.id.name,
        type: 'interface',
        exported: true,
        properties: [],
        extends:
          node.extends?.map((e) => e.expression?.name || 'unknown') || [],
        location: {
          start: node.loc.start.line,
          end: node.loc.end.line,
        },
      };

      // Extract properties
      if (node.body && node.body.body) {
        for (const member of node.body.body) {
          if (member.type === 'TSPropertySignature' && member.key) {
            interfaceInfo.properties.push({
              name: member.key.name || member.key.value,
              optional: member.optional || false,
              type: extractTypeAnnotation(member.typeAnnotation),
            });
          }
        }
      }

      interfaces.push(interfaceInfo);
    }

    // Extract type aliases
    if (node.type === 'TSTypeAliasDeclaration' && isExported) {
      types.push({
        name: node.id.name,
        type: 'type',
        exported: true,
        definition: extractTypeAnnotation({
          typeAnnotation: node.typeAnnotation,
        }),
        location: {
          start: node.loc.start.line,
          end: node.loc.end.line,
        },
      });
    }

    // Check for exported variable declarations that might be interfaces
    if (node.type === 'VariableDeclaration' && isExported) {
      for (const declarator of node.declarations) {
        if (declarator.id && declarator.id.typeAnnotation) {
          const typeInfo = {
            name: declarator.id.name,
            type: 'const',
            exported: true,
            typeAnnotation: extractTypeAnnotation(declarator.id.typeAnnotation),
            location: {
              start: node.loc.start.line,
              end: node.loc.end.line,
            },
          };
          types.push(typeInfo);
        }
      }
    }
  }

  // Traverse AST
  if (ast.body) {
    for (const node of ast.body) {
      visitNode(node, node.type.startsWith('Export'));
    }
  }

  return { interfaces, types };
}

/**
 * Extract exported functions
 */
export function extractFunctions(ast, code) {
  const functions = [];

  function visitNode(node, isExported = false) {
    // Handle export declarations
    if (node.type === 'ExportNamedDeclaration' && node.declaration) {
      visitNode(node.declaration, true);
      return;
    }

    // Extract function declarations
    if (node.type === 'FunctionDeclaration' && isExported && node.id) {
      const funcInfo = {
        name: node.id.name,
        type: 'function',
        exported: true,
        async: node.async || false,
        generator: node.generator || false,
        params: extractParameters(node.params),
        returnType: extractTypeAnnotation(node.returnType),
        location: {
          start: node.loc.start.line,
          end: node.loc.end.line,
        },
      };

      functions.push(funcInfo);
    }

    // Extract arrow functions assigned to exported variables
    if (node.type === 'VariableDeclaration' && isExported) {
      for (const declarator of node.declarations) {
        if (
          declarator.init &&
          (declarator.init.type === 'ArrowFunctionExpression' ||
            declarator.init.type === 'FunctionExpression')
        ) {
          const funcInfo = {
            name: declarator.id.name,
            type: 'arrow-function',
            exported: true,
            async: declarator.init.async || false,
            params: extractParameters(declarator.init.params),
            returnType: extractTypeAnnotation(
              declarator.init.returnType || declarator.id.typeAnnotation,
            ),
            location: {
              start: node.loc.start.line,
              end: node.loc.end.line,
            },
          };

          functions.push(funcInfo);
        }
      }
    }
  }

  // Traverse AST
  if (ast.body) {
    for (const node of ast.body) {
      visitNode(node, node.type.startsWith('Export'));
    }
  }

  return functions;
}

/**
 * Extract exported classes
 */
export function extractClasses(ast, code) {
  const classes = [];

  function visitNode(node, isExported = false) {
    // Handle export declarations
    if (node.type === 'ExportNamedDeclaration' && node.declaration) {
      visitNode(node.declaration, true);
      return;
    }

    // Extract class declarations
    if (node.type === 'ClassDeclaration' && isExported && node.id) {
      const classInfo = {
        name: node.id.name,
        type: 'class',
        exported: true,
        extends: node.superClass?.name || null,
        methods: [],
        properties: [],
        location: {
          start: node.loc.start.line,
          end: node.loc.end.line,
        },
      };

      // Extract class members
      if (node.body && node.body.body) {
        for (const member of node.body.body) {
          if (member.type === 'MethodDefinition' && member.key) {
            classInfo.methods.push({
              name: member.key.name,
              kind: member.kind, // constructor, method, get, set
              static: member.static || false,
              async: member.value?.async || false,
              params: extractParameters(member.value?.params || []),
            });
          } else if (member.type === 'PropertyDefinition' && member.key) {
            classInfo.properties.push({
              name: member.key.name,
              static: member.static || false,
              readonly: member.readonly || false,
            });
          }
        }
      }

      classes.push(classInfo);
    }
  }

  // Traverse AST
  if (ast.body) {
    for (const node of ast.body) {
      visitNode(node, node.type.startsWith('Export'));
    }
  }

  return classes;
}

/**
 * Helper function to extract parameter information
 */
function extractParameters(params) {
  if (!params) return [];

  return params.map((param) => {
    const paramInfo = {
      name: param.name || (param.left && param.left.name) || 'unknown',
      optional: param.optional || false,
      rest: param.type === 'RestElement',
      type: 'any',
    };

    if (param.typeAnnotation) {
      paramInfo.type = extractTypeAnnotation(param.typeAnnotation);
    }

    return paramInfo;
  });
}

/**
 * Helper function to extract type annotation as string
 */
function extractTypeAnnotation(typeAnnotation) {
  if (!typeAnnotation || !typeAnnotation.typeAnnotation) {
    return 'any';
  }

  const type = typeAnnotation.typeAnnotation;

  switch (type.type) {
    case 'TSStringKeyword':
      return 'string';
    case 'TSNumberKeyword':
      return 'number';
    case 'TSBooleanKeyword':
      return 'boolean';
    case 'TSAnyKeyword':
      return 'any';
    case 'TSUnknownKeyword':
      return 'unknown';
    case 'TSVoidKeyword':
      return 'void';
    case 'TSNullKeyword':
      return 'null';
    case 'TSUndefinedKeyword':
      return 'undefined';
    case 'TSArrayType':
      return `${extractTypeAnnotation({ typeAnnotation: type.elementType })}[]`;
    case 'TSTypeReference':
      return type.typeName?.name || 'unknown';
    case 'TSUnionType':
      return type.types
        .map((t) => extractTypeAnnotation({ typeAnnotation: t }))
        .join(' | ');
    case 'TSFunctionType':
      return 'Function';
    case 'TSTypeLiteral':
      return 'object';
    default:
      return 'any';
  }
}

/**
 * Extract all API information from a TypeScript file
 */
export async function extractAPIs(filePath) {
  const parseResult = await parseTypeScriptFile(filePath);
  if (!parseResult) {
    return null;
  }

  const { ast, code } = parseResult;

  const { interfaces, types } = extractInterfaces(ast, code);
  const functions = extractFunctions(ast, code);
  const classes = extractClasses(ast, code);

  return {
    filePath,
    interfaces,
    types,
    functions,
    classes,
    stats: {
      totalExports:
        interfaces.length + types.length + functions.length + classes.length,
      interfaces: interfaces.length,
      types: types.length,
      functions: functions.length,
      classes: classes.length,
    },
  };
}

// Test the parser if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const testFile = process.argv[2];
  if (!testFile) {
    console.error('Usage: node typescript-parser.js <typescript-file>');
    process.exit(1);
  }

  const apis = await extractAPIs(testFile);
  if (apis) {
    console.log(JSON.stringify(apis, null, 2));
  }
}
