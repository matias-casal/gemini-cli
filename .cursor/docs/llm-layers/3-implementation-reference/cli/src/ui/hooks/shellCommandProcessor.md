# shellCommandProcessor

**File**: `packages/cli/src/ui/hooks/shellCommandProcessor.ts`
**Package**: CLI

## Summary

- **Total Exports**: 1
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 1
- **Classes**: 0

## Functions

### `useShellCommandProcessor`

```typescript
function useShellCommandProcessor(
  addItemToHistory: any,
  setPendingHistoryItem: unknown,
  onExec: Function,
  onDebugMessage: Function,
  config: Config,
  geminiClient: GeminiClient,
): any;
```

#### Parameters

| Name                    | Type           | Optional | Description |
| ----------------------- | -------------- | -------- | ----------- |
| `addItemToHistory`      | `any`          | No       | -           |
| `setPendingHistoryItem` | `unknown`      | No       | -           |
| `onExec`                | `Function`     | No       | -           |
| `onDebugMessage`        | `Function`     | No       | -           |
| `config`                | `Config`       | No       | -           |
| `geminiClient`          | `GeminiClient` | No       | -           |

**Returns**: `any`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/hooks/shellCommandProcessor.js';
```
