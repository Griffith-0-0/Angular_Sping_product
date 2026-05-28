## 2026-05-28 - [Accessible Navigation & Semantic HTML]
**Learning:** Using `div` tags for navigation elements prevents keyboard access and doesn't communicate purpose to screen readers. Semantic `<a>` tags with `routerLink` provide better built-in accessibility.
**Action:** Always use semantic `<a>` tags for navigation and provide `ariaCurrentWhenActive="page"` for active state indication.

## 2026-05-28 - [Project State Resilience]
**Learning:** A missing default route or missing component files can lead to a "broken" initial experience and failing tests.
**Action:** Ensure a default redirect (e.g., to 'home') is configured and all referenced components are implemented, even if minimally, to maintain build health.
