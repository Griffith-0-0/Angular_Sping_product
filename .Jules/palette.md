## 2026-06-01 - Testing Navigation with Active States and Redirects
**Learning:** When using Angular's `routerLinkActive` and default redirects, unit tests require `provideRouter(routes)` and `router.initialNavigation()` to correctly resolve the active route state and avoid "No provider for ActivatedRoute" errors.
**Action:** Always include the router configuration and wait for stable navigation in component unit tests that involve the main navigation layout.
