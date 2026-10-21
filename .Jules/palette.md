## 2026-10-21 - Accessible navigation links with active state indication
**Learning:** Replacing non-semantic `div` elements with `a` tags in Angular navigation, exporting `RouterLinkActive` variables, and binding `aria-current="page"` significantly improves keyboard navigation, screen reader landmark context, and visual route feedback.
**Action:** Use `<a>` links inside a `<nav aria-label="...">` landmark, bind `[attr.aria-current]="rla.isActive ? 'page' : null"`, and conditionally toggle button styling with `RouterLinkActive`.
