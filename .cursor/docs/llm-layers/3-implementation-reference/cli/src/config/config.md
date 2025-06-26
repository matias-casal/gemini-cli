# config

**File**: `packages/cli/src/config/config.ts`
**Package**: CLI

## Summary

- **Total Exports**: 3
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 3
- **Classes**: 0

## Functions

### `loadHierarchicalGeminiMemory`

```typescript
async function loadHierarchicalGeminiMemory(
  currentWorkingDirectory: string,
  debugMode: boolean,
  fileService: FileDiscoveryService,
  extensionContextFilePaths: any,
): Promise;
```

#### Parameters

| Name                        | Type                   | Optional | Description |
| --------------------------- | ---------------------- | -------- | ----------- |
| `currentWorkingDirectory`   | `string`               | No       | -           |
| `debugMode`                 | `boolean`              | No       | -           |
| `fileService`               | `FileDiscoveryService` | No       | -           |
| `extensionContextFilePaths` | `any`                  | No       | -           |

**Returns**: `Promise`

### `loadCliConfig`

```typescript
async function loadCliConfig(
  settings: Settings,
  extensions: Extension[],
  sessionId: string,
): Promise;
```

#### Parameters

| Name         | Type          | Optional | Description |
| ------------ | ------------- | -------- | ----------- |
| `settings`   | `Settings`    | No       | -           |
| `extensions` | `Extension[]` | No       | -           |
| `sessionId`  | `string`      | No       | -           |

**Returns**: `Promise`

### `loadEnvironment`

```typescript
function loadEnvironment(): void;
```

**Returns**: `void`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/config/config.js';
```
