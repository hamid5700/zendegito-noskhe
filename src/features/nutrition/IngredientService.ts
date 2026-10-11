import { CANONICAL_INGREDIENTS, CanonicalIngredient } from './data/canonical-data.generated';
import { Food } from './models';

// Clean and normalize Persian text for resilient comparison
function normalizePersianText(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/[\u200C\u200B]/g, ' ') // zero-width non-joiners to space
    .replace(/[ي]/g, 'ی')
    .replace(/[ك]/g, 'ک')
    .replace(/[ة]/g, 'ه')
    .replace(/\s+/g, ' ');
}

class IngredientServiceImpl {
  private ingredients: CanonicalIngredient[] = CANONICAL_INGREDIENTS;
  private idMap = new Map<string, CanonicalIngredient>();
  private nameMap = new Map<string, CanonicalIngredient>();
  private categoryMap = new Map<string, CanonicalIngredient[]>();

  constructor() {
    for (const ing of this.ingredients) {
      this.idMap.set(ing.id, ing);
      this.nameMap.set(normalizePersianText(ing.nameFa), ing);
      for (const alias of ing.aliasesFa) {
        this.nameMap.set(normalizePersianText(alias), ing);
      }

      if (!this.categoryMap.has(ing.category)) {
        this.categoryMap.set(ing.category, []);
      }
      this.categoryMap.get(ing.category)!.push(ing);
    }
  }

  /**
   * Return all 222 canonical ingredients
   */
  getAllIngredients(): CanonicalIngredient[] {
    return this.ingredients;
  }

  /**
   * Look up ingredient by canonical ID (e.g. "ING-001")
   */
  getIngredientById(id: string): CanonicalIngredient | undefined {
    return this.idMap.get(id);
  }

  /**
   * Look up ingredient by Persian name or alias
   */
  getIngredientByName(name: string): CanonicalIngredient | undefined {
    return this.nameMap.get(normalizePersianText(name));
  }

  /**
   * Get all ingredient categories
   */
  getCategories(): string[] {
    return Array.from(this.categoryMap.keys());
  }

  /**
   * Search ingredients by query
   */
  searchIngredients(query: string): CanonicalIngredient[] {
    if (!query || !query.trim()) return this.ingredients;
    const q = normalizePersianText(query);
    return this.ingredients.filter(ing => {
      if (normalizePersianText(ing.nameFa).includes(q)) return true;
      if (ing.id.toLowerCase().includes(q)) return true;
      if (normalizePersianText(ing.category).includes(q)) return true;
      return ing.aliasesFa.some(alias => normalizePersianText(alias).includes(q));
    });
  }

  /**
   * Resolve ingredients for a specific food using its canonical ingredient IDs
   */
  getIngredientsForFood(foodOrId: Food | string, foodLookup?: (id: string) => Food | undefined): CanonicalIngredient[] {
    let food: Food | undefined;
    if (typeof foodOrId === 'string') {
      food = foodLookup ? foodLookup(foodOrId) : undefined;
    } else {
      food = foodOrId;
    }

    if (!food || !food.ingredientIds) return [];
    return food.ingredientIds
      .map(id => this.idMap.get(id))
      .filter((ing): ing is CanonicalIngredient => ing !== undefined);
  }

  /**
   * PHASE 5 — HARD EXCLUSION
   * Food -> Food ID -> Ingredient IDs -> Ingredient Master
   * Hard-excluded ingredients or foods must never appear in recommendations.
   */
  isFoodExcluded(
    food: Food,
    exclusions?: string[]
  ): boolean {
    if (!exclusions || exclusions.length === 0) return false;

    const normalizedExclusions = exclusions.map(e => normalizePersianText(e)).filter(Boolean);
    if (normalizedExclusions.length === 0) return false;

    const normFoodId = food.id.toLowerCase();
    const normFoodName = normalizePersianText(food.name);

    // 1. Direct Food Match (by ID, exact name, or substring)
    for (const excl of normalizedExclusions) {
      if (normFoodId === excl.toLowerCase()) return true;
      if (normFoodName === excl) return true;
      if (food.aliases && food.aliases.some(a => normalizePersianText(a) === excl)) return true;
      if (normFoodName.includes(excl) || (excl.length > 2 && normFoodName.includes(excl))) return true;
    }

    // 2. Canonical Ingredient Match (by mapped Ingredient IDs & Ingredient Master)
    if (food.ingredientIds && food.ingredientIds.length > 0) {
      for (const ingId of food.ingredientIds) {
        const normIngId = ingId.toLowerCase();
        const ing = this.idMap.get(ingId);

        for (const excl of normalizedExclusions) {
          // Direct ID match
          if (normIngId === excl.toLowerCase()) return true;

          if (ing) {
            const normIngName = normalizePersianText(ing.nameFa);
            // Direct ingredient name match
            if (normIngName === excl || normIngName.includes(excl) || (excl.length > 2 && excl.includes(normIngName))) {
              return true;
            }
            // Category match (e.g. user excluded "لبنیات", ingredient category is "لبنیات")
            if (normalizePersianText(ing.category) === excl) {
              return true;
            }
            // Alias match
            if (ing.aliasesFa.some(alias => {
              const na = normalizePersianText(alias);
              return na === excl || na.includes(excl);
            })) {
              return true;
            }
          }
        }
      }
    }

    // 3. Fallback: Catalog ingredient string list check
    if (food.ingredients && food.ingredients.length > 0) {
      for (const ingName of food.ingredients) {
        const normIngName = normalizePersianText(ingName);
        for (const excl of normalizedExclusions) {
          if (normIngName === excl || normIngName.includes(excl) || (excl.length > 2 && excl.includes(normIngName))) {
            return true;
          }
        }
      }
    }

    return false;
  }

  /**
   * PHASE 6 — SOFT DISLIKE
   * Similar to hard exclusion, but used for deprioritizing disliked foods.
   */
  isFoodDisliked(
    food: Food,
    dislikes?: string[]
  ): boolean {
    if (!dislikes || dislikes.length === 0) return false;

    const normalizedDislikes = dislikes.map(d => normalizePersianText(d)).filter(Boolean);
    if (normalizedDislikes.length === 0) return false;

    const normFoodId = food.id.toLowerCase();
    const normFoodName = normalizePersianText(food.name);

    // 1. Direct Food Match
    for (const dis of normalizedDislikes) {
      if (normFoodId === dis.toLowerCase()) return true;
      if (normFoodName === dis) return true;
      if (food.aliases && food.aliases.some(a => normalizePersianText(a) === dis)) return true;
      if (normFoodName.includes(dis) || (dis.length > 2 && normFoodName.includes(dis))) return true;
    }

    // 2. Canonical Ingredient Match
    if (food.ingredientIds && food.ingredientIds.length > 0) {
      for (const ingId of food.ingredientIds) {
        const normIngId = ingId.toLowerCase();
        const ing = this.idMap.get(ingId);

        for (const dis of normalizedDislikes) {
          if (normIngId === dis.toLowerCase()) return true;
          if (ing) {
            const normIngName = normalizePersianText(ing.nameFa);
            if (normIngName === dis || normIngName.includes(dis) || (dis.length > 2 && dis.includes(normIngName))) {
              return true;
            }
            if (normalizePersianText(ing.category) === dis) {
              return true;
            }
            if (ing.aliasesFa.some(alias => {
              const na = normalizePersianText(alias);
              return na === dis || na.includes(dis);
            })) {
              return true;
            }
          }
        }
      }
    }

    // 3. Catalog ingredient list check
    if (food.ingredients && food.ingredients.length > 0) {
      for (const ingName of food.ingredients) {
        const normIngName = normalizePersianText(ingName);
        for (const dis of normalizedDislikes) {
          if (normIngName === dis || normIngName.includes(dis) || (dis.length > 2 && dis.includes(normIngName))) {
            return true;
          }
        }
      }
    }

    return false;
  }
}

export const IngredientService = new IngredientServiceImpl();
