## 2026-07-12 - Navigation accessibility and visual feedback
**Learning:** Using `routerLinkActive` with template reference variables allows for clean conditional styling of navigation elements without complex component logic. Providing semantic `<nav>` and `aria-current` attributes significantly improves screen reader navigation.
**Action:** Always prefer semantic `<nav>` with `aria-label` and `aria-current` for primary navigation. Use `[class.active]` or similar conditional bindings based on `routerLinkActive` state.
