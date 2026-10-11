import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useMovementStore } from '../store';
import { ActivityType, MovementIntensity, ACTIVITY_LABELS, INTENSITY_LABELS } from '../models';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { Button } from '../../../components/ui/Button';

export function MovementEntrySheet({ 
  isOpen, 
  onClose,
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const { addEntry } = useMovementStore();
  
  const [selectedType, setSelectedType] = useState<ActivityType>('walking');
  const [duration, setDuration] = useState<string>('30');
  const [intensity, setIntensity] = useState<MovementIntensity>('moderate');
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSave = () => {
    const durationNum = parseInt(duration, 10);
    if (!isNaN(durationNum) && durationNum > 0) {
      setIsSuccess(true);
      setTimeout(() => {
        addEntry({
          type: selectedType,
          durationMinutes: durationNum,
          intensity,
          date: new Date().toISOString()
        });
        // reset and close
        setDuration('30');
        setSelectedType('walking');
        setIntensity('moderate');
        setIsSuccess(false);
        onClose();
      }, 1200);
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
            className="fixed inset-x-0 bottom-0 bg-surface-50 rounded-t-[2rem] z-50 flex flex-col h-[85vh] shadow-2xl"
          >
            <div className="px-6 py-4 flex items-center justify-between border-b border-surface-200/50 bg-white shrink-0 rounded-t-[2rem]">
              <h2 className={cn(tokens.typography.h3, "text-primary-900")}>
                ثبت حرکت
              </h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-surface-100 flex items-center justify-center text-primary-900 hover:bg-surface-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 space-y-8">
              
              {/* Activity Type Selection */}
              <div>
                <label className={cn(tokens.typography.label, "text-surface-500 mb-3 block")}>چه نوع حرکتی داشتی؟</label>
                <div className="flex flex-wrap gap-2">
                  {(Object.entries(ACTIVITY_LABELS) as [ActivityType, string][]).map(([type, label]) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={cn(
                        "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors border",
                        selectedType === type 
                          ? "bg-primary-900 text-surface-50 border-primary-900 shadow-sm"
                          : "bg-white text-surface-600 border-surface-200 hover:border-primary-300"
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className={cn(tokens.typography.label, "text-surface-500 mb-3 block")}>چند دقیقه؟</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="flex-1 bg-white border border-surface-200 rounded-xl py-3 px-4 text-center text-primary-900 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-primary-300"
                  />
                  <div className="flex gap-2">
                    <button onClick={() => setDuration('15')} className="px-4 py-3 rounded-xl bg-surface-100 text-surface-600 font-bold hover:bg-surface-200 text-sm">۱۵</button>
                    <button onClick={() => setDuration('30')} className="px-4 py-3 rounded-xl bg-surface-100 text-surface-600 font-bold hover:bg-surface-200 text-sm">۳۰</button>
                    <button onClick={() => setDuration('45')} className="px-4 py-3 rounded-xl bg-surface-100 text-surface-600 font-bold hover:bg-surface-200 text-sm">۴۵</button>
                  </div>
                </div>
              </div>

              {/* Intensity */}
              <div>
                <label className={cn(tokens.typography.label, "text-surface-500 mb-3 block")}>شدت حرکت چطور بود؟</label>
                <div className="flex gap-2">
                  {(Object.entries(INTENSITY_LABELS) as [MovementIntensity, string][]).map(([level, label]) => (
                    <button
                      key={level}
                      onClick={() => setIntensity(level)}
                      className={cn(
                        "flex-1 py-3 rounded-xl text-sm font-bold transition-all border",
                        intensity === level 
                          ? "bg-accent-terracotta-light/30 text-accent-terracotta border-accent-terracotta/50 shadow-sm"
                          : "bg-white text-surface-400 border-surface-200 hover:border-surface-300"
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
            
            <div className="p-6 bg-white border-t border-surface-100 shrink-0">
              <Button 
                variant={isSuccess ? "outline" : "primary"} 
                size="lg" 
                className={cn("w-full transition-all", !isSuccess && "shadow-lg shadow-primary-900/20", isSuccess && "bg-green-50 text-green-700 border-green-200")}
                onClick={handleSave}
                disabled={isSuccess}
              >
                {isSuccess ? "ثبت شد. نسخه امروزت به‌روز شد." : "ثبت حرکت"}
              </Button>
            </div>
            
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
