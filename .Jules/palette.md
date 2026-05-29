## 2026-05-29 - [Angular Navigation Accessibility & States]
**Learning:** Using semantic `<a>` tags instead of `<div>` for navigation links is essential for native keyboard support and browser behavior (like opening in new tabs). In Angular, `ariaCurrentWhenActive="page"` combined with `routerLinkActive` provides both visual and screen-reader accessible state indication. When using default route redirects (e.g., `''` to `'/home'`), `[routerLinkActiveOptions]="{exact: true}"` on the home link prevents it from being visually active when other sub-routes are active.

**Action:** Always prefer `<a>` tags for navigation and use `ariaCurrentWhenActive` for clear accessibility states. Apply exact matching on root-level navigation links when redirects are involved.
