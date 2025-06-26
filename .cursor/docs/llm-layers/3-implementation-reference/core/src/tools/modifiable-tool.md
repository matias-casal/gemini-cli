# modifiable-tool

**File**: `packages/core/src/tools/modifiable-tool.ts`
**Package**: Core

## Summary

- **Total Exports**: 5
- **Interfaces**: 3
- **Types**: 0
- **Functions**: 2
- **Classes**: 0

## Interfaces

### `ModifiableTool`

**Extends**: Tool

#### Properties

_No properties defined_

### `ModifyContext`

#### Properties

| Property              | Type       | Optional |
| --------------------- | ---------- | -------- |
| `getFilePath`         | `Function` | No       |
| `getCurrentContent`   | `Function` | No       |
| `getProposedContent`  | `Function` | No       |
| `createUpdatedParams` | `Function` | No       |

### `ModifyResult`

#### Properties

| Property        | Type         | Optional |
| --------------- | ------------ | -------- |
| `updatedParams` | `ToolParams` | No       |
| `updatedDiff`   | `string`     | No       |

## Functions

### `isModifiableTool`

```typescript
function isModifiableTool(tool: Tool): any;
```

#### Parameters

| Name   | Type   | Optional | Description |
| ------ | ------ | -------- | ----------- |
| `tool` | `Tool` | No       | -           |

**Returns**: `any`

### `modifyWithEditor`

```typescript
async function modifyWithEditor(
  originalParams: ToolParams,
  modifyContext: ModifyContext,
  editorType: EditorType,
  _abortSignal: AbortSignal,
): Promise;
```

#### Parameters

| Name             | Type            | Optional | Description |
| ---------------- | --------------- | -------- | ----------- |
| `originalParams` | `ToolParams`    | No       | -           |
| `modifyContext`  | `ModifyContext` | No       | -           |
| `editorType`     | `EditorType`    | No       | -           |
| `_abortSignal`   | `AbortSignal`   | No       | -           |

**Returns**: `Promise`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/modifiable-tool.js';
```
