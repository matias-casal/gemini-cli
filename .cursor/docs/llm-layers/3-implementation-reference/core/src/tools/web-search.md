# web-search

**File**: `packages/core/src/tools/web-search.ts`
**Package**: Core

## Summary

- **Total Exports**: 3
- **Interfaces**: 2
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `WebSearchToolParams`

#### Properties

| Property | Type     | Optional |
| -------- | -------- | -------- |
| `query`  | `string` | No       |

### `WebSearchToolResult`

**Extends**: ToolResult

#### Properties

| Property  | Type  | Optional |
| --------- | ----- | -------- |
| `sources` | `any` | Yes      |

## Classes

### `WebSearchTool`

**Extends**: `BaseTool`

#### Properties

| Name   | Static | Readonly |
| ------ | ------ | -------- |
| `Name` | Yes    | Yes      |

#### Methods

##### `constructor(unknown: any)`

##### `validateParams(params: WebSearchToolParams)`

##### `getDescription(params: WebSearchToolParams)`

##### `async execute(params: WebSearchToolParams, signal: AbortSignal)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/web-search.js';
```
