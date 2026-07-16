## 2026-07-16 - Accessible Navigation with Active States
**Learning:** In Angular 20 zoneless applications, using `routerLinkActive` with `#ref="routerLinkActive"` and applying conditional classes via `[class.btn-outline-primary]="!ref.isActive"` is a reliable way to ensure visual feedback without custom CSS. Additionally, `[attr.aria-current]="ref.isActive ? 'page' : null"` is essential for screen reader accessibility in semantic navigation.
**Action:** Use this pattern for all navigation menus to ensure both visual and assistive technology parity.
