## 2026-04-16 - Accessible Navigation Pattern
**Learning:** Initial application structure used non-semantic `div` elements for navigation without landmarks or active state indicators, hindering both accessibility and visual clarity.
**Action:** Always use `<nav>` landmarks with `aria-label`, convert interactive navigation elements to `<a>` tags, and utilize `routerLinkActive` with `ariaCurrentWhenActive="page"` for accessible state indication in Angular projects.
