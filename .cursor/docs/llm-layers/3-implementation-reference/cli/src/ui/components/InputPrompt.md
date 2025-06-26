# InputPrompt

**File**: `packages/cli/src/ui/components/InputPrompt.tsx`
**Package**: CLI

## Summary

- **Total Exports**: 3
- **Interfaces**: 1
- **Types**: 1
- **Functions**: 1
- **Classes**: 0

## Interfaces

### `InputPromptProps`

#### Properties

| Property             | Type             | Optional |
| -------------------- | ---------------- | -------- |
| `buffer`             | `TextBuffer`     | No       |
| `onSubmit`           | `Function`       | No       |
| `userMessages`       | `any`            | No       |
| `onClearScreen`      | `Function`       | No       |
| `config`             | `Config`         | No       |
| `slashCommands`      | `SlashCommand[]` | No       |
| `placeholder`        | `string`         | Yes      |
| `focus`              | `boolean`        | Yes      |
| `inputWidth`         | `number`         | No       |
| `suggestionsWidth`   | `number`         | No       |
| `shellModeActive`    | `boolean`        | No       |
| `setShellModeActive` | `Function`       | No       |

## Type Aliases

### `InputPrompt`

```typescript
type InputPrompt = undefined;
```

## Functions

### `InputPrompt`

```typescript
function InputPrompt(unknown: any): unknown;
```

#### Parameters

| Name      | Type  | Optional | Description |
| --------- | ----- | -------- | ----------- |
| `unknown` | `any` | No       | -           |

**Returns**: `unknown`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/components/InputPrompt.tsx';
```
