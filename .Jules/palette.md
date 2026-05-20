## 2026-05-20 - Semantic and Accessible Navigation

**Learning:** Refactoring a non-semantic navigation (using `div` elements) to use semantic `<a>` tags with `routerLinkActive` and ARIA attributes significantly improves both accessibility and user orientation. Providing a default route redirect ensures a consistent initial state for the user.

**Action:** Always prioritize semantic HTML landmarks (`nav`, `main`) and interactive elements (`a`, `button`) for navigation. Use `routerLinkActive` with `ariaCurrentWhenActive="page"` to provide clear visual and programmatic feedback.
