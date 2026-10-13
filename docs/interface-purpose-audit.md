# Interface purpose audit

## Simplified

- Selected Work has one semantic heading: `01 — SELECTED WORK`. Project numbering still identifies individual projects.
- Removed colored dots next to project and How I Work numbers. They encoded no status or category beyond information already present.
- Removed the yellow dot beside the Weimar signature and the short rules attached to Welcome and the hero principles. The structural hero baseline, red circle, blue square, and CTA remain.
- No rounded metadata pills were found: project disciplines and case-study tags already use plain editorial text.

## Retained intentionally

- NDA lock/label communicates access restrictions, including for keyboard/touch users.
- Project title links, experiment CTA, and full-size image links remain usable without custom cursors or hover.
- Experience row rules aid scanning; About portrait rules anchor its approved composition.
- Case-study Outcome boundary, hero geometry, and closing signature establish hierarchy and project identity.
- Gallery numbering/captions, testimonial controls, section navigation, and grid toggle have identifiable content or interaction roles.
- Custom cursor, project stack, prototype controls, and Deutschle teaser remain unchanged.

## Global mobile navigation

Below the existing 1280px desktop breakpoint, every page uses a compact header. Its native modal dialog is portaled to the document body, uses the browser top layer above sticky case-study navigation, fills 100dvh with opaque canvas, and traps focus through native modal behavior. Body position/scroll styles are saved and restored on close/unmount; the desktop breakpoint closes the modal. Escape and close return focus; links unlock before navigation. Large links use the existing H1 token, with 200ms entrance motion disabled by the global reduced-motion rule. No new visual tokens are introduced.
