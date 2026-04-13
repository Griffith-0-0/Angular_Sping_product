## 2026-04-13 - [Navigation Accessibility and Visual Structure]
**Learning:** Transitioning from generic `div` links to semantic `<a>` tags with `aria-label`, `ariaCurrentWhenActive`, and visual grouping via `btn-group` significantly improves both accessibility and the "feel" of the application.
**Action:** Use `RouterLinkActive` and `ariaCurrentWhenActive` by default for all navigation elements in Angular.

## 2026-04-13 - [Lockfile Management in Constraints]
**Learning:** In environments with strict line-count limits, automatic generation of large lockfiles (like `pnpm-lock.yaml` when only `package-lock.json` exists) can bloat PRs and violate rules.
**Action:** Verify if a lockfile existed previously and remove any newly generated large lockfiles that aren't strictly required for the code changes to function.
