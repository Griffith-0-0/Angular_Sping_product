## 2026-03-15 - [Semantic Navigation and Routing UX]
**Learning:** Replacing non-semantic `div` elements with `<a>` tags and adding `aria-label` to navigation containers significantly improves accessibility. Using `routerLinkActive` with `ariaCurrentWhenActive="page"` provides both visual and programmatic feedback for the current route. A default redirect in routing prevents empty states on landing.
**Action:** Always wrap main content in a `<main>` landmark and ensure navigation uses semantic anchors with active state feedback.
