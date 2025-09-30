# Performance

- MUST: Code splitting; optimize assets; caching; measure renders.
- MUST: Prevent layout shift: always set image `width`/`height`.
- SHOULD: Lazy-load below-the-fold; use web workers for CPU tasks; optimize critical rendering path.
- MAY: Implement service workers for offline support.
- MAY: Use web vitals for performance monitoring.

## Examples

```tsx
import { lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
```
