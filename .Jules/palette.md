## 2025-03-01 - [Semantic Navigation and Active States]
**Learning:** Using `<div>` for navigation links is inaccessible as it doesn't convey intent to screen readers or support standard keyboard interactions. In Angular, providing visual feedback for the current route via `routerLinkActive` is crucial for user orientation.
**Action:** Always use `<a>` tags for navigation and implement `routerLinkActive` to highlight the current page. Add `aria-label` to `<nav>` and use `<main>` to improve document semantics.
