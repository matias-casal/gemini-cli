# slashCommandProcessor

**File**: `packages/cli/src/ui/hooks/slashCommandProcessor.ts`
**Package**: CLI

## Summary

- **Total Exports**: 3
- **Interfaces**: 2
- **Types**: 0
- **Functions**: 1
- **Classes**: 0

## Interfaces

### `SlashCommandActionReturn`

#### Properties

| Property             | Type      | Optional |
| -------------------- | --------- | -------- |
| `shouldScheduleTool` | `boolean` | Yes      |
| `toolName`           | `string`  | Yes      |
| `toolArgs`           | `Record`  | Yes      |
| `message`            | `string`  | Yes      |

### `SlashCommand`

#### Properties

| Property      | Type       | Optional |
| ------------- | ---------- | -------- |
| `name`        | `string`   | No       |
| `altName`     | `string`   | Yes      |
| `description` | `string`   | Yes      |
| `completion`  | `Function` | Yes      |
| `action`      | `Function` | No       |

## Functions

### `useSlashCommandProcessor`

```typescript
function useSlashCommandProcessor(
  config: Config | null,
  settings: LoadedSettings,
  history: HistoryItem[],
  addItem: any,
  clearItems: any,
  loadHistory: any,
  refreshStatic: Function,
  setShowHelp: unknown,
  onDebugMessage: Function,
  openThemeDialog: Function,
  openAuthDialog: Function,
  openEditorDialog: Function,
  performMemoryRefresh: Function,
  toggleCorgiMode: Function,
  showToolDescriptions: any,
  setQuittingMessages: Function,
): any;
```

#### Parameters

| Name                   | Type             | Optional | Description |
| ---------------------- | ---------------- | -------- | ----------- | --- |
| `config`               | `Config          | null`    | No          | -   |
| `settings`             | `LoadedSettings` | No       | -           |
| `history`              | `HistoryItem[]`  | No       | -           |
| `addItem`              | `any`            | No       | -           |
| `clearItems`           | `any`            | No       | -           |
| `loadHistory`          | `any`            | No       | -           |
| `refreshStatic`        | `Function`       | No       | -           |
| `setShowHelp`          | `unknown`        | No       | -           |
| `onDebugMessage`       | `Function`       | No       | -           |
| `openThemeDialog`      | `Function`       | No       | -           |
| `openAuthDialog`       | `Function`       | No       | -           |
| `openEditorDialog`     | `Function`       | No       | -           |
| `performMemoryRefresh` | `Function`       | No       | -           |
| `toggleCorgiMode`      | `Function`       | No       | -           |
| `showToolDescriptions` | `any`            | No       | -           |
| `setQuittingMessages`  | `Function`       | No       | -           |

**Returns**: `any`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/ui/hooks/slashCommandProcessor.js';
```
