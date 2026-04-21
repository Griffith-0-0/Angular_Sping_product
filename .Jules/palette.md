## 2026-04-21 - Angular Standalone Component Router Directives
**Learning:** In Angular 20 standalone components, router directives like `RouterLinkActive` must be explicitly added to the `imports` array of the `@Component` decorator, otherwise attributes like `routerLinkActive` will be ignored without a clear build error in some environments.
**Action:** Always verify that `RouterLinkActive` is imported when using active state tracking in templates.
