import { useBodyStore } from '../store';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { Sparkles, Target } from 'lucide-react';

export function BodyInsightCard() {
  const { getInsight, goal, entries } = useBodyStore();
  const insight = getInsight();
  
  if (!insight) return null;

  const currentWeight = entries.length > 0 ? entries[0].weight : null;
  let progressPercentage = 0;
  let showGoal = false;

  if (goal && goal.type === 'weight' && goal.startWeight && goal.targetWeight && currentWeight) {
    showGoal = true;
    const totalDiff = Math.abs(goal.startWeight - goal.targetWeight);
    const currentDiff = Math.abs(goal.startWeight - currentWeight);
    if (totalDiff > 0) {
      progressPercentage = Math.min(100, Math.max(0, (currentDiff / totalDiff) * 100));
    }
  }

  return (
    <div className="mt-8 space-y-4">
      {/* Insight */}
      <div className="bg-surface-100 rounded-2xl p-5 border border-surface-200/50 flex items-start gap-4">
        <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center shrink-0 mt-0.5">
          <Sparkles size={16} />
        </div>
        <div>
          <span className={cn(tokens.typography.body, "text-primary-900 leading-relaxed font-medium")}>
            {insight.text}
          </span>
        </div>
      </div>

      {/* Goal */}
      {showGoal && (
        <div className="bg-white rounded-2xl p-5 border border-surface-200/50 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-accent-terracotta-light text-accent-terracotta flex items-center justify-center shrink-0">
              <Target size={16} />
            </div>
            <div>
              <span className={cn(tokens.typography.label, "text-surface-500 block")}>هدف من</span>
              <span className={cn(tokens.typography.body, "font-bold text-primary-900")}>
                {goal?.targetWeight?.toLocaleString('fa-IR')} کیلو
              </span>
            </div>
          </div>
          
          <div className="relative h-2 bg-surface-100 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 right-0 h-full bg-accent-terracotta rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className={cn(tokens.typography.caption, "text-surface-400")}>
              از {goal?.startWeight?.toLocaleString('fa-IR')} کیلو
            </span>
            <span className={cn(tokens.typography.caption, "font-bold text-accent-terracotta")}>
              {Math.round(progressPercentage).toLocaleString('fa-IR')}٪ مسیر
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
