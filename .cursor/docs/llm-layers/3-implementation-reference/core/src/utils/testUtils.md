# testUtils

**File**: `packages/core/src/utils/testUtils.ts`
**Package**: Core

## Summary

- **Total Exports**: 6
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 6
- **Classes**: 0

## Functions

### `shouldSimulate429`

```typescript
function shouldSimulate429(authType?: string): boolean;
```

#### Parameters

| Name       | Type     | Optional | Description |
| ---------- | -------- | -------- | ----------- |
| `authType` | `string` | Yes      | -           |

**Returns**: `boolean`

### `resetRequestCounter`

```typescript
function resetRequestCounter(): void;
```

**Returns**: `void`

### `disableSimulationAfterFallback`

```typescript
function disableSimulationAfterFallback(): void;
```

**Returns**: `void`

### `createSimulated429Error`

```typescript
function createSimulated429Error(): Error;
```

**Returns**: `Error`

### `resetSimulationState`

```typescript
function resetSimulationState(): void;
```

**Returns**: `void`

### `setSimulate429`

```typescript
function setSimulate429(
  enabled: boolean,
  afterRequests: any,
  forAuthType?: string,
): void;
```

#### Parameters

| Name            | Type      | Optional | Description |
| --------------- | --------- | -------- | ----------- |
| `enabled`       | `boolean` | No       | -           |
| `afterRequests` | `any`     | No       | -           |
| `forAuthType`   | `string`  | Yes      | -           |

**Returns**: `void`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/utils/testUtils.js';
```
