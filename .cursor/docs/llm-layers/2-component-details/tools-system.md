# Tools System Architecture

The gemini-cli tools system provides extensible capabilities for file operations, shell commands, web interactions, and external integrations.

## Architecture Overview

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│ Gemini API  │────▶│ Tool Registry │────▶│ Tool Impl   │
└─────────────┘     └──────────────┘     └─────────────┘
       │                    │                     │
       │                    │                     ▼
       │                    │              ┌─────────────┐
       │                    └─────────────▶│ Validation  │
       │                                   └─────────────┘
       │                                          │
       ▼                                          ▼
┌─────────────┐                            ┌─────────────┐
│ User Approval│                           │  Execution  │
└─────────────┘                            └─────────────┘
```

## Available Tools

| Tool                                    | Description     | Has Schema |
| --------------------------------------- | --------------- | ---------- |
| [edit](./edit.md)                       | Edit            | ❌         |
| [glob](./glob.md)                       | Glob            | ❌         |
| [grep](./grep.md)                       | Grep            | ❌         |
| [ls](./ls.md)                           | Ls              | ❌         |
| [mcp-client](./mcp-client.md)           | Mcp Client      | ❌         |
| [mcp-tool](./mcp-tool.md)               | Mcp Tool        | ❌         |
| [memoryTool](./memoryTool.md)           | MemoryTool      | ❌         |
| [read-file](./read-file.md)             | Read File       | ❌         |
| [read-many-files](./read-many-files.md) | Read Many Files | ❌         |
| [shell](./shell.md)                     | Shell           | ✅         |
| [web-fetch](./web-fetch.md)             | Web Fetch       | ❌         |
| [web-search](./web-search.md)           | Web Search      | ❌         |
| [write-file](./write-file.md)           | Write File      | ❌         |

## Tool Interface

All tools implement a common interface:

```typescript
interface Tool {
  name: string;
  description: string;
  inputSchema?: object;
  execute(params: any): Promise<ToolResult>;
}
```

## Security Model

1. **User Approval**: All tool executions require explicit user consent
2. **Parameter Validation**: JSON schema validation before execution
3. **Sandboxing**: Shell commands run in restricted environments
4. **Path Safety**: File operations restricted to project directory
