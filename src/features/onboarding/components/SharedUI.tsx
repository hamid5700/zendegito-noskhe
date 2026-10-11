import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../../../components/ui/Button';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';

export function StepContainer({ 
  children, 
  onNext, 
  onBack, 
  nextLabel = 'ادامه', 
  backLabel = 'بازگشت',
  canGoNext = true,
  hideNext = false,
  hideBack = false,
}: { 
  children: ReactNode;
  onNext?: () => void;
  onBack?: () => void;
  nextLabel?: string;
  backLabel?: string;
  canGoNext?: boolean;
  hideNext?: boolean;
  hideBack?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col flex-1 h-full w-full relative z-10"
    >
      <div className="flex-1 overflow-y-auto px-8 pt-12 pb-24">
        {children}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-surface-50 via-surface-50 to-transparent pt-12 flex items-center justify-between gap-4">
        {!hideBack ? (
          <Button variant="ghost" size="sm" onClick={onBack} className="text-surface-400">
            {backLabel}
          </Button>
        ) : <div />}

        {!hideNext && (
          <Button variant="primary" onClick={onNext} disabled={!canGoNext}>
            {nextLabel}
          </Button>
        )}
      </div>
    </motion.div>
  );
}

export function StepTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <h2 className={cn(tokens.typography.display, "mb-3")}>{title}</h2>
      {subtitle && <p className={cn(tokens.typography.bodyLarge, "text-surface-400 leading-relaxed")}>{subtitle}</p>}
    </div>
  );
}

export interface ChipProps { selected: boolean; onClick: () => void; children: React.ReactNode; key?: string | number; }
export function SelectionChip({ 
  selected, 
  onClick, 
  children 
}: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-5 py-3.5 rounded-2xl text-right transition-all duration-300 w-full font-medium text-sm border",
        selected 
          ? "bg-primary-900 text-surface-50 border-primary-900 shadow-md shadow-primary-900/10" 
          : "bg-white text-primary-800 border-surface-200/60 hover:border-primary-300 hover:bg-surface-50"
      )}
    >
      {children}
    </button>
  );
}

export function MultiSelectionChip({ 
  selected, 
  onClick, 
  children 
}: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2.5 rounded-2xl text-center transition-all duration-300 font-medium text-sm border inline-flex items-center justify-center",
        selected 
          ? "bg-primary-100 text-primary-900 border-primary-300" 
          : "bg-white text-primary-700 border-surface-200/60 hover:border-primary-200 hover:bg-surface-50"
      )}
    >
      {children}
    </button>
  );
}
