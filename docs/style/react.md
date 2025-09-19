# React

- MUST: Functional components with hooks; typed props via interfaces.
- MUST: Proper `key` in lists; prefer composition.
- SHOULD: Small focused components; memoize expensive renders.
- MAY: Use `React.lazy` for code splitting.
- MAY: Implement error boundaries for graceful error handling.
- MAY: Use React Server Components for performance.
- MAY: Use React Suspense for loading states.
- MAY: Use React Profiler for performance analysis.
- MAY: Use React Context for shared state.
- MAY: Use React.memo for performance optimization.

## Examples
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  onClick, 
  children 
}: ButtonProps) {
  return (
    <button 
      className={`btn ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```
