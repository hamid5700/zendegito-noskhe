import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { tokens } from '../../../design-system/tokens';
import { cn } from '../../../design-system/utils';
import { MealRecommendationView } from './MealRecommendationView';
import { FoodSearchSheet } from './FoodSearchSheet';
import { MealType } from '../models';

interface MealRecommendationSheetProps {
  isOpen: boolean;
  onClose: () => void;
  date: string;
}

export function MealRecommendationSheet({ isOpen, onClose, date }: MealRecommendationSheetProps) {
  const [selectedFoodId, setSelectedFoodId] = useState<string | null>(null);
  const [selectedMealContext, setSelectedMealContext] = useState<MealType | undefined>();

  // If a food is selected, we pass it to the FoodSearchSheet and let it handle the actual adding
  // Actually, we could just open the FoodSearchSheet directly. Let's do that.
  // We need to slightly modify FoodSearchSheet or just use it as a nested sheet.
  // For now, if selectedFoodId is set, we open the Search Sheet and pre-fill it?
  // Our FoodSearchSheet doesn't support pre-filling from ID currently. We can just add the item directly, or open the detailed view.
  // Wait, let's look at FoodSearchSheet to see if it supports direct selection.

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-50 bg-surface-50 flex flex-col"
        >
          {/* Header */}
          <div className="pt-safe bg-surface-50">
            <div className="flex items-center justify-between p-4 border-b border-surface-200/50">
              <h2 className={cn(tokens.typography.h2, "text-primary-900")}>الان چی بخورم؟</h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-100 text-surface-600 hover:bg-surface-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 pb-32">
            <MealRecommendationView 
              onSelectFood={(foodId, mealContext) => {
                setSelectedFoodId(foodId);
                if (mealContext) setSelectedMealContext(mealContext as MealType);
              }} 
            />
          </div>

          {/* Nested FoodSearchSheet if a food is selected */}
          {selectedFoodId && (
            <FoodSearchSheet 
              isOpen={true}
              onClose={() => {
                setSelectedFoodId(null);
                setSelectedMealContext(undefined);
                onClose(); // Close both when done
              }}
              initialMealContext={selectedMealContext || "lunch"}
              initialFoodId={selectedFoodId}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
