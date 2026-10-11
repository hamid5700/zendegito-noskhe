import { useMovementStore } from '../store';
import { ACTIVITY_LABELS, INTENSITY_LABELS } from '../models';
import { Card } from '../../../components/ui/Card';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { Trash2 } from 'lucide-react';

export function MovementHistory() {
  const { entries, removeEntry } = useMovementStore();

  if (entries.length === 0) return null;

  return (
    <div className="mt-8 mb-8">
      <h3 className={cn(tokens.typography.h3, "text-primary-900 mb-4 px-1")}>آخرین حرکت‌ها</h3>
      <Card variant="subtle" className="overflow-hidden border border-surface-200/50" padding="none">
        <div className="divide-y divide-surface-100">
          {entries.slice(0, 5).map((entry) => {
            const dateObj = new Date(entry.date);
            const formattedDate = new Intl.DateTimeFormat('fa-IR', { 
              weekday: 'long',
              day: 'numeric', 
              month: 'short', 
            }).format(dateObj);
            
            return (
              <div key={entry.id} className="p-4 flex items-center justify-between group">
                <div>
                  <span className={cn(tokens.typography.body, "font-bold text-primary-900 block mb-1")}>
                    {ACTIVITY_LABELS[entry.type]}
                  </span>
                  <span className={cn(tokens.typography.label, "text-surface-400 flex items-center gap-1.5")}>
                    {entry.durationMinutes} دقیقه
                    {entry.intensity && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-surface-300" />
                        {INTENSITY_LABELS[entry.intensity]}
                      </>
                    )}
                    <span className="w-1 h-1 rounded-full bg-surface-300" />
                    {formattedDate}
                  </span>
                </div>
                <button 
                  onClick={() => removeEntry(entry.id)}
                  className="w-8 h-8 rounded-full text-surface-300 hover:text-accent-terracotta hover:bg-accent-terracotta-light/30 flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
