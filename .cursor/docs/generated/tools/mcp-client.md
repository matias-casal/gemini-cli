# Mcp Client

**File**: `packages/core/src/tools/mcp-client.ts`

## Description

Manages MCP (Model Context Protocol) client connections.

## Function Signature

```typescript
function addMCPStatusChangeListener(listener: StatusChangeListener): void;
```

## Usage Examples

### should do nothing if no MCP servers or command are configured

```typescript
await discoverMcpTools(
      mockConfig.getMcpServers()
```

## API Summary

- Functions: 7
- Interfaces: 0
- Types: 0
- Classes: 0
