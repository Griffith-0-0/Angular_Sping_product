## 2026-09-19 - Semantic navigation and active route feedback
**Learning:** Replacing non-semantic div routerLink elements with semantic <a> tags and RouterLinkActive (#rla="routerLinkActive") improves both keyboard accessibility and screen reader feedback via [attr.aria-current]="rla.isActive ? 'page' : null".
**Action:** Always wrap router navigation in semantic <nav> elements with aria-label and ensure active links expose aria-current="page".
