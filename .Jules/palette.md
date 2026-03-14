## 2026-03-14 - [Semantic Navigation and Accessibility Landmarks]
**Learning:** Replacing generic `div` tags with semantic `<a>` tags for navigation is crucial for keyboard accessibility and screen reader support. Using `<nav>` with `aria-label` and `<main>` landmarks provides a clear document structure for assistive technologies.
**Action:** Always prefer semantic HTML and landmarks. Ensure interactive elements are reachable via keyboard (using `<a>` or `<button>`) and provide appropriate ARIA attributes like `aria-current`.
