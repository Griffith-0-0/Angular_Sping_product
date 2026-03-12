## 2026-03-12 - [Navigation Accessibility and Active States]
**Learning:** In Angular 20 standalone applications, using semantic `<a>` tags with `routerLinkActive` and `ariaCurrentWhenActive="page"` provides a significantly better UX for both visual users and screen reader users compared to generic `div` elements. Additionally, providing a default route redirect prevents the common issue of landing on an empty initial state.
**Action:** Always prefer semantic elements for navigation and ensure `RouterLinkActive` is imported in the component's `imports` array to support active state tracking.
