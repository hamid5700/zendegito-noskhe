/**
 * CANONICAL FOOD ADAPTER
 * Replaces the legacy DEMO_FOOD_DB with the canonical 626-food dataset
 * powered by FoodCatalogService and food-data/*.csv.
 */

import { Food } from './models';
import { FoodCatalogService } from './FoodCatalogService';

export const DEMO_FOOD_DB: Food[] = FoodCatalogService.getAllFoods();

export function searchFoods(query: string): Food[] {
  return FoodCatalogService.searchFoods(query);
}

export function calculateNutrition(food: Food, amount: number, gramsPerUnit: number) {
  return FoodCatalogService.calculateNutrition(food, amount, gramsPerUnit);
}
