## 2026-03-29 - Pre-PR Cleanup and Verification Artifacts
**Learning:** The `request_code_review` tool scans the entire working directory. If temporary logs, screenshots, verification scripts, or `pnpm-lock.yaml` are present, they will be included in the proposed patch, which can lead to large, noisy diffs and boundary violations.
**Action:** Always remove all temporary verification artifacts, log files, and undesired lockfile changes before calling `request_code_review` or `submit`.
