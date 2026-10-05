## 2026-10-05 - Navigation Accessibility and Active Route Styling
**Learning:** Non-semantic `<div>` navigation links lack keyboard focusability and ARIA accessibility. Using semantic `<a>` links inside `<nav aria-label="...">` combined with Angular's `RouterLinkActive` and `aria-current="page"` provides active styling and screen reader context.
**Action:** Always wrap application navigation in standard `<nav>` elements with `aria-label`, use `<a>` elements for router links, and apply `[attr.aria-current]="rla.isActive ? 'page' : null"`.
