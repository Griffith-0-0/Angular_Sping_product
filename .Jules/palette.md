## 2026-05-08 - Accessible Navigation Pattern
**Learning:** Transitioning from generic `div` containers to semantic `<nav>` and `<a>` elements, combined with `ariaCurrentWhenActive="page"`, significantly improves screen reader clarity for navigation states. Using Bootstrap's `btn-group` provides a cohesive visual structure for related routes.
**Action:** Use semantic `<nav>` with `aria-label`, `<a>` tags for links, and always provide programmatic active state indication (like `ariaCurrentWhenActive`) for navigation components.
