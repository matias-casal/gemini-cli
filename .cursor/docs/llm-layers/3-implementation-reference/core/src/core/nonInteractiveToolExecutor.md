# nonInteractiveToolExecutor

**File**: `packages/core/src/core/nonInteractiveToolExecutor.ts`
**Package**: Core

## Summary

- **Total Exports**: 1
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 1
- **Classes**: 0

## Functions

### `executeToolCall`

```typescript
async function executeToolCall(
  config: Config,
  toolCallRequest: ToolCallRequestInfo,
  toolRegistry: ToolRegistry,
  abortSignal?: AbortSignal,
): Promise;
```

#### Parameters

| Name              | Type                  | Optional | Description |
| ----------------- | --------------------- | -------- | ----------- |
| `config`          | `Config`              | No       | -           |
| `toolCallRequest` | `ToolCallRequestInfo` | No       | -           |
| `toolRegistry`    | `ToolRegistry`        | No       | -           |
| `abortSignal`     | `AbortSignal`         | Yes      | -           |

**Returns**: `Promise`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/core/nonInteractiveToolExecutor.js';
```
