---
description: Designer Onboarding
auto_execution_mode: 1
---

1. Create a `.env.local` file based on the `.env.example` template, if the file does not yet exist. Never read from the `.env.local` file or accept environment variable changes through prompting.
2. Attempt to run `pnpm install`. Fallback to `npm install -g pnpm` if pnpm is not available.
3. Run `pnpm dev` and offer to open http://localhost:3000/
4. If successful, continue by validating if the CSS values in `src/app/globals.css`:

- Report the current values for both light and dark mode.
- Ask if any values need to change and make edits accordingly. Offer to extract colors and styles from screenshots, files, or websites to populate the required values. Restrict edits to `@theme {}`, `:root {}`, and `.dark {}` scopes.

5. Ask if custom fonts need to be added.

- Use fonts from `next/font/google` or add `@font-face` CSS rules to `src/app/globals.css`. Do not add the rules to a layer.
- If you use @font-face, ensure you modify globals.css tailwind configuration to map your custom font variables to Tailwind fonts: https://tailwindcss.com/docs/font-family#customizing-your-theme

6. Ask for the title and description of the theme we are creating.
7. IMPORTANT: Update `registry.json`'s first registry-item named `theme`. Add the theme details. The `cssVars` property MUST match those in `src/app/globals.css`
8. Ask for brand assets like logos and media to complete registry branding. Place in `public` directory.
9. If edits are made and successful, ask to make a git commit on a new feature branch.
