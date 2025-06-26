# memoryTool

**File**: `packages/core/src/tools/memoryTool.ts`
**Package**: Core

## Summary

- **Total Exports**: 4
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 3
- **Classes**: 1

## Functions

### `setGeminiMdFilename`

```typescript
function setGeminiMdFilename(newFilename: string | string[]): void;
```

#### Parameters

| Name          | Type    | Optional  | Description |
| ------------- | ------- | --------- | ----------- | --- |
| `newFilename` | `string | string[]` | No          | -   |

**Returns**: `void`

### `getCurrentGeminiMdFilename`

```typescript
function getCurrentGeminiMdFilename(): string;
```

**Returns**: `string`

### `getAllGeminiMdFilenames`

```typescript
function getAllGeminiMdFilenames(): string[];
```

**Returns**: `string[]`

## Classes

### `MemoryTool`

**Extends**: `BaseTool`

#### Properties

| Name   | Static | Readonly |
| ------ | ------ | -------- |
| `Name` | Yes    | Yes      |

#### Methods

##### `constructor()`

##### `static async performAddMemoryEntry(text: string, memoryFilePath: string, fsAdapter: object)`

##### `async execute(params: SaveMemoryParams, _signal: AbortSignal)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/memoryTool.js';
```
