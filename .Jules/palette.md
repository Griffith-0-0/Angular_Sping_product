# Palette Journal - Critical UX Learnings

## 2026-08-07 - Semantic Landmarks for Angular Applications
**Learning:** In initial state setups of single page apps (SPA), base path configuration should always include a redirect to a valid home/dashboard component. Additionally, nesting layout structure in semantic landmarks such as `<header>` and `<main>` ensures full compatibility with screen-readers and accessibility requirements without introducing layout shifts or style bloat.
**Action:** When working on Angular templates, always wrap main route outlets in `<main id="main" tabindex="-1">` and page headers in `<header>`, and make sure to configure base redirects.
