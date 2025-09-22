# Security

- MUST: Sanitize all user input.
- MUST: Use parameterized queries for database operations
- MUST: Implement proper authentication and authorization
- SHOULD: Use Content Security Policy headers.
- SHOULD: Implement rate limiting.
- SHOULD: Keep dependencies updated.
- MAY: Implement proper error handling and logging.
- MAY: Implement proper session management.
- MAY: Implement security headers.
- MAY:Use security.txt for security policy.

## Examples

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
