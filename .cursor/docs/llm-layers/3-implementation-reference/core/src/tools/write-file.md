# write-file

**File**: `packages/core/src/tools/write-file.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `WriteFileToolParams`

#### Properties

| Property    | Type     | Optional |
| ----------- | -------- | -------- |
| `file_path` | `string` | No       |
| `content`   | `string` | No       |

## Classes

### `WriteFileTool`

**Extends**: `BaseTool`

#### Properties

| Name     | Static | Readonly |
| -------- | ------ | -------- |
| `Name`   | Yes    | Yes      |
| `client` | No     | Yes      |

#### Methods

##### `constructor(unknown: any)`

##### `isWithinRoot(pathToCheck: string)`

##### `validateToolParams(params: WriteFileToolParams)`

##### `getDescription(params: WriteFileToolParams)`

##### `async shouldConfirmExecute(params: WriteFileToolParams, abortSignal: AbortSignal)`

##### `async execute(params: WriteFileToolParams, abortSignal: AbortSignal)`

##### `async _getCorrectedFileContent(filePath: string, proposedContent: string, abortSignal: AbortSignal)`

##### `getModifyContext(abortSignal: AbortSignal)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/write-file.js';
```
