# errors

**File**: `packages/core/src/utils/errors.ts`
**Package**: Core

## Summary

- **Total Exports**: 6
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 3
- **Classes**: 3

## Functions

### `isNodeError`

```typescript
function isNodeError(error: unknown): any;
```

#### Parameters

| Name    | Type      | Optional | Description |
| ------- | --------- | -------- | ----------- |
| `error` | `unknown` | No       | -           |

**Returns**: `any`

### `getErrorMessage`

```typescript
function getErrorMessage(error: unknown): string;
```

#### Parameters

| Name    | Type      | Optional | Description |
| ------- | --------- | -------- | ----------- |
| `error` | `unknown` | No       | -           |

**Returns**: `string`

### `toFriendlyError`

```typescript
function toFriendlyError(error: unknown): unknown;
```

#### Parameters

| Name    | Type      | Optional | Description |
| ------- | --------- | -------- | ----------- |
| `error` | `unknown` | No       | -           |

**Returns**: `unknown`

## Classes

### `ForbiddenError`

**Extends**: `Error`

### `UnauthorizedError`

**Extends**: `Error`

### `BadRequestError`

**Extends**: `Error`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/utils/errors.js';
```
