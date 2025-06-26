# fileUtils

**File**: `packages/core/src/utils/fileUtils.ts`
**Package**: Core

## Summary

- **Total Exports**: 7
- **Interfaces**: 1
- **Types**: 1
- **Functions**: 5
- **Classes**: 0

## Interfaces

### `ProcessedFileReadResult`

#### Properties

| Property            | Type        | Optional |
| ------------------- | ----------- | -------- |
| `llmContent`        | `PartUnion` | No       |
| `returnDisplay`     | `string`    | No       |
| `error`             | `string`    | Yes      |
| `isTruncated`       | `boolean`   | Yes      |
| `originalLineCount` | `number`    | Yes      |
| `linesShown`        | `any`       | Yes      |

## Type Aliases

### `DEFAULT_ENCODING`

```typescript
type DEFAULT_ENCODING = undefined;
```

## Functions

### `getSpecificMimeType`

```typescript
function getSpecificMimeType(filePath: string): string | undefined;
```

#### Parameters

| Name       | Type     | Optional | Description |
| ---------- | -------- | -------- | ----------- |
| `filePath` | `string` | No       | -           |

**Returns**: `string | undefined`

### `isWithinRoot`

```typescript
function isWithinRoot(pathToCheck: string, rootDirectory: string): boolean;
```

#### Parameters

| Name            | Type     | Optional | Description |
| --------------- | -------- | -------- | ----------- |
| `pathToCheck`   | `string` | No       | -           |
| `rootDirectory` | `string` | No       | -           |

**Returns**: `boolean`

### `isBinaryFile`

```typescript
function isBinaryFile(filePath: string): boolean;
```

#### Parameters

| Name       | Type     | Optional | Description |
| ---------- | -------- | -------- | ----------- |
| `filePath` | `string` | No       | -           |

**Returns**: `boolean`

### `detectFileType`

```typescript
function detectFileType(filePath: string): any | any | any | any;
```

#### Parameters

| Name       | Type     | Optional | Description |
| ---------- | -------- | -------- | ----------- |
| `filePath` | `string` | No       | -           |

**Returns**: `any | any | any | any`

### `processSingleFileContent`

```typescript
async function processSingleFileContent(
  filePath: string,
  rootDirectory: string,
  offset?: number,
  limit?: number,
): Promise;
```

#### Parameters

| Name            | Type     | Optional | Description |
| --------------- | -------- | -------- | ----------- |
| `filePath`      | `string` | No       | -           |
| `rootDirectory` | `string` | No       | -           |
| `offset`        | `number` | Yes      | -           |
| `limit`         | `number` | Yes      | -           |

**Returns**: `Promise`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/utils/fileUtils.js';
```
