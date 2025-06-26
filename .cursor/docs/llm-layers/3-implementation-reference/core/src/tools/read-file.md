# read-file

**File**: `packages/core/src/tools/read-file.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `ReadFileToolParams`

#### Properties

| Property        | Type     | Optional |
| --------------- | -------- | -------- |
| `absolute_path` | `string` | No       |
| `offset`        | `number` | Yes      |
| `limit`         | `number` | Yes      |

## Classes

### `ReadFileTool`

**Extends**: `BaseTool`

#### Properties

| Name   | Static | Readonly |
| ------ | ------ | -------- |
| `Name` | Yes    | Yes      |

#### Methods

##### `constructor(unknown: any, unknown: any)`

##### `validateToolParams(params: ReadFileToolParams)`

##### `getDescription(params: ReadFileToolParams)`

##### `async execute(params: ReadFileToolParams, _signal: AbortSignal)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/read-file.js';
```
