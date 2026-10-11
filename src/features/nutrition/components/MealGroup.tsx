import { Meal, MealType } from '../models';
import { Card } from '../../../components/ui/Card';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { Plus, Trash2 } from 'lucide-react';
import { useNutritionStore } from '../store';
import { FoodVisual } from '../visuals/FoodSheetRenderer';

const MEAL_LABELS: Record<MealType, string> = {
  breakfast: 'صبحانه',
  snack_morning: 'میان‌وعده صبح',
  lunch: 'ناهار',
  snack_afternoon: 'عصرانه',
  dinner: 'شام',
  other: 'سایر'
};

export function MealGroup({ 
  mealType, 
  meal, 
  onAddClick 
}: { 
  mealType: MealType; 
  meal?: Meal; 
  onAddClick: (type: MealType) => void;
}) {
  const { removeFoodLog } = useNutritionStore();

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className={cn(tokens.typography.h3, "text-primary-900 flex items-center gap-2")}>
          {MEAL_LABELS[mealType]}
          {meal && meal.entries.length > 0 && (
            <span className="text-xs font-normal text-surface-400 bg-surface-100 px-2 py-0.5 rounded-full">
              {meal.totalNutrition.calories.toLocaleString('fa-IR')} کالری
            </span>
          )}
        </h3>
        
        <button 
          onClick={() => onAddClick(mealType)}
          className="text-primary-600 hover:text-primary-800 transition-colors flex items-center gap-1 bg-surface-100 hover:bg-surface-200 px-3 py-1.5 rounded-full text-xs font-bold"
        >
          <Plus size={14} strokeWidth={2.5} />
          <span>افزودن</span>
        </button>
      </div>

      {meal && meal.entries.length > 0 ? (
        <Card variant="subtle" className="overflow-hidden border border-surface-200/50" padding="none">
          <div className="divide-y divide-surface-100">
            {meal.entries.map((entry) => (
              <div key={entry.id} className="p-3.5 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <FoodVisual foodId={entry.foodId} size={40} rounded="xl" alt={entry.foodName} />
                  <div>
                    <span className={cn(tokens.typography.body, "font-bold text-primary-900 block mb-0.5")}>
                      {entry.foodName}
                    </span>
                    <span className={cn(tokens.typography.label, "text-surface-400")}>
                      {entry.portionAmount} {entry.portionUnit} • {entry.nutrition.calories} کالری
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => removeFoodLog(meal.date, mealType, entry.id)}
                  className="w-8 h-8 rounded-full text-surface-300 hover:text-accent-terracotta hover:bg-accent-terracotta-light/30 flex items-center justify-center transition-colors md:opacity-0 group-hover:opacity-100"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </Card>
      ) : (
        <div 
          onClick={() => onAddClick(mealType)}
          className="border border-dashed border-surface-200/80 rounded-2xl p-4 text-center cursor-pointer hover:bg-surface-100 hover:border-surface-300 transition-all group"
        >
          <span className={cn(tokens.typography.label, "text-surface-400 group-hover:text-primary-600 transition-colors")}>
            ثبت غذای این وعده...
          </span>
        </div>
      )}
    </div>
  );
}
