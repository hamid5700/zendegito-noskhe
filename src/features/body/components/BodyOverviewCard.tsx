import { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { useBodyStore } from '../store';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { ArrowDown, ArrowUp, Minus, Activity } from 'lucide-react';
import { BodyTrendChart } from './BodyTrendChart';
import { Motif } from '../../../components/ui/Motif';

export function BodyOverviewCard() {
  const { entries, getTrend } = useBodyStore();
  const [period, setPeriod] = useState<7 | 30 | 90>(30);
  
  const currentWeight = entries.length > 0 ? entries[0].weight : null;
  const trend = getTrend(period);

  return (
    <Card className="relative overflow-hidden group" padding="large">
      <div className="absolute top-0 left-0 w-[150%] h-[150%] -translate-y-1/4 -translate-x-1/4 opacity-[0.02] text-primary-900 pointer-events-none transition-transform duration-1000 group-hover:rotate-3 group-hover:scale-105">
        <Motif />
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className={cn(tokens.typography.label, "text-surface-500 mb-1 block")}>وزن امروز</span>
            <div className="flex items-baseline gap-1">
              <span className={cn(tokens.typography.display, "text-primary-900")}>
                {currentWeight ? currentWeight.toLocaleString('fa-IR') : '--'}
              </span>
              <span className={cn(tokens.typography.body, "text-surface-400")}>کیلو</span>
            </div>
          </div>
          
          <div className="flex bg-surface-100 rounded-full p-1">
            <button 
              onClick={() => setPeriod(7)}
              className={cn("px-3 py-1 rounded-full text-xs font-bold transition-colors", period === 7 ? "bg-white text-primary-900 shadow-sm" : "text-surface-400 hover:text-primary-600")}
            >
              ۷ روز
            </button>
            <button 
              onClick={() => setPeriod(30)}
              className={cn("px-3 py-1 rounded-full text-xs font-bold transition-colors", period === 30 ? "bg-white text-primary-900 shadow-sm" : "text-surface-400 hover:text-primary-600")}
            >
              ۳۰ روز
            </button>
            <button 
              onClick={() => setPeriod(90)}
              className={cn("px-3 py-1 rounded-full text-xs font-bold transition-colors", period === 90 ? "bg-white text-primary-900 shadow-sm" : "text-surface-400 hover:text-primary-600")}
            >
              ۹۰ روز
            </button>
          </div>
        </div>

        {trend.direction !== 'insufficient_data' && (
          <div className="flex items-center gap-2 mb-2">
            <div className={cn(
              "flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold",
              trend.direction === 'down' ? "bg-emerald-50 text-emerald-700" :
              trend.direction === 'up' ? "bg-amber-50 text-amber-700" :
              "bg-surface-100 text-surface-500"
            )}>
              {trend.direction === 'down' ? <ArrowDown size={14} /> : trend.direction === 'up' ? <ArrowUp size={14} /> : <Minus size={14} />}
              <span>{Math.abs(trend.change || 0).toLocaleString('fa-IR')} کیلو</span>
            </div>
            <span className={cn(tokens.typography.caption, "text-surface-400")}>
              در {period.toLocaleString('fa-IR')} روز گذشته
            </span>
          </div>
        )}

        <BodyTrendChart periodDays={period} />
      </div>
    </Card>
  );
}
