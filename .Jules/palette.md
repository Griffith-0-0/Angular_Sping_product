## 2026-04-28 - [Semantic Navigation & Accessible Links]
**Learning:** Using non-semantic `div` elements for navigation breaks keyboard accessibility and screen reader support. Additionally, providing `aria-label` on links that already contain descriptive text is redundant and leads to repetitive announcements in screen readers.
**Action:** Always use `<a>` tags for navigation links and only use `aria-label` if the link text itself is not descriptive (e.g., icon-only buttons). Use `aria-hidden="true"` for decorative icons inside links.
