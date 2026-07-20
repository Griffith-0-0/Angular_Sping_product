# Palette UX Journal

## 2026-07-20 - Navigation Link Markup & Accessibility
**Learning:** In Angular 20 standalone applications using Bootstrap, using non-semantic interactive elements like `div` for navigation links prevents keyboard focus/navigation and screen readers from identifying them as links or buttons. Furthermore, the active visual state should be coupled with proper ARIA attributes to indicate the current page context.
**Action:** Always use semantic `<a>` tags or `<button>` tags with correct `routerLink` directives and `RouterLinkActive` configured, adding `attr.aria-current` dynamically when active.
