# Hyundai case study

Route: `/work/hyundai`. Uses the existing protected case-study shell, nine chapters, sticky navigation/mobile selector, image enlargement, and footer. Sources: supplied Hyundai Presentation.pdf, user-authored brief, and actual image exports. No production rollout, measured improvements, or full-system ownership claims.

## Current asset mapping

| Asset | Placement and purpose |
| --- | --- |
| IMG_1457 1.png | Starting point: supporting CONNECT questionnaire. Kept with the lab study because it is not the EV benchmark observation sheet. |
| Group 1 1.png | Starting point: navigation exploration following the lab finding. |
| image 10.png | Why field research: contextual EV charging photograph beside the rationale. |
| Frame 1707487086.png | Benchmark: full-width 1,100 km cross-border route visual. |
| Frame 1707487087.png | Benchmark method: full-width standardized observation and SoC documentation. |
| image 9.png | Synthesis: large post-drive workshop image. |
| 01 As Is.png / 02 TO BE.png | Decision 01: route-overview comparison; charging-duration, battery, and availability information grouped by stop. |
| navi_poi_detail.png | Decision 02: contextual charging-location information before adding a stop. |
| 06 start guidance.png | Decision 03: full-width compact guidance panel with an explicit Add stop action and route context. |

Proposal copy describes visible UI and connects it to supplied findings. The new AS IS/TO BE files show route overviews, not the requested charging-provider settings screens. Do not relabel them as a settings comparison. Prototype values are not study results. Personal contribution and the user-specified May 2026 — 2026 timeline remain unchanged.

## Deliberately omitted

- AS is.png: distinct older charging-panel baseline, removed to avoid an additional comparison and keep three decisions maximum.
- Rectangle 346244174-1.png: blank grey image.
- Provider-settings proposal: no supplied screen clearly demonstrates that settings flow.

## Presentation and accessibility

Uncropped intrinsic-ratio images; large route/documentation/workshop and guidance visuals. Before/after pair is side-by-side from 1280px and stacked below. Context photo and charger-detail pair stack below 768px. Native enlargement retains keyboard activation, Escape dismissal, focus handling, and original-image links. No new interaction or motion.

After Reflection, the non-clickable More from Hyundai teaser uses the NDA-aware copy, existing heading tokens, and one blue structural border. Desktop separation is 160px and mobile 96px, composed from existing spacing tokens. No fake project links or disabled controls.

## Validation

Production build passes. At 1280, 1024, 768, and 390px there is no horizontal overflow. All ten displayed image assets load. Mobile comparisons and contextual photography use one column. Teaser has no links or buttons. Existing protected route and media handling are unchanged.

## Closing context refinement

After Reflection and before More from Hyundai, the unnumbered Behind the work section adds only two contextual images with user-supplied copy and captions:

- IMG_1702.JPG → simulator-context.jpg: orientation-normalized, optimized JPEG, 1500×2000. Desktop frame spans 9/12 of the article width with a 4:3 editorial crop; enlargement retains the full photograph.
- IMG_0521.heic → team-context.jpg: browser-compatible, optimized JPEG, 2000×1367. The source is a photographed team thank-you print, described accordingly in alt text. It spans 7/12 of the article width and aligns right. Original files are preserved.

The pair is sequential, separated by 96px, with 160px before the existing teaser on desktop. Both are full width below 768px; teaser gap remains 96px on mobile. No new navigation entry, findings, outcomes, or interaction. Reflection, outcome copy, teaser copy, and all earlier chapters are unchanged.

Production build passes. Desktop 1280px and mobile/tablet 768/390px checks confirm image loading and no overflow.
