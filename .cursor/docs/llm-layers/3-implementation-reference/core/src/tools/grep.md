# grep

**File**: `packages/core/src/tools/grep.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `GrepToolParams`

#### Properties

| Property  | Type     | Optional |
| --------- | -------- | -------- |
| `pattern` | `string` | No       |
| `path`    | `string` | Yes      |
| `include` | `string` | Yes      |

## Classes

### `GrepTool`

**Extends**: `BaseTool`

#### Properties

| Name   | Static | Readonly |
| ------ | ------ | -------- |
| `Name` | Yes    | Yes      |

#### Methods

##### `constructor(unknown: any)`

##### `resolveAndValidatePath(relativePath: string)`

##### `validateToolParams(params: GrepToolParams)`

##### `async execute(params: GrepToolParams, signal: AbortSignal)`

##### `isCommandAvailable(command: string)`

##### `parseGrepOutput(output: string, basePath: string)`

##### `getDescription(params: GrepToolParams)`

##### `async performGrepSearch(options: object)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/grep.js';
```
