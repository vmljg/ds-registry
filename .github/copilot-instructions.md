Repository: ai-ds-registry — Copilot instructions for coding agents

Purpose

- Help an AI coding agent be productive immediately: build, navigate, and make small feature or doc changes.

Quick facts

- Framework: Next.js 15 (app router). See `package.json`.
- Package manager: pnpm (project declares pnpm in `package.json`). Node >=22 required.
- UI: shadcn components + Tailwind v4. shadcn CLI used to generate UI (`shadcn` / `npx shadcn@latest build`).
- Data surface: `registry.json` (built into `public/r/registry.json` by `npm run registry:build`). See `src/lib/registry.ts` which imports `@/registry`.
- MCP: This project exposes Model Context Protocol (MCP) artifacts (see `src/app/(registry)/page.tsx` and `src/components/registry/mcp-tabs.tsx`).

What to edit and where (high-value targets)

- Add or update components: `src/components/*` and `src/components/registry/*`.
- Change registry metadata or add items: update `registry.json` at repo root, then run `npm run registry:build` to copy it to `public/r/registry.json`.
- Theme/tokens: tokens live under `src/app/(registry)/tokens` and must match `r/registry.json` style:theme entry used by MCP.

Important repo-specific patterns and examples

- Registry items are imported as a runtime module alias `@/registry` (see `src/lib/registry.ts`). Changing `registry.json` requires running the build script so the site serves the updated `public/r/registry.json`.
- UI primitives vs components vs blocks: `getUIPrimitives()`, `getComponents()`, `getBlocks()` filter `registry.items` by `type` — use these helpers when adding pages or lists.
- Sidebar/search uses client-side filtering in `src/app/layout.tsx` (`RegistrySidebar`) — avoid introducing heavy server-side work for small search changes.
- shadcn build step: `npm run registry:build` runs `npx shadcn@latest build` and copies `registry.json` into the public folder. If adding or removing components created with shadcn, run this.

Build / dev / test commands (use pnpm or npm as project scripts expect)

- Dev with turbopack (recommended): npm run dev
- Build: npm run build
- Start production server: npm run start
- Rebuild shadcn/registry artifacts: npm run registry:build
- Lint: npm run lint (uses Biome)

Conventions and style

- Code uses TypeScript and React (Next 15 app router). Keep files under `src/` and use path aliases (`@/...`).
- Styling: Tailwind v4 and shadcn component wrappers under `src/components/ui/*`.
- Fonts are configured in `src/app/layout.tsx` via `next/font/google` — prefer using the established `cn` utility in `src/lib/utils.ts` for class merging.

Integration points to watch

- External API call: `src/lib/products.ts` fetches products from `https://api.vercel.app/products` and validates with Zod — preserve validation schema if modifying product flows.
- Vercel analytics and Speed Insights are included in `src/app/layout.tsx` — avoid removing `@vercel/*` imports unless intentionally changing telemetry.
- MCP and shadcn interplay: `MCPTabs` in the registry home expects the registry's theme tokens to align with the generated `tokens.css` and `public/r/registry.json`.

Small actionable examples (copy-ready)

- Update registry JSON and push change so site shows new item:
  1. Edit `registry.json` (root) — add an `items` entry with `name`, `type`, `title`, `files`.
  2. Run: `npm run registry:build`
  3. Start dev: `npm run dev`

- Add a new example page for a component:
  1. Create `src/app/registry/<name>/page.tsx` that imports `getRegistryItem` from `src/lib/registry.ts`.
  2. Use `getRegistryItem('<name>')` server-side to pull metadata and render examples.

Avoid

- Changing `public/r/registry.json` directly — it is generated from the root `registry.json` by the build script.
- Introducing global CSS frameworks beyond Tailwind without updating `src/app/globals.css` and `postcss.config.mjs`.

Where to learn more in this repo

- App entry and fonts: `src/app/layout.tsx`
- Registry helpers: `src/lib/registry.ts`
- Component list and examples: `src/app/(registry)/page.tsx` and `src/components/registry/*`
- shadcn build step and registry copy: `package.json` (scripts)

If something's unclear

- Ask for the specific goal (edit, add component, update tokens). Provide the component name or file path you plan to change and I will produce a precise patch.
