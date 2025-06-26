# fileDiscoveryService

**File**: `packages/core/src/services/fileDiscoveryService.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `FilterFilesOptions`

#### Properties

| Property              | Type      | Optional |
| --------------------- | --------- | -------- |
| `respectGitIgnore`    | `boolean` | Yes      |
| `respectGeminiIgnore` | `boolean` | Yes      |

## Classes

### `FileDiscoveryService`

#### Properties

| Name                 | Static | Readonly |
| -------------------- | ------ | -------- |
| `gitIgnoreFilter`    | No     | No       |
| `geminiIgnoreFilter` | No     | No       |
| `projectRoot`        | No     | No       |

#### Methods

##### `constructor(projectRoot: string)`

##### `filterFiles(filePaths: string[], options: any)`

##### `shouldGitIgnoreFile(filePath: string)`

##### `shouldGeminiIgnoreFile(filePath: string)`

##### `getGeminiIgnorePatterns()`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/services/fileDiscoveryService.js';
```
