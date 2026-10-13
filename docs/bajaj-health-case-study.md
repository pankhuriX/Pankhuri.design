# Bajaj Health case study

Route: `/work/bajaj-health`. Linked from the existing Bajaj Health Selected Work title without changing its visual design. Next project links to `/#hyundai`, labeled EV Route Planning and Password protected / NDA.

## Sources and content

Primary: https://app.notion.com/p/2f19ba4aa096835ba08301bc9df1615d (fetched 2026-10-11).
Supporting references: `/Users/pankhuri/Desktop/Case study 3.pdf` (current single-page case study, visually inspected) and `/Users/pankhuri/Downloads/Bajaj Health.pdf` (22 pages; text inspected throughout, Home Screen page visually rendered). The PDF supports research methods; Notion governs the ten-month duration, sole hands-on designer role, responsibilities, Health Card narrative, qualitative findings, and four-of-five usability result. No interview participant count or unverified completion percentage is added. The page describes product design, never a redesign.

## Asset mapping

All paths use the existing filenames under `public/images/bajaj-health/`.

| Asset | Placement |
|---|---|
| Cover.png | Hero |
| Secondary research.png | Research |
| task flow 2.png | Research journey/task flow |
| Group 12951 3.png | Research, screen-level information architecture |
| Login.png | Decision 03.1, service introduction and familiar access methods |
| Onboarding.png | Decision 03.1, local-language guidance |
| Find the doctor.png | Decision 03.3, category search and doctor discovery |
| Doc info page.png | Decision 03.4, doctor transparency and time slots |
| FInal booking.png | Decision 03.5, reassurance before payment (capital I preserved) |
| ScreenRecording_10-06-2026 15.MP4 | Final experience walkthrough |
| prototype-poster.jpg | Actual frame extracted at 0.5 seconds from the source video |

Find the doctor.png contains discovery states, not the home action hierarchy; Decision 03.2 remains text-led rather than mislabeling or duplicating it. The current PDF adds two supporting artifacts: Login.png is placed with onboarding/access, rather than being mislabeled as the home screen; its concise caption explains the access choices. Historic research annotations remain embedded in the original image and are not adopted as project outcomes. Group 12951 3.png follows the task flow to show screen-level information architecture. No historic percentage is adopted into the narrative or outcome claims. No generated or cropped substitute UI is used. All displayed images have intrinsic dimensions, descriptive alt text, lazy loading except the cover, and full-size links.

## Implementation

Reuses CaseChapter, CaseImage, CaseVideo, and configurable CaseNavigation unchanged. The existing `.reckitt-case` base class is retained as the shared style/scrollspy hook; `.bajaj-case` supplies project-scoped overrides only. Purple `#5c2d90` is sampled from the supplied product screen, documented here as a local project accent; global tokens remain unchanged. Typography and spacing use existing tokens. Static hero and closing geometry inherit the case-study system.

The portrait recording keeps native controls, muted loop, playsInline, preload=none, visibility-aware playback, persistent manual pause, and reduced-motion manual playback. Its original source is unedited. A Bajaj-only CSS rule contains the full recording and caps its height to viewport minus header and token spacing, avoiding cropping or a tiny landscape-framed video. No eager video request is required at initial load.

Desktop has the sticky rail after hero/metadata, ending before the footer. Smaller viewports use the compact sticky selector. Outcomes use two columns on tablet/desktop and stack on mobile. Nonessential geometry hides below 1024px. No new motion is introduced.

## Validation

- Production build and all 14 existing tests pass, including reduced-motion video/manual-play and offscreen-pause tests.
- Browser checks: 1280, 1024, 768, 390px; no horizontal overflow. Mobile hero/outcome and desktop hero visually inspected.
- Prototype decoded to readyState 4 and was playing in its section; navigating to Outcome paused it.
- Mobile selector and desktop chapter navigation/scrollspy checked.
- No broken loaded images; no redesign/revamp/rework wording in main page content.

## Files

- src/pages/BajajHealthPage.tsx (new)
- src/styles/bajaj-case-study.css (new)
- src/App.tsx (route/title only)
- src/data/projects.ts (Bajaj link only)
- public/images/bajaj-health/prototype-poster.jpg (derived from original recording)
- docs/bajaj-health-case-study.md (new)

Other pages, shared components, global navigation, and global tokens were not edited in this task.

## Editorial refinement

Decision explanations are reduced to one short paragraph each, preserving guidance/skip, home-action hierarchy, discovery, transparency, and payment reassurance. The extra login paragraph is removed; Login.png is a secondary visual at 75% of article width, capped at the existing 640px reading width on tablet/desktop, and full width on mobile. Onboarding and the other decision assets retain the full available article width; exports are not cropped or altered. Embedded annotations cannot be removed without editing the supplied artifacts.

Bajaj-only decision spacing is 160px on tablet/desktop and 96px on mobile. Heading-to-copy remains 24px, copy-to-primary-media 48px, caption spacing 12px, and supporting-media separation 64px. The existing 1280px layout provides 832px of article width beside the unchanged rail; no out-of-grid expansion is introduced to force a 900px image. Prototype presentation/playback, research, outcome facts, and all shared styling remain unchanged.
