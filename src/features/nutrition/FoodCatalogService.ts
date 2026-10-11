import { CANONICAL_FOODS } from './data/canonical-data.generated';
import { Food } from './models';
import { IngredientService } from './IngredientService';
import { resolveFoodVisual } from './visuals/resolveFoodVisual';
import { ResolvedFoodVisual } from './visuals/types';

function normalizePersianText(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/[\u200C\u200B]/g, ' ')
    .replace(/[ي]/g, 'ی')
    .replace(/[ك]/g, 'ک')
    .replace(/[ة]/g, 'ه')
    .replace(/\s+/g, ' ');
}

class FoodCatalogServiceImpl {
  private foods: Food[] = CANONICAL_FOODS;
  private foodMap = new Map<string, Food>();
  private categoryMap = new Map<string, Food[]>();

  constructor() {
    for (const food of this.foods) {
      this.foodMap.set(food.id, food);

      if (!this.categoryMap.has(food.category)) {
        this.categoryMap.set(food.category, []);
      }
      this.categoryMap.get(food.category)!.push(food);
    }
  }

  /**
   * Return all 626 canonical foods
   */
  getAllFoods(): Food[] {
    return this.foods;
  }

  /**
   * Get single food by its stable canonical Food ID (e.g. "IR-KHORESH-001")
   */
  getFoodById(id: string): Food | undefined {
    return this.foodMap.get(id);
  }

  /**
   * Get all foods belonging to a canonical category
   */
  getFoodsByCategory(category: string): Food[] {
    return this.categoryMap.get(category) || [];
  }

  /**
   * Return all 29 unique canonical Persian food categories
   */
  getCategories(): string[] {
    return Array.from(this.categoryMap.keys());
  }

  /**
   * Comprehensive Persian food search across names, aliases, ingredients, tags, and categories.
   */
  searchFoods(
    query: string,
    options?: {
      category?: string;
      subcategory?: string;
      exclusions?: string[];
      dislikes?: string[];
    }
  ): Food[] {
    const q = query ? normalizePersianText(query) : '';
    let results = this.foods;

    // Filter by category if specified
    if (options?.category && options.category !== 'all') {
      results = results.filter(f => f.category === options.category);
    }

    // Filter by subcategory if specified
    if (options?.subcategory) {
      results = results.filter(f => f.subcategory === options.subcategory);
    }

    // Filter out hard exclusions if requested
    if (options?.exclusions && options.exclusions.length > 0) {
      results = results.filter(f => !IngredientService.isFoodExcluded(f, options.exclusions));
    }

    // Search query matching
    if (q) {
      results = results.filter(food => {
        const normName = normalizePersianText(food.name);
        if (normName.includes(q)) return true;

        if (food.id.toLowerCase().includes(q)) return true;

        if (food.aliases && food.aliases.some(a => normalizePersianText(a).includes(q))) return true;

        if (food.ingredients && food.ingredients.some(i => normalizePersianText(i).includes(q))) return true;

        if (food.tags && food.tags.some(t => normalizePersianText(t).includes(q))) return true;

        if (normalizePersianText(food.category).includes(q)) return true;

        if (food.subcategory && normalizePersianText(food.subcategory).includes(q)) return true;

        return false;
      });
    }

    return results;
  }

  /**
   * Standard nutrition calculation based on portion and amount.
   */
  calculateNutrition(food: Food, amount: number, gramsPerUnit: number) {
    const totalGrams = amount * gramsPerUnit;
    const ratio = totalGrams / 100;
    return {
      calories: Math.round(food.nutritionPer100g.calories * ratio),
      protein: Math.round(food.nutritionPer100g.protein * ratio),
      carbs: Math.round(food.nutritionPer100g.carbs * ratio),
      fat: Math.round(food.nutritionPer100g.fat * ratio),
    };
  }

  /**
   * Get visual asset or fallback for a food (beverages never return tea emoji).
   */
  getVisualAsset(food: Food): string {
    if (food.category === 'نوشیدنی ها' || food.category === 'نوشیدنی‌ها') {
      return '';
    }
    if (food.visualAsset === '☕' || food.visualAsset === '🍵') {
      return '';
    }
    return food.visualAsset || '';
  }

  /**
   * Deterministically resolves visual asset descriptor (sheet sprite, special asset, or fallback)
   */
  resolveFoodVisual(foodId: string): ResolvedFoodVisual {
    return resolveFoodVisual(foodId);
  }
}

export const FoodCatalogService = new FoodCatalogServiceImpl();
