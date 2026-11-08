# Palette's Journal

## 2026-11-08 - Active Navigation State & Accessible Landmarks
**Learning:** Using semantic `<nav aria-label="...">` with grouped buttons and dynamic Angular `RouterLinkActive` state bindings (`[attr.aria-current]="link.isActive ? 'page' : null"` and toggling `btn-primary` / `btn-outline-primary`) provides immediate visual and screen-reader orientation while avoiding conflicting CSS class states.
**Action:** In Angular standalone navigation bars, export `routerLinkActive` to template variables to toggle active button variants and render `aria-current="page"` cleanly.
