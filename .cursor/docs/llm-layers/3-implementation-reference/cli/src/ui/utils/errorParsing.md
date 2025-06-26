# errorParsing

**File**: `packages/cli/src/ui/utils/errorParsing.ts`
**Package**: CLI

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 1
- **Classes**: 0

## Interfaces

### `ApiError`

#### Properties

| Property | Type     | Optional |
| -------- | -------- | -------- |
| `error`  | `object` | No       |

## Functions

### `parseAndFormatApiError`

```typescript
function parseAndFormatApiError(error: unknown, authType?: AuthType): string;
```

#### Parameters

| Name       | Type       | Optional | Description |
| ---------- | ---------- | -------- | ----------- |
| `error`    | `unknown`  | No       | -           |
| `authType` | `AuthType` | Yes      | -           |

**Returns**: `string`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/utils/errorParsing.js';
```
