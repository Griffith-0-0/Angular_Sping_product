## 2026-10-11 - Navigation Accessibility and Active Link State Feedback
**Learning:** Replacing non-semantic `<div>` navigation items with semantic `<a>` tags inside a `<nav aria-label="Main navigation">` container and dynamically exposing `[attr.aria-current]="link.isActive ? 'page' : null"` and active Bootstrap button classes improves keyboard and screen-reader accessibility while clearly indicating current page context.
**Action:** Always use semantic `<a>` tags with `RouterLinkActive` and `aria-label`/`aria-current` attributes when implementing header or sub-navigation controls.
