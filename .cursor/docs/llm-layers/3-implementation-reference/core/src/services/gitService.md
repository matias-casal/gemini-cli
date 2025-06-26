# gitService

**File**: `packages/core/src/services/gitService.ts`
**Package**: Core

## Summary

- **Total Exports**: 1
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Classes

### `GitService`

#### Properties

| Name          | Static | Readonly |
| ------------- | ------ | -------- |
| `projectRoot` | No     | No       |

#### Methods

##### `constructor(projectRoot: string)`

##### `getHistoryDir()`

##### `async initialize()`

##### `verifyGitAvailability()`

##### `async setupShadowGitRepository()`

##### `shadowGitRepository()`

##### `async getCurrentCommitHash()`

##### `async createFileSnapshot(message: string)`

##### `async restoreProjectFromSnapshot(commitHash: string)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/services/gitService.js';
```
