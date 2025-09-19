# HTML & Accessibility

- MUST: Use semantic HTML appropriate to content: `article`, `header`, `main`, `section`, `footer`, `h1–h6`, `p`, `ul/ol`, `nav`, `figure/figcaption`.
- MUST: Avoid generic `div`/`span` when a semantic element exists.
- MUST: Images include `alt`, `width`, and `height` attributes to prevent layout shifts (CLS). Add `loading="lazy"` for below-the-fold images.
- MUST: Ensure keyboard navigability and focus styles.
- SHOULD: Use ARIA only when semantics aren not sufficient.
- SHOULD: Maintain color contrast (WCAG AA).
- SHOULD:Test with screen readers
- SHOULD: Implement reduced motion preferences.
- SHOULD: Use semantic HTML for ARIA roles.
- MAY: Add skip links for keyboard users.

## Examples
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
