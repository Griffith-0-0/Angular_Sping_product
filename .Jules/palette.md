## 2026-04-19 - Semantic Navigation for Accessibility
**Learning:** Using `<div>` with `routerLink` is inaccessible as it lacks semantic meaning and keyboard focusability. Replacing them with `<a>` tags within a `<nav>` landmark significantly improves screen reader and keyboard UX.
**Action:** Always use semantic `<a>` tags for navigation and wrap them in a `<nav>` with an appropriate `aria-label`.
