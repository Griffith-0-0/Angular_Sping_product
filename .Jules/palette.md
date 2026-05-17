## 2026-05-17 - [Navigation Accessibility and Visual Feedback]
**Learning:** Using semantic `<a>` tags instead of `<div>` for navigation links, combined with `routerLinkActive` and `ariaCurrentWhenActive="page"`, provides both clear visual feedback and programmatic context for screen readers. Adding icons with `aria-hidden="true"` enhances the visual experience without adding noise for assistive technologies.
**Action:** Always prefer semantic HTML and use Angular's built-in accessibility attributes (`ariaCurrentWhenActive`) for navigation states.

## 2026-05-17 - [Handling Broken Application State]
**Learning:** When a repository is in a broken state (e.g., missing components referenced in routes), fixing the build is a prerequisite for UX verification. Even if it increases the diff size, it ensures the "micro-UX" improvement can be properly tested and seen in the browser.
**Action:** Proactively fix missing dependencies or files that block the build before proceeding with UX enhancements.
