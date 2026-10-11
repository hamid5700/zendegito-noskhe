import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Apple, Activity, Leaf, Sun, Moon, Sparkles, ChevronDown } from 'lucide-react';
import { Recommendation } from '../models';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { tokens } from '../../../design-system/tokens';
import { cn } from '../../../design-system/utils';

const CATEGORY_MAP: Record<Recommendation['category'], { icon: ReactNode, color: string, bg: string }> = {
  nutrition: { icon: <Apple size={20} />, color: 'text-emerald-700', bg: 'bg-emerald-50' },
  movement: { icon: <Activity size={20} />, color: 'text-orange-600', bg: 'bg-orange-50' },
  wellness: { icon: <Leaf size={20} />, color: 'text-teal-700', bg: 'bg-teal-50' },
  lifestyle: { icon: <Sun size={20} />, color: 'text-amber-600', bg: 'bg-amber-50' },
  sleep: { icon: <Moon size={20} />, color: 'text-indigo-600', bg: 'bg-indigo-50' },
};

export function RecommendationCard({ 
  recommendation, 
  index,
  onActionClick 
}: { 
  recommendation: Recommendation; 
  index: number;
  onActionClick?: (actionId: string) => void;
  key?: any;
}) {
  const [showReason, setShowReason] = useState(false);
  const config = CATEGORY_MAP[recommendation.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
    >
      <Card variant="subtle" className="overflow-hidden border border-surface-200/50">
        <div className="p-5">
          <div className="flex gap-4">
            <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center shrink-0", config.bg, config.color)}>
              {config.icon}
            </div>
            <div className="flex-1 min-w-0 pt-0.5">
              <h3 className={cn(tokens.typography.h3, "text-primary-900 mb-1.5")}>
                {recommendation.title}
              </h3>
              <p className={cn(tokens.typography.body, "text-surface-500 leading-relaxed")}>
                {recommendation.description}
              </p>
              
              <AnimatePresence>
                {showReason && recommendation.reason && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-surface-50 rounded-xl p-3.5 border border-surface-100 flex gap-2 items-start">
                      <Sparkles size={16} className="text-primary-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-bold text-primary-800 mb-0.5">چرا این پیشنهاد؟</span>
                        <p className={cn(tokens.typography.label, "text-surface-500 leading-relaxed")}>
                          {recommendation.reason}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-4 flex items-center justify-between">
                {recommendation.action ? (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary-600 font-bold px-0 h-8 hover:bg-transparent hover:text-primary-800"
                    onClick={() => onActionClick?.(recommendation.action!.actionId)}
                  >
                    {recommendation.action.label}
                  </Button>
                ) : (
                  <div />
                )}

                {recommendation.reason && (
                  <button 
                    onClick={() => setShowReason(!showReason)}
                    className="text-surface-400 hover:text-primary-600 flex items-center gap-1 text-xs font-medium transition-colors"
                  >
                    <span>چرا؟</span>
                    <ChevronDown size={14} className={cn("transition-transform duration-300", showReason ? "rotate-180" : "rotate-0")} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
