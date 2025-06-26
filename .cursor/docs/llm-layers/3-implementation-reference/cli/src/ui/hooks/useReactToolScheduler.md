# useReactToolScheduler

**File**: `packages/cli/src/ui/hooks/useReactToolScheduler.ts`
**Package**: CLI

## Summary

- **Total Exports**: 11
- **Interfaces**: 0
- **Types**: 9
- **Functions**: 2
- **Classes**: 0

## Type Aliases

### `ScheduleFn`

```typescript
type ScheduleFn = Function;
```

### `MarkToolsAsSubmittedFn`

```typescript
type MarkToolsAsSubmittedFn = Function;
```

### `TrackedScheduledToolCall`

```typescript
type TrackedScheduledToolCall = any;
```

### `TrackedValidatingToolCall`

```typescript
type TrackedValidatingToolCall = any;
```

### `TrackedWaitingToolCall`

```typescript
type TrackedWaitingToolCall = any;
```

### `TrackedExecutingToolCall`

```typescript
type TrackedExecutingToolCall = any;
```

### `TrackedCompletedToolCall`

```typescript
type TrackedCompletedToolCall = any;
```

### `TrackedCancelledToolCall`

```typescript
type TrackedCancelledToolCall = any;
```

### `TrackedToolCall`

```typescript
type TrackedToolCall =
  | TrackedScheduledToolCall
  | TrackedValidatingToolCall
  | TrackedWaitingToolCall
  | TrackedExecutingToolCall
  | TrackedCompletedToolCall
  | TrackedCancelledToolCall;
```

## Functions

### `useReactToolScheduler`

```typescript
function useReactToolScheduler(
  onComplete: Function,
  config: Config,
  setPendingHistoryItem: unknown,
  getPreferredEditor: Function,
): any;
```

#### Parameters

| Name                    | Type       | Optional | Description |
| ----------------------- | ---------- | -------- | ----------- |
| `onComplete`            | `Function` | No       | -           |
| `config`                | `Config`   | No       | -           |
| `setPendingHistoryItem` | `unknown`  | No       | -           |
| `getPreferredEditor`    | `Function` | No       | -           |

**Returns**: `any`

### `mapToDisplay`

```typescript
function mapToDisplay(
  toolOrTools: TrackedToolCall[] | TrackedToolCall,
): HistoryItemToolGroup;
```

#### Parameters

| Name          | Type               | Optional         | Description |
| ------------- | ------------------ | ---------------- | ----------- | --- |
| `toolOrTools` | `TrackedToolCall[] | TrackedToolCall` | No          | -   |

**Returns**: `HistoryItemToolGroup`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/hooks/useReactToolScheduler.js';
```
