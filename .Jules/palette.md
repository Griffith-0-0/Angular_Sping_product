## 2026-04-15 - [Accessible Navigation in Angular]
**Learning:** In Angular standalone components using Bootstrap, semantic `<a>` tags with `routerLinkActive="active"` and `ariaCurrentWhenActive="page"` provide a clean, accessible navigation experience. Icons should be decorative with `aria-hidden="true"`, and the entire menu should be wrapped in a `<nav>` with a descriptive `aria-label`.
**Action:** Use this pattern for all navigation menus. Ensure `RouterLinkActive` is imported in the component class.
