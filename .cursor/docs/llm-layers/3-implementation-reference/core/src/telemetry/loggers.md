# loggers

**File**: `packages/core/src/telemetry/loggers.ts`
**Package**: Core

## Summary

- **Total Exports**: 6
- **Interfaces**: 0
- **Types**: 0
- **Functions**: 6
- **Classes**: 0

## Functions

### `logCliConfiguration`

```typescript
function logCliConfiguration(config: Config, event: StartSessionEvent): void;
```

#### Parameters

| Name     | Type                | Optional | Description |
| -------- | ------------------- | -------- | ----------- |
| `config` | `Config`            | No       | -           |
| `event`  | `StartSessionEvent` | No       | -           |

**Returns**: `void`

### `logUserPrompt`

```typescript
function logUserPrompt(config: Config, event: UserPromptEvent): void;
```

#### Parameters

| Name     | Type              | Optional | Description |
| -------- | ----------------- | -------- | ----------- |
| `config` | `Config`          | No       | -           |
| `event`  | `UserPromptEvent` | No       | -           |

**Returns**: `void`

### `logToolCall`

```typescript
function logToolCall(config: Config, event: ToolCallEvent): void;
```

#### Parameters

| Name     | Type            | Optional | Description |
| -------- | --------------- | -------- | ----------- |
| `config` | `Config`        | No       | -           |
| `event`  | `ToolCallEvent` | No       | -           |

**Returns**: `void`

### `logApiRequest`

```typescript
function logApiRequest(config: Config, event: ApiRequestEvent): void;
```

#### Parameters

| Name     | Type              | Optional | Description |
| -------- | ----------------- | -------- | ----------- |
| `config` | `Config`          | No       | -           |
| `event`  | `ApiRequestEvent` | No       | -           |

**Returns**: `void`

### `logApiError`

```typescript
function logApiError(config: Config, event: ApiErrorEvent): void;
```

#### Parameters

| Name     | Type            | Optional | Description |
| -------- | --------------- | -------- | ----------- |
| `config` | `Config`        | No       | -           |
| `event`  | `ApiErrorEvent` | No       | -           |

**Returns**: `void`

### `logApiResponse`

```typescript
function logApiResponse(config: Config, event: ApiResponseEvent): void;
```

#### Parameters

| Name     | Type               | Optional | Description |
| -------- | ------------------ | -------- | ----------- |
| `config` | `Config`           | No       | -           |
| `event`  | `ApiResponseEvent` | No       | -           |

**Returns**: `void`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/telemetry/loggers.js';
```
