## 2026-03-31 - [Semantic and Accessible Navigation in Angular]
**Learning:** Using semantic `<a>` tags for navigation instead of `<div>` with `routerLink` enables native keyboard accessibility. Combining this with `routerLinkActive`, `aria-label`, and `ariaCurrentWhenActive` creates a robust, accessible navigation experience.
**Action:** Always prefer semantic tags and ARIA attributes for interactive elements; ensure standalone components explicitly import required directives like `RouterLinkActive`.
