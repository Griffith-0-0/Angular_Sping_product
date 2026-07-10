## 2026-07-10 - [RouterLinkActive and Accessibility]
**Learning:** In Angular 20 zoneless applications, using `routerLinkActive` with template reference variables (e.g., `#rla="routerLinkActive"`) is a robust way to conditionally apply Bootstrap classes and `aria-current` attributes for better screen reader support.
**Action:** Always use `[attr.aria-current]="rla.isActive ? 'page' : null"` on navigation links to ensure semantic correctness.

## 2026-07-10 - [Development Environment Management]
**Learning:** Creating a `pnpm-lock.yaml` file in a project that already has a `package-lock.json` can cause massive PR bloat and may be rejected by reviewers.
**Action:** Delete `pnpm-lock.yaml` before submission if the original repository uses `package-lock.json`.
