## 2026-05-26 - Handling Broken Application State
**Learning:** When the initial state of the application is broken (missing referenced components), it is essential to first restore a working state by creating placeholder components and fixing the routing/tests before applying UX enhancements. This ensures that verification tools (like Playwright) and unit tests can run successfully.
**Action:** Always verify the application builds and tests pass before starting UX work; if not, prioritize fixing the environment as a first step.
