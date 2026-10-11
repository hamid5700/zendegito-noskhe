import { useMovementStore } from '../store';
import { Card } from '../../../components/ui/Card';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';

export function MovementWeeklyCard() {
  const { getWeeklyConsistency, getInsight } = useMovementStore();
  const weekly = getWeeklyConsistency().reverse(); // Show oldest to newest (left to right conceptually, or right to left for RTL)
  const insight = getInsight();

  // In RTL, we might want to map normally so Saturday is on the right, Friday on the left.
  // The 'week' array generated is 6 days ago -> today.

  return (
    <div className="mt-8">
      <Card padding="large" className="bg-white border border-surface-200/50 shadow-sm">
        <h3 className={cn(tokens.typography.h3, "text-primary-900 mb-6")}>استمرار این هفته</h3>
        
        <div className="flex justify-between items-end mb-6 px-1">
          {weekly.map((day, idx) => {
            const dateObj = new Date(day.date);
            const dayName = new Intl.DateTimeFormat('fa-IR', { weekday: 'narrow' }).format(dateObj);
            const count = day.entries.length;
            
            return (
              <div key={day.date} className="flex flex-col items-center gap-2">
                <div className="flex flex-col-reverse items-center justify-start h-16 gap-1">
                  {count > 0 ? (
                    Array.from({ length: Math.min(count, 3) }).map((_, i) => (
                      <div key={i} className="w-4 h-4 rounded-full bg-accent-green" />
                    ))
                  ) : (
                    <div className="w-4 h-1 rounded-full bg-surface-200" />
                  )}
                </div>
                <span className={cn(tokens.typography.caption, "text-surface-400")}>{dayName}</span>
              </div>
            );
          })}
        </div>

        <div className="bg-surface-50 rounded-xl p-4 border border-surface-100">
          <p className={cn(tokens.typography.body, "text-primary-800 font-medium leading-relaxed")}>
            {insight}
          </p>
        </div>
      </Card>
    </div>
  );
}
