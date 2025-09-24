# TypeScript

- MUST: Enable strict mode; explicit return types for exports.
- MUST: Prefer interfaces for object types; use `readonly` where appropriate.
- SHOULD: Use guards and utility types (Partial, Pick, Omit).
- MAY: Use type predicates for complex type guards.
- MAY: Leverage mapped and conditional types for advanced patterns.

## Examples

```typescript
// Branded types
type Email = string & { readonly __brand: "Email" };

// Type assertions
const colors = {
  primary: "#007bff",
  secondary: "#6c757d",
} satisfies Record<string, `#${string}`>;
```
