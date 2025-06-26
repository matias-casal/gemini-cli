# shell

**File**: `packages/core/src/tools/shell.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `ShellToolParams`

#### Properties

| Property      | Type     | Optional |
| ------------- | -------- | -------- |
| `command`     | `string` | No       |
| `description` | `string` | Yes      |
| `directory`   | `string` | Yes      |

## Classes

### `ShellTool`

**Extends**: `BaseTool`

#### Properties

| Name        | Static | Readonly |
| ----------- | ------ | -------- |
| `Name`      | Yes    | No       |
| `whitelist` | No     | No       |

#### Methods

##### `constructor(unknown: any)`

##### `getDescription(params: ShellToolParams)`

##### `getCommandRoot(command: string)`

##### `validateToolParams(params: ShellToolParams)`

##### `async shouldConfirmExecute(params: ShellToolParams, _abortSignal: AbortSignal)`

##### `async execute(params: ShellToolParams, abortSignal: AbortSignal, updateOutput: Function)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/shell.js';
```
