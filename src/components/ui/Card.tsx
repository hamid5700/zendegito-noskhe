import { ReactNode } from 'react';
import { cn } from '../../design-system/utils';
import { tokens } from '../../design-system/tokens';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'subtle';
  padding?: 'none' | 'default' | 'large';
}

export function Card({ children, className, variant = 'default', padding = 'default' }: CardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300",
        tokens.radius.card,
        variant === 'default' && tokens.surface.card,
        variant === 'elevated' && cn("bg-white border border-surface-100", tokens.elevation.card),
        variant === 'subtle' && "bg-surface-100/50 border border-transparent",
        padding === 'default' && tokens.spacing.cardPadding,
        padding === 'large' && "p-8 sm:p-10",
        className
      )}
    >
      {children}
    </div>
  );
}
