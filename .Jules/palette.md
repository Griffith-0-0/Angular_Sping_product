## 2026-08-29 - Navigation Landmark and Route Link Accessibility
**Learning:** Replacing non-semantic `<div>` links with semantic `<a>` tags in `<nav aria-label="...">` and using `[attr.aria-current]="rla.isActive ? 'page' : null"` improves screen reader navigation and clearly conveys active navigation state.
**Action:** Always prefer `<a>` tags over `<div>` for navigation links, and bind `aria-current="page"` dynamically via `routerLinkActive`.
