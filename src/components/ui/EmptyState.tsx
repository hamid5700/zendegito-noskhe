import { ReactNode } from 'react';
import { cn } from '../../design-system/utils';
import { tokens } from '../../design-system/tokens';
import { Motif } from './Motif';
import { motion } from 'motion/react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ title, description, icon, action, className }: EmptyStateProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative flex flex-col items-center justify-center text-center p-8 overflow-hidden", 
        tokens.radius.card, 
        tokens.surface.card, 
        tokens.elevation.subtle,
        "min-h-[280px]",
        className
      )}
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <Motif className="w-[150%] h-[150%] animate-[spin_120s_linear_infinite]" />
      </div>
      
      {icon && (
        <div className="w-16 h-16 rounded-full bg-surface-100 flex items-center justify-center mb-6 text-primary-400 relative z-10 shadow-sm border border-white">
          {icon}
        </div>
      )}
      
      <h3 className={cn(tokens.typography.h3, "mb-2 relative z-10")}>{title}</h3>
      <p className={cn(tokens.typography.bodySmall, "max-w-[260px] relative z-10 mb-6")}>{description}</p>
      
      {action && (
        <div className="relative z-10">
          {action}
        </div>
      )}
    </motion.div>
  );
}
