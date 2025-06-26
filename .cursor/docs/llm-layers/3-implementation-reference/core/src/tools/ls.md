# ls

**File**: `packages/core/src/tools/ls.ts`
**Package**: Core

## Summary

- **Total Exports**: 3
- **Interfaces**: 2
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `LSToolParams`

#### Properties

| Property             | Type       | Optional |
| -------------------- | ---------- | -------- |
| `path`               | `string`   | No       |
| `ignore`             | `string[]` | Yes      |
| `respect_git_ignore` | `boolean`  | Yes      |

### `FileEntry`

#### Properties

| Property       | Type      | Optional |
| -------------- | --------- | -------- |
| `name`         | `string`  | No       |
| `path`         | `string`  | No       |
| `isDirectory`  | `boolean` | No       |
| `size`         | `number`  | No       |
| `modifiedTime` | `Date`    | No       |

## Classes

### `LSTool`

**Extends**: `BaseTool`

#### Properties

| Name   | Static | Readonly |
| ------ | ------ | -------- |
| `Name` | Yes    | Yes      |

#### Methods

##### `constructor(unknown: any, unknown: any)`

##### `isWithinRoot(dirpath: string)`

##### `validateToolParams(params: LSToolParams)`

##### `shouldIgnore(filename: string, patterns: string[])`

##### `getDescription(params: LSToolParams)`

##### `errorResult(llmContent: string, returnDisplay: string)`

##### `async execute(params: LSToolParams, _signal: AbortSignal)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/ls.js';
```
