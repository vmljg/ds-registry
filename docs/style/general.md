# General Guidelines

- MUST: English for code and docs.
- MUST: Use MCP (model context protocol) servers tools and resources when available
- MUST: Ask clarifying questions if requirements are unclear.
- MUST: Use the latest language features, tools, and resources when available.
- MUST: Early returns over else blocks.
- MUST: One export per file; meaningful names.
- MUST: Use UPPERCASE for naming constants and macros.
- MUST: Use camelCase for naming functions and variables.
- MUST: Use PascalCase for naming classes and components.
- MUST: Use kebab-case for file names.
- MUST: Prefer array functions over for loops.
- MUST: In loops, prefer `itr` for iteration or `idx` for indexes
- MUST: Use const for variables that don't change.
- MUST: Use let for variables that change.
- SHOULD: Group related functionality; keep files <300 lines when possible.
- SHOULD: Use meaningful variable and function names.
- SHOULD: Use descriptive comments to explain complex logic.
- SHOULD: Follow the Single Responsibility Principle.
- MAY: Use helpers/utilities for repeated patterns.
- MAY: Create helper functions for repeated code patterns.

## Examples
```typescript
// Early returns
function processUser(user: User | null) {
  if (!user) return;
  // Process user
}

// Array functions
const activeUsers = users
  .filter(user => user.isActive)
  .map(user => user.name);
```
