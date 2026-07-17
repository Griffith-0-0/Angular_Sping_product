# Palette Journal

## 2026-07-17 - Accessible Button-Group Navigation in Angular 20 Zoneless
**Learning:** Navigating with raw divs styling as Bootstrap buttons lacks keyboard focus and screen reader context. Replacing them with semantic `<a>` tags grouped within a `<nav aria-label="Main navigation">` and a `.btn-group.shadow-sm` wrapper provides correct navigation roles. Using template reference variables with `routerLinkActive` (e.g., `#link="routerLinkActive"`) to toggle class bindings prevents visual glitches and redundant class issues. Setting `[attr.aria-current]` dynamically ensures correct screen reader reporting.
**Action:** Always use semantic `<a>` tags with `routerLinkActive` class binding and dynamic `aria-current` attributes for primary navigation menus rather than interactive `div` elements.
