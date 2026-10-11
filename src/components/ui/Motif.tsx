import { ReactNode } from 'react';
import { cn } from '../../design-system/utils';
import { tokens } from '../../design-system/tokens';
import { motion } from 'motion/react';

interface MotifProps {
  className?: string;
}

/**
 * Subtle Persian geometry motif (Shamseh / 8-point star intersection)
 * Used purely for decorative backgrounds.
 */
export function Motif({ className }: MotifProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current opacity-10", className)}
    >
      <path 
        d="M50 0L57.5 35L92.5 20L67.5 50L92.5 80L57.5 65L50 100L42.5 65L7.5 80L32.5 50L7.5 20L42.5 35L50 0Z" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinejoin="round"
      />
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
      <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}
