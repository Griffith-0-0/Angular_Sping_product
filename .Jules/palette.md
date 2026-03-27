## 2026-03-27 - [Navigation Accessibility and Visual Feedback]
**Learning:** Replacing generic `div` elements with semantic `<a>` tags for navigation and using `routerLinkActive` with `ariaCurrentWhenActive` significantly improves both visual usability and screen reader accessibility in Angular applications. Providing a default redirect from the empty path to a home route ensures a consistent initial state for users.
**Action:** Always use semantic elements for interactive components and ensure that visual active states are mirrored with appropriate ARIA attributes like `aria-current="page"`.
