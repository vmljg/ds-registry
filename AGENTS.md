# Design System Registry

This project is a shadcn/ui registry template.

## Tech Stack
- Next.js
- shadcn/ui
- TailwindCSS v4.1

## Dev Setup

- Prefer `pnpm` over `npm`
- Use Conventional Commits for git commit messages

To start the development server, run:

```bash
pnpm install
pnpm dev
```

The registry app should now be running on [localhost:3000](http://localhost:3000).

## File Structure

`app/(registry)` routes contains the registry pages.

`app/demo` routes contains various UI primitives, Components, or Blocks (based on `registry.json`)

`@/components` contains all components used in the registry

`@/components/ui` contains all `shadcn/ui` UI Primitives used in the registry

`@/components/registry` contains all components for this Registry Starter application

`@/hooks` contains all React hooks

`@/lib` contains all business logic & utils

`@/layouts` contains all v0 layouts used in `registry.json`

## Design System

<!-- TODO: Add Design System description, tokens, and files -->