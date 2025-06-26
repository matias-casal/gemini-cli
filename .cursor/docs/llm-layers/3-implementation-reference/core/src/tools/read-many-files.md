# read-many-files

**File**: `packages/core/src/tools/read-many-files.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `ReadManyFilesParams`

#### Properties

| Property             | Type       | Optional |
| -------------------- | ---------- | -------- |
| `paths`              | `string[]` | No       |
| `include`            | `string[]` | Yes      |
| `exclude`            | `string[]` | Yes      |
| `recursive`          | `boolean`  | Yes      |
| `useDefaultExcludes` | `boolean`  | Yes      |
| `respect_git_ignore` | `boolean`  | Yes      |

## Classes

### `ReadManyFilesTool`

**Extends**: `BaseTool`

#### Properties

| Name                   | Static | Readonly |
| ---------------------- | ------ | -------- |
| `Name`                 | Yes    | Yes      |
| `geminiIgnorePatterns` | No     | Yes      |

#### Methods

##### `constructor(unknown: any, unknown: any)`

##### `validateParams(params: ReadManyFilesParams)`

##### `getDescription(params: ReadManyFilesParams)`

##### `async execute(params: ReadManyFilesParams, signal: AbortSignal)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/read-many-files.js';
```
