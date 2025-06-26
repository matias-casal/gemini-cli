# settings

**File**: `packages/cli/src/config/settings.ts`
**Package**: CLI

## Summary

- **Total Exports**: 8
- **Interfaces**: 5
- **Types**: 0
- **Functions**: 2
- **Classes**: 1

## Interfaces

### `CheckpointingSettings`

#### Properties

| Property  | Type      | Optional |
| --------- | --------- | -------- |
| `enabled` | `boolean` | Yes      |

### `AccessibilitySettings`

#### Properties

| Property                | Type      | Optional |
| ----------------------- | --------- | -------- |
| `disableLoadingPhrases` | `boolean` | Yes      |

### `Settings`

#### Properties

| Property                       | Type                    | Optional  |
| ------------------------------ | ----------------------- | --------- | --- |
| `theme`                        | `string`                | Yes       |
| `selectedAuthType`             | `AuthType`              | Yes       |
| `sandbox`                      | `boolean                | string`   | Yes |
| `coreTools`                    | `string[]`              | Yes       |
| `excludeTools`                 | `string[]`              | Yes       |
| `toolDiscoveryCommand`         | `string`                | Yes       |
| `toolCallCommand`              | `string`                | Yes       |
| `mcpServerCommand`             | `string`                | Yes       |
| `mcpServers`                   | `Record`                | Yes       |
| `showMemoryUsage`              | `boolean`               | Yes       |
| `contextFileName`              | `string                 | string[]` | Yes |
| `accessibility`                | `AccessibilitySettings` | Yes       |
| `telemetry`                    | `TelemetrySettings`     | Yes       |
| `usageStatisticsEnabled`       | `boolean`               | Yes       |
| `preferredEditor`              | `string`                | Yes       |
| `bugCommand`                   | `BugCommandSettings`    | Yes       |
| `checkpointing`                | `CheckpointingSettings` | Yes       |
| `autoConfigureMaxOldSpaceSize` | `boolean`               | Yes       |
| `fileFiltering`                | `object`                | Yes       |
| `hideWindowTitle`              | `boolean`               | Yes       |

### `SettingsError`

#### Properties

| Property  | Type     | Optional |
| --------- | -------- | -------- |
| `message` | `string` | No       |
| `path`    | `string` | No       |

### `SettingsFile`

#### Properties

| Property   | Type       | Optional |
| ---------- | ---------- | -------- |
| `settings` | `Settings` | No       |
| `path`     | `string`   | No       |

## Functions

### `loadSettings`

```typescript
function loadSettings(workspaceDir: string): LoadedSettings;
```

#### Parameters

| Name           | Type     | Optional | Description |
| -------------- | -------- | -------- | ----------- |
| `workspaceDir` | `string` | No       | -           |

**Returns**: `LoadedSettings`

### `saveSettings`

```typescript
function saveSettings(settingsFile: SettingsFile): void;
```

#### Parameters

| Name           | Type           | Optional | Description |
| -------------- | -------------- | -------- | ----------- |
| `settingsFile` | `SettingsFile` | No       | -           |

**Returns**: `void`

## Classes

### `LoadedSettings`

#### Properties

| Name        | Static | Readonly |
| ----------- | ------ | -------- |
| `user`      | No     | Yes      |
| `workspace` | No     | Yes      |
| `errors`    | No     | Yes      |
| `_merged`   | No     | No       |

#### Methods

##### `constructor(user: SettingsFile, workspace: SettingsFile, errors: SettingsError[])`

##### `merged()`

##### `computeMergedSettings()`

##### `forScope(scope: SettingScope)`

##### `setValue(scope: SettingScope, key: any, value: string | Record | undefined)`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/config/settings.js';
```
