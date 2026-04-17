# Palette's UX Journal

## 2026-04-17 - Navigation Accessibility and Structure
**Learning:** In Angular standalone setups, router directives like `RouterLinkActive` must be explicitly imported in the component to work. Using Bootstrap's `btn-group` with semantic `<a>` tags and `aria-label` provides a much better experience for both visual and screen reader users compared to simple `<div>` links.
**Action:** Always wrap navigation in `<nav aria-label="...">`, use `<a>` tags for links, and ensure active states are programmatically communicated via `ariaCurrentWhenActive`.
