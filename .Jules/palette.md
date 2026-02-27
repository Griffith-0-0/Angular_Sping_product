## 2026-02-27 - [Product Add to Cart Feedback]
**Learning:** Immediate visual feedback (color change, icon/text change) and ARIA status updates for async-like actions (even if mocked) significantly reduce user uncertainty. Keeping the state change temporary (e.g., 2 seconds) ensures the UI remains clean while still being informative.
**Action:** Use Angular signals for lightweight UI state management and ensure ARIA labels reflect the current state of interactive elements.
