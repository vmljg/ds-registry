---
mode: agent
description: Onboard a new developer to the project by setting up environment, running the development server, and providing an overview of the codebase.
tools: ['codebase', 'usages', 'problems', 'changes', 'terminalSelection', 'terminalLastCommand', 'openSimpleBrowser', 'fetch', 'searchResults', 'githubRepo', 'editFiles', 'runNotebooks', 'search', 'runCommands', 'runTasks', 'download_workflow_run_artifact', 'get_code_scanning_alert', 'get_commit', 'get_dependabot_alert', 'get_discussion', 'get_discussion_comments', 'get_file_contents', 'get_issue', 'get_issue_comments', 'get_job_logs', 'get_pull_request', 'get_pull_request_comments', 'get_pull_request_diff', 'get_pull_request_files', 'get_pull_request_reviews', 'get_pull_request_status', 'get_tag', 'get_workflow_run', 'get_workflow_run_logs', 'list_branches', 'list_commits', 'list_issues', 'list_pull_requests', 'list_tags', 'rerun_workflow_run', 'run_workflow', 'search_code', 'search_issues', 'search_pull_requests']
---

1. Create a `.env.local` file based on the `.env.example` template, if the file does not yet exist. Never read from the `.env.local` file or accept environment variable changes through prompting.
2. Attempt to run `pnpm install`. Fallback to `npm install -g pnpm` if pnpm is not available.
3. Run `pnpm dev` and offer to open http://localhost:3000/
4. __Give me an overview of the codebase__: Report tech stack, code conventions, TODOs, etc.
5. Use git and GitHub MCP servers to check for and summarize recent commits.
6. Assuming all previous tasks were successful, ask for a prompt and/or workflow to execute.