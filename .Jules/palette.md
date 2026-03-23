## 2026-03-23 - [Navigation Accessibility and State]
**Learning:** Using `div` for navigation links is an anti-pattern that breaks keyboard focus and screen reader semantics. Proper state indication requires `routerLinkActive` combined with `ariaCurrentWhenActive="page"` for both visual and programmatic feedback.
**Action:** Always use `<a>` tags for navigation, wrap them in a `<nav>` with `aria-label`, and use Angular's built-in directives for active state management.
