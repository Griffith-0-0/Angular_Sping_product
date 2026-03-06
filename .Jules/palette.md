## 2026-03-06 - [Active State Precision & Semantic Navigation]
**Learning:** In Angular, using `routerLinkActive` on buttons/links can sometimes lead to multiple elements appearing active if paths overlap (e.g., '' redirecting to '/home'). Using `[routerLinkActiveOptions]="{exact: true}"` is essential for precise visual feedback. Also, using semantic `<a>` tags instead of `<div>` for navigation is a fundamental accessibility win.
**Action:** Always include `[routerLinkActiveOptions]="{exact: true}"` for navigation links and prefer semantic `<a>` tags wrapped in a `<nav>` with `aria-label`.
