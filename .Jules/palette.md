# Palette Journal

## 2026-07-19 - Semantic Button Navigation Group
**Learning:** Using non-semantic `div` tags with `routerLink` causes complete loss of keyboard focusability and screen reader link context. Wrapping semantic `<a>` tags within a `.btn-group` button group under a `<nav>` landmark ensures optimal keyboard navigation and screen reader support out-of-the-box in Angular applications.
**Action:** Always structure primary application navigation using semantic `<a>` elements within a `<nav>` container labeled with an appropriate `aria-label`, and styled using Bootstrap's button groups (`.btn-group.shadow-sm`).
