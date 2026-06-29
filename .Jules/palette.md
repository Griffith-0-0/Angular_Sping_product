## 2026-06-29 - [Aria-current reliability in Angular 20]
**Learning:** The `aria-currentWhenActive` directive in Angular 20 might not always reliably render the `aria-current` attribute in the DOM depending on the configuration or environment, which can lead to accessibility failures or broken tests.
**Action:** Use explicit attribute binding `[attr.aria-current]="link.isActive ? 'page' : null"` in conjunction with `routerLinkActive` exported to a template variable for more robust accessibility and testability.
