## 2026-04-26 - [Refactoring with Tests and Lockfiles]
**Learning:** In this Angular environment, refactoring templates must preserve existing UI strings (e.g., 'Hello, tpAng1') to maintain test compatibility, even when fixing a broken build. Additionally, `pnpm install` can generate massive lockfiles that should be deleted before PR submission to stay within micro-UX diff limits.
**Action:** Always check `app.spec.ts` for specific content assertions before modifying templates, and ensure `pnpm-lock.yaml` is excluded from the final commit.
