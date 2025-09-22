# Error Handling

- MUST: Include specific error messages with context.
- MUST: Use try/catch for error handling.
- MUST: Use finally for cleanup.
- MUST: Use custom error classes for better error categorization.
- MUST: Document error scenarios in JSDoc.
- SHOULD: Log errors with sufficient context.
- SHOULD: Handle both expected and unexpected errors.
- SHOULD: Provide user-friendly error messages.
- MAY: Use error boundaries for React components.
- MAY: Implement retry logic for transient failures.

## Examples

```typescript
class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public details?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

// Usage
throw new ApiError(404, "User not found", { userId });

// In JSDoc
/**
 * @throws {ValidationError} When input validation fails
 */
```
