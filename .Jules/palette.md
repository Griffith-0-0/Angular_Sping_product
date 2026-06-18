## 2026-06-18 - [Accessible Navigation with Active States]
**Learning:** In Angular zoneless applications using Bootstrap, toggling button variants (e.g., `btn-primary` vs `btn-outline-primary`) based on route activity provides clear visual feedback. Using `#ref="routerLinkActive"` with class binding `[class.btn-primary]="ref.isActive"` is a clean, CSS-free way to achieve this.
**Action:** Use template reference variables on `routerLinkActive` to conditionally apply Bootstrap utility classes for interactive elements.
