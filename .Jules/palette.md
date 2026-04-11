# Palette's Journal - UX & Accessibility Learnings

## 2026-04-11 - [Angular Navigation Accessibility & UX]
**Learning:** In Angular standalone applications using Bootstrap, using semantic `<a>` tags with `routerLinkActive` and `ariaCurrentWhenActive="page"` provides the best balance of visual feedback and screen reader accessibility. Grouping them in a `btn-group` within a `<nav aria-label="...">` landmark further clarifies the structure.
**Action:** Always prefer semantic anchors over `div` for navigation, and ensure `RouterLinkActive` is imported in the component to support active state styling. Use `[routerLinkActiveOptions]="{exact: true}"` on the home link to avoid it staying active when sub-routes are visited.
