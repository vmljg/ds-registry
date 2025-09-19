---
trigger: always_on
---

---
trigger: always_on
context: code_style_guide
priority: high
tags: [styleguide, coding-standards, windsurf]
---

# Code Style Guide

## Priority Legend

- **MUST**: These are mandatory requirements that must be followed without exception.
- **SHOULD**: Strongly recommended best practices that should be followed unless there's a good reason not to.
- **MAY**: Optional guidelines that can be followed when appropriate.

## Table of Contents
<!-- TOC -->
- [1. General Guidelines](#1-general-guidelines)
  - [1.1 Code Structure](#11-code-structure)
  - [1.2 Error Handling](#12-error-handling)
  - [1.3 Performance](#13-performance)
- [2. CSS & Styling](#2-css--styling)
  - [2.1 Core Principles](#21-core-principles)
  - [2.2 Best Practices](#22-best-practices)
  - [2.3 Tailwind CSS](#23-tailwind-css)
- [3. HTML](#3-html)
- [4. TypeScript](#4-typescript)
  - [4.1 Type System](#41-type-system)
  - [4.2 Best Practices](#42-best-practices)
- [5. React](#5-react)
  - [5.1 Components](#51-components)
  - [5.2 State Management](#52-state-management)
  - [5.3 Performance](#53-performance)
- [6. Node.js](#6-nodejs)
- [7. Testing](#7-testing)
- [8. Documentation](#8-documentation)
- [9. Version Control](#9-version-control)
- [10. Security](#10-security)
- [11. Performance](#11-performance)
- [12. Accessibility](#12-accessibility)
- [13. Internationalization](#13-internationalization)
- [14. Monitoring](#14-monitoring)

## 1. General Guidelines

### 1.1 Code Structure

#### MUST
- Use early returns instead of `else` blocks
- Use English for all code and documentation
- Use UPPERCASE for naming constants and macros
- Use MCP (model context protocol) servers tools and resources when available
- Ask clarifying questions if requirements are unclear
- Use the latest language features when available
- Prefer array functions over for loops
- One export per file

#### Examples
```typescript
// Early returns
function processUser(user: User | null) {
  if (!user) return;
  // Process user
}

// Array functions
const activeUsers = users
  .filter(user => user.isActive)
  .map(user => user.name);
```

#### SHOULD
- Group related functionality together
- Keep files under 300 lines when possible
- Use meaningful variable and function names
- Follow the Single Responsibility Principle

#### MAY
- Use utility functions for complex logic
- Create helper functions for repeated code patterns

#### Naming Conventions
- In loops, prefer `itr` for iteration or `idx` for indexes
- Variables/Functions: `camelCase`
- Classes: `PascalCase`
- Files: `kebab-case`

### 1.2 Error Handling

#### MUST
- Include specific error messages with context
- Use custom error classes for better error categorization
- Document error scenarios in JSDoc

#### SHOULD
- Log errors with sufficient context
- Handle both expected and unexpected errors
- Provide user-friendly error messages

#### MAY
- Use error boundaries for React components
- Implement retry logic for transient failures

#### Examples
```typescript
class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Usage
throw new ApiError(404, 'User not found', { userId });

// In JSDoc
/**
 * @throws {ValidationError} When input validation fails
 */
```

## 2. CSS & Styling

### 2.1 Core Principles

#### MUST
- Use logical properties for RTL support
- Follow mobile-first approach
- Use relative units (rem, em) for typography and spacing
- Maintain consistent naming conventions

#### SHOULD
- Organize CSS properties consistently (layout > box model > typography > visual)
- Use CSS custom properties for theming
- Keep selectors short and specific

#### MAY
- Use CSS Grid for two-dimensional layouts
- Implement CSS custom properties for design tokens

#### Examples
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

### 2.2 Tailwind CSS

#### MUST
- Use Tailwind's utility classes directly in markup
- Extend the theme in `tailwind.config.js` for project-specific values

#### SHOULD
- Use `@apply` for repeated utility patterns
- Create component classes for complex UI elements
- Use the `theme()` function for custom values

#### MAY
- Use arbitrary values for one-off styles
- Create custom plugins for project-specific utilities

#### Examples
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

## 3. TypeScript

### 3.1 Type System

#### MUST
- Enable strict mode
- Use explicit return types for exported functions
- Prefer interfaces over type aliases for object types

#### SHOULD
- Use type guards for type narrowing
- Leverage utility types (Partial, Pick, Omit, etc.)
- Use `readonly` for immutable data

#### MAY
- Use type predicates for complex type guards
- Leverage mapped and conditional types for advanced patterns

#### Examples
```typescript
// Branded types
type Email = string & { readonly __brand: 'Email' };

// Type assertions
const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
} satisfies Record<string, `#${string}`>;
```

## 4. React

### 4.1 Components

#### MUST
- Use functional components with hooks
- Define prop types with TypeScript interfaces
- Use proper key props in lists

#### SHOULD
- Keep components small and focused
- Use React.memo for expensive renders
- Prefer composition over inheritance

#### MAY
- Use React.lazy for code splitting
- Implement error boundaries for graceful error handling

#### Examples
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

## 5. Testing

### 5.1 Unit Testing

#### MUST
- Write tests for all business logic
- Test edge cases and error conditions
- Keep tests deterministic

#### SHOULD
- Follow the Arrange-Act-Assert pattern
- Use descriptive test names
- Mock external dependencies

#### MAY
- Use snapshot testing for complex UI components
- Implement integration tests for critical user flows

#### Examples
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

## 6. Accessibility

### 6.1 ARIA

#### MUST
- Use semantic HTML elements
- Provide text alternatives for non-text content
- Ensure keyboard navigability

#### SHOULD
- Use ARIA attributes when native HTML isn't sufficient
- Test with screen readers
- Ensure sufficient color contrast

#### MAY
- Implement reduced motion preferences
- Add skip links for keyboard users

#### Examples
```tsx
function Toggle({ label, isOn, onChange }) {
  return (
    <label>
      <span className="visually-hidden">{label}</span>
      <div 
        role="switch"
        aria-checked={isOn}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            onChange(!isOn);
          }
        }}
        onClick={() => onChange(!isOn)}
        className={`toggle ${isOn ? 'on' : 'off'}`}
      >
        <span className="toggle-handle" />
      </div>
    </label>
  );
}
```

## 7. Performance

### 7.1 Optimization

#### MUST
- Implement code splitting for large bundles
- Optimize images and assets
- Use proper caching strategies
- Measure component render times

#### SHOULD
- Implement lazy loading for below-the-fold content
- Use web workers for CPU-intensive tasks
- Optimize critical rendering path

#### MAY
- Implement service workers for offline support
- Use web vitals for performance monitoring

#### Examples
```tsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

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

## 8. Security

### 8.1 Input Handling

#### MUST
- Sanitize all user input
- Use parameterized queries for database operations
- Implement proper authentication and authorization

#### SHOULD
- Use Content Security Policy headers
- Implement rate limiting
- Keep dependencies updated

#### MAY
- Implement security headers
- Use security.txt for security policy

#### Examples
```typescript
// Input sanitization
import DOMPurify from 'dompurify';

function Comment({ text }) {
  const cleanText = DOMPurify.sanitize(text, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href', 'title', 'target']
  });

  return <div dangerouslySetInnerHTML={{ __html: cleanText }} />;
}
```

## 9. Documentation

### 9.1 Code Comments

#### MUST
- Document complex business logic
- Explain non-obvious code
- Keep comments up-to-date

#### SHOULD
- Use JSDoc for public APIs
- Include examples in documentation
- Document known issues and limitations

#### MAY
- Generate API documentation
- Include architecture decision records

## 10. Version Control

### 10.1 Git Workflow

#### MUST
- Write clear, descriptive commit messages
- Keep commits atomic and focused
- Follow the project's branching strategy

#### SHOULD
- Use feature branches for new work
- Rebase before merging
- Review your own code before pushing

#### MAY
- Use git hooks for pre-commit checks
- Follow conventional commits specification

## 11. Internationalization

### 11.1 i18n

#### MUST
- Externalize all user-facing strings
- Support RTL languages
- Handle pluralization correctly

#### SHOULD
- Use a dedicated i18n library
- Support number and date formatting
- Test with different locales

#### MAY
- Implement language detection
- Support dynamic language switching

#### Examples
```tsx
import { useTranslation } from 'react-i18next';

function Greeting() {
  const { t, i18n } = useTranslation();
  
  return (
    <div dir={i18n.dir()}>
      <h1>{t('welcome')}</h1>
      <p>{t('messages.unread', { count: 5 })}</p>
    </div>
  );
}
```

## 12. Monitoring

### 12.1 Error Tracking

#### MUST
- Log errors with context
- Set up error monitoring
- Alert on critical failures

#### SHOULD
- Track performance metrics
- Monitor API response times
- Set up dashboards for key metrics

#### MAY
- Implement custom event tracking
- Set up synthetic monitoring

## 13. Code Review

### 13.1 Process

#### MUST
- Review for security vulnerabilities
- Ensure code follows style guidelines
- Verify test coverage

#### SHOULD
- Provide constructive feedback
- Suggest improvements
- Keep reviews focused and timely

#### MAY
- Use automated code review tools
- Track technical debt

## 14. Dependencies

### 14.1 Management

#### MUST
- Keep dependencies up to date
- Audit for known vulnerabilities
- Document major version upgrades

#### SHOULD
- Prefer smaller, focused libraries
- Consider bundle size impact
- Document dependency decisions

#### MAY
- Use dependency injection for testability
- Implement feature flags for new features
EOL