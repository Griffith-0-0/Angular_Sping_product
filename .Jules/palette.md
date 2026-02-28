## 2026-02-28 - Accessible Navigation with Semantic Links
**Learning:** Using generic `div` elements for navigation buttons is an accessibility anti-pattern. While they may look like buttons or links, they lack the necessary roles and keyboard interaction support (like Tab focus and Enter to activate) that semantic `<a>` tags provide by default.
**Action:** Always use semantic `<a>` tags for navigation and provide visual feedback for the active route using `routerLinkActive`.
