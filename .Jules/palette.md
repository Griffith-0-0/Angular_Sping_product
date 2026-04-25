## 2026-04-25 - Semantic Navigation and ARIA Current
**Learning:** Using semantic `<a>` tags instead of `div` for navigation buttons in Angular/Bootstrap projects ensures built-in keyboard accessibility and focus management. Adding `ariaCurrentWhenActive="page"` (which maps to `aria-current="page"`) is critical for screen reader users to identify the active location in a navigation set.
**Action:** Always prefer `<a>` tags for routing even when styling as buttons, and consistently use `ariaCurrentWhenActive` on `routerLinkActive` elements.
