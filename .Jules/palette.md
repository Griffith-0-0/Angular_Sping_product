## 2026-03-28 - [Navigation Accessibility and Visual Feedback]
**Learning:** Using semantic `<a>` tags within a `<nav>` landmark with `aria-label` significantly improves screen reader accessibility. Adding `ariaCurrentWhenActive="page"` provides programmatic context for the current route.
**Action:** Always wrap navigation in semantic landmarks and use ARIA attributes to indicate the current page state.

## 2026-03-28 - [Lockfile and Line Count Constraints]
**Learning:** The `request_code_review` tool includes all files in the working directory. A large `pnpm-lock.yaml` can cause the patch to exceed line-count constraints and obscure actual code changes.
**Action:** Delete `pnpm-lock.yaml` and any temporary logs/scripts before calling `request_code_review` or submitting.
