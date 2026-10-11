export type MealType = 'breakfast' | 'snack_morning' | 'lunch' | 'snack_afternoon' | 'dinner' | 'other';

export interface Portion {
  amount: number;
  unit: 'گرم' | 'عدد' | 'لیوان' | 'قاشق' | 'کاسه' | 'کف دست' | 'تکه' | 'پرس' | 'میلی‌لیتر' | 'بشقاب' | 'قوطی کبریت' | 'کفگیر' | 'سیخ' | 'مشت' | 'ملاقه' | 'فنجان' | string;
  gramsPerUnit: number; // For calculation standardization
}

export interface Food {
  id: string;
  name: string; // e.g. "قورمه سبزی"
  aliases?: string[];
  category: string; // Canonical category from Master-Food-Catalog-FINAL.csv
  subcategory?: string;
  foodType?: string; // main_dish, composite, side_dish, dessert, bread, ingredient, condiment
  visualAsset?: string; // Emoji, SVG path, or image URL
  visualPriority?: 'A' | 'B' | 'C';
  visualType?: 'dedicated' | 'generic';
  defaultPortion: Portion;
  availablePortions: Portion[];
  // Nutritional values per 100g
  nutritionPer100g: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber?: number;
  };
  ingredients?: string[]; // Persian ingredient names from catalog
  ingredientIds?: string[]; // Canonical ingredient IDs from Food-Ingredient-Mapping-FINAL.csv
  tags?: string[]; // e.g. "ایرانی", "سنتی", "ناهار"
}

export interface FoodLogEntry {
  id: string;
  foodId: string;
  foodName: string; // Denormalized for easy display
  portionAmount: number;
  portionUnit: string;
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  loggedAt: string;
}

export interface Meal {
  id: string;
  date: string; // YYYY-MM-DD
  type: MealType;
  entries: FoodLogEntry[];
  totalNutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface DailyNutritionSummary {
  date: string;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  meals: Meal[];
}
