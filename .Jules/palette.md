## 2026-04-02 - [Fixing Broken Builds for UX Verification]
**Learning:** When the project is in a 'broken' state (e.g., missing referenced components), fixing the build by creating the missing files is a prerequisite to verifying UX improvements, even if it increases the total diff line count.
**Action:** Always verify the build state first; if broken, prioritize minimal placeholder implementation to enable verification.

## 2026-04-02 - [Semantic Navigation and ARIA Labels]
**Learning:** Using semantic `<nav>` and `<a>` tags instead of `<div>` for navigation, combined with `aria-label` and `ariaCurrentWhenActive="page"`, significantly improves accessibility for screen readers.
**Action:** Always prefer semantic HTML and appropriate ARIA attributes for navigation components.

## 2026-04-02 - [Cleaning up PR noise]
**Learning:** The `request_code_review` tool scans the entire working directory. Temporary files like `pnpm-lock.yaml` (if not strictly needed), logs, and verification scripts must be deleted before calling it to keep the PR clean and within line-count constraints.
**Action:** Run a cleanup script to remove temporary artifacts and unnecessary lockfiles before requesting code review.
