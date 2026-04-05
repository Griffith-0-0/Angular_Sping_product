## 2026-04-05 - Semantic and Accessible Navigation in Angular
**Learning:** Initial application states often lack a default route redirect, leading to empty views on first load. Navigation using non-semantic `div` elements misses out on native browser features and accessibility.
**Action:** Always configure a default redirect in `app.routes.ts`. Use semantic `<a>` tags with `routerLinkActive`, `ariaCurrentWhenActive="page"`, and wrap the navigation in a `<nav>` with an `aria-label`. Use icons with `aria-hidden="true"` to enhance visual cues without cluttering screen readers.
