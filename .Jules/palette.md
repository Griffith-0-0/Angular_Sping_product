## 2026-08-11 - Layout-Shift-Free Bypass Navigation
**Learning:** In highly structured applications, adding a "Skip to Main Content" link can introduce subtle page-wide layout shifts during keyboard focus transitions. To prevent layout shifts and keep tests stable, style `.visually-hidden-focusable:focus` with absolute positioning overlaying other elements.
**Action:** Apply absolute positioning styles onfocused skip links to overlay them cleanly over layout content, preventing layout shift in future Angular micro-UX updates.
