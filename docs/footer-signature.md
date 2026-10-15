# Footer signature

The shared footer uses the existing spacing, typography, and color tokens. Its mark
scales from 16–24px on narrow screens to 24–32px on larger screens using spacing
tokens. The square, circle, and triangle identify the portfolio; they are decorative
and hidden from accessibility APIs.

`--footer-motion-duration: 9s` is a scoped motion exception for the requested slow
signature treatment. It loops while the mark is in view: the square
moves horizontally by `--space-1`, the triangle vertically by `--space-1`, and both
return to rest. The circle stays static. Reduced motion disables the animation entirely. All three shapes share the same size and alignment.

Contact links retain normal link semantics, a minimum touch target, and a light
focus outline on the dark background.
