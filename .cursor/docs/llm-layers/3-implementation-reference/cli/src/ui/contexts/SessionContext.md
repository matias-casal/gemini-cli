# SessionContext

**File**: `packages/cli/src/ui/contexts/SessionContext.tsx`
**Package**: CLI

## Summary

- **Total Exports**: 4
- **Interfaces**: 1
- **Types**: 1
- **Functions**: 2
- **Classes**: 0

## Interfaces

### `CumulativeStats`

#### Properties

| Property                  | Type     | Optional |
| ------------------------- | -------- | -------- |
| `turnCount`               | `number` | No       |
| `promptTokenCount`        | `number` | No       |
| `candidatesTokenCount`    | `number` | No       |
| `totalTokenCount`         | `number` | No       |
| `cachedContentTokenCount` | `number` | No       |
| `toolUsePromptTokenCount` | `number` | No       |
| `thoughtsTokenCount`      | `number` | No       |
| `apiTimeMs`               | `number` | No       |

## Type Aliases

### `SessionStatsProvider`

```typescript
type SessionStatsProvider = undefined;
```

## Functions

### `SessionStatsProvider`

```typescript
function SessionStatsProvider(unknown: any): unknown;
```

#### Parameters

| Name      | Type  | Optional | Description |
| --------- | ----- | -------- | ----------- |
| `unknown` | `any` | No       | -           |

**Returns**: `unknown`

### `useSessionStats`

```typescript
function useSessionStats(): any;
```

**Returns**: `any`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/contexts/SessionContext.tsx';
```
