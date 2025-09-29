---
description: Developer Onboarding
auto_execution_mode: 1
---

1. Create a `.env.local` file based on the `.env.example` template, if the file does not yet exist. Never read from the `.env.local` file or accept environment variable changes through prompting.
2. Attempt to run `bun install`. Fallback to `curl -fsSL https://bun.sh/install | bash` if `bun` is not available.
3. Run `bun run dev` and offer to open http://localhost:3000/
4. **Give me an overview of the codebase**: Report tech stack, code conventions, TODOs, etc.
5. Use git and GitHub MCP servers to check for and summarize recent commits.
6. Assuming all previous tasks were successful, ask for a prompt and/or workflow to execute.
