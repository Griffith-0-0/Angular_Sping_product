## 2026-05-03 - Navigation Accessibility and UX Patterns
**Learning:** For Angular standalone components, using `routerLinkActive="active"` and `ariaCurrentWhenActive="page"` on semantic `<a>` tags provides both visual and programmatic feedback. Wrapping navigation in a `<nav aria-label="...">` landmark and the main content in a `<main>` landmark is essential for accessibility.
**Action:** Always prefer semantic `<a>` tags for navigation and include appropriate ARIA landmarks and active state indicators in Angular projects.
