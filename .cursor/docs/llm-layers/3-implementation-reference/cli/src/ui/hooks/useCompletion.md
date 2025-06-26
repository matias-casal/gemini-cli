# useCompletion

**File**: `packages/cli/src/ui/hooks/useCompletion.ts`
**Package**: CLI

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 1
- **Classes**: 0

## Interfaces

### `UseCompletionReturn`

#### Properties

| Property                   | Type           | Optional |
| -------------------------- | -------------- | -------- |
| `suggestions`              | `Suggestion[]` | No       |
| `activeSuggestionIndex`    | `number`       | No       |
| `visibleStartIndex`        | `number`       | No       |
| `showSuggestions`          | `boolean`      | No       |
| `isLoadingSuggestions`     | `boolean`      | No       |
| `setActiveSuggestionIndex` | `unknown`      | No       |
| `setShowSuggestions`       | `unknown`      | No       |
| `resetCompletionState`     | `Function`     | No       |
| `navigateUp`               | `Function`     | No       |
| `navigateDown`             | `Function`     | No       |

## Functions

### `useCompletion`

```typescript
function useCompletion(
  query: string,
  cwd: string,
  isActive: boolean,
  slashCommands: SlashCommand[],
  config?: Config,
): UseCompletionReturn;
```

#### Parameters

| Name            | Type             | Optional | Description |
| --------------- | ---------------- | -------- | ----------- |
| `query`         | `string`         | No       | -           |
| `cwd`           | `string`         | No       | -           |
| `isActive`      | `boolean`        | No       | -           |
| `slashCommands` | `SlashCommand[]` | No       | -           |
| `config`        | `Config`         | Yes      | -           |

**Returns**: `UseCompletionReturn`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/hooks/useCompletion.js';
```
