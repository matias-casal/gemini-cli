# editor

**File**: `packages/core/src/utils/editor.ts`
**Package**: Core

## Summary

- **Total Exports**: 6
- **Interfaces**: 0
- **Types**: 1
- **Functions**: 5
- **Classes**: 0

## Type Aliases

### `EditorType`

```typescript
type EditorType = any | any | any | any | any;
```

## Functions

### `checkHasEditorType`

```typescript
function checkHasEditorType(editor: EditorType): boolean;
```

#### Parameters

| Name     | Type         | Optional | Description |
| -------- | ------------ | -------- | ----------- |
| `editor` | `EditorType` | No       | -           |

**Returns**: `boolean`

### `allowEditorTypeInSandbox`

```typescript
function allowEditorTypeInSandbox(editor: EditorType): boolean;
```

#### Parameters

| Name     | Type         | Optional | Description |
| -------- | ------------ | -------- | ----------- |
| `editor` | `EditorType` | No       | -           |

**Returns**: `boolean`

### `isEditorAvailable`

```typescript
function isEditorAvailable(editor: string | undefined): boolean;
```

#### Parameters

| Name     | Type    | Optional   | Description |
| -------- | ------- | ---------- | ----------- | --- |
| `editor` | `string | undefined` | No          | -   |

**Returns**: `boolean`

### `getDiffCommand`

```typescript
function getDiffCommand(
  oldPath: string,
  newPath: string,
  editor: EditorType,
): DiffCommand | null;
```

#### Parameters

| Name      | Type         | Optional | Description |
| --------- | ------------ | -------- | ----------- |
| `oldPath` | `string`     | No       | -           |
| `newPath` | `string`     | No       | -           |
| `editor`  | `EditorType` | No       | -           |

**Returns**: `DiffCommand | null`

### `openDiff`

```typescript
async function openDiff(
  oldPath: string,
  newPath: string,
  editor: EditorType,
): Promise;
```

#### Parameters

| Name      | Type         | Optional | Description |
| --------- | ------------ | -------- | ----------- |
| `oldPath` | `string`     | No       | -           |
| `newPath` | `string`     | No       | -           |
| `editor`  | `EditorType` | No       | -           |

**Returns**: `Promise`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/utils/editor.js';
```
