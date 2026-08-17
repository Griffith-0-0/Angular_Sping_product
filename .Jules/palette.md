## 2026-08-17 - Accessible Navigation Links with Route Active States

**Learning:** Replacing non-semantic `<div routerLink>` elements with semantic `<a>` tags and `routerLinkActive` template reference variables (`#rla="routerLinkActive"`) allows seamless class toggling (`[class.btn-primary]="rla.isActive"`) and accessibility attributes (`[attr.aria-current]="rla.isActive ? 'page' : null"`).
**Action:** Always prefer semantic anchor tags with `#rla="routerLinkActive"` and `aria-current` attributes when building navigation components in Angular.
