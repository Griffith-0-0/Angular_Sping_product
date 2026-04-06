## 2026-04-06 - Initial Navigation and Testing setup
**Learning:** In this Angular standalone setup, navigating with `RouterLink` in unit tests requires `provideRouter` in the `TestBed` configuration to avoid missing provider errors for `ActivatedRoute`. Additionally, missing component files for defined routes must be created to achieve a successful build and test run.
**Action:** Always verify `TestBed` providers include `provideRouter(routes)` when testing components with routing, and ensure all route-referenced components exist in the filesystem.
