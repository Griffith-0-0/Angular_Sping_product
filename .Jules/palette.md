## 2026-05-31 - Semantic Navigation with Active Indicators
**Learning:** Using semantic <a> tags instead of <div> for navigation links significantly improves accessibility (keyboard focus and screen reader support). Combined with [routerLinkActiveOptions]="{exact: true}" and ariaCurrentWhenActive="page", it provides clear state feedback.
**Action:** Always use <a> tags for navigation and implement ariaCurrentWhenActive to satisfy WCAG requirements for active states.
