## 2026-09-11 - Semantic Navigation with Active Route Attributes
**Learning:** Using non-semantic `<div>` elements for navigation routing lacks screen reader semantics and active route feedback. Standardizing on semantic `<a>` tags with `aria-label` on `<nav>` and `[attr.aria-current]="rla.isActive ? 'page' : null"` bound via `RouterLinkActive` ensures seamless keyboard and screen reader accessibility.
**Action:** Always wrap router links in semantic `<a>` tags within a labeled `<nav>` and bind `aria-current="page"` to active route directives.
