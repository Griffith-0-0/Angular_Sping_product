## 2026-03-10 - [Angular 20 Navigation UX]
**Learning:** In Angular 20 standalone components, `RouterLinkActive` must be explicitly imported for active route styling to work. Using `[routerLinkActiveOptions]="{exact: true}"` is essential when a default redirect (e.g., to `/home`) is present to prevent multiple links from appearing active simultaneously.
**Action:** Always include `RouterLinkActive` in standalone component imports and use `exact: true` for navigation links when redirects are involved.
