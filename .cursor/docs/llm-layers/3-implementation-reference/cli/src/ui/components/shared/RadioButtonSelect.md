# RadioButtonSelect

**File**: `packages/cli/src/ui/components/shared/RadioButtonSelect.tsx`
**Package**: CLI

## Summary

- **Total Exports**: 3
- **Interfaces**: 2
- **Types**: 0
- **Functions**: 1
- **Classes**: 0

## Interfaces

### `RadioSelectItem`

#### Properties

| Property   | Type      | Optional |
| ---------- | --------- | -------- |
| `label`    | `string`  | No       |
| `value`    | `T`       | No       |
| `disabled` | `boolean` | Yes      |

### `RadioButtonSelectProps`

#### Properties

| Property       | Type       | Optional |
| -------------- | ---------- | -------- |
| `items`        | `Array`    | No       |
| `initialIndex` | `number`   | Yes      |
| `onSelect`     | `Function` | No       |
| `onHighlight`  | `Function` | Yes      |
| `isFocused`    | `boolean`  | Yes      |

## Functions

### `RadioButtonSelect`

```typescript
function RadioButtonSelect(unknown: RadioButtonSelectProps): unknown;
```

#### Parameters

| Name      | Type                     | Optional | Description |
| --------- | ------------------------ | -------- | ----------- |
| `unknown` | `RadioButtonSelectProps` | No       | -           |

**Returns**: `unknown`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/components/shared/RadioButtonSelect.tsx';
```
