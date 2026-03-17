## 2026-03-17 - Improving Navigation Semantics and Accessibility
**Learning:** Replacing non-semantic div-based navigation with anchor tags and appropriate ARIA attributes (aria-label on nav, aria-current on active links) significantly improves both accessibility for screen readers and native browser behavior (like opening in new tabs).
**Action:** Always prefer semantic <nav> and <a> tags for navigation menus, and use ariaCurrentWhenActive to provide programmatic context for the active route.
