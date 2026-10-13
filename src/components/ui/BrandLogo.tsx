import '../../styles/brand-logo.css';

export function BrandLogo({ src, alt, size = 'compact' }: { src: string; alt: string; size?: 'compact' | 'preview' }) {
  return <span className={`brand-logo brand-logo--${size}`}><img src={src} alt={alt} loading="lazy" decoding="async" /></span>;
}
