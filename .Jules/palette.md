## 2026-03-03 - [Semantic Navigation for Accessibility]
**Learning:** In Angular 20 projects with standalone components, using generic `div` tags for navigation (even with `routerLink`) breaks keyboard accessibility and screen reader support. Switching to semantic `<a>` tags within a `<nav>` element with an `aria-label` is crucial.
**Action:** Always use semantic `<a>` tags for navigation links and include `ariaCurrentWhenActive="page"` and `routerLinkActive` for both programmatic and visual feedback.
