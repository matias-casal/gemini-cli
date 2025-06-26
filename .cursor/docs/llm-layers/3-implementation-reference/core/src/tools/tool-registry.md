# tool-registry

**File**: `packages/core/src/tools/tool-registry.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 0
- **Classes**: 2

## Classes

### `DiscoveredTool`

**Extends**: `BaseTool`

#### Methods

##### `constructor(unknown: any, unknown: any, unknown: any, unknown: any)`

##### `async execute(params: ToolParams)`

### `ToolRegistry`

#### Properties

| Name        | Static | Readonly |
| ----------- | ------ | -------- |
| `tools`     | No     | No       |
| `discovery` | No     | No       |
| `config`    | No     | No       |

#### Methods

##### `constructor(config: Config)`

##### `registerTool(tool: Tool)`

##### `async discoverTools()`

##### `getFunctionDeclarations()`

##### `getAllTools()`

##### `getToolsByServer(serverName: string)`

##### `getTool(name: string)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/tools/tool-registry.js';
```
