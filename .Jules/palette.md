# Palette Journal

## 2026-07-21 - Accessible Semantic Button Group Navigation in Zoneless Angular
**Learning:** Using non-semantic elements (like `<div>`) for `routerLink` results in critical keyboard and screen reader accessibility gaps. Instead, using a `<nav aria-label="...">` landmark wrapping semantic `<a>` elements styled as buttons with a `.btn-group.shadow-sm` container is highly accessible. Additionally, in Angular zoneless environments, template variables linked to `routerLinkActive` provide an elegant, pure-template mechanism to swap Bootstrap button states (`btn-primary` vs `btn-outline-primary`) and dynamically set `[attr.aria-current]` without custom component-side lifecycle bindings.
**Action:** Always favor semantic `<a>` tags for route navigation. Leverage template-based `routerLinkActive` exports for accessible CSS toggling and `aria-current` state management. Inject `Router` and use `fixture.whenStable()` in Angular specs to verify dynamic navigation elements.
