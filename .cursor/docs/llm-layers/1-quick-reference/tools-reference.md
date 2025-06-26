# Tools Quick Reference

## File System Tools

### read-file

Read contents of a file

```
Parameters: absolute_path, start_line?, end_line?
```

### write-file

Create or overwrite a file

```
Parameters: absolute_path, content
```

### edit

Edit specific parts of a file

```
Parameters: absolute_path, edits[]
```

### ls

List directory contents

```
Parameters: absolute_path
```

## Search Tools

### grep

Search for patterns in files

```
Parameters: pattern, path?, file_pattern?
```

### glob

Find files by pattern

```
Parameters: pattern
```

## System Tools

### shell

Execute shell commands

```
Parameters: command, directory?
```

## Web Tools

### web-fetch

Fetch content from URLs

```
Parameters: url
```

### web-search

Search the web

```
Parameters: query
```

## Memory Tools

### memoryTool

Store and retrieve persistent data

```
Parameters: action, key?, value?
```

## Tool Approval

All tools require explicit user approval before execution.
You will see:

- Tool name and description
- Exact parameters
- Expected outcome

Options:

- `y` - Approve
- `n` - Reject
- `e` - Edit parameters
- `a` - Approve all (current session)
