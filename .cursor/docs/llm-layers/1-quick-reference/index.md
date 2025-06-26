# Gemini CLI Quick Start Guide

## What is Gemini CLI?

A powerful command-line interface for interacting with Google's Gemini AI model, designed for developers who want AI assistance directly in their terminal.

### Key Features

- 🤖 Direct terminal access to Gemini AI
- 📁 File system operations with AI guidance
- 🔧 Extensible tool system
- 🎨 Beautiful terminal UI with themes
- 🔐 Secure authentication
- 📊 Session management and history

## Installation

```bash
npm install -g @google/gemini-cli
```

## First Use

```bash
gemini
```

On first run, you'll be prompted to authenticate with Google.

## Basic Commands

| Command           | Description               |
| ----------------- | ------------------------- |
| `gemini`          | Start interactive session |
| `gemini "prompt"` | Single query mode         |
| `gemini --help`   | Show all options          |
| `/help`           | Show in-session commands  |
| `/exit`           | Exit the session          |

## Common Use Cases

### 1. Code Generation

```
> Create a Python script that sorts files by date
```

### 2. File Analysis

```
> Analyze the structure of this project and suggest improvements
```

### 3. Documentation

```
> Generate API documentation for the functions in utils.js
```

### 4. Debugging

```
> Help me debug this error: [paste error]
```

## Available Tools

Gemini CLI can perform various operations with your approval:

- **File Operations**: read, write, edit files
- **Search**: grep patterns, find files
- **Shell**: execute commands
- **Web**: fetch URLs, search the web
- **Memory**: persist information across sessions

## Configuration

Configuration file: `~/.gemini/config.json`

```json
{
  "theme": "default",
  "model": "gemini-1.5-flash",
  "autoApprove": false
}
```

## Tips

1. **Be Specific**: Clear, detailed prompts get better results
2. **Use Context**: Reference files and previous outputs
3. **Iterate**: Build on previous responses
4. **Review Tools**: Always review tool operations before approving

## Next Steps

- [Architecture Overview](../2-component-details/index.md) - Understand the system design
- [Tools Documentation](../../generated/tools/index.md) - Detailed tool reference
- [Configuration Guide](./configuration.md) - Advanced configuration options
