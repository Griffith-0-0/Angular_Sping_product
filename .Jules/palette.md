## 2026-04-07 - Enhanced Semantic Navigation and Visual State

**Learning:** Navigation should always use semantic `<a>` tags for keyboard accessibility and screen readers. Additionally, providing visual feedback via `routerLinkActive` on the current route significantly improves user orientation within the application. Using a default redirect from the empty root path to a meaningful content route (like 'home') ensures a smoother initial entry point.

**Action:** Always wrap navigation in a `<nav>` with an `aria-label`, use `<a>` for links, and implement `routerLinkActive` with `ariaCurrentWhenActive="page"` for clear state representation. Ensure a default route is defined to avoid landing on an empty/broken state.
