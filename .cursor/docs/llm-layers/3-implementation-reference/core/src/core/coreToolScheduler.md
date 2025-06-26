# coreToolScheduler

**File**: `packages/core/src/core/coreToolScheduler.ts`
**Package**: Core

## Summary

- **Total Exports**: 16
- **Interfaces**: 0
- **Types**: 14
- **Functions**: 1
- **Classes**: 1

## Type Aliases

### `ValidatingToolCall`

```typescript
type ValidatingToolCall = object;
```

### `ScheduledToolCall`

```typescript
type ScheduledToolCall = object;
```

### `ErroredToolCall`

```typescript
type ErroredToolCall = object;
```

### `SuccessfulToolCall`

```typescript
type SuccessfulToolCall = object;
```

### `ExecutingToolCall`

```typescript
type ExecutingToolCall = object;
```

### `CancelledToolCall`

```typescript
type CancelledToolCall = object;
```

### `WaitingToolCall`

```typescript
type WaitingToolCall = object;
```

### `Status`

```typescript
type Status = any;
```

### `ToolCall`

```typescript
type ToolCall =
  | ValidatingToolCall
  | ScheduledToolCall
  | ErroredToolCall
  | SuccessfulToolCall
  | ExecutingToolCall
  | CancelledToolCall
  | WaitingToolCall;
```

### `CompletedToolCall`

```typescript
type CompletedToolCall =
  | SuccessfulToolCall
  | CancelledToolCall
  | ErroredToolCall;
```

### `ConfirmHandler`

```typescript
type ConfirmHandler = Function;
```

### `OutputUpdateHandler`

```typescript
type OutputUpdateHandler = Function;
```

### `AllToolCallsCompleteHandler`

```typescript
type AllToolCallsCompleteHandler = Function;
```

### `ToolCallsUpdateHandler`

```typescript
type ToolCallsUpdateHandler = Function;
```

## Functions

### `convertToFunctionResponse`

```typescript
function convertToFunctionResponse(
  toolName: string,
  callId: string,
  llmContent: PartListUnion,
): PartListUnion;
```

#### Parameters

| Name         | Type            | Optional | Description |
| ------------ | --------------- | -------- | ----------- |
| `toolName`   | `string`        | No       | -           |
| `callId`     | `string`        | No       | -           |
| `llmContent` | `PartListUnion` | No       | -           |

**Returns**: `PartListUnion`

## Classes

### `CoreToolScheduler`

#### Properties

| Name                     | Static | Readonly |
| ------------------------ | ------ | -------- |
| `toolRegistry`           | No     | No       |
| `toolCalls`              | No     | No       |
| `outputUpdateHandler`    | No     | No       |
| `onAllToolCallsComplete` | No     | No       |
| `onToolCallsUpdate`      | No     | No       |
| `approvalMode`           | No     | No       |
| `getPreferredEditor`     | No     | No       |
| `config`                 | No     | No       |

#### Methods

##### `constructor(options: CoreToolSchedulerOptions)`

##### `setStatusInternal(targetCallId: string, status: any, response: ToolCallResponseInfo)`

##### `setStatusInternal(targetCallId: string, status: any, confirmationDetails: ToolCallConfirmationDetails)`

##### `setStatusInternal(targetCallId: string, status: any, response: ToolCallResponseInfo)`

##### `setStatusInternal(targetCallId: string, status: any, reason: string)`

##### `setStatusInternal(targetCallId: string, status: any | any | any)`

##### `setStatusInternal(targetCallId: string, newStatus: Status, auxiliaryData: unknown)`

##### `setArgsInternal(targetCallId: string, args: unknown)`

##### `isRunning()`

##### `async schedule(request: ToolCallRequestInfo | ToolCallRequestInfo[], signal: AbortSignal)`

##### `async handleConfirmationResponse(callId: string, originalOnConfirm: Function, outcome: ToolConfirmationOutcome, signal: AbortSignal)`

##### `attemptExecutionOfScheduledCalls(signal: AbortSignal)`

##### `checkAndNotifyCompletion()`

##### `notifyToolCallsUpdate()`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/core/coreToolScheduler.js';
```
