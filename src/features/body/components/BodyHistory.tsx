import { useBodyStore } from '../store';
import { Card } from '../../../components/ui/Card';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { Trash2 } from 'lucide-react';

export function BodyHistory() {
  const { entries, removeEntry } = useBodyStore();

  if (entries.length === 0) return null;

  return (
    <Card variant="subtle" className="overflow-hidden border border-surface-200/50" padding="none">
      <div className="divide-y divide-surface-100">
        {entries.slice(0, 5).map((entry) => {
            const dateObj = new Date(entry.date);
            const formattedDate = new Intl.DateTimeFormat('fa-IR', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            }).format(dateObj);
            
            return (
              <div key={entry.id} className="p-4 flex items-center justify-between group">
                <div>
                  <span className={cn(tokens.typography.body, "font-bold text-primary-900 block mb-1")}>
                    {entry.weight.toLocaleString('fa-IR')} <span className="text-sm font-normal text-surface-400">کیلو</span>
                  </span>
                  <span className={cn(tokens.typography.label, "text-surface-400")}>
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
  );
}
