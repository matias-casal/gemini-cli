# edit

**File**: `packages/core/src/tools/edit.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `EditToolParams`

#### Properties

| Property                | Type     | Optional |
| ----------------------- | -------- | -------- |
| `file_path`             | `string` | No       |
| `old_string`            | `string` | No       |
| `new_string`            | `string` | No       |
| `expected_replacements` | `number` | Yes      |

## Classes

### `EditTool`

**Extends**: `BaseTool`

#### Properties

| Name            | Static | Readonly |
| --------------- | ------ | -------- |
| `Name`          | Yes    | Yes      |
| `config`        | No     | Yes      |
| `rootDirectory` | No     | Yes      |
| `client`        | No     | Yes      |

#### Methods

##### `constructor(config: Config)`

##### `isWithinRoot(pathToCheck: string)`

##### `validateToolParams(params: EditToolParams)`

##### `_applyReplacement(currentContent: string | null, oldString: string, newString: string, isNewFile: boolean)`

##### `async calculateEdit(params: EditToolParams, abortSignal: AbortSignal)`

##### `async shouldConfirmExecute(params: EditToolParams, abortSignal: AbortSignal)`

##### `getDescription(params: EditToolParams)`

##### `async execute(params: EditToolParams, signal: AbortSignal)`

##### `ensureParentDirectoriesExist(filePath: string)`

##### `getModifyContext(_: AbortSignal)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/edit.js';
```
