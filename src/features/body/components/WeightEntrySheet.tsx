import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useBodyStore } from '../store';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { Button } from '../../../components/ui/Button';

export function WeightEntrySheet({ 
  isOpen, 
  onClose,
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const { entries, addEntry } = useBodyStore();
  const latestWeight = entries.length > 0 ? entries[0].weight : 70;
  
  const [weight, setWeight] = useState<string>(latestWeight.toString());
  
  const handleSave = () => {
    const num = parseFloat(weight);
    if (!isNaN(num) && num > 0) {
      addEntry({
        weight: num,
        unit: 'kg',
        date: new Date().toISOString()
      });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary-900/40 z-40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 bg-surface-50 rounded-t-[2rem] z-50 flex flex-col overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-4 flex items-center justify-between border-b border-surface-200/50 bg-white">
              <h2 className={cn(tokens.typography.h3, "text-primary-900")}>
                ثبت وزن
              </h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-surface-100 flex items-center justify-center text-primary-900 hover:bg-surface-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 text-center flex flex-col items-center">
              <label className={cn(tokens.typography.label, "text-surface-500 mb-6 block")}>وزنت امروز چنده؟</label>
              
              <div className="flex items-baseline justify-center gap-2 mb-8">
                <input 
                  type="number"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-32 bg-transparent text-center border-b-2 border-primary-200 focus:border-primary-600 focus:outline-none transition-colors text-5xl font-bold text-primary-900 pb-2"
                  autoFocus
                />
                <span className={cn(tokens.typography.h3, "text-surface-400")}>کیلو</span>
              </div>
              
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full shadow-lg shadow-primary-900/20"
                onClick={handleSave}
              >
                ثبت
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
