import { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { useBodyStore } from '../store';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';

export function BodyTrendChart({ periodDays }: { periodDays: 7 | 30 | 90 }) {
  const { entries } = useBodyStore();
  
  const data = useMemo(() => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - periodDays);
    
    // Sort chronological for chart
    const filtered = entries
      .filter(e => new Date(e.date) >= cutoff)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      
    return filtered.map(e => ({
      date: new Intl.DateTimeFormat('fa-IR', { day: 'numeric', month: 'short' }).format(new Date(e.date)),
      weight: e.weight
    }));
  }, [entries, periodDays]);

  if (data.length < 2) {
    return (
      <div className="h-48 flex items-center justify-center border border-dashed border-surface-200/80 rounded-2xl">
        <p className={cn(tokens.typography.label, "text-surface-400")}>برای رسم نمودار به ثبت‌های بیشتری نیاز داریم.</p>
      </div>
    );
  }

  const minWeight = Math.min(...data.map(d => d.weight)) - 1;
  const maxWeight = Math.max(...data.map(d => d.weight)) + 1;

  return (
    <div className="h-48 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="date" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9CA3AF', fontSize: 10, fontFamily: 'Vazirmatn' }} 
            dy={10}
            minTickGap={20}
          />
          <YAxis 
            domain={[minWeight, maxWeight]} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9CA3AF', fontSize: 10, fontFamily: 'Vazirmatn' }} 
            dx={-10}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontFamily: 'Vazirmatn' }}
            itemStyle={{ color: '#1F2937', fontWeight: 'bold' }}
            formatter={(value: number) => [`${value} کیلو`, 'وزن']}
            labelStyle={{ color: '#6B7280', fontSize: '12px', marginBottom: '4px' }}
          />
          <Area 
            type="monotone" 
            dataKey="weight" 
            stroke="#4F46E5" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorWeight)" 
            animationDuration={1500}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
