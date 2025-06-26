# clearcut-logger

**File**: `packages/core/src/telemetry/clearcut-logger/clearcut-logger.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `LogResponse`

#### Properties

| Property            | Type     | Optional |
| ------------------- | -------- | -------- |
| `nextRequestWaitMs` | `number` | Yes      |

## Classes

### `ClearcutLogger`

#### Properties

| Name                | Static | Readonly |
| ------------------- | ------ | -------- |
| `instance`          | Yes    | No       |
| `config`            | No     | No       |
| `events`            | No     | Yes      |
| `last_flush_time`   | No     | No       |
| `flush_interval_ms` | No     | No       |

#### Methods

##### `constructor(config: Config)`

##### `static getInstance(config: Config)`

##### `enqueueLogEvent(event: any)`

##### `createLogEvent(name: string, data: any)`

##### `flushIfNeeded()`

##### `flushToClearcut()`

##### `decodeLogResponse(buf: Buffer)`

##### `logStartSessionEvent(event: StartSessionEvent)`

##### `logNewPromptEvent(event: UserPromptEvent)`

##### `logToolCallEvent(event: ToolCallEvent)`

##### `logApiRequestEvent(event: ApiRequestEvent)`

##### `logApiResponseEvent(event: ApiResponseEvent)`

##### `logApiErrorEvent(event: ApiErrorEvent)`

##### `logEndSessionEvent(event: EndSessionEvent)`

##### `shutdown()`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/telemetry/clearcut-logger/clearcut-logger.js';
```
