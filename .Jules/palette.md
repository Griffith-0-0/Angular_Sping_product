# Palette Journal - Critical UX/a11y Insights

## 2026-07-27 - Semantic Navigation and ARIA landmark improvement in Angular 20
**Learning:** Transitioning simple Angular element routers from passive layouts (e.g. `div` with `routerLink`) to semantic landmarks (`nav`, `header`, `main`) combined with `a` tags significantly enhances standard keyboard navigability, tab-focus indicators, and screen reader recognition out of the box. Using `RouterLinkActive` variables with dynamic Angular class and attribute bindings prevents style/contrast mismatches without adding custom layout bloat.
**Action:** Always wrap router links inside semantic layout tags, export active references, and apply conditional accessibility attributes like `aria-current="page"` and `main[id="main"][tabindex="-1"]`.
