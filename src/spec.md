# Specification

## Summary
**Goal:** Show two uploaded “surprise” photos in the unlocked birthday content after the secret name (“minu”) is entered and Unlock is clicked.

**Planned changes:**
- Add `photo_2026-02-06_14-51-36.jpg` and `photo_2026-02-06_14-51-40.jpg` as frontend static assets and reference them directly from the React app (no backend fetch).
- In the unlocked viewState, add a dedicated “surprise” photo reveal section that displays both photos with responsive layout (stacked on mobile, side-by-side on larger screens) and styling consistent with the romantic theme (rounded corners, subtle shadow/glow).
- Add a gentle entrance animation for the surprise photo section on unlock (e.g., fade/slide/expand) to avoid jarring layout shifts.
- Replace or relocate the existing placeholder image (`/assets/generated/minu-photo-placeholder.dim_1200x800.png`) so the two uploaded photos are clearly included in the unlocked content.

**User-visible outcome:** After entering “minu” and unlocking the birthday content, the user sees a smoothly-animated surprise section revealing the two uploaded photos; the photos are not visible before unlocking.
