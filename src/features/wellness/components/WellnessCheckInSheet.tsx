import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';
import { useWellnessStore } from '../store';
import { EnergyLevel, MoodLevel, SleepQuality, WellnessNeed, ENERGY_LABELS, MOOD_LABELS, SLEEP_QUALITY_LABELS, WELLNESS_NEED_LABELS } from '../models';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { Button } from '../../../components/ui/Button';

export function WellnessCheckInSheet({ 
  isOpen, 
  onClose,
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const { getTodayEntry, addOrUpdateEntry } = useWellnessStore();
  
  const [energy, setEnergy] = useState<EnergyLevel | null>(null);
  const [mood, setMood] = useState<MoodLevel | null>(null);
  const [sleep, setSleep] = useState<SleepQuality | null>(null);
  const [need, setNeed] = useState<WellnessNeed | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const today = getTodayEntry();
      if (today) {
        setEnergy(today.energy || null);
        setMood(today.mood || null);
        setSleep(today.sleepQuality || null);
        setNeed(today.need || null);
      } else {
        setEnergy(null);
        setMood(null);
        setSleep(null);
        setNeed(null);
      }
    }
  }, [isOpen, getTodayEntry]);
  
  const handleSave = () => {
    setIsSuccess(true);
    setTimeout(() => {
    addOrUpdateEntry({
      date: new Date().toISOString(),
      ...(energy && { energy }),
      ...(mood && { mood }),
      ...(sleep && { sleepQuality: sleep }),
      ...(need && { need }),
    });
    onClose();
      setIsSuccess(false);
    }, 1200);
  };

  const renderButtons = <T extends string | number>(
    options: Record<T, string>,
    selectedValue: T | null,
    onSelect: (val: T) => void,
    keys: T[]
  ) => {
    return (
      <div className="flex flex-wrap gap-2">
        {keys.map((key) => (
          <button
            key={String(key)}
            onClick={() => onSelect(key)}
            className={cn(
              "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors border",
              selectedValue === key 
                ? "bg-primary-900 text-surface-50 border-primary-900 shadow-sm"
                : "bg-white text-surface-600 border-surface-200 hover:border-primary-300"
            )}
          >
            {options[key]}
          </button>
        ))}
      </div>
    );
  };

  const levels: EnergyLevel[] = [1, 2, 3, 4, 5];
  const needs = Object.keys(WELLNESS_NEED_LABELS) as WellnessNeed[];

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
            className="fixed inset-x-0 bottom-0 bg-surface-50 rounded-t-[2rem] z-50 flex flex-col max-h-[90vh] shadow-2xl"
          >
            <div className="px-6 py-4 flex items-center justify-between border-b border-surface-200/50 bg-white shrink-0 rounded-t-[2rem]">
              <h2 className={cn(tokens.typography.h3, "text-primary-900")}>
                حال من
              </h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-surface-100 flex items-center justify-center text-primary-900 hover:bg-surface-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 space-y-8">
              
              <div>
                <label className={cn(tokens.typography.label, "text-surface-500 mb-3 block")}>امروز انرژیت چطوره؟</label>
                {renderButtons(ENERGY_LABELS, energy, setEnergy, levels)}
              </div>

              <div>
                <label className={cn(tokens.typography.label, "text-surface-500 mb-3 block")}>امروز حالت چطوره؟</label>
                {renderButtons(MOOD_LABELS, mood, setMood, levels)}
              </div>

              <div>
                <label className={cn(tokens.typography.label, "text-surface-500 mb-3 block")}>دیشب چطور خوابیدی؟</label>
                {renderButtons(SLEEP_QUALITY_LABELS, sleep, setSleep, levels)}
              </div>

              <div>
                <label className={cn(tokens.typography.label, "text-surface-500 mb-3 block")}>امروز بیشتر به چی نیاز داری؟ (اختیاری)</label>
                {renderButtons(WELLNESS_NEED_LABELS, need, setNeed, needs)}
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
                {isSuccess ? "ثبت شد. نسخه امروزت به‌روز شد." : "ثبت"}
              </Button>
            </div>
            
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
