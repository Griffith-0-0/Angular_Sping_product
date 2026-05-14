## 2026-05-14 - Accessible Navigation with Visual Feedback

**Learning:** Replacing non-semantic `div` elements with `<a>` tags for navigation significantly improves accessibility by providing native keyboard support and semantic meaning for screen readers. Combining this with `aria-current` and Bootstrap's `active` class (managed by `routerLinkActive`) provides a robust and accessible UX.

**Action:** Always prefer semantic HTML tags (`<a>`, `<button>`) for interactive elements. Ensure active states are visually clear and programmatically communicated via `aria-current`.
