# Palette UX & Accessibility Journal

## 2026-07-30 - Standardizing Accessible Button Group Navigation in Angular 20 Zoneless
**Learning:** Raw divs with `routerLink` lack proper keyboard navigation, semantic role, and route activity indicators. Utilizing a semantic `<nav aria-label="Main navigation">` containing a `.btn-group.shadow-sm` with active/inactive class-toggled semantic `<a>` tags and explicit screen reader attributes (`[attr.aria-current]`) dramatically improves screen-reader compatibility and focus behavior.
**Action:** Always wrap standard navigation in `<nav>` and use conditional binding on semantic anchors with template reference variables tied to `routerLinkActive`.
