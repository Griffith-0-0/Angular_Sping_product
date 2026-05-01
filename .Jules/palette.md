## 2026-05-01 - Accessible Navigation Patterns in Angular Standalone
**Learning:** In Angular standalone components using Bootstrap, interactive navigation elements should be semantic (using <a> tags) and include both visual (routerLinkActive) and programmatic (ariaCurrentWhenActive) feedback for better accessibility. Wrapping the main content in a <main> landmark and providing an aria-label for the <nav> improves screen reader navigation.
**Action:** Always prefer <a> tags over <div> for router links, use ariaCurrentWhenActive="page", and ensure landmarks are present.
