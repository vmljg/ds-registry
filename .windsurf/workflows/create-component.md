---
description: Create a new component
auto_execution_mode: 3
---

Adhere to these rules and steps when creating the component I am requesting:

# Rules:
## Mobile-First
1. Always start with a mobile-first design pattern.
2. Target common breakpoints through Tailwind prefixes. (i.e. `flex flex-col sm:flex-row md:grid`)
3. Never use pixels for sizing. Prefer `rem` units, fractional units, container query units, viewport units, and percentages instead.

## Server-First
1. When creating Next.js components, attempt to create behaviors that result in more rendering and logic happening server-side. (e.g. Filter a list server-side and fetch the filtered result client-side, rather than filtering the list results client-side.)
2. Remember to include "use client" and "use server" directives as needed.

## CLS / CSS Containment
1. Utilize CSS containment API and container queries
2. Add skeleton loaders or use `contain-intrinsic-size` CSS rules to avoid layout shifts for components loaded client-side.

## Grid Layout
1. Utilize CSS grid for complex layouts and placement.
2. Empty grid columns and rows are allowed for spacing and gutters.
3. Grid layout MUST be responsive.
4. Use flexbox for arbitrary flow and direction adjustments.

## BEM Classes
1. Use `@apply` and create class names using BEM methodology when code can be reusable or becomes unreadable.
2. Add to the components @layer.

## Dark-mode Included
1. Ensure dark mode is accounted for when adding new classes and creating components.
2. Assume light-mode first, unless told otherwise.

## Reuse Existing Components
1. Do not create unique elements in a component when a reusable component exist in this registry. (i.e. Reuse the Button component `src/components/ui/button.tsx` instead of using a `<button>` element in the new component.)
2. When creating a new, unique component, ensure it can be easily reused with new components created in the future.

## Colors
1. Attempt to find suitable colors in global theme file: `src/app/globals.css`
2. Reference design system files in Figma (via MCP) to find all existing colors.
3. Ask users if they want to add a color value to this registry if it is required, but not found in the theme or Figma.

DO: Maintain WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
DO: Test colors in both light and dark modes if applicable
DO NOT: Use more than 2 accent colors
DO NOT: Choose colors that fail accessibility standards
DO NOT: Use ad-hoc gradients

## Create Accessible Components
1. Include correct and applicable ARIA roles and attributes.
2. Use semantic HTML elements when appropriate, like `main` and `header`.

## Icons
1. Prefer importing iconography from existing libraries.
2. If appropriate iconography can not be found, ask for SVG source. DO NOT generate icons unless specified.
3. Do not use emojis for iconography

## Typography
1. DO NOT attempt to create new font classes.
2. Prefer styling the font at higher levels in the DOM.
3. Include `selection:` styles selectable elements.
4. Make header text unselectable by default. (e.g. `cursor-default select-none`)
5. Always add `hover:`/`focus:` styles for interactive elements.
6. Margins should be placed on `block-start` (top) of paragraphs.
7. Maintain vertical rythym

## Animation / Transitions
1. Ensure all animations and transitions are wrapped in a `prefers-reduced-motion` media query.
2. Use `@starting-style` to animate or transition intrinsic sizes.
3. Utilize scroll-driven animations and scroll snapping

## Images
1. Prefer styling image elements over using background images.

## Shapes
1. Prefer masks, clip-paths and `shape:` over creating "fake" shapes with CSS hacks. (i.e. Borders for triangles; Border radius for circles.)
2. Prompt for SVG or image input for especially complex masks.

## Logic
1. For complex state, logic, or functions, create a React hook and place it in `src/hooks`
2. For reuable logic, helper functions, library functions, etc., place the code in `src/lib` in a new or existing, related file.
3. Tests do not need to be written, unless specified, but library functions should be written in a easy-to-test manner.
4. Always include DocBlocks on functions and hooks.

# Subtasks:
1. Add new components to `src/components`
2. Add any new design tokens to `global.css`, as well as document them in a block like `color-block.tsx` or `font-block.tsx`, etc.
3. Add a demo for the new component to the `src/app/demo/[name]/components` directory.
4. Run `pnpm registry:build` upon completion. Stop if any errors occur and ask about how to proceed.