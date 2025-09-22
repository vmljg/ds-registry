# CSS & Tailwind

- MUST: Mobile-first; use logical properties; relative units (rem/em).
- MUST: Maintain consistent naming conventions.
- MUST: Use Tailwind's utility classes directly in markup.
- MUST: Extend the theme in `tailwind.config.js` for project-specific values
- SHOULD: Organize CSS properties consistently (layout > box model > typography > visual)
- SHOULD: Use CSS custom properties for theming
- SHOULD: Keep styles scoped to components
- SHOULD: Use `@layer` for global styles
- SHOULD: Keep selectors short and specific
- SHOULD: Use Tailwind classes for layout and spacing; custom CSS for complex styles.
- SHOULD: Use `@apply` for repeated patterns.
- SHOULD: Create component classes for complex UI elements.
- SHOULD: Use the `theme()` function for custom values.
- MAY: Use CSS Grid for 2D layouts; container queries and CSS containment.
- MAY: Use arbitrary values for one-off styles.
- MAY: Create custom plugins for project-specific utilities.

## Examples

```css
/* Logical properties */
.element {
  margin-inline: auto;
  padding-block: 1rem;
}

/* Mobile-first */
.card {
  padding: 1rem;
}

@media (min-width: 768px) {
  .card {
    padding: 1.5rem;
  }
}
```

```jsx
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      }
    }
  }
}

// Component
<button className="bg-primary text-white px-4 py-2 rounded">
  Click me
</button>
```
