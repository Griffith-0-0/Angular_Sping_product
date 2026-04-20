## 2026-04-20 - [Navigation UX & Accessibility]
**Learning:** Initial application state was broken due to missing component files referenced in routes. Improving navigation requires semantic HTML (<a> vs <div>), ARIA labels for landmarks, and visual active states (routerLinkActive) for better orientation.
**Action:** Always verify if referenced components exist; if not, create minimal functional versions to enable UX testing. Use Bootstrap's `btn-group` and `routerLinkActive` for cohesive, accessible navigation.
