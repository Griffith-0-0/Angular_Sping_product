## 2026-03-22 - Enhanced Navigation Accessibility in Angular

**Learning:** Replacing generic `<div>` tags with semantic `<a>` tags and `<nav>` landmarks significantly improves screen reader accessibility and keyboard navigation. Using `ariaCurrentWhenActive="page"` provides immediate programmatic feedback for the current route.

**Action:** Always prioritize semantic HTML (`<nav>`, `<main>`, `<a>`) for navigation structures and leverage Angular's built-in `RouterLinkActive` and `ariaCurrentWhenActive` for clear visual and assistive feedback.
