# tools

**File**: `packages/core/src/tools/tools.ts`
**Package**: Core

## Summary

- **Total Exports**: 10
- **Interfaces**: 7
- **Types**: 2
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `Tool`

#### Properties

| Property           | Type                  | Optional |
| ------------------ | --------------------- | -------- |
| `name`             | `string`              | No       |
| `displayName`      | `string`              | No       |
| `description`      | `string`              | No       |
| `schema`           | `FunctionDeclaration` | No       |
| `isOutputMarkdown` | `boolean`             | No       |
| `canUpdateOutput`  | `boolean`             | No       |

### `ToolResult`

#### Properties

| Property        | Type                | Optional |
| --------------- | ------------------- | -------- |
| `llmContent`    | `PartListUnion`     | No       |
| `returnDisplay` | `ToolResultDisplay` | No       |

### `FileDiff`

#### Properties

| Property   | Type     | Optional |
| ---------- | -------- | -------- |
| `fileDiff` | `string` | No       |
| `fileName` | `string` | No       |

### `ToolEditConfirmationDetails`

#### Properties

| Property      | Type       | Optional |
| ------------- | ---------- | -------- |
| `type`        | `any`      | No       |
| `title`       | `string`   | No       |
| `onConfirm`   | `Function` | No       |
| `fileName`    | `string`   | No       |
| `fileDiff`    | `string`   | No       |
| `isModifying` | `boolean`  | Yes      |

### `ToolExecuteConfirmationDetails`

#### Properties

| Property      | Type       | Optional |
| ------------- | ---------- | -------- |
| `type`        | `any`      | No       |
| `title`       | `string`   | No       |
| `onConfirm`   | `Function` | No       |
| `command`     | `string`   | No       |
| `rootCommand` | `string`   | No       |

### `ToolMcpConfirmationDetails`

#### Properties

| Property          | Type       | Optional |
| ----------------- | ---------- | -------- |
| `type`            | `any`      | No       |
| `title`           | `string`   | No       |
| `serverName`      | `string`   | No       |
| `toolName`        | `string`   | No       |
| `toolDisplayName` | `string`   | No       |
| `onConfirm`       | `Function` | No       |

### `ToolInfoConfirmationDetails`

#### Properties

| Property    | Type       | Optional |
| ----------- | ---------- | -------- |
| `type`      | `any`      | No       |
| `title`     | `string`   | No       |
| `onConfirm` | `Function` | No       |
| `prompt`    | `string`   | No       |
| `urls`      | `string[]` | Yes      |

## Type Aliases

### `ToolResultDisplay`

```typescript
type ToolResultDisplay = string | FileDiff;
```

### `ToolCallConfirmationDetails`

```typescript
type ToolCallConfirmationDetails =
  | ToolEditConfirmationDetails
  | ToolExecuteConfirmationDetails
  | ToolMcpConfirmationDetails
  | ToolInfoConfirmationDetails;
```

## Classes

### `BaseTool`

#### Methods

##### `constructor(unknown: any, unknown: any, unknown: any, unknown: any, unknown: any, unknown: any)`

##### `schema()`

##### `validateToolParams(params: TParams)`

##### `getDescription(params: TParams)`

##### `shouldConfirmExecute(params: TParams, abortSignal: AbortSignal)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/tools.js';
```
