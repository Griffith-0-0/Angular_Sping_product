## 2026-03-05 - Semantic Navigation with Active Feedback
**Learning:** Using semantic `<a>` tags instead of `div` for navigation combined with `RouterLinkActive` and `ariaCurrentWhenActive` provides immediate visual and assistive technology feedback about the user's location. Labeled `<nav>` and `<main>` landmarks significantly improve screen reader navigation.
**Action:** Always use semantic anchors for navigation and ensure active states are programmatically communicated via `aria-current`.
