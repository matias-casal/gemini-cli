# fetch

**File**: `packages/core/src/utils/fetch.ts`
**Package**: Core

## Summary

- **Total Exports**: 3
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 2
- **Classes**: 1

## Functions

### `isPrivateIp`

```typescript
function isPrivateIp(url: string): boolean;
```

#### Parameters

| Name  | Type     | Optional | Description |
| ----- | -------- | -------- | ----------- |
| `url` | `string` | No       | -           |

**Returns**: `boolean`

### `fetchWithTimeout`

```typescript
async function fetchWithTimeout(url: string, timeout: number): Promise;
```

#### Parameters

| Name      | Type     | Optional | Description |
| --------- | -------- | -------- | ----------- |
| `url`     | `string` | No       | -           |
| `timeout` | `number` | No       | -           |

**Returns**: `Promise`

## Classes

### `FetchError`

**Extends**: `Error`

#### Methods

##### `constructor(message: string, unknown: any)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/utils/fetch.js';
```
