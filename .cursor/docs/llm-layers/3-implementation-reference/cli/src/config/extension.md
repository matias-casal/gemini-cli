# extension

**File**: `packages/cli/src/config/extension.ts`
**Package**: CLI

## Summary

- **Total Exports**: 3
- **Interfaces**: 2
- **Types**: 0
- **Functions**: 1
- **Classes**: 0

## Interfaces

### `Extension`

#### Properties

| Property       | Type              | Optional |
| -------------- | ----------------- | -------- |
| `config`       | `ExtensionConfig` | No       |
| `contextFiles` | `string[]`        | No       |

### `ExtensionConfig`

#### Properties

| Property          | Type     | Optional  |
| ----------------- | -------- | --------- | --- |
| `name`            | `string` | No        |
| `version`         | `string` | No        |
| `mcpServers`      | `Record` | Yes       |
| `contextFileName` | `string  | string[]` | Yes |

## Functions

### `loadExtensions`

```typescript
function loadExtensions(workspaceDir: string): Extension[];
```

#### Parameters

| Name           | Type     | Optional | Description |
| -------------- | -------- | -------- | ----------- |
| `workspaceDir` | `string` | No       | -           |

**Returns**: `Extension[]`

## Usage Example

```typescript
import {} from /* components */ 'packages/cli/src/config/extension.js';
```
