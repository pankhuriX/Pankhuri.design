# Portrait hero composition

The existing transparent `hero-portrait.png` is layered over the existing four-shape
artboard. The image is not edited. A local crop occupies the right 90% and lower
78% of the artboard; its 135%-wide image with a -20% inline offset crops the lower
torso, retaining the head and shoulders. These artwork coordinates are relative
to the artboard, not new page-spacing tokens. Shapes retain their proportions.

Desktop artwork begins one `--space-6` (24px) below the header. The global page
container, type scale, content, and mobile source order remain unchanged.

Existing fine-pointer and reduced-motion gates control translate3d-only movement:
portrait 2px per axis, circle 4px, blue 6px, yellow static, black 5px/4px. No idle
animation, scale animation, or animation of crop/geometry dimensions is used.

## Updated desktop reference — October 16

The 12:14 screenshot supersedes the earlier flattened Figma screenshot. At the
80rem breakpoint a 730 × 690 proportional artboard occupies 65.2% of the existing
1120px content grid, starting 20.6% from its left edge. All artwork coordinates
are percentages within that shared artboard; these are reference measurements,
not general spacing tokens. The red circle is 60.2% wide, the blue rectangle is
19% wide and 48.2% high, and the yellow bar spans 83.5%. The blue layer uses
85% opacity to retain the reference overlap with the red circle.

The portrait crop occupies the lower 58%, starting 28% across and spanning 56.5%.
The black quarter and portrait meet the closing divider. The 64px meta row shares
the artwork's bottom band, with its text and controls outside the portrait slot.
The 24px header gap, existing typography, page margins, and tablet/mobile layouts
remain unchanged. The yellow bar remains static and motion guards remain active.
