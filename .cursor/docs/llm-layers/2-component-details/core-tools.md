# Tools System

## Overview

Extensible tools system for file operations, shell commands, web interactions, and MCP integration.

## Component Summary

**Total Components**: 17

## Key Components

### tools

- `write-file` - [View Details](../3-implementation-reference/core/src/tools/write-file.md)
- `web-search` - [View Details](../3-implementation-reference/core/src/tools/web-search.md)
- `web-fetch` - [View Details](../3-implementation-reference/core/src/tools/web-fetch.md)
- `tools` - [View Details](../3-implementation-reference/core/src/tools/tools.md)
- `tool-registry` - [View Details](../3-implementation-reference/core/src/tools/tool-registry.md)
- `shell` - [View Details](../3-implementation-reference/core/src/tools/shell.md)
- `read-many-files` - [View Details](../3-implementation-reference/core/src/tools/read-many-files.md)
- `read-file` - [View Details](../3-implementation-reference/core/src/tools/read-file.md)
- `modifiable-tool` - [View Details](../3-implementation-reference/core/src/tools/modifiable-tool.md)
- `memoryTool` - [View Details](../3-implementation-reference/core/src/tools/memoryTool.md)
- ... and 7 more

## Architecture Patterns

- **Tool Interface**: Common interface for all tools
- **Registry Pattern**: Dynamic tool registration
- **Schema Validation**: JSON schema for parameters

## Key Dependencies

- `glob`
- `diff`
- `gray-matter`

## Integration Points

- **File System**: Direct file operations with safety checks
- **Shell**: Process execution with sandboxing
- **MCP**: External tool integration via Model Context Protocol
