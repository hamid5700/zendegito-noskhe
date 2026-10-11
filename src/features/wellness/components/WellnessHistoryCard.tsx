import { Card } from '../../../components/ui/Card';
import { useWellnessStore } from '../store';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { Motif } from '../../../components/ui/Motif';

export function WellnessHistoryCard() {
  const { getRecentEntries } = useWellnessStore();
  const recent = getRecentEntries(7); // Last 7 days

  if (recent.length === 0) return null;

  return (
    <div className="mt-8">
      <Card padding="large" className="bg-white border border-surface-200/50 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[150%] h-[150%] -translate-y-1/4 translate-x-1/4 opacity-[0.02] text-primary-900 pointer-events-none transition-transform duration-1000 group-hover:rotate-3 group-hover:scale-105">
          <Motif />
        </div>
        <div className="relative z-10">
          <h3 className={cn(tokens.typography.h3, "text-primary-900 mb-6")}>حال و انرژی من در این هفته</h3>
          
          <div className="flex justify-between items-end px-1">
            {recent.map((day) => {
              const dateObj = new Date(day.date);
              const dayName = new Intl.DateTimeFormat('fa-IR', { weekday: 'narrow' }).format(dateObj);
              const count = day.energy || 1; // Visual representation of energy
              
              return (
                <div key={day.id} className="flex flex-col items-center gap-2">
                  <div className="flex flex-col-reverse items-center justify-start h-20 gap-1">
                    {Array.from({ length: count }).map((_, i) => (
                      <div key={i} className="w-4 h-3 rounded-sm bg-accent-terracotta/80" />
                    ))}
                  </div>
                  <span className={cn(tokens.typography.caption, "text-surface-400")}>{dayName}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}
