# web-fetch

**File**: `packages/core/src/tools/web-fetch.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `WebFetchToolParams`

#### Properties

| Property | Type     | Optional |
| -------- | -------- | -------- |
| `prompt` | `string` | No       |

## Classes

### `WebFetchTool`

**Extends**: `BaseTool`

#### Properties

| Name   | Static | Readonly |
| ------ | ------ | -------- |
| `Name` | Yes    | Yes      |

#### Methods

##### `constructor(unknown: any)`

##### `async executeFallback(params: WebFetchToolParams, signal: AbortSignal)`

##### `validateParams(params: WebFetchToolParams)`

##### `getDescription(params: WebFetchToolParams)`

##### `async shouldConfirmExecute(params: WebFetchToolParams)`

##### `async execute(params: WebFetchToolParams, signal: AbortSignal)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/web-fetch.js';
```
