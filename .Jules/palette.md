## 2026-05-22 - [Angular Navigation UX & Accessibility]
**Learning:** Initial application state and navigation feedback are critical for a "professional" feel. A missing redirect from the root path leads to a "broken" first impression. Semantic landmarks like `<nav>` and `<main>`, combined with `ariaCurrentWhenActive`, significantly improve the screen reader experience.
**Action:** Always check for root path redirects in `app.routes.ts` and use semantic landmarks with appropriate ARIA attributes for navigation.

## 2026-05-22 - [Pnpm Lockfile Management]
**Learning:** In some environments, running `pnpm install` might generate a `pnpm-lock.yaml` even if only `package-lock.json` exists, or it might update an existing lockfile significantly. Including this in a micro-UX PR can obscure the actual code changes and violate line-count constraints.
**Action:** Always verify the diff of lockfiles and delete them if they weren't explicitly required for the task.
