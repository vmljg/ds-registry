---
trigger: always_on
---

# Code Style Guide (Modular)

This rule is the canonical entry point for our code style. The detailed guidance is modularized under `docs/style/`. Treat the rules as MUST unless a section states otherwise.

Start here: docs/style/README.md

MUST summary

- Semantic HTML: Use appropriate elements (`article`, `header`, `main`, `section`, `footer`, `h1–h6`, `p`, `ul/ol`, `nav`, `figure/figcaption`). Avoid generic `div`/`span` when a semantic element exists.
- Image stability: Add `width` and `height` to all `<img>`; use `loading="lazy"` below-the-fold.
- Mobile-first & Tailwind: Build mobile-first; use Tailwind utilities; extend theme via `tailwind.config.js`.
- TypeScript: Strict mode; explicit return types for exported functions; prefer interfaces; use `readonly` where appropriate.
- React: Functional components with hooks; typed props; proper keys; prefer composition; small focused components.
- Accessibility: Keyboard navigability, focus styles, sufficient color contrast (WCAG AA); ARIA only when semantics aren’t sufficient.
- Performance: Code splitting; optimized assets; caching; measure renders; prevent layout shift (CLS).
- Security: Sanitize inputs; authn/authz; parameterized queries; keep deps updated.
- Version Control: Clear atomic commits; rebase before merge; follow branching strategy.

Modular guide

- docs/style/README.md
- docs/style/general.md
- docs/style/code-review.md
- docs/style/documentation.md
- docs/style/html-and-accessibility.md
- docs/style/css-and-tailwind.md
- docs/style/typescript.md
- docs/style/react.md
- docs/style/testing.md
- docs/style/performance.md
- docs/style/security.md
- docs/style/version-control.md
- docs/style/i18n.md
- docs/style/monitoring.md
- docs/style/dependencies.md
- docs/style/error-handling.md

Change control

- Add or refine rules in the appropriate file under `docs/style/`.
- Keep this rule (code-style.md) concise and up to date with a MUST summary and links.
- For substantial updates, include a short “What changed” summary in PR descriptions.
