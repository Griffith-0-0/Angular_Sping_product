## 2026-05-27 - [Semantic Navigation and ARIA states]
**Learning:** Replacing `div` with `<a>` tags for navigation is a fundamental accessibility win. Using `ariaCurrentWhenActive="page"` in Angular provides automated screen reader feedback for the active route.
**Action:** Always use semantic `<a>` tags for links and ensure `aria-current` states are managed, especially in SPA navigation.

## 2026-05-27 - [Lockfile management in micro-UX tasks]
**Learning:** Generating a new `pnpm-lock.yaml` in a project that uses `package-lock.json` (or none) can create massive, undesirable diffs that distract from the micro-UX goal.
**Action:** Avoid committing auto-generated lockfiles if they significantly exceed the 50-line limit or change the project's established dependency locking strategy.
