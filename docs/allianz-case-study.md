# Allianz Design System case study

Route: `/work/allianz-design-system`. Source: the user’s Allianz brief supplied on 2026-10-11 and existing exports in `public/images/allianz/`.

The homepage remains unchanged. The Allianz route and assets use the shared password protection described in `case-study-access.md`. No deployment or publication was performed.

## Evidence mapping

- `Frame 15.png`: pattern variety immediately after the five onboarding intents.
- `Onboarding 1.png`: comparison of proposed patterns, available components, and a practical alternative beside the A1/NDBX trade-off, following page 9 of the supplied Allianz PDF.
- `Onboarding popover.mp4`: final onboarding visual after the trade-off and comparison, following the pragmatic implementation on PDF page 10. The recording demonstrates component configuration in Figma.
- `Welcome 1.png`: full-width image for optional onboarding and user control, aligned with the other chapter media.
- `Example 1.png`: enterprise context alongside the A1/NDBX trade-off.
- `specs 1.png`: spacing/hierarchy specification directly after the indentation logic, before the final table.
- `GrandChild_3 1.png`: primary full-width hierarchical table visual.
- `Group 83.png`: reusable component evidence at the same full media width and left alignment as the preceding table image.
- `Documentation.mp4`: dominant evidence under “From interface solution to documented system pattern.” Its recorded single-level expansion support is distinguished from deeper hierarchy requirements.
- `onboarding-poster.jpg` and `documentation-poster.jpg`: generated from actual recording frames, not invented imagery.

`Group 82 1.png` is omitted because its examples duplicate the retained evidence. `Onboarding 1.png` is retained for its distinct implementation comparison, not treated as a duplicate pattern gallery. Original assets remain intact. Images retain natural proportions, descriptive alt text, lazy loading, and full-size links. Low-resolution Welcome/Example exports are supporting evidence; dense specification details can be opened at full size.

Both videos use native controls, muted inline playback, actual posters, and viewport/document-visibility pausing. Reduced motion disables automatic playback while allowing manual playback. The optional `playbackGroup` on shared CaseVideo prevents simultaneous Allianz playback without changing other pages. Documentation plays once rather than looping.

## System and narrative

Reuses PageShell, PageContainer, CaseChapter, CaseNavigation, and CaseImage. One case study contains onboarding and hierarchical tables. The A1/NDBX trade-off remains explicit. The indentation diagram is a semantic specification list, not fabricated application UI; spacing derives from the existing 24px token. Lists reflow vertically below 768px. Story-unit spacing is 160px above 768px and 96px below.

Project accent `#003781` was sampled from the supplied Frame 15 export and scoped to `.allianz-case`, following the existing case-specific accent pattern. Global tokens are unchanged. Hero uses the established geometry; extra closing geometry is suppressed so the outcome sequence anchors the ending.

Adoption is attributed to designers working on the upcoming design system, as specified in the brief. No formal usage data, post-adoption user feedback, rollout scale, team count, measured impact, dates, quotes, or leadership claims are invented.

## Validation

Production build and all 14 regression tests pass, including reduced-motion and coordinated playback tests. Live browser checks at 390px, 430px, 768px, and 1280px show no horizontal overflow, readable headings, and full-width video evidence. Scrolling from the onboarding recording to documentation pauses the first and plays the second. Supporting media uses 75% width above 768px and full width below; video aspect ratios preserve the recordings without cropping. Desktop runtime logs contain no errors; both recordings load successfully. Reduced-motion behavior is covered by the component regression test, not browser OS emulation.
