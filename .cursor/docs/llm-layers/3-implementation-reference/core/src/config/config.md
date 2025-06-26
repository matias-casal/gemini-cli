# config

**File**: `packages/core/src/config/config.ts`
**Package**: Core

## Summary

- **Total Exports**: 9
- **Interfaces**: 5
- **Types**: 1
- **Functions**: 1
- **Classes**: 2

## Interfaces

### `AccessibilitySettings`

#### Properties

| Property                | Type      | Optional |
| ----------------------- | --------- | -------- |
| `disableLoadingPhrases` | `boolean` | Yes      |

### `BugCommandSettings`

#### Properties

| Property      | Type     | Optional |
| ------------- | -------- | -------- |
| `urlTemplate` | `string` | No       |

### `TelemetrySettings`

#### Properties

| Property       | Type              | Optional |
| -------------- | ----------------- | -------- |
| `enabled`      | `boolean`         | Yes      |
| `target`       | `TelemetryTarget` | Yes      |
| `otlpEndpoint` | `string`          | Yes      |
| `logPrompts`   | `boolean`         | Yes      |

### `SandboxConfig`

#### Properties

| Property  | Type     | Optional |
| --------- | -------- | -------- | ---- | --- |
| `command` | `any     | any      | any` | No  |
| `image`   | `string` | No       |

### `ConfigParameters`

#### Properties

| Property                    | Type                    | Optional  |
| --------------------------- | ----------------------- | --------- | --- |
| `sessionId`                 | `string`                | No        |
| `embeddingModel`            | `string`                | Yes       |
| `sandbox`                   | `SandboxConfig`         | Yes       |
| `targetDir`                 | `string`                | No        |
| `debugMode`                 | `boolean`               | No        |
| `question`                  | `string`                | Yes       |
| `fullContext`               | `boolean`               | Yes       |
| `coreTools`                 | `string[]`              | Yes       |
| `excludeTools`              | `string[]`              | Yes       |
| `toolDiscoveryCommand`      | `string`                | Yes       |
| `toolCallCommand`           | `string`                | Yes       |
| `mcpServerCommand`          | `string`                | Yes       |
| `mcpServers`                | `Record`                | Yes       |
| `userMemory`                | `string`                | Yes       |
| `geminiMdFileCount`         | `number`                | Yes       |
| `approvalMode`              | `ApprovalMode`          | Yes       |
| `showMemoryUsage`           | `boolean`               | Yes       |
| `contextFileName`           | `string                 | string[]` | Yes |
| `accessibility`             | `AccessibilitySettings` | Yes       |
| `telemetry`                 | `TelemetrySettings`     | Yes       |
| `usageStatisticsEnabled`    | `boolean`               | Yes       |
| `fileFiltering`             | `object`                | Yes       |
| `checkpointing`             | `boolean`               | Yes       |
| `proxy`                     | `string`                | Yes       |
| `cwd`                       | `string`                | No        |
| `fileDiscoveryService`      | `FileDiscoveryService`  | Yes       |
| `bugCommand`                | `BugCommandSettings`    | Yes       |
| `model`                     | `string`                | No        |
| `extensionContextFilePaths` | `string[]`              | Yes       |

## Type Aliases

### `FlashFallbackHandler`

```typescript
type FlashFallbackHandler = Function;
```

## Functions

### `createToolRegistry`

```typescript
function createToolRegistry(config: Config): Promise;
```

#### Parameters

| Name     | Type     | Optional | Description |
| -------- | -------- | -------- | ----------- |
| `config` | `Config` | No       | -           |

**Returns**: `Promise`

## Classes

### `MCPServerConfig`

#### Methods

##### `constructor(unknown: any, unknown: any, unknown: any, unknown: any, unknown: any, unknown: any, unknown: any, unknown: any, unknown: any, unknown: any)`

### `Config`

#### Properties

| Name                         | Static | Readonly |
| ---------------------------- | ------ | -------- |
| `toolRegistry`               | No     | No       |
| `sessionId`                  | No     | Yes      |
| `contentGeneratorConfig`     | No     | No       |
| `embeddingModel`             | No     | Yes      |
| `sandbox`                    | No     | Yes      |
| `targetDir`                  | No     | Yes      |
| `debugMode`                  | No     | Yes      |
| `question`                   | No     | Yes      |
| `fullContext`                | No     | Yes      |
| `coreTools`                  | No     | Yes      |
| `excludeTools`               | No     | Yes      |
| `toolDiscoveryCommand`       | No     | Yes      |
| `toolCallCommand`            | No     | Yes      |
| `mcpServerCommand`           | No     | Yes      |
| `mcpServers`                 | No     | Yes      |
| `userMemory`                 | No     | No       |
| `geminiMdFileCount`          | No     | No       |
| `approvalMode`               | No     | No       |
| `showMemoryUsage`            | No     | Yes      |
| `accessibility`              | No     | Yes      |
| `telemetrySettings`          | No     | Yes      |
| `usageStatisticsEnabled`     | No     | Yes      |
| `geminiClient`               | No     | No       |
| `fileFiltering`              | No     | Yes      |
| `fileDiscoveryService`       | No     | No       |
| `gitService`                 | No     | No       |
| `checkpointing`              | No     | Yes      |
| `proxy`                      | No     | Yes      |
| `cwd`                        | No     | Yes      |
| `bugCommand`                 | No     | Yes      |
| `model`                      | No     | Yes      |
| `extensionContextFilePaths`  | No     | Yes      |
| `modelSwitchedDuringSession` | No     | No       |
| `flashFallbackHandler`       | No     | No       |

#### Methods

##### `constructor(params: ConfigParameters)`

##### `async refreshAuth(authMethod: AuthType)`

##### `getSessionId()`

##### `getContentGeneratorConfig()`

##### `getModel()`

##### `setModel(newModel: string)`

##### `isModelSwitchedDuringSession()`

##### `resetModelToDefault()`

##### `setFlashFallbackHandler(handler: FlashFallbackHandler)`

##### `getEmbeddingModel()`

##### `getSandbox()`

##### `getTargetDir()`

##### `getProjectRoot()`

##### `getToolRegistry()`

##### `getDebugMode()`

##### `getQuestion()`

##### `getFullContext()`

##### `getCoreTools()`

##### `getExcludeTools()`

##### `getToolDiscoveryCommand()`

##### `getToolCallCommand()`

##### `getMcpServerCommand()`

##### `getMcpServers()`

##### `getUserMemory()`

##### `setUserMemory(newUserMemory: string)`

##### `getGeminiMdFileCount()`

##### `setGeminiMdFileCount(count: number)`

##### `getApprovalMode()`

##### `setApprovalMode(mode: ApprovalMode)`

##### `getShowMemoryUsage()`

##### `getAccessibility()`

##### `getTelemetryEnabled()`

##### `getTelemetryLogPromptsEnabled()`

##### `getTelemetryOtlpEndpoint()`

##### `getTelemetryTarget()`

##### `getGeminiClient()`

##### `getGeminiDir()`

##### `getProjectTempDir()`

##### `getEnableRecursiveFileSearch()`

##### `getFileFilteringRespectGitIgnore()`

##### `getCheckpointingEnabled()`

##### `getProxy()`

##### `getWorkingDir()`

##### `getBugCommand()`

##### `getFileService()`

##### `getUsageStatisticsEnabled()`

##### `getExtensionContextFilePaths()`

##### `async getGitService()`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/config/config.js';
```
