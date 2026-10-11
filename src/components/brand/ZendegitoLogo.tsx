import { useState } from 'react';
import { cn } from '../../design-system/utils';

interface ZendegitoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Official Mother Brand Logo: "زندگیتو"
 * - References canonical /brand/zendegito-logo.png
 * - Maintains original aspect ratio (never stretched or cropped)
 * - Preserves transparency
 * - Provides graceful typographic fallback if binary asset is not yet placed
 */
export function ZendegitoLogo({ className, size = 'md' }: ZendegitoLogoProps) {
  const [loadFailed, setLoadFailed] = useState(false);

  const sizeClasses = {
    sm: 'h-6 max-w-[120px]',
    md: 'h-8 max-w-[160px]',
    lg: 'h-11 max-w-[200px]',
  };

  if (!loadFailed) {
    return (
      <img
        src="/brand/zendegito-logo.png"
        alt="زندگیتو"
        onError={() => setLoadFailed(true)}
        className={cn(
          'w-auto object-contain transition-opacity duration-200',
          sizeClasses[size],
          className
        )}
      />
    );
  }

  // Graceful fallback for mother-brand typographic mark
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 select-none font-bold text-primary-900 tracking-tight',
        size === 'sm' && 'text-lg',
        size === 'md' && 'text-2xl',
        size === 'lg' && 'text-3xl',
        className
      )}
      dir="rtl"
    >
      <span className="text-primary-950 font-black">زندگیتو</span>
    </div>
  );
}
