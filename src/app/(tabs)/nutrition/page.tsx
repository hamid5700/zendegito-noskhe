import { FoodPreferencesSheet } from "../../../features/nutrition/components/FoodPreferencesSheet";
import { getLocalTodayDateString } from '../../../utils/date';
import { useState, useEffect } from 'react';
import { Apple, Plus } from 'lucide-react';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { EmptyState } from '../../../components/ui/EmptyState';
import { Button } from '../../../components/ui/Button';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { useNutritionStore } from '../../../features/nutrition/store';
import { MealType } from '../../../features/nutrition/models';
import { NutritionSummaryCard } from '../../../features/nutrition/components/NutritionSummaryCard';
import { MealGroup } from '../../../features/nutrition/components/MealGroup';
import { FoodSearchSheet } from '../../../features/nutrition/components/FoodSearchSheet';
import { MealRecommendationSheet } from '../../../features/nutrition/components/MealRecommendationSheet';

export default function NutritionPage() {
  const location = useLocation();
  // Use today's date as key
  const todayDate = getLocalTodayDateString();
  const { getDailySummary, mealsByDate } = useNutritionStore();
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState<MealType>('lunch');
  const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    if (location.state?.openRecommendations) {
      setIsRecommendationOpen(true);
      // Clear state so it doesn't reopen on refresh
      window.history.replaceState({}, document.title);
    } else if (location.state?.openSearch) {
      setIsSearchOpen(true);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const summary = getDailySummary(todayDate);
  const hasMeals = summary.meals.length > 0;
  
  const currentDateFormatted = new Intl.DateTimeFormat('fa-IR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date());

  const handleOpenSearch = (type: MealType = 'lunch') => {
    setSelectedMealType(type);
    setIsSearchOpen(true);
  };

  return (
    <div className={cn("min-h-full flex flex-col pt-12 pb-24 relative", tokens.spacing.screenPadding)}>
      
      <header className="mb-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsPreferencesOpen(true)}
            className="w-10 h-10 flex items-center justify-center bg-surface-100 rounded-full text-surface-600 hover:bg-surface-200 transition-colors"
            title="تنظیمات ترجیحات غذایی"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
        <div>
          <h2 className={cn(tokens.typography.caption, "text-accent-terracotta mb-1.5")}>{currentDateFormatted}</h2>
          <h1 className={cn(tokens.typography.display, "mb-2")}>غذای من</h1>
        </div>
      </header>

      {hasMeals ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex flex-col"
        >
          {/* Summary Card */}
          <div className="mb-10">
            <NutritionSummaryCard summary={summary} />
          </div>
          
          {/* What to eat next hook */}
          <div 
            onClick={() => setIsRecommendationOpen(true)}
            className="mb-8 bg-surface-100 rounded-2xl p-5 border border-surface-200/50 flex items-center justify-between cursor-pointer hover:bg-surface-200 transition-colors"
          >
            <div>
              <span className={cn(tokens.typography.h3, "text-primary-900 block mb-1")}>الان چی بخورم؟</span>
              <span className={cn(tokens.typography.label, "text-surface-500")}>پیشنهاد بر اساس الگوی امروزت</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center">
              <Apple size={16} />
            </div>
          </div>

          {/* Meals List */}
          <div className="space-y-2 mb-12">
            <MealGroup 
              mealType="breakfast" 
              meal={summary.meals.find(m => m.type === 'breakfast')} 
              onAddClick={handleOpenSearch} 
            />
            <MealGroup 
              mealType="snack_morning" 
              meal={summary.meals.find(m => m.type === 'snack_morning')} 
              onAddClick={handleOpenSearch} 
            />
            <MealGroup 
              mealType="lunch" 
              meal={summary.meals.find(m => m.type === 'lunch')} 
              onAddClick={handleOpenSearch} 
            />
            <MealGroup 
              mealType="snack_afternoon" 
              meal={summary.meals.find(m => m.type === 'snack_afternoon')} 
              onAddClick={handleOpenSearch} 
            />
            <MealGroup 
              mealType="dinner" 
              meal={summary.meals.find(m => m.type === 'dinner')} 
              onAddClick={handleOpenSearch} 
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col items-center justify-center -mt-12"
        >
          <EmptyState 
            icon={<Apple className="w-8 h-8" />}
            title="هنوز چیزی برای امروز ثبت نکردی."
            description="از چیزی که خوردی شروع کن."
            action={
              <div className="flex flex-col gap-3 mt-4 w-full max-w-[200px]">
                <Button 
                  variant="primary" 
                  className="w-full shadow-lg shadow-primary-900/20"
                  onClick={() => handleOpenSearch('breakfast')}
                >
                  ثبت غذا
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full text-primary-700 border-primary-200 hover:bg-primary-50"
                  onClick={() => setIsRecommendationOpen(true)}
                >
                  الان چی بخورم؟
                </Button>
              </div>
            }
          />
        </motion.div>
      )}

      {/* Floating Action Button (Only show if there are meals, otherwise EmptyState has the button) */}
      {hasMeals && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-[90px] right-1/2 translate-x-1/2 z-30"
        >
          <Button 
            variant="primary" 
            size="lg"
            className="shadow-xl shadow-primary-900/25 rounded-full px-8 gap-2"
            onClick={() => handleOpenSearch('lunch')}
          >
            <Plus size={18} strokeWidth={2.5} />
            <span>ثبت غذا</span>
          </Button>
        </motion.div>
      )}

      {/* Full-screen Food Search / Entry Sheet */}
      <FoodSearchSheet 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        initialMealContext={selectedMealType}
      />

      <FoodPreferencesSheet isOpen={isPreferencesOpen} onClose={() => setIsPreferencesOpen(false)} />
      <MealRecommendationSheet
        isOpen={isRecommendationOpen}
        onClose={() => setIsRecommendationOpen(false)}
        date={todayDate}
      />
    </div>
  );
}
