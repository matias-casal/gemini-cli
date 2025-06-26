# errorReporting

**File**: `packages/core/src/utils/errorReporting.ts`
**Package**: Core

## Summary

- **Total Exports**: 1
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 1
- **Classes**: 0

## Functions

### `reportError`

```typescript
async function reportError(
  error: Error | unknown,
  baseMessage: string,
  context?: Content[] | Record | unknown[],
  type: any,
): Promise;
```

#### Parameters

| Name          | Type       | Optional | Description |
| ------------- | ---------- | -------- | ----------- | --- | --- |
| `error`       | `Error     | unknown` | No          | -   |
| `baseMessage` | `string`   | No       | -           |
| `context`     | `Content[] | Record   | unknown[]`  | Yes | -   |
| `type`        | `any`      | No       | -           |

**Returns**: `Promise`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/utils/errorReporting.js';
```
