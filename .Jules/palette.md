## 2026-05-06 - Navigation Semantic and Accessible Enhancements
**Learning:** In Angular standalone applications, using semantic `<a>` tags with `routerLinkActive` and `ariaCurrentWhenActive="page"` significantly improves both the accessibility (screen reader support) and the visual UX (active state feedback) of navigation systems with minimal code.
**Action:** Always prefer semantic `<a>` tags over `<div>` for routing links and ensure `RouterLinkActive` is imported in the component to provide immediate visual feedback.
