const fs = require('fs');

let recSheet = fs.readFileSync('src/features/nutrition/components/MealRecommendationSheet.tsx', 'utf-8');
recSheet = recSheet.replace(
  'date={date}\n              defaultMealType={selectedMealContext || "lunch"} // Using the contextual meal type\n              preSelectedFoodId={selectedFoodId} // We will need to update FoodSearchSheet to accept this',
  'initialMealContext={selectedMealContext || "lunch"}\n              initialFoodId={selectedFoodId}'
);
fs.writeFileSync('src/features/nutrition/components/MealRecommendationSheet.tsx', recSheet);
