# Shell

**File**: `packages/core/src/tools/shell.ts`

## Description

Executes shell commands in the system.

## Parameters Schema

```json
{
  "type": "object",
  "properties": {
    "command": {
      "description": "Exact bash command to execute as `bash -c <command>`",
      "type": "string"
    },
    "description": {
      "description": "Brief description of the command for the user. Be specific and concise. Ideally a single sentence. Can be up to 3 sentences for clarity. No line breaks.",
      "type": "string"
    },
    "directory": {
      "description": "(OPTIONAL) Directory to run the command in, if not the project root directory. Must be relative to the project root directory and must already exist.",
      "type": "string"
    }
  },
  "required": ["command"]
}
```

### Parameter Details

| Parameter     | Type     | Required | Description                                                                                                                                              |
| ------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `command`     | `string` | Yes      | Exact bash command to execute as `bash -c <command>`                                                                                                     |
| `description` | `string` | No       | Brief description of the command for the user. Be specific and concise. Ideally a single sentence. Can be up to 3 sentences for clarity. No line breaks. |
| `directory`   | `string` | No       | (OPTIONAL) Directory to run the command in, if not the project root directory. Must be relative to the project root directory and must already exist.    |

## API Summary

- Functions: 0
- Interfaces: 1
- Types: 0
- Classes: 1
