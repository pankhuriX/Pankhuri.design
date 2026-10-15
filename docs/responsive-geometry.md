# Responsive hero and footer geometry

Scope: password-protected clone only. No case-study or password flow changes.

The hero uses one width-driven `.hero-geometry` artboard. Its ratio is 1/.92 above 768px and 1/.82 on phones; its maximum width is four existing 128px spacing tokens. All shapes and structural rules use percentages of that artboard. The red circle and black quarter keep square bounds. The grid has three columns at 1280px, two from 769px, and natural stacked flow through 768px. The illustration remains in document flow, with no viewport-height sizing, overflow masking, or fixed hero height.

The heading's container-relative clamp (40px to the existing 72px display maximum, 17cqi) keeps the longest word within its grid column without colliding with the artboard. These bounds are existing H1/display values; the container-relative interpolation is intentional for this layout. All gaps and outer spacing use existing tokens.

Removed competing historical geometry media queries, individual shape transforms, entry scaling, idle drift, yellow-bar hover scaling, and pointer movement of the bottom structural rule. Fine-pointer motion is now a single artboard translation of at most 4px per axis, paused with the existing control, disabled under reduced motion. Shapes never resize during scroll. Reduced-motion rules remove geometry transforms/transitions without changing layout positions. Live OS reduced-motion emulation was not available; this path was reviewed in CSS.

Removed the obsolete grid-row:5 assignment from the bottom controls, eliminating empty implicit rows. Show Grid, signature, scroll link, and pause control remain.

Footer uses one flex-row geometry mark, 24–32px clamped shapes with token gaps; desktop remains two columns, mobile one. Shapes remain static: no rotation, scaling, or continuous animation.

## Browser validation

Manually resized and inspected at 1600×1000, 1440×900, 1280×800, 1180×820, 1024×1366, 900×1200, 768×1024, 430×932, 414×896, 390×844, and 375×812; additional 800×1000 and 1200×900 intermediate checks. Compared the captured hero views side-by-side. All tested widths: no horizontal page overflow, no headline/artwork or copy/artwork collision, and circle aspect ratio exactly 1. At all eleven requested sizes, scrolling to the footer left yellow width/height unchanged. Footer stacks correctly and its three shapes retain equal dimensions. Runtime error log empty. Production build passes.
