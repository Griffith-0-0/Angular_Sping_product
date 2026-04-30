## 2026-04-30 - Accessible Navigation Patterns in Angular

**Learning:** When using Angular's `RouterLinkActive`, specifically with redirects from the root path, `[routerLinkActiveOptions]="{exact: true}"` is essential to prevent the root link from appearing active on every page. Additionally, `ariaCurrentWhenActive="page"` provides a seamless way to communicate the current location to assistive technologies.

**Action:** Always pair `routerLinkActive` with `ariaCurrentWhenActive="page"` and use `exact: true` for the home/root route in navigation menus.
