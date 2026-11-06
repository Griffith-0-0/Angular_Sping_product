# Palette Journal

## 2026-11-06 - Accessible Route Navigation with RouterLinkActive
**Learning:** Using Bootstrap `.btn-group` with `<a>` links and Angular's `routerLinkActive` bound to `[class.btn-primary]` and `[attr.aria-current]="rla.isActive ? 'page' : null"` creates an accessible, responsive navigation pattern without custom CSS or conflicting class styles.
**Action:** Always provide `aria-label` on `<nav>` and declare semantic `<a>` tags with `aria-current` dynamically matching the active route state.
