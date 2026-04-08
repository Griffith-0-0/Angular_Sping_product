## 2026-04-08 - Improved Navigation UX and Accessibility
**Learning:** Replacing non-semantic div-based navigation with semantic <a> tags and ARIA landmarks significantly improves accessibility for screen readers and keyboard users. Using Bootstrap's button groups with shadow provides a modern visual structure.
**Action:** Always use semantic <nav>, <main>, and <a> tags for navigation. Include aria-label on navigation landmarks and aria-current on active links. Use [routerLinkActiveOptions]="{exact: true}" to avoid multiple active links when routing redirects are involved.
