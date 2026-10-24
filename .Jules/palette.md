## 2026-10-24 - Semantic Navigation Links with Active State and ARIA Current
**Learning:** Replacing non-semantic `<div>` elements used for navigation with standard `<a>` tags and binding `[attr.aria-current]="rla.isActive ? 'page' : null"` alongside `RouterLinkActive` provides semantic navigation landmarks, proper keyboard focus, and screen reader active page context.
**Action:** Always use semantic `<a>` tags for route links and bind `aria-current` and dynamic button classes via `RouterLinkActive`.
