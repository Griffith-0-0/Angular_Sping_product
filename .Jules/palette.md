## 2026-04-27 - Semantic Navigation and Accessibility in Angular
**Learning:** Replacing generic `div` elements with semantic `a` tags and adding ARIA landmarks (`nav`, `main`) and labels (`aria-label`, `aria-current`) significantly improves screen reader support and keyboard focusability. In Angular, using `RouterLinkActive` with `ariaCurrentWhenActive="page"` provides a seamless way to handle programmatic state.
**Action:** Always use semantic HTML for interactive elements. Ensure navigation landmarks are labeled and active states are programmatically communicated using ARIA attributes.
