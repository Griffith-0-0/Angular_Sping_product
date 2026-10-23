# Palette Journal

## 2026-10-23 - Accessible Navigation and Active Route Attributes
**Learning:** Using non-semantic `<div>` elements with `routerLink` lacks keyboard accessibility and screen reader support. Replacing them with semantic `<a>` tags in a `.btn-group`, adding `aria-label` to `<nav>`, and binding `[attr.aria-current]` via `routerLinkActive` provides a clear, accessible navigation experience.
**Action:** Always use semantic `<a>` elements for router links with `aria-label` on `<nav>` and dynamic `aria-current` state.
