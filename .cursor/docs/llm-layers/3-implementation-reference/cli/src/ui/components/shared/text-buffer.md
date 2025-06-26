# text-buffer

**File**: `packages/cli/src/ui/components/shared/text-buffer.ts`
**Package**: CLI

## Summary

- **Total Exports**: 5
- **Interfaces**: 2
- **Types**: 1
- **Functions**: 2
- **Classes**: 0

## Interfaces

### `Viewport`

#### Properties

| Property | Type     | Optional |
| -------- | -------- | -------- |
| `height` | `number` | No       |
| `width`  | `number` | No       |

### `TextBuffer`

#### Properties

| Property               | Type       | Optional |
| ---------------------- | ---------- | -------- | --- |
| `lines`                | `string[]` | No       |
| `text`                 | `string`   | No       |
| `cursor`               | `any`      | No       |
| `preferredCol`         | `number    | null`    | No  |
| `selectionAnchor`      | `any       | null`    | No  |
| `allVisualLines`       | `string[]` | No       |
| `viewportVisualLines`  | `string[]` | No       |
| `visualCursor`         | `any`      | No       |
| `visualScrollRow`      | `number`   | No       |
| `setText`              | `Function` | No       |
| `insert`               | `Function` | No       |
| `newline`              | `Function` | No       |
| `backspace`            | `Function` | No       |
| `del`                  | `Function` | No       |
| `move`                 | `Function` | No       |
| `undo`                 | `Function` | No       |
| `redo`                 | `Function` | No       |
| `replaceRange`         | `Function` | No       |
| `deleteWordLeft`       | `Function` | No       |
| `deleteWordRight`      | `Function` | No       |
| `killLineRight`        | `Function` | No       |
| `killLineLeft`         | `Function` | No       |
| `handleInput`          | `Function` | No       |
| `openInExternalEditor` | `Function` | No       |
| `copy`                 | `Function` | No       |
| `paste`                | `Function` | No       |
| `startSelection`       | `Function` | No       |
| `replaceRangeByOffset` | `Function` | No       |
| `applyOperations`      | `Function` | No       |

## Type Aliases

### `Direction`

```typescript
type Direction = any | any | any | any | any | any | any | any;
```

## Functions

### `offsetToLogicalPos`

```typescript
function offsetToLogicalPos(text: string, offset: number): any;
```

#### Parameters

| Name     | Type     | Optional | Description |
| -------- | -------- | -------- | ----------- |
| `text`   | `string` | No       | -           |
| `offset` | `number` | No       | -           |

**Returns**: `any`

### `useTextBuffer`

```typescript
function useTextBuffer(unknown: UseTextBufferProps): TextBuffer;
```

#### Parameters

| Name      | Type                 | Optional | Description |
| --------- | -------------------- | -------- | ----------- |
| `unknown` | `UseTextBufferProps` | No       | -           |

**Returns**: `TextBuffer`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/components/shared/text-buffer.js';
```
