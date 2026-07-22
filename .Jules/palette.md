# Palette Journal

## 2026-07-22 - Semantic Navigation & Dynamic Accessible States in Angular
**Learning:** Using generic `<div>` elements with `routerLink` for navigation bypasses native focus states, tab ordering, and screen reader announcements. Using semantic `<a>` tags with appropriate land-mark packaging (e.g. `<nav aria-label="...">`) restores fully accessible, keyboard-navigable behavior out of the box. Additionally, managing active styles and the `aria-current` attribute dynamically using Angular's `routerLinkActive` template reference variable ensures robust screen reader synchronization and proper visual contrast.
**Action:** Always prefer semantic elements like `<a>` over `<div>` or `<button>` for site-wide navigation routes, and ensure all active navigation items use `[attr.aria-current]="rla.isActive ? 'page' : null"` with appropriate aria-labels on landmark elements.
