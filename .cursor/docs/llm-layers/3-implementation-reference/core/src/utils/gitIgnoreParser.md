# gitIgnoreParser

**File**: `packages/core/src/utils/gitIgnoreParser.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `GitIgnoreFilter`

#### Properties

_No properties defined_

## Classes

### `GitIgnoreParser`

#### Properties

| Name          | Static | Readonly |
| ------------- | ------ | -------- |
| `projectRoot` | No     | No       |
| `ig`          | No     | No       |
| `patterns`    | No     | No       |

#### Methods

##### `constructor(projectRoot: string)`

##### `loadGitRepoPatterns()`

##### `loadPatterns(patternsFileName: string)`

##### `addPatterns(patterns: string[])`

##### `isIgnored(filePath: string)`

##### `getPatterns()`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/utils/gitIgnoreParser.js';
```
