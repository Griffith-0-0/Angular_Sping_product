## 2026-04-23 - [Semantic Navigation & Accessibility]
**Learning:** Replacing non-semantic 'div' navigation with '<a>' tags within a '<nav>' landmark significantly improves keyboard accessibility and screen reader support. Using 'routerLinkActive' with Bootstrap 'active' classes provides essential visual feedback.
**Action:** Always use semantic HTML for navigation and ensure 'aria-label' is present on landmarks. Use 'ariaCurrentWhenActive="page"' for programmatic active state indication.
