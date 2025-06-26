# logger

**File**: `packages/core/src/core/logger.ts`
**Package**: Core

## Summary

- **Total Exports**: 2
- **Interfaces**: 1
- **Types**: 0
- **Functions**: 0
- **Classes**: 1

## Interfaces

### `LogEntry`

#### Properties

| Property    | Type                | Optional |
| ----------- | ------------------- | -------- |
| `sessionId` | `string`            | No       |
| `messageId` | `number`            | No       |
| `timestamp` | `string`            | No       |
| `type`      | `MessageSenderType` | No       |
| `message`   | `string`            | No       |

## Classes

### `Logger`

#### Properties

| Name                 | Static | Readonly |
| -------------------- | ------ | -------- |
| `geminiDir`          | No     | No       |
| `logFilePath`        | No     | No       |
| `checkpointFilePath` | No     | No       |
| `sessionId`          | No     | No       |
| `messageId`          | No     | No       |
| `initialized`        | No     | No       |
| `logs`               | No     | No       |

#### Methods

##### `constructor(sessionId: string)`

##### `async _readLogFile()`

##### `async _backupCorruptedLogFile(reason: string)`

##### `async initialize()`

##### `async _updateLogFile(entryToAppend: LogEntry)`

##### `async getPreviousUserMessages()`

##### `async logMessage(type: MessageSenderType, message: string)`

##### `_checkpointPath(tag: string | undefined)`

##### `async saveCheckpoint(conversation: Content[], tag: string)`

##### `async loadCheckpoint(tag: string)`

##### `close()`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/core/logger.js';
```
