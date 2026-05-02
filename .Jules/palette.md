## 2026-05-02 - [Accessibility & UX: Semantic Navigation]
**Learning:** Converting generic `div` containers to semantic `<a>` tags with `routerLinkActive` and `aria-current` provides both immediate visual feedback and essential context for assistive technologies.
**Action:** Always use semantic HTML for navigation and ensure `aria-current="page"` is programmatically set for the active route.

## 2026-05-02 - [UI: Consistent Icon Spacing]
**Learning:** Decorative icons within buttons or links should use `aria-hidden="true"` and consistent utility-based spacing (e.g., `me-1`) to avoid screen reader noise and ensure visual alignment.
**Action:** Apply `aria-hidden="true"` to all decorative icons and use Bootstrap utility classes for layout.
