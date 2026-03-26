## 2026-03-26 - Improving Navigation Accessibility and UX
**Learning:** Using semantic `<nav>` and `<main>` tags along with ARIA labels significantly improves accessibility for screen readers. Using Bootstrap's `btn-group` for navigation provides a better visual and logical grouping of related links.
**Action:** Always wrap main navigation in a `<nav>` with `aria-label` and ensure interactive elements like links are correctly identified as active using `routerLinkActive` and `ariaCurrentWhenActive`. Use `<main>` for primary content.
