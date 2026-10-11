import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { Button } from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

import { MovementSummaryCard } from '../../../features/movement/components/MovementSummaryCard';
import { MovementEntrySheet } from '../../../features/movement/components/MovementEntrySheet';
import { MovementWeeklyCard } from '../../../features/movement/components/MovementWeeklyCard';
import { MovementHistory } from '../../../features/movement/components/MovementHistory';

export default function MovementPage() {
  const [isEntryOpen, setIsEntryOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={cn("min-h-full flex flex-col pt-12 pb-24 relative", tokens.spacing.screenPadding)}>
      <header className="mb-8 flex justify-between items-start">
        <div>
          <button onClick={() => navigate(-1)} className="text-surface-400 hover:text-primary-600 mb-4 flex items-center gap-1 text-sm font-bold">
            ← بازگشت
          </button>
          <h1 className={cn(tokens.typography.display, "mb-2")}>حرکت من</h1>
          <p className={cn(tokens.typography.body, "text-surface-400")}>حرکت، برای بهتر زندگی کردنه.</p>
        </div>
      </header>
      
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex flex-col"
      >
        <MovementSummaryCard />
        <MovementWeeklyCard />
        <MovementHistory />
      </motion.div>

      {/* Floating Action Button */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-[90px] right-1/2 translate-x-1/2 z-30"
      >
        <Button 
          variant="primary" 
          size="lg"
          className="shadow-xl shadow-primary-900/25 rounded-full px-8 gap-2"
          onClick={() => setIsEntryOpen(true)}
        >
          <Plus size={18} strokeWidth={2.5} />
          <span>ثبت حرکت</span>
        </Button>
      </motion.div>

      <MovementEntrySheet 
        isOpen={isEntryOpen} 
        onClose={() => setIsEntryOpen(false)} 
      />
    </div>
  );
}
