---
trigger: always_on
---

### General Code Style
1. When writing conditional logic, avoid using `else` in favor of early returns.
2. Use English for all code and documentation.
3. Use UPPERCASE for naming constants and macros.
4. Use MCP (model context protocol) servers tools and resources when available.
5. Ask clarifying questions if you are unsure of the requirements.
6. Use the latest features of the language when available.
7. In loops, prefer the variable name `itr` instead of `i` for iteration. Or `idx` for indexes.
8. Do not perform any operations beyond what is instructed.
9. Prefer array functions over for loops.

### CSS
1. When writing CSS, prefer using logical (`inline-start` / `inline-end` / `block-start` / `block-end`) properties instead of `left`, `right`, `top` and `bottom`. Sort all properties alphabetically. 
2. Never use `!important`. 
3. Use `@layer` for scoping styles.
4. The latest CSS features should be used, but experimental features should be wrapped in `@supports`.
5. Prefer using CSS variables and always include `@property` for custom properties.
6. Start with mobile-first styles and use media queries for larger screens.
7. Prefer using CSS Grid over Flexbox when possible.

#### Tailwind CSS
1. Use `@apply` to ensure DRY code.
2. Utilize Tailwind v4 features, functions and directives.

### HTML
1. When writing HTML, prefer using semantic elements instead of generic `div` elements.
2. Always include proper ARIA roles and attributes.

### Frontend and General JavaScript/TypeScript
1. Always use `const` by default, and only use `let` if you need to reassign the variable when writing JavaScript or TypeScript.
2. When writing TypeScript, always use type annotations instead of `any`. Prefer interfaces for object types and enums for constants.
3. Use JSDoc to document public classes and methods.
4. One export per file.
5. Don't rely on third-party libraries for basic functionality, unless the project is already using them. (e.g. No lodash/underscore/jQuery)
6. Use arrow functions sparingly. Prefer named functions to improve code readability.

#### React
1. Utilize memoization best practices
2. DO use third-party libraries for complex state management and features.
3. Prefer JSX elements over functional components.
4. Prefer Fragments over classless `<div>` for JSX element wrappers.
5. Use types imported from React to help add Typescript types to HTML events.

### Node.js/Backend JavaScript/TypeScript
1. Always use ES modules instead of CommonJS.
2. Place non-lazy loading `imports` at top of file.

## Linting

Attempt to auto-fix linting errors through CLI tools when possible. If not possible, ask the user if they would like to fix the linting errors or if you should attempt to.