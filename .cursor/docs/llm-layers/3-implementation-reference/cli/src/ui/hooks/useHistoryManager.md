# useHistoryManager

**File**: `packages/cli/src/ui/hooks/useHistoryManager.ts`
**Package**: CLI

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 1
- **Classes**: 0

## Interfaces

### `UseHistoryManagerReturn`

#### Properties

| Property      | Type            | Optional |
| ------------- | --------------- | -------- |
| `history`     | `HistoryItem[]` | No       |
| `addItem`     | `Function`      | No       |
| `updateItem`  | `Function`      | No       |
| `clearItems`  | `Function`      | No       |
| `loadHistory` | `Function`      | No       |

## Functions

### `useHistory`

```typescript
function useHistory(): UseHistoryManagerReturn;
```

**Returns**: `UseHistoryManagerReturn`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/hooks/useHistoryManager.js';
```
