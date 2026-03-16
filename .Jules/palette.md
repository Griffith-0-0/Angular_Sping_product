## 2026-03-16 - [Initial UX Assessment]
**Learning:** Using semantic `<a>` tags for navigation is crucial for accessibility. Native elements provide built-in keyboard support and roles that `<div>` elements lack without significant extra work. Navigation landmarks should always have a descriptive `aria-label`.
**Action:** Replace `div` links with `a` tags and add `aria-label` to `<nav>` elements.

## 2026-03-16 - [Default Route Importance]
**Learning:** A missing default route results in an empty `router-outlet` when the user first lands on the app, leading to a confusing "blank" experience.
**Action:** Always provide a redirect from the empty path to a sensible default (like 'home').
