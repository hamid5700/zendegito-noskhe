import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronDown, Plus, Utensils, Coffee, Music, Footprints, Repeat } from 'lucide-react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { tokens } from '../../../design-system/tokens';
import { cn } from '../../../design-system/utils';
import { MealRecommendation } from '../MealRecommendationService';
import { usePersonalContext } from '../../context/PersonalContextService';
import { MealRecommendationService } from '../MealRecommendationService';
import { FoodCatalogService } from '../FoodCatalogService';
import { FoodVisual } from '../visuals/FoodSheetRenderer';

interface MealRecommendationViewProps {
  onSelectFood: (foodId: string, mealContext?: string) => void;
}

export function MealRecommendationView({ onSelectFood }: MealRecommendationViewProps) {
  const context = usePersonalContext();
  const recommendations = MealRecommendationService.getRecommendations(context);

  if (recommendations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-4 h-full">
        <div className="w-16 h-16 rounded-full bg-surface-100 flex items-center justify-center text-surface-300 mb-6 border border-surface-200/50">
          <Sparkles size={28} />
        </div>
        <h3 className={cn(tokens.typography.h3, "text-primary-900 mb-2")}>فعلاً پیشنهادی ندارم</h3>
        <p className={cn(tokens.typography.body, "text-surface-500 max-w-[250px]")}>
          با توجه به چیزهایی که امروز ثبت کردی، الان زمان مناسبی برای وعده بعدی به نظر نمی‌رسه.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <p className={cn(tokens.typography.label, "text-surface-500 text-center mb-2 px-6 leading-relaxed")}>
        این پیشنهادها بر اساس شرایط الان تو (اگر با شرایطت سازگاره) طراحی شدن.
      </p>
      {recommendations.map((rec, index) => (
        <RecommendationItem 
          key={rec.id} 
          recommendation={rec} 
          index={index} 
          onSelect={() => rec.action?.payload?.foodId && onSelectFood(rec.action.payload.foodId, rec.mealContext)} 
          onSelectAlternative={() => rec.alternativeFoodId && onSelectFood(rec.alternativeFoodId, rec.mealContext)}
        />
      ))}
    </div>
  );
}

function RecommendationItem({ 
  recommendation, 
  index, 
  onSelect,
  onSelectAlternative
}: { 
  recommendation: MealRecommendation; 
  index: number; 
  onSelect: () => void; 
  onSelectAlternative: () => void;
  key?: string | number; 
}) {
  const [showReason, setShowReason] = useState(false);

  const mainFood = FoodCatalogService.getFoodById(recommendation.foodId);
  const sideFood = recommendation.sideFoodId ? FoodCatalogService.getFoodById(recommendation.sideFoodId) : null;
  const bevFood = recommendation.beverageId ? FoodCatalogService.getFoodById(recommendation.beverageId) : null;
  const altFood = recommendation.alternativeFoodId ? FoodCatalogService.getFoodById(recommendation.alternativeFoodId) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card variant="subtle" className="overflow-hidden border border-surface-200/50 transition-colors">
        <div className="p-5">
          <div className="flex justify-between items-start mb-6 border-b border-surface-200/50 pb-4">
            <div>
              <h4 className={cn(tokens.typography.h2, "text-primary-900 mb-1")}>نسخه وعده من</h4>
              <p className={cn(tokens.typography.label, "text-surface-500")}>
                {recommendation.description}
              </p>
            </div>
            <div className="bg-primary-50 px-3 py-1.5 rounded-xl text-xs font-bold text-primary-800 flex items-center gap-1">
              <Sparkles size={14} />
              پیشنهاد
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3 items-center">
              <FoodVisual foodId={mainFood?.id} size={42} rounded="xl" alt={recommendation.title} />
              <div>
                <span className="block text-xs font-bold text-surface-400 mb-0.5">غذای اصلی</span>
                <span className="block text-sm font-bold text-primary-900">{recommendation.title}</span>
              </div>
            </div>

            {sideFood && (
              <div className="flex gap-3 items-center">
                <FoodVisual foodId={sideFood.id} size={42} rounded="xl" alt={sideFood.name} />
                <div>
                  <span className="block text-xs font-bold text-surface-400 mb-0.5">همراه پیشنهادی</span>
                  <span className="block text-sm font-bold text-primary-900">{sideFood.name}</span>
                </div>
              </div>
            )}

            {bevFood && (
              <div className="flex gap-3 items-center">
                <FoodVisual foodId={bevFood.id} size={42} rounded="xl" alt={bevFood.name} />
                <div>
                  <span className="block text-xs font-bold text-surface-400 mb-0.5">نوشیدنی</span>
                  <span className="block text-sm font-bold text-primary-900">{bevFood.name}</span>
                </div>
              </div>
            )}
            
            {(recommendation.musicMood || recommendation.lifestyleTip) && (
              <div className="bg-surface-100/50 p-4 rounded-2xl mt-4 border border-surface-100 flex flex-col gap-3">
                {recommendation.musicMood && (
                  <div className="flex gap-2 items-center text-sm text-surface-600">
                    <Music size={16} className="text-primary-400" />
                    <span><strong className="text-primary-800">حال‌وهوای موسیقی:</strong> {recommendation.musicMood}</span>
                  </div>
                )}
                {recommendation.lifestyleTip && (
                  <div className="flex gap-2 items-center text-sm text-surface-600">
                    <Footprints size={16} className="text-primary-400" />
                    <span><strong className="text-primary-800">بعد از غذا:</strong> {recommendation.lifestyleTip}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          <AnimatePresence>
            {showReason && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden mb-4"
              >
                <div className="bg-primary-900 text-white rounded-xl p-4 flex gap-3 items-start shadow-xl">
                  <Sparkles size={18} className="text-accent-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-white/70 mb-1">چرا این پیشنهاد؟</span>
                    <p className="text-sm font-medium leading-relaxed">
                      {recommendation.reason}
                    </p>
                  </div>
                </div>
                
                {altFood && (
                  <div className="mt-3 bg-surface-100 rounded-xl p-4 border border-surface-200/50 flex justify-between items-center">
                    <div>
                      <span className="block text-xs font-bold text-surface-500 mb-0.5">اگر اینو نمی‌پسندی:</span>
                      <span className="block text-sm font-bold text-primary-900">{altFood.name}</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={onSelectAlternative} className="text-xs">
                       <Repeat size={14} className="ml-1"/>
                       جایگزین
                    </Button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between mt-2">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={onSelect}
              className="text-white font-bold shadow-md flex-1 ml-3"
            >
              <Plus size={18} className="ml-1" />
              انتخاب غذای اصلی
            </Button>
            
            {(recommendation.reason || altFood) && (
              <button 
                onClick={() => setShowReason(!showReason)}
                className="text-surface-500 hover:text-primary-700 flex flex-col items-center gap-1 text-[10px] font-bold transition-colors w-16"
              >
                <ChevronDown size={20} className={cn("transition-transform duration-300 bg-surface-100 rounded-full p-0.5", showReason ? "rotate-180" : "rotate-0")} />
                <span>دلایل</span>
              </button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
