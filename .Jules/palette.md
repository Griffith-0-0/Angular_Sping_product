## 2026-09-06 - Semantic Navigation & Active Route Accessibility
**Learning:** Using `div` with `routerLink` strips away link semantics, keyboard focus, and screen reader announcements. Replacing them with semantic `a` elements with `RouterLinkActive`, `aria-label="Main navigation"`, and `[attr.aria-current]="rla.isActive ? 'page' : null"` drastically improves screen reader usability and keyboard navigation without custom CSS.
**Action:** Always wrap application navigation in `<nav aria-label="...">` with semantic `<a>` links and active route state bindings.
