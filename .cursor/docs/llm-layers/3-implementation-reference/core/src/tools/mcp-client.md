# mcp-client

**File**: `packages/core/src/tools/mcp-client.ts`
**Package**: Core

## Summary

- **Total Exports**: 7
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 7
- **Classes**: 0

## Functions

### `addMCPStatusChangeListener`

```typescript
function addMCPStatusChangeListener(listener: StatusChangeListener): void;
```

#### Parameters

| Name       | Type                   | Optional | Description |
| ---------- | ---------------------- | -------- | ----------- |
| `listener` | `StatusChangeListener` | No       | -           |

**Returns**: `void`

### `removeMCPStatusChangeListener`

```typescript
function removeMCPStatusChangeListener(listener: StatusChangeListener): void;
```

#### Parameters

| Name       | Type                   | Optional | Description |
| ---------- | ---------------------- | -------- | ----------- |
| `listener` | `StatusChangeListener` | No       | -           |

**Returns**: `void`

### `getMCPServerStatus`

```typescript
function getMCPServerStatus(serverName: string): MCPServerStatus;
```

#### Parameters

| Name         | Type     | Optional | Description |
| ------------ | -------- | -------- | ----------- |
| `serverName` | `string` | No       | -           |

**Returns**: `MCPServerStatus`

### `getAllMCPServerStatuses`

```typescript
function getAllMCPServerStatuses(): Map;
```

**Returns**: `Map`

### `getMCPDiscoveryState`

```typescript
function getMCPDiscoveryState(): MCPDiscoveryState;
```

**Returns**: `MCPDiscoveryState`

### `discoverMcpTools`

```typescript
async function discoverMcpTools(
  mcpServers: Record,
  mcpServerCommand: string | undefined,
  toolRegistry: ToolRegistry,
): Promise;
```

#### Parameters

| Name               | Type           | Optional   | Description |
| ------------------ | -------------- | ---------- | ----------- | --- |
| `mcpServers`       | `Record`       | No         | -           |
| `mcpServerCommand` | `string        | undefined` | No          | -   |
| `toolRegistry`     | `ToolRegistry` | No         | -           |

**Returns**: `Promise`

### `sanatizeParameters`

```typescript
function sanatizeParameters(schema?: Schema): any;
```

#### Parameters

| Name     | Type     | Optional | Description |
| -------- | -------- | -------- | ----------- |
| `schema` | `Schema` | Yes      | -           |

**Returns**: `any`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/mcp-client.js';
```
