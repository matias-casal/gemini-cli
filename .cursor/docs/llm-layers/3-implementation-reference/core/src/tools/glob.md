# glob

**File**: `packages/core/src/tools/glob.ts`
**Package**: Core

## Summary

- **Total Exports**: 4
- **Interfaces**: 2
- **Types**: 0
- **Functions**: 1
- **Classes**: 1

## Interfaces

### `GlobPath`

#### Properties

| Property  | Type     | Optional |
| --------- | -------- | -------- |
| `mtimeMs` | `number` | Yes      |

### `GlobToolParams`

#### Properties

| Property             | Type      | Optional |
| -------------------- | --------- | -------- |
| `pattern`            | `string`  | No       |
| `path`               | `string`  | Yes      |
| `case_sensitive`     | `boolean` | Yes      |
| `respect_git_ignore` | `boolean` | Yes      |

## Functions

### `sortFileEntries`

```typescript
function sortFileEntries(
  entries: GlobPath[],
  nowTimestamp: number,
  recencyThresholdMs: number,
): GlobPath[];
```

#### Parameters

| Name                 | Type         | Optional | Description |
| -------------------- | ------------ | -------- | ----------- |
| `entries`            | `GlobPath[]` | No       | -           |
| `nowTimestamp`       | `number`     | No       | -           |
| `recencyThresholdMs` | `number`     | No       | -           |

**Returns**: `GlobPath[]`

## Classes

### `GlobTool`

**Extends**: `BaseTool`

#### Properties

| Name   | Static | Readonly |
| ------ | ------ | -------- |
| `Name` | Yes    | Yes      |

#### Methods

##### `constructor(unknown: any, unknown: any)`

##### `isWithinRoot(pathToCheck: string)`

##### `validateToolParams(params: GlobToolParams)`

##### `getDescription(params: GlobToolParams)`

##### `async execute(params: GlobToolParams, signal: AbortSignal)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/glob.js';
```
