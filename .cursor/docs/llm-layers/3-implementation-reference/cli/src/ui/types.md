# types

**File**: `packages/cli/src/ui/types.ts`
**Package**: CLI

## Summary

- **Total Exports**: 19
- **Interfaces**: 5
- **Types**: 14
- **Functions**: 0
- **Classes**: 0

## Interfaces

### `ToolCallEvent`

#### Properties

| Property              | Type                         | Optional   |
| --------------------- | ---------------------------- | ---------- | --- |
| `type`                | `any`                        | No         |
| `status`              | `ToolCallStatus`             | No         |
| `callId`              | `string`                     | No         |
| `name`                | `string`                     | No         |
| `args`                | `Record`                     | No         |
| `resultDisplay`       | `ToolResultDisplay           | undefined` | No  |
| `confirmationDetails` | `ToolCallConfirmationDetails | undefined` | No  |

### `IndividualToolCallDisplay`

#### Properties

| Property                 | Type                         | Optional   |
| ------------------------ | ---------------------------- | ---------- | --- |
| `callId`                 | `string`                     | No         |
| `name`                   | `string`                     | No         |
| `description`            | `string`                     | No         |
| `resultDisplay`          | `ToolResultDisplay           | undefined` | No  |
| `status`                 | `ToolCallStatus`             | No         |
| `confirmationDetails`    | `ToolCallConfirmationDetails | undefined` | No  |
| `renderOutputAsMarkdown` | `boolean`                    | Yes        |

### `CompressionProps`

#### Properties

| Property             | Type      | Optional |
| -------------------- | --------- | -------- | --- |
| `isPending`          | `boolean` | No       |
| `originalTokenCount` | `number   | null`    | No  |
| `newTokenCount`      | `number   | null`    | No  |

### `HistoryItemBase`

#### Properties

| Property | Type     | Optional |
| -------- | -------- | -------- |
| `text`   | `string` | Yes      |

### `ConsoleMessageItem`

#### Properties

| Property  | Type     | Optional |
| --------- | -------- | -------- | --- | ---- | --- |
| `type`    | `any     | any      | any | any` | No  |
| `content` | `string` | No       |
| `count`   | `number` | No       |

## Type Aliases

### `HistoryItemUser`

```typescript
type HistoryItemUser = any;
```

### `HistoryItemGemini`

```typescript
type HistoryItemGemini = any;
```

### `HistoryItemGeminiContent`

```typescript
type HistoryItemGeminiContent = any;
```

### `HistoryItemInfo`

```typescript
type HistoryItemInfo = any;
```

### `HistoryItemError`

```typescript
type HistoryItemError = any;
```

### `HistoryItemAbout`

```typescript
type HistoryItemAbout = any;
```

### `HistoryItemStats`

```typescript
type HistoryItemStats = any;
```

### `HistoryItemQuit`

```typescript
type HistoryItemQuit = any;
```

### `HistoryItemToolGroup`

```typescript
type HistoryItemToolGroup = any;
```

### `HistoryItemUserShell`

```typescript
type HistoryItemUserShell = any;
```

### `HistoryItemCompression`

```typescript
type HistoryItemCompression = any;
```

### `HistoryItemWithoutId`

```typescript
type HistoryItemWithoutId =
  | HistoryItemUser
  | HistoryItemUserShell
  | HistoryItemGemini
  | HistoryItemGeminiContent
  | HistoryItemInfo
  | HistoryItemError
  | HistoryItemAbout
  | HistoryItemToolGroup
  | HistoryItemStats
  | HistoryItemQuit
  | HistoryItemCompression;
```

### `HistoryItem`

```typescript
type HistoryItem = any;
```

### `Message`

```typescript
type Message = object | object | object | object | object;
```

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/types.js';
```
