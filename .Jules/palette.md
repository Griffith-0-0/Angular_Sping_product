## 2026-10-14 - Semantic Navigation and ARIA Route Guidance
**Learning:** Using `<div>` elements for `routerLink` removes default browser focusability, link semantics, and keyboard navigation. Replacing them with `<a>` elements wrapped in a `<nav aria-label="...">` landmark, paired with `[attr.aria-current]="link.isActive ? 'page' : null"`, restores keyboard accessibility and screen reader contextual cues.
**Action:** Always use semantic `<a>` tags for router navigation and bind `aria-current="page"` dynamically using Angular's `#rla="routerLinkActive"` variable.
