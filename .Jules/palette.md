## 2026-08-20 - Navigation Landmark & RouterLink Active Attributes
**Learning:** Replacing non-semantic `div` elements in Angular navigation with proper `a` anchors and `routerLinkActive` bound to `[attr.aria-current]` improves keyboard navigation and screen reader support without custom CSS.
**Action:** Always wrap router outlets in `<main>` landmarks and add `aria-label` to `<nav>` elements when adding primary routing navigation.
