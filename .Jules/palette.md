## 2026-07-03 - [Consistent aria-current in Angular 20]
**Learning:** The built-in `aria-currentWhenActive` directive can be inconsistent in some Angular 20 zoneless configurations. Using manual attribute binding `[attr.aria-current]="rla.isActive ? 'page' : null"` with a exported `routerLinkActive` reference is more reliable for ensuring screen readers and automated tests correctly identify the active route.
**Action:** Prefer manual `aria-current` binding via `routerLinkActive` reference for critical navigation elements.
