import '../../styles/geometric-accent.css';

type GeometricAccentProps = {
  shape: 'circle' | 'square' | 'triangle';
  tone?: 'red' | 'blue' | 'yellow' | 'ink';
  outline?: boolean;
  className?: string;
};

/** Decorative geometry; meaning always remains in adjacent text. */
export function GeometricAccent({ shape, tone = 'blue', outline = false, className = '' }: GeometricAccentProps) {
  return <span aria-hidden="true" className={`geometric-accent geometric-accent--${shape} geometric-accent--${tone}${outline ? ' geometric-accent--outline' : ''} ${className}`} />;
}
