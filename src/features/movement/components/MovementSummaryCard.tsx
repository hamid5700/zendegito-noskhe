import { Card } from '../../../components/ui/Card';
import { useMovementStore } from '../store';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { ACTIVITY_LABELS } from '../models';
import { Activity } from 'lucide-react';
import { Motif } from '../../../components/ui/Motif';

export function MovementSummaryCard() {
  const { getTodaySummary } = useMovementStore();
  const { totalMinutes, activitiesCount, uniqueTypes } = getTodaySummary();

  const isTodayEmpty = activitiesCount === 0;

  return (
    <Card className="relative overflow-hidden group" padding="large">
      <div className="absolute top-0 right-0 w-[150%] h-[150%] -translate-y-1/4 translate-x-1/4 opacity-[0.02] text-primary-900 pointer-events-none transition-transform duration-1000 group-hover:rotate-3 group-hover:scale-105">
        <Motif />
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-2">
          <span className={cn(tokens.typography.label, "text-surface-500")}>امروز</span>
          <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-700 flex items-center justify-center">
            <Activity size={16} />
          </div>
        </div>

        {isTodayEmpty ? (
          <div className="mt-4">
            <h3 className={cn(tokens.typography.h2, "text-primary-900 mb-2")}>امروز هنوز حرکتی نداشتی.</h3>
            <p className={cn(tokens.typography.body, "text-surface-400 max-w-[250px]")}>
              حرکت می‌تونه یک پیاده‌روی ساده یا حتی کارهای روزمره باشه.
            </p>
          </div>
        ) : (
          <div className="mt-4">
            <div className="flex items-baseline gap-1 mb-2">
              <span className={cn(tokens.typography.display, "text-primary-900")}>
                {totalMinutes.toLocaleString('fa-IR')}
              </span>
              <span className={cn(tokens.typography.body, "text-surface-400 font-medium")}>دقیقه حرکت</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {uniqueTypes.map(type => (
                <span 
                  key={type}
                  className="px-3 py-1 bg-surface-100 text-surface-600 rounded-lg text-xs font-bold"
                >
                  {ACTIVITY_LABELS[type as keyof typeof ACTIVITY_LABELS]}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
