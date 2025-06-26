# sdk

**File**: `packages/core/src/telemetry/sdk.ts`
**Package**: Core

## Summary

- **Total Exports**: 3
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 3
- **Classes**: 0

## Functions

### `isTelemetrySdkInitialized`

```typescript
function isTelemetrySdkInitialized(): boolean;
```

**Returns**: `boolean`

### `initializeTelemetry`

```typescript
function initializeTelemetry(config: Config): void;
```

#### Parameters

| Name     | Type     | Optional | Description |
| -------- | -------- | -------- | ----------- |
| `config` | `Config` | No       | -           |

**Returns**: `void`

### `shutdownTelemetry`

```typescript
async function shutdownTelemetry(): Promise;
```

**Returns**: `Promise`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/telemetry/sdk.js';
```
