# retry

**File**: `packages/core/src/utils/retry.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 1
- **Classes**: 0

## Interfaces

### `RetryOptions`

#### Properties

| Property          | Type       | Optional |
| ----------------- | ---------- | -------- |
| `maxAttempts`     | `number`   | No       |
| `initialDelayMs`  | `number`   | No       |
| `maxDelayMs`      | `number`   | No       |
| `shouldRetry`     | `Function` | No       |
| `onPersistent429` | `Function` | Yes      |
| `authType`        | `string`   | Yes      |

## Functions

### `retryWithBackoff`

```typescript
async function retryWithBackoff(fn: Function, options?: Partial): Promise;
```

#### Parameters

| Name      | Type       | Optional | Description |
| --------- | ---------- | -------- | ----------- |
| `fn`      | `Function` | No       | -           |
| `options` | `Partial`  | Yes      | -           |

**Returns**: `Promise`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/utils/retry.js';
```
