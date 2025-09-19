# Contributing Guide

This document formalizes the branching strategy, naming conventions, pull request checks, and release flow for this repository.

The goals are to maintain a clean, linear git history, enforce quality via automated checks, and make releases predictable.


## Branching Strategy

- **Main branch**: `main`
  - The canonical, stable branch. CI and deployments target `main`.
  - Storybook is deployed to GitHub Pages on pushes to `main` that touch `stories/**` or `.storybook/**`.

- **Feature branches**: branch off `main`
  - Use feature branches for all changes (features, fixes, chores, docs, etc.).
  - Keep branches focused and short-lived; prefer multiple small PRs over one very large one.

- **Rebase before merge**
  - Keep a linear history by rebasing your branch on top of `main` before merging.
  - Resolve conflicts locally and force-push your feature branch as needed.

- **Protected merges**
  - Open a PR from your feature branch into `main`.
  - Require passing checks and at least one review before merging (project setting; if not yet enabled, follow the process below regardless).


## Branch Naming

Use a structured, kebab-case naming scheme with a category prefix and optional scope:

- `feat/<scope>-<short-description>`
- `fix/<scope>-<short-description>`
- `docs/<scope>-<short-description>`
- `chore/<scope>-<short-description>`
- `refactor/<scope>-<short-description>`
- `test/<scope>-<short-description>`
- `perf/<scope>-<short-description>`
- `ci/<scope>-<short-description>`

Examples:

- `feat/button-add-sizes`
- `fix/card-shadow-bleed`
- `docs/readme-storybook-section`
- `chore/update-prettier`


## Commit Messages

Follow Conventional Commits as a guideline:

```
<type>(<optional scope>): <short, imperative summary>

<body – optional>
<footer – optional>
```

Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

Examples:

- `feat(button): add lg and xl sizes`
- `fix(card): correct image overflow on mobile`
- `docs(readme): add storybook instructions`

Why this matters:

- Easier to scan history
- Enables semantic versioning and changelogs if/when automated tooling is introduced


## Pull Request Checklist

Before requesting a review, ensure the following locally:

- Lint and format
  - `pnpm lint` (check) and `pnpm format` (write) as needed
- Type-check
  - `pnpm -s tsc -p tsconfig.json --noEmit`
- Build the app
  - `pnpm build` (this also runs the registry build step)
- Tests
  - `pnpm test` (and `pnpm test:coverage` if relevant)
- Storybook (when stories/components changed)
  - `pnpm build-storybook` or run locally with `pnpm storybook`

PR requirements:

- A clear title using Conventional Commit style (type(scope): summary)
- A concise description of the change and rationale
- Screenshots or recordings for UI changes (light/dark, responsive states if applicable)
- Link related issues and include checklists for reviewer focus areas

Merging:

- Prefer "Rebase and merge" to keep history linear
- Resolve any outstanding comments or explicitly defer with follow-up issues


## Release Flow

This project primarily deploys from `main`. Use semantic versioning when publishing releases and tags.

1. Prepare release
   - Ensure `main` is green and contains the intended changes
   - Bump version in `package.json` according to Conventional Commits since last release:
     - `feat`: MINOR (x.Y.z)
     - `fix`/`perf`: PATCH (x.y.Z)
     - breaking change (`!` or `BREAKING CHANGE`): MAJOR (X.y.z)
   - Update `CHANGELOG.md` if maintained (optional today)

2. Create a release branch (optional but recommended for coordinated releases)
   - `release/v<version>` (e.g., `release/v0.2.0`)
   - Open a PR to `main`, run checks, and get approval

3. Tag and finalize
   - After merging to `main`, create a tag: `v<version>` (e.g., `v0.2.0`)
   - Push tag to origin: `git push origin v<version>`

4. Deployments
   - Storybook is built and deployed to GitHub Pages automatically on push to `main` when relevant paths change (`stories/**`, `.storybook/**`).
   - Application deployments (e.g., Vercel) follow the project’s platform settings. If applicable, ensure environment variables are set in the platform dashboard.


## CI Expectations

While CI policy can evolve, the minimal expected checks for PRs are:

- Install and cache dependencies
- Lint/format verification
- Type-check (TypeScript)
- Build (Next.js and registry build)
- Test (Vitest; browser tests when present)
- Build Storybook when story files changed

If these are not yet enforced in GitHub branch protection rules, treat them as required locally before requesting review.


## Getting Help

- Open a draft PR early for feedback
- Use the provided Windsurf workflows under `.windsurf/workflows/` for common tasks (e.g., `/create-component`, `/fix-it`)
- For design parity, use `/reference-figma` and include links and screenshots
