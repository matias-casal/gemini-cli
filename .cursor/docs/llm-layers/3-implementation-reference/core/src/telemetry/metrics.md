# metrics

**File**: `packages/core/src/telemetry/metrics.ts`
**Package**: Core

## Summary

- **Total Exports**: 7
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 7
- **Classes**: 0

## Functions

### `getMeter`

```typescript
function getMeter(): Meter | undefined;
```

**Returns**: `Meter | undefined`

### `initializeMetrics`

```typescript
function initializeMetrics(config: Config): void;
```

#### Parameters

| Name     | Type     | Optional | Description |
| -------- | -------- | -------- | ----------- |
| `config` | `Config` | No       | -           |

**Returns**: `void`

### `recordToolCallMetrics`

```typescript
function recordToolCallMetrics(
  config: Config,
  functionName: string,
  durationMs: number,
  success: boolean,
  decision?: any | any | any,
): void;
```

#### Parameters

| Name           | Type      | Optional | Description |
| -------------- | --------- | -------- | ----------- | --- | --- |
| `config`       | `Config`  | No       | -           |
| `functionName` | `string`  | No       | -           |
| `durationMs`   | `number`  | No       | -           |
| `success`      | `boolean` | No       | -           |
| `decision`     | `any      | any      | any`        | Yes | -   |

**Returns**: `void`

### `recordTokenUsageMetrics`

```typescript
function recordTokenUsageMetrics(
  config: Config,
  model: string,
  tokenCount: number,
  type: any | any | any | any | any,
): void;
```

#### Parameters

| Name         | Type     | Optional | Description |
| ------------ | -------- | -------- | ----------- | --- | ---- | --- | --- |
| `config`     | `Config` | No       | -           |
| `model`      | `string` | No       | -           |
| `tokenCount` | `number` | No       | -           |
| `type`       | `any     | any      | any         | any | any` | No  | -   |

**Returns**: `void`

### `recordApiResponseMetrics`

```typescript
function recordApiResponseMetrics(
  config: Config,
  model: string,
  durationMs: number,
  statusCode?: number | string,
  error?: string,
): void;
```

#### Parameters

| Name         | Type     | Optional | Description |
| ------------ | -------- | -------- | ----------- | --- |
| `config`     | `Config` | No       | -           |
| `model`      | `string` | No       | -           |
| `durationMs` | `number` | No       | -           |
| `statusCode` | `number  | string`  | Yes         | -   |
| `error`      | `string` | Yes      | -           |

**Returns**: `void`

### `recordApiErrorMetrics`

```typescript
function recordApiErrorMetrics(
  config: Config,
  model: string,
  durationMs: number,
  statusCode?: number | string,
  errorType?: string,
): void;
```

#### Parameters

| Name         | Type     | Optional | Description |
| ------------ | -------- | -------- | ----------- | --- |
| `config`     | `Config` | No       | -           |
| `model`      | `string` | No       | -           |
| `durationMs` | `number` | No       | -           |
| `statusCode` | `number  | string`  | Yes         | -   |
| `errorType`  | `string` | Yes      | -           |

**Returns**: `void`

### `recordFileOperationMetric`

```typescript
function recordFileOperationMetric(
  config: Config,
  operation: FileOperation,
  lines?: number,
  mimetype?: string,
  extension?: string,
): void;
```

#### Parameters

| Name        | Type            | Optional | Description |
| ----------- | --------------- | -------- | ----------- |
| `config`    | `Config`        | No       | -           |
| `operation` | `FileOperation` | No       | -           |
| `lines`     | `number`        | Yes      | -           |
| `mimetype`  | `string`        | Yes      | -           |
| `extension` | `string`        | Yes      | -           |

**Returns**: `void`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/telemetry/metrics.js';
```
