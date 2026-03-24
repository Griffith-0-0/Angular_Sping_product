## 2026-03-24 - Accessible Navigation Landmarks
**Learning:** Using semantic `<nav>` and `<main>` landmarks, along with `aria-label` and `ariaCurrentWhenActive`, significantly improves the screen reader experience by providing clear context and identifying the current location. In Angular, `[routerLinkActiveOptions]="{exact: true}"` is crucial for the home link to prevent multiple active states when using a redirect from the empty path.
**Action:** Always wrap navigation in a `<nav>` with a descriptive `aria-label` and use `ariaCurrentWhenActive="page"` on active router links.
