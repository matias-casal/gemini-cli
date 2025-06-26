# types

**File**: `packages/core/src/telemetry/types.ts`
**Package**: Core

## Summary

- **Total Exports**: 9
- **Interfaces**: 0
- **Types**: 1
- **Functions**: 1
- **Classes**: 7

## Type Aliases

### `TelemetryEvent`

```typescript
type TelemetryEvent =
  | StartSessionEvent
  | EndSessionEvent
  | UserPromptEvent
  | ToolCallEvent
  | ApiRequestEvent
  | ApiErrorEvent
  | ApiResponseEvent;
```

## Functions

### `getDecisionFromOutcome`

```typescript
function getDecisionFromOutcome(
  outcome: ToolConfirmationOutcome,
): ToolCallDecision;
```

#### Parameters

| Name      | Type                      | Optional | Description |
| --------- | ------------------------- | -------- | ----------- |
| `outcome` | `ToolConfirmationOutcome` | No       | -           |

**Returns**: `ToolCallDecision`

## Classes

### `StartSessionEvent`

#### Properties

| Name                                 | Static | Readonly |
| ------------------------------------ | ------ | -------- |
| `undefined`                          | No     | No       |
| `undefined`                          | No     | No       |
| `model`                              | No     | No       |
| `embedding_model`                    | No     | No       |
| `sandbox_enabled`                    | No     | No       |
| `core_tools_enabled`                 | No     | No       |
| `approval_mode`                      | No     | No       |
| `api_key_enabled`                    | No     | No       |
| `vertex_ai_enabled`                  | No     | No       |
| `debug_enabled`                      | No     | No       |
| `mcp_servers`                        | No     | No       |
| `telemetry_enabled`                  | No     | No       |
| `telemetry_log_user_prompts_enabled` | No     | No       |
| `file_filtering_respect_git_ignore`  | No     | No       |

#### Methods

##### `constructor(config: Config)`

### `EndSessionEvent`

#### Properties

| Name         | Static | Readonly |
| ------------ | ------ | -------- |
| `undefined`  | No     | No       |
| `undefined`  | No     | No       |
| `session_id` | No     | No       |

#### Methods

##### `constructor(config: Config)`

### `UserPromptEvent`

#### Properties

| Name            | Static | Readonly |
| --------------- | ------ | -------- |
| `undefined`     | No     | No       |
| `undefined`     | No     | No       |
| `prompt_length` | No     | No       |
| `prompt`        | No     | No       |

#### Methods

##### `constructor(prompt_length: number, prompt: string)`

### `ToolCallEvent`

#### Properties

| Name            | Static | Readonly |
| --------------- | ------ | -------- |
| `undefined`     | No     | No       |
| `undefined`     | No     | No       |
| `function_name` | No     | No       |
| `function_args` | No     | No       |
| `duration_ms`   | No     | No       |
| `success`       | No     | No       |
| `decision`      | No     | No       |
| `error`         | No     | No       |
| `error_type`    | No     | No       |

#### Methods

##### `constructor(call: CompletedToolCall)`

### `ApiRequestEvent`

#### Properties

| Name           | Static | Readonly |
| -------------- | ------ | -------- |
| `undefined`    | No     | No       |
| `undefined`    | No     | No       |
| `model`        | No     | No       |
| `request_text` | No     | No       |

#### Methods

##### `constructor(model: string, request_text: string)`

### `ApiErrorEvent`

#### Properties

| Name          | Static | Readonly |
| ------------- | ------ | -------- |
| `undefined`   | No     | No       |
| `undefined`   | No     | No       |
| `model`       | No     | No       |
| `error`       | No     | No       |
| `error_type`  | No     | No       |
| `status_code` | No     | No       |
| `duration_ms` | No     | No       |

#### Methods

##### `constructor(model: string, error: string, duration_ms: number, error_type: string, status_code: number | string)`

### `ApiResponseEvent`

#### Properties

| Name                         | Static | Readonly |
| ---------------------------- | ------ | -------- |
| `undefined`                  | No     | No       |
| `undefined`                  | No     | No       |
| `model`                      | No     | No       |
| `status_code`                | No     | No       |
| `duration_ms`                | No     | No       |
| `error`                      | No     | No       |
| `input_token_count`          | No     | No       |
| `output_token_count`         | No     | No       |
| `cached_content_token_count` | No     | No       |
| `thoughts_token_count`       | No     | No       |
| `tool_token_count`           | No     | No       |
| `response_text`              | No     | No       |

#### Methods

##### `constructor(model: string, duration_ms: number, usage_data: GenerateContentResponseUsageMetadata, response_text: string, error: string)`

## Usage Example

```typescript
import {} from /* components */ 'packages/core/src/telemetry/types.js';
```
