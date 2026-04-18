## 2026-04-18 - Navigation UX and Accessibility
**Learning:** In Angular projects using Bootstrap, navigation links are often implemented as `div` or generic tags, missing semantic value and focus states. Standardizing on `<a>` tags with `btn` classes, `routerLinkActive`, and `ariaCurrentWhenActive="page"` provides immediate UX clarity and screen reader support.
**Action:** Always use semantic `<nav>` and `<a>` tags for primary navigation, and ensure active states are programmatically communicated via `aria-current`.
