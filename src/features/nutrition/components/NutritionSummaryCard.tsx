import { DailyNutritionSummary } from '../models';
import { Card } from '../../../components/ui/Card';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { motion } from 'motion/react';

export function NutritionSummaryCard({ summary }: { summary: DailyNutritionSummary }) {
  // We emphasize protein, but show everything calmly without a "target" for now
  return (
    <Card className="p-6 relative overflow-hidden" padding="none">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-terracotta-light opacity-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <span className={cn(tokens.typography.label, "text-surface-500 mb-1")}>دریافتی امروز</span>
        <div className="flex items-baseline gap-1 mb-6">
          <span className={cn(tokens.typography.display, "text-primary-900")}>
            {summary.totalCalories.toLocaleString('fa-IR')}
          </span>
          <span className={cn(tokens.typography.bodySmall, "text-surface-400 font-medium")}>کالری</span>
        </div>

        <div className="flex justify-between w-full max-w-[280px] px-2 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-terracotta mb-2" />
            <span className={cn(tokens.typography.body, "font-bold text-primary-900")}>{Math.round(summary.totalProtein).toLocaleString('fa-IR')} <span className="text-xs font-normal text-surface-400">گرم</span></span>
            <span className={cn(tokens.typography.label, "text-surface-400 mt-0.5")}>پروتئین</span>
          </div>
          
          <div className="w-px h-8 bg-surface-200 mt-1" />

          <div className="flex flex-col items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-green mb-2" />
            <span className={cn(tokens.typography.body, "font-bold text-primary-900")}>{Math.round(summary.totalCarbs).toLocaleString('fa-IR')} <span className="text-xs font-normal text-surface-400">گرم</span></span>
            <span className={cn(tokens.typography.label, "text-surface-400 mt-0.5")}>کربوهیدرات</span>
          </div>

          <div className="w-px h-8 bg-surface-200 mt-1" />

          <div className="flex flex-col items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-amber mb-2" />
            <span className={cn(tokens.typography.body, "font-bold text-primary-900")}>{Math.round(summary.totalFat).toLocaleString('fa-IR')} <span className="text-xs font-normal text-surface-400">گرم</span></span>
            <span className={cn(tokens.typography.label, "text-surface-400 mt-0.5")}>چربی</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
