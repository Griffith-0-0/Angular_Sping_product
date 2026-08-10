## 2026-08-10 - Navigation State Button Contrast in Bootstrap
**Learning:** Combining both `btn-primary` and `btn-outline-primary` statically on the same button with dynamic overrides causes bad color contrast on inactive states. Using pure Angular class bindings [class.btn-primary]="isActive" [class.btn-outline-primary]="!isActive" guarantees a high-contrast theme-compliant accessible state.
**Action:** Always swap button states dynamically via separate Angular class bindings rather than relying on standard class attribute overrides.
