# paths

**File**: `packages/core/src/utils/paths.ts`
**Package**: Core

## Summary

- **Total Exports**: 7
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 7
- **Classes**: 0

## Functions

### `tildeifyPath`

```typescript
function tildeifyPath(path: string): string;
```

#### Parameters

| Name   | Type     | Optional | Description |
| ------ | -------- | -------- | ----------- |
| `path` | `string` | No       | -           |

**Returns**: `string`

### `shortenPath`

```typescript
function shortenPath(filePath: string, maxLen: any): string;
```

#### Parameters

| Name       | Type     | Optional | Description |
| ---------- | -------- | -------- | ----------- |
| `filePath` | `string` | No       | -           |
| `maxLen`   | `any`    | No       | -           |

**Returns**: `string`

### `makeRelative`

```typescript
function makeRelative(targetPath: string, rootDirectory: string): string;
```

#### Parameters

| Name            | Type     | Optional | Description |
| --------------- | -------- | -------- | ----------- |
| `targetPath`    | `string` | No       | -           |
| `rootDirectory` | `string` | No       | -           |

**Returns**: `string`

### `escapePath`

```typescript
function escapePath(filePath: string): string;
```

#### Parameters

| Name       | Type     | Optional | Description |
| ---------- | -------- | -------- | ----------- |
| `filePath` | `string` | No       | -           |

**Returns**: `string`

### `unescapePath`

```typescript
function unescapePath(filePath: string): string;
```

#### Parameters

| Name       | Type     | Optional | Description |
| ---------- | -------- | -------- | ----------- |
| `filePath` | `string` | No       | -           |

**Returns**: `string`

### `getProjectHash`

```typescript
function getProjectHash(projectRoot: string): string;
```

#### Parameters

| Name          | Type     | Optional | Description |
| ------------- | -------- | -------- | ----------- |
| `projectRoot` | `string` | No       | -           |

**Returns**: `string`

### `getProjectTempDir`

```typescript
function getProjectTempDir(projectRoot: string): string;
```

#### Parameters

| Name          | Type     | Optional | Description |
| ------------- | -------- | -------- | ----------- |
| `projectRoot` | `string` | No       | -           |

**Returns**: `string`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/utils/paths.js';
```
