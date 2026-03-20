## 2026-03-20 - [Navigation and Accessibility]
**Learning:** In a standalone Angular application with Bootstrap, using semantic `<nav>` and `<main>` landmarks, along with `RouterLinkActive` and `ariaCurrentWhenActive="page"`, significantly improves the accessibility and UX of the core navigation. Adding decorative icons with `aria-hidden="true"` enhances the visual affordance without cluttering the screen reader experience.
**Action:** Always wrap main content in `<main>`, use `<nav>` for navigation, and ensure active link states are both visually and programmatically clear.
