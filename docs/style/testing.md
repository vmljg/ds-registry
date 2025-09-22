# Testing

- MUST: Unit tests for business logic; deterministic tests; edge cases.
- SHOULD: Arrange-Act-Assert; mock external dependencies; descriptive names.
- MAY: Snapshots for complex UI; integration tests for critical flows.

## Examples

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalled();
  });
});
```
