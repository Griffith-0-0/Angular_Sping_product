## 2026-04-22 - [Handling broken project state and lockfiles]
**Learning:** UX improvements often depend on a functional application state. If the repo is missing key components referenced in routes, they must be created first to verify UX changes. Additionally, `pnpm install` can generate large unwanted lockfiles that should be removed before submission to keep PRs small.
**Action:** Always verify application health before starting UX work; delete auto-generated lockfiles if they aren't part of the project's source control.
