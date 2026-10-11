const fs = require('fs');

const content = `import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Plus } from 'lucide-react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { tokens } from '../../../design-system/tokens';
import { cn } from '../../../design-system/utils';
import { Food, Portion, MealType } from '../models';
import { DEMO_FOOD_DB, searchFoods, calculateNutrition } from '../seed-data';
import { useNutritionStore } from '../store';
import { getLocalTodayDateString } from '../../../utils/date';
import { MealRecommendationService } from '../MealRecommendationService';

interface FoodSearchSheetProps {
  isOpen: boolean;
  onClose: () => void;
  initialMealContext?: string;
  initialFoodId?: string;
}

export function FoodSearchSheet({ isOpen, onClose, initialMealContext, initialFoodId }: FoodSearchSheetProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Food[]>([]);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  
  // Form state
  const [amount, setAmount] = useState<number>(1);
  const [selectedPortion, setSelectedPortion] = useState<Portion | null>(null);
  const [mealType, setMealType] = useState<MealType>('other');
  
  const [isSuccess, setIsSuccess] = useState(false);

  const addFood = useNutritionStore(state => state.addFood);
  const mealsByDate = useNutritionStore(state => state.mealsByDate);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setIsSuccess(false);
      
      const hour = new Date().getHours();
      const inferredMealType = initialMealContext || MealRecommendationService.determineMealContext(hour);
      setMealType(inferredMealType as MealType);
      
      if (initialFoodId) {
        const food = DEMO_FOOD_DB.find(f => f.id === initialFoodId);
        if (food) {
          handleSelectFood(food);
        } else {
          setSelectedFood(null);
        }
      } else {
        setSelectedFood(null);
      }
    }
  }, [isOpen, initialMealContext, initialFoodId]);

  useEffect(() => {
    if (query.trim()) {
      setResults(searchFoods(query));
    } else {
      setResults([]);
    }
  }, [query]);

  // Extract recent and frequent foods across all history
  const allLogs = Object.values(mealsByDate).flatMap(m => m.entries);
  const frequencyMap = allLogs.reduce((acc, log) => {
    acc[log.foodId] = (acc[log.foodId] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const frequentFoodIds = Object.keys(frequencyMap).sort((a, b) => frequencyMap[b] - frequencyMap[a]).slice(0, 6);
  const frequentFoods = frequentFoodIds.map(id => DEMO_FOOD_DB.find(f => f.id === id)).filter(Boolean) as Food[];

  // Quick categories
  const categories = [
    { id: 'meal', label: 'غذاها', icon: '🍲' },
    { id: 'protein', label: 'پروتئین', icon: '🥚' },
    { id: 'carb', label: 'نان و برنج', icon: '🍞' },
    { id: 'vegetable', label: 'سبزیجات', icon: '🥗' },
    { id: 'dairy', label: 'لبنیات', icon: '🥛' },
    { id: 'beverage', label: 'نوشیدنی', icon: '☕' },
  ];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayedFoods = query.trim() 
    ? results 
    : activeCategory 
      ? DEMO_FOOD_DB.filter(f => f.category === activeCategory)
      : frequentFoods.length > 0 ? frequentFoods : DEMO_FOOD_DB.slice(0, 6);

  const handleSelectFood = (food: Food) => {
    setSelectedFood(food);
    setSelectedPortion(food.defaultPortion);
    setAmount(food.defaultPortion.amount);
  };

  const handleSave = () => {
    if (!selectedFood || !selectedPortion) return;

    const date = getLocalTodayDateString();
    
    addFood(date, mealType, selectedFood, amount, selectedPortion.gramsPerUnit, selectedPortion.unit);
    
    setIsSuccess(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-surface-900/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 top-[10%] bg-surface-50 rounded-t-[32px] z-50 flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4 bg-surface-50">
              <h2 className={cn(tokens.typography.h2, "text-primary-900")}>
                {selectedFood ? 'مقدار رو مشخص کن' : 'ثبت غذا'}
              </h2>
              <button 
                onClick={selectedFood && !isSuccess ? () => setSelectedFood(null) : onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-200/50 text-surface-600 hover:bg-surface-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pb-safe">
              {!selectedFood ? (
                // Search View
                <div className="p-6 pt-2">
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-surface-400">
                      <Search size={20} />
                    </div>
                    <input
                      type="text"
                      placeholder="دنبال چی می‌گردی؟..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-full bg-white border border-surface-200 rounded-2xl py-4 pr-12 pl-4 text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-300 font-medium shadow-sm transition-all placeholder:text-surface-400"
                    />
                    {query && (
                      <button 
                        onClick={() => setQuery('')}
                        className="absolute inset-y-0 left-4 flex items-center text-surface-400 hover:text-surface-600"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>

                  {!query && (
                    <div className="mb-6 overflow-x-auto no-scrollbar -mx-6 px-6 pb-2">
                      <div className="flex gap-2 w-max">
                        <button
                          onClick={() => setActiveCategory(null)}
                          className={cn(
                            "px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors",
                            activeCategory === null
                              ? "bg-primary-900 text-white"
                              : "bg-white border border-surface-200 text-surface-600"
                          )}
                        >
                          پرتکرارهای من
                        </button>
                        {categories.map(c => (
                          <button
                            key={c.id}
                            onClick={() => setActiveCategory(c.id)}
                            className={cn(
                              "px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors flex items-center gap-2",
                              activeCategory === c.id
                                ? "bg-primary-900 text-white"
                                : "bg-white border border-surface-200 text-surface-600"
                            )}
                          >
                            <span>{c.icon}</span>
                            {c.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    {displayedFoods.map(food => (
                      <div 
                        key={food.id}
                        onClick={() => handleSelectFood(food)}
                        className="bg-white p-4 rounded-2xl border border-surface-200/60 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary-300 active:scale-95 transition-all shadow-sm"
                      >
                        <span className="text-4xl mb-3 drop-shadow-sm">{food.visualAsset || '🍽'}</span>
                        <span className={cn(tokens.typography.label, "font-bold text-primary-900 block mb-1 line-clamp-1 w-full")}>{food.name}</span>
                        <span className="text-[10px] text-surface-400 font-medium">
                          {food.nutritionPer100g.calories} کالری در ۱۰۰گ
                        </span>
                      </div>
                    ))}
                  </div>

                  {query && displayedFoods.length === 0 && (
                    <div className="text-center py-12 flex flex-col items-center">
                      <div className="w-16 h-16 bg-surface-100 rounded-full flex items-center justify-center text-2xl mb-4">🔍</div>
                      <p className={cn(tokens.typography.body, "text-surface-500 font-medium")}>موردی پیدا نکردم.</p>
                    </div>
                  )}
                </div>
              ) : (
                // Portion Entry View
                <div className="p-6 pt-2 flex flex-col h-full">
                  <div className="bg-white p-6 rounded-[28px] border border-surface-200/50 mb-6 flex flex-col items-center text-center shadow-sm">
                    <span className="text-6xl mb-4 drop-shadow-md">{selectedFood.visualAsset || '🍽'}</span>
                    <h3 className={cn(tokens.typography.h2, "text-primary-900 mb-4")}>{selectedFood.name}</h3>
                    
                    <div className="flex gap-6 w-full justify-center bg-surface-50 rounded-2xl py-3 border border-surface-100">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-primary-900">{calculateNutrition(selectedFood, amount, selectedPortion?.gramsPerUnit || 1).calories}</span>
                        <span className="text-xs font-bold text-surface-400 mt-0.5">کالری</span>
                      </div>
                      <div className="w-px h-10 bg-surface-200" />
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-primary-900">{calculateNutrition(selectedFood, amount, selectedPortion?.gramsPerUnit || 1).protein}</span>
                        <span className="text-xs font-bold text-surface-400 mt-0.5">پروتئین</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className={cn(tokens.typography.label, "text-surface-500 block mb-3 ml-2")}>برای کدوم وعده؟</label>
                    <select 
                      value={mealType}
                      onChange={(e) => setMealType(e.target.value as MealType)}
                      className="w-full bg-white border border-surface-200 rounded-2xl py-4 px-4 text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-300 font-bold shadow-sm"
                    >
                      <option value="breakfast">صبحانه</option>
                      <option value="snack_morning">میان‌وعده صبح</option>
                      <option value="lunch">ناهار</option>
                      <option value="snack_afternoon">عصرانه</option>
                      <option value="dinner">شام</option>
                      <option value="snack_night">آخر شب</option>
                      <option value="other">سایر</option>
                    </select>
                  </div>

                  <div className="flex gap-4 mb-auto">
                    <div className="flex-[1.2]">
                      <label className={cn(tokens.typography.label, "text-surface-500 block mb-3 ml-2")}>چقدر؟</label>
                      <input 
                        type="number"
                        min="0.1"
                        step="0.1"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value) || 0)}
                        className="w-full bg-white border border-surface-200 rounded-2xl py-4 px-4 text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-300 font-bold text-center text-xl shadow-sm mb-3"
                      />
                      <div className="flex gap-2 justify-center">
                        <button onClick={() => setAmount(0.5)} className="flex-1 py-2 bg-surface-100 text-surface-600 rounded-xl text-sm font-bold hover:bg-surface-200 transition-colors">نصف</button>
                        <button onClick={() => setAmount(1)} className="flex-1 py-2 bg-surface-100 text-surface-600 rounded-xl text-sm font-bold hover:bg-surface-200 transition-colors">۱</button>
                        <button onClick={() => setAmount(2)} className="flex-1 py-2 bg-surface-100 text-surface-600 rounded-xl text-sm font-bold hover:bg-surface-200 transition-colors">۲</button>
                      </div>
                    </div>
                    <div className="flex-[2] overflow-hidden flex flex-col">
                      <label className={cn(tokens.typography.label, "text-surface-500 block mb-3 ml-2")}>واحد</label>
                      <div className="flex flex-col gap-2 overflow-y-auto no-scrollbar max-h-[140px] px-1">
                        {selectedFood.availablePortions.map(p => (
                          <button
                            key={p.unit}
                            onClick={() => setSelectedPortion(p)}
                            className={cn(
                              "px-4 py-3 rounded-xl text-sm font-bold text-right transition-all border shadow-sm",
                              selectedPortion?.unit === p.unit
                                ? "bg-primary-900 text-surface-50 border-primary-900"
                                : "bg-white text-primary-700 border-surface-200 hover:border-primary-300"
                            )}
                          >
                            {p.unit}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-4">
                    <Button 
                      variant={isSuccess ? "outline" : "primary"} 
                      size="lg" 
                      className={cn(
                        "w-full transition-all text-lg font-bold py-4 rounded-2xl", 
                        !isSuccess && "shadow-xl shadow-primary-900/20", 
                        isSuccess && "bg-green-50 text-green-700 border-green-200"
                      )}
                      onClick={handleSave}
                      disabled={isSuccess}
                    >
                      {isSuccess ? "ثبت شد ✔" : 'ثبت وعده'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
`;
fs.writeFileSync('src/features/nutrition/components/FoodSearchSheet.tsx', content);
