import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Meal, FoodLogEntry, MealType, DailyNutritionSummary } from './models';

interface NutritionState {
  mealsByDate: Record<string, Meal[]>;
  addFoodLog: (date: string, mealType: MealType, entry: FoodLogEntry) => void;
  removeFoodLog: (date: string, mealType: MealType, entryId: string) => void;
  getDailySummary: (date: string) => DailyNutritionSummary;
  getRecentFoodIds: () => string[];
}

const DEFAULT_MEALS: MealType[] = ['breakfast', 'snack_morning', 'lunch', 'snack_afternoon', 'dinner', 'other'];

export const useNutritionStore = create<NutritionState>()(
  persist(
    (set, get) => ({
  mealsByDate: {},
  
  addFoodLog: (date, mealType, entry) => set((state) => {
    const todayMeals = state.mealsByDate[date] || [];
    let mealIndex = todayMeals.findIndex(m => m.type === mealType);
    
    let newMeals = [...todayMeals];
    
    if (mealIndex === -1) {
      // Create new meal
      newMeals.push({
        id: `${date}_${mealType}`,
        date,
        type: mealType,
        entries: [entry],
        totalNutrition: { ...entry.nutrition }
      });
    } else {
      // Update existing meal
      const meal = newMeals[mealIndex];
      const updatedEntries = [...meal.entries, entry];
      
      newMeals[mealIndex] = {
        ...meal,
        entries: updatedEntries,
        totalNutrition: {
          calories: meal.totalNutrition.calories + entry.nutrition.calories,
          protein: meal.totalNutrition.protein + entry.nutrition.protein,
          carbs: meal.totalNutrition.carbs + entry.nutrition.carbs,
          fat: meal.totalNutrition.fat + entry.nutrition.fat,
        }
      };
    }
    
    return {
      mealsByDate: {
        ...state.mealsByDate,
        [date]: newMeals
      }
    };
  }),
  
  removeFoodLog: (date, mealType, entryId) => set((state) => {
    const todayMeals = state.mealsByDate[date] || [];
    const mealIndex = todayMeals.findIndex(m => m.type === mealType);
    
    if (mealIndex === -1) return state;
    
    const meal = todayMeals[mealIndex];
    const entryToRemove = meal.entries.find(e => e.id === entryId);
    
    if (!entryToRemove) return state;
    
    const updatedEntries = meal.entries.filter(e => e.id !== entryId);
    let newMeals = [...todayMeals];
    
    if (updatedEntries.length === 0) {
      newMeals.splice(mealIndex, 1);
    } else {
      newMeals[mealIndex] = {
        ...meal,
        entries: updatedEntries,
        totalNutrition: {
          calories: meal.totalNutrition.calories - entryToRemove.nutrition.calories,
          protein: meal.totalNutrition.protein - entryToRemove.nutrition.protein,
          carbs: meal.totalNutrition.carbs - entryToRemove.nutrition.carbs,
          fat: meal.totalNutrition.fat - entryToRemove.nutrition.fat,
        }
      };
    }
    
    return {
      mealsByDate: {
        ...state.mealsByDate,
        [date]: newMeals
      }
    };
  }),
  
  getDailySummary: (date) => {
    const state = get();
    const meals = state.mealsByDate[date] || [];
    
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    
    meals.forEach(m => {
      totalCalories += m.totalNutrition.calories;
      totalProtein += m.totalNutrition.protein;
      totalCarbs += m.totalNutrition.carbs;
      totalFat += m.totalNutrition.fat;
    });
    
    return {
      date,
      totalCalories,
      totalProtein,
      totalCarbs,
      totalFat,
      meals
    };
  },
  
  getRecentFoodIds: () => {
    const state = get();
    const allEntries = Object.values(state.mealsByDate)
      .flat()
      .flatMap(meal => meal.entries)
      .sort((a, b) => new Date(b.loggedAt).getTime() - new Date(a.loggedAt).getTime());
      
    // Get unique food IDs
    const uniqueIds = Array.from(new Set(allEntries.map(e => e.foodId)));
    return uniqueIds.slice(0, 5); // Return top 5 most recent
  }
    }),
    { name: 'zendegito-nutrition-storage' }
  )
);
