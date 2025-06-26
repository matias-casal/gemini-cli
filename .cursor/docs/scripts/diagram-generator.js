#!/usr/bin/env node

/**
 * Architecture Diagram Generator
 * Creates Mermaid diagrams for visualizing gemini-cli architecture
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(
  __dirname,
  '../llm-layers/2-component-details/diagrams',
);

/**
 * Generate main architecture diagram
 */
function generateArchitectureDiagram() {
  const diagram = `graph TB
    subgraph "User Interface"
        CLI[Gemini CLI<br/>Terminal Interface]
    end
    
    subgraph "CLI Package"
        UI[UI Components<br/>React + Ink]
        Config[Configuration<br/>Settings & Auth]
        Hooks[Custom Hooks<br/>State Management]
    end
    
    subgraph "Core Package"
        Client[Gemini Client<br/>API Communication]
        Tools[Tools System<br/>File/Shell/Web]
        Services[Services<br/>File Discovery/Git]
        Prompts[Prompt System<br/>Context Management]
    end
    
    subgraph "External Services"
        API[Gemini API<br/>Google AI]
        MCP[MCP Servers<br/>External Tools]
    end
    
    CLI --> UI
    UI --> Config
    UI --> Hooks
    UI --> Client
    Client --> API
    Client --> Tools
    Client --> Services
    Client --> Prompts
    Tools --> MCP
    
    style CLI fill:#90EE90,stroke:#333,stroke-width:2px
    style Client fill:#87CEEB,stroke:#333,stroke-width:2px
    style API fill:#FFB6C1,stroke:#333,stroke-width:2px
    style Tools fill:#DDA0DD,stroke:#333,stroke-width:2px`;

  return diagram;
}

/**
 * Generate data flow diagram
 */
function generateDataFlowDiagram() {
  const diagram = `sequenceDiagram
    participant User
    participant CLI
    participant Core
    participant GeminiAPI
    participant Tools
    participant FileSystem
    
    User->>CLI: Enter command/prompt
    CLI->>Core: Process request
    Core->>Core: Build context & prompt
    Core->>GeminiAPI: Send request
    GeminiAPI-->>Core: Response/Tool request
    
    alt Tool Execution Required
        Core->>CLI: Request user approval
        CLI->>User: Show tool details
        User->>CLI: Approve/Reject
        CLI->>Core: User decision
        Core->>Tools: Execute tool
        Tools->>FileSystem: Perform operation
        FileSystem-->>Tools: Result
        Tools-->>Core: Tool result
        Core->>GeminiAPI: Send tool result
        GeminiAPI-->>Core: Final response
    end
    
    Core-->>CLI: Format response
    CLI-->>User: Display result`;

  return diagram;
}

/**
 * Generate package dependencies diagram
 */
function generateDependencyDiagram() {
  const diagram = `graph LR
    subgraph "@google/gemini-cli"
        CLI[CLI Package]
    end
    
    subgraph "@google/gemini-cli-core"
        Core[Core Package]
    end
    
    subgraph "UI Dependencies"
        React[react]
        Ink[ink]
        InkUI[ink-text-input<br/>ink-select-input<br/>ink-spinner]
    end
    
    subgraph "Core Dependencies"
        GenAI[@google/genai]
        MCP[@modelcontextprotocol/sdk]
        Auth[google-auth-library]
    end
    
    subgraph "Shared Dependencies"
        TS[typescript]
        Glob[glob]
        Diff[diff]
    end
    
    CLI --> Core
    CLI --> React
    CLI --> Ink
    CLI --> InkUI
    CLI --> TS
    CLI --> Glob
    CLI --> Diff
    
    Core --> GenAI
    Core --> MCP
    Core --> Auth
    Core --> TS
    Core --> Glob
    Core --> Diff
    
    style CLI fill:#90EE90,stroke:#333,stroke-width:2px
    style Core fill:#87CEEB,stroke:#333,stroke-width:2px`;

  return diagram;
}

/**
 * Generate tools ecosystem diagram
 */
function generateToolsDiagram() {
  const diagram = `graph TB
    subgraph "Tool Registry"
        Registry[Tool Registry<br/>Registration & Discovery]
    end
    
    subgraph "File System Tools"
        ReadFile[read-file]
        WriteFile[write-file]
        Edit[edit]
        LS[ls]
        Grep[grep]
        Glob[glob]
    end
    
    subgraph "System Tools"
        Shell[shell<br/>Command Execution]
    end
    
    subgraph "Web Tools"
        WebFetch[web-fetch]
        WebSearch[web-search]
    end
    
    subgraph "Memory Tools"
        Memory[memoryTool<br/>Persistent Storage]
    end
    
    subgraph "MCP Tools"
        MCPClient[mcp-client]
        MCPTool[mcp-tool]
    end
    
    Registry --> ReadFile
    Registry --> WriteFile
    Registry --> Edit
    Registry --> LS
    Registry --> Grep
    Registry --> Glob
    Registry --> Shell
    Registry --> WebFetch
    Registry --> WebSearch
    Registry --> Memory
    Registry --> MCPClient
    Registry --> MCPTool
    
    style Registry fill:#FFD700,stroke:#333,stroke-width:3px
    style Shell fill:#FF6347,stroke:#333,stroke-width:2px
    style Memory fill:#98FB98,stroke:#333,stroke-width:2px`;

  return diagram;
}

/**
 * Generate component interaction diagram for CLI package
 */
function generateCLIComponentDiagram() {
  const diagram = `graph TB
    subgraph "Entry Points"
        Main[index.ts<br/>Main Entry]
        Gemini[gemini.tsx<br/>App Component]
    end
    
    subgraph "UI Layer"
        App[App.tsx<br/>Main UI]
        Input[InputPrompt<br/>User Input]
        Messages[Message Components<br/>Display]
        Dialogs[Dialogs<br/>Auth/Theme/Settings]
    end
    
    subgraph "Hooks Layer"
        UseGemini[useGeminiStream]
        UseCompletion[useCompletion]
        UseHistory[useHistoryManager]
        UseSettings[useSettings]
    end
    
    subgraph "Context Layer"
        Session[SessionContext]
        Stream[StreamingContext]
        Overflow[OverflowContext]
    end
    
    subgraph "Config Layer"
        AuthConfig[auth.ts]
        Settings[settings.ts]
        Extension[extension.ts]
    end
    
    Main --> Gemini
    Gemini --> App
    App --> Input
    App --> Messages
    App --> Dialogs
    App --> Session
    Input --> UseGemini
    Input --> UseHistory
    Messages --> Stream
    Messages --> Overflow
    Dialogs --> UseSettings
    UseGemini --> UseCompletion
    UseSettings --> Settings
    Settings --> AuthConfig
    Settings --> Extension
    
    style Main fill:#90EE90,stroke:#333,stroke-width:2px
    style App fill:#87CEEB,stroke:#333,stroke-width:2px`;

  return diagram;
}

/**
 * Save diagram to file
 */
async function saveDiagram(name, content) {
  const wrapper = `# ${name}

\`\`\`mermaid
${content}
\`\`\`
`;

  const filePath = path.join(
    outputDir,
    `${name.toLowerCase().replace(/\s+/g, '-')}.md`,
  );
  await fs.writeFile(filePath, wrapper);
  return filePath;
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('🚀 Starting diagram generation...\n');

    // Create output directory
    await fs.mkdir(outputDir, { recursive: true });

    const diagrams = [
      { name: 'Architecture Overview', generator: generateArchitectureDiagram },
      { name: 'Data Flow', generator: generateDataFlowDiagram },
      { name: 'Package Dependencies', generator: generateDependencyDiagram },
      { name: 'Tools Ecosystem', generator: generateToolsDiagram },
      { name: 'CLI Components', generator: generateCLIComponentDiagram },
    ];

    console.log(`📊 Generating ${diagrams.length} architecture diagrams...`);

    for (const { name, generator } of diagrams) {
      const content = generator();
      const filePath = await saveDiagram(name, content);
      console.log(`   ✅ Generated ${name}`);
    }

    // Generate index
    const indexContent = `# Architecture Diagrams

Visual representations of the gemini-cli system architecture.

## Available Diagrams

1. [Architecture Overview](./architecture-overview.md) - High-level system architecture
2. [Data Flow](./data-flow.md) - Request/response flow through the system
3. [Package Dependencies](./package-dependencies.md) - Dependency relationships
4. [Tools Ecosystem](./tools-ecosystem.md) - Available tools and registry
5. [CLI Components](./cli-components.md) - CLI package internal structure

## Viewing Diagrams

These diagrams are written in Mermaid format. They can be viewed in:
- GitHub (automatic rendering)
- VS Code with Mermaid extension
- Online Mermaid editors
- Any Markdown viewer with Mermaid support
`;

    await fs.writeFile(path.join(outputDir, 'index.md'), indexContent);

    console.log('\n✅ Diagram generation complete!');
    console.log(
      `💾 Output directory: ${path.relative(path.resolve(__dirname, '../../..'), outputDir)}`,
    );
  } catch (error) {
    console.error('❌ Error generating diagrams:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export {
  generateArchitectureDiagram,
  generateDataFlowDiagram,
  generateDependencyDiagram,
  generateToolsDiagram,
  generateCLIComponentDiagram,
};
