## 2026-04-01 - [Semantic and Accessible Navigation]
**Learning:** Using `div` with `routerLink` instead of `<a>` breaks standard keyboard navigation (Tab/Enter) and hides the link's purpose from screen readers.
**Action:** Always use `<a>` for navigation, wrap in `<nav aria-label="...">`, and provide programmatic feedback with `ariaCurrentWhenActive="page"`.

## 2026-04-01 - [Angular Standalone Testing]
**Learning:** Standalone components using `RouterLink` or `router-outlet` in tests need `provideRouter(routes)` and `provideZonelessChangeDetection()` in the `TestBed` providers to function correctly without `Zone.js` errors.
**Action:** Include routing and zoneless providers in the test configuration for standalone apps.
