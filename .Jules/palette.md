## 2026-05-05 - Navigation Accessibility and Interaction Feedback
**Learning:** Using semantic `<a>` tags instead of `<div>` for navigation links, combined with `routerLinkActive` and `ariaCurrentWhenActive="page"`, provides both visual and programmatic feedback essential for accessibility. Additionally, `[routerLinkActiveOptions]="{exact: true}"` is crucial when implementing redirects from the empty path to avoid multiple active states.
**Action:** Always prefer semantic anchors for navigation and ensure `RouterLinkActive` is imported in standalone components to enable these features.
