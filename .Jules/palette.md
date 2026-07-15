## 2026-07-15 - [Component Separation for Build Fixes]
**Learning:** Inlining stub components in route definitions to fix a broken build can be perceived as "destructive" or poor architecture by reviewers, even if it's the fastest way to get to a green build.
**Action:** Always recreate missing components in their intended file structure (e.g., separate directories/files) to maintain project architecture and satisfy maintainability requirements.
