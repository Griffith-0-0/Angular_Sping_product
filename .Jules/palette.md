## 2026-03-21 - [Semantic Navigation & Accessibility in SPAs]
**Learning:** Using generic `div` elements for navigation (even with `routerLink`) breaks keyboard accessibility and screen reader navigation. Semantic `<a>` tags within a `<nav>` landmark with `aria-label` and `ariaCurrentWhenActive="page"` provide a significantly better experience for assistive technology.
**Action:** Always use semantic `<nav>`, `<main>`, and `<a>` tags for navigation structures and include appropriate ARIA attributes.
