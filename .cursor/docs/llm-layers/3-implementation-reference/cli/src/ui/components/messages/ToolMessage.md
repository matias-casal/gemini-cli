# ToolMessage

**File**: `packages/cli/src/ui/components/messages/ToolMessage.tsx`
**Package**: CLI

## Summary

- **Total Exports**: 4
- **Interfaces**: 1
- **Types**: 2
- **Functions**: 1
- **Classes**: 0

## Interfaces

### `ToolMessageProps`

**Extends**: IndividualToolCallDisplay

#### Properties

| Property                  | Type           | Optional |
| ------------------------- | -------------- | -------- |
| `availableTerminalHeight` | `number`       | Yes      |
| `terminalWidth`           | `number`       | No       |
| `emphasis`                | `TextEmphasis` | Yes      |
| `renderOutputAsMarkdown`  | `boolean`      | Yes      |

## Type Aliases

### `TextEmphasis`

```typescript
type TextEmphasis = any | any | any;
```

### `ToolMessage`

```typescript
type ToolMessage = undefined;
```

## Functions

### `ToolMessage`

```typescript
function ToolMessage(unknown: any): unknown;
```

#### Parameters

| Name      | Type  | Optional | Description |
| --------- | ----- | -------- | ----------- |
| `unknown` | `any` | No       | -           |

**Returns**: `unknown`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/components/messages/ToolMessage.tsx';
```
