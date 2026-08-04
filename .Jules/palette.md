# Palette Journal - TpAng1

## 2026-08-04 - Semantic Button Navigation Group with RouterLinkActive Toggle
**Learning:** Standard link styling can be hard to read and navigate using assist technologies. Using semantic '<nav>' elements combined with '.btn-group.shadow-sm' styled links and screen reader landmarks enhances visual layout consistency and screen reader context. Using '[attr.aria-current]' dynamic binding prevents screen-reader ambiguities.
**Action:** Always wrap application primary links in `<nav>` and use proper button classes with active-state toggling rather than nesting un-semantic styled divs.
