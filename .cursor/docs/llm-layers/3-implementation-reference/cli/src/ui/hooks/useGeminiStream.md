# useGeminiStream

**File**: `packages/cli/src/ui/hooks/useGeminiStream.ts`
**Package**: CLI

## Summary

- **Total Exports**: 2
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 2
- **Classes**: 0

## Functions

### `mergePartListUnions`

```typescript
function mergePartListUnions(list: PartListUnion[]): PartListUnion;
```

#### Parameters

| Name   | Type              | Optional | Description |
| ------ | ----------------- | -------- | ----------- |
| `list` | `PartListUnion[]` | No       | -           |

**Returns**: `PartListUnion`

### `useGeminiStream`

```typescript
function useGeminiStream(
  geminiClient: GeminiClient,
  history: HistoryItem[],
  addItem: any,
  setShowHelp: unknown,
  config: Config,
  onDebugMessage: Function,
  handleSlashCommand: Function,
  shellModeActive: boolean,
  getPreferredEditor: Function,
  onAuthError: Function,
  performMemoryRefresh: Function,
): any;
```

#### Parameters

| Name                   | Type            | Optional | Description |
| ---------------------- | --------------- | -------- | ----------- |
| `geminiClient`         | `GeminiClient`  | No       | -           |
| `history`              | `HistoryItem[]` | No       | -           |
| `addItem`              | `any`           | No       | -           |
| `setShowHelp`          | `unknown`       | No       | -           |
| `config`               | `Config`        | No       | -           |
| `onDebugMessage`       | `Function`      | No       | -           |
| `handleSlashCommand`   | `Function`      | No       | -           |
| `shellModeActive`      | `boolean`       | No       | -           |
| `getPreferredEditor`   | `Function`      | No       | -           |
| `onAuthError`          | `Function`      | No       | -           |
| `performMemoryRefresh` | `Function`      | No       | -           |

**Returns**: `any`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/hooks/useGeminiStream.js';
```
