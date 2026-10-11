const fs = require('fs');

// Fix page.tsx
let page = fs.readFileSync('src/app/(tabs)/nutrition/page.tsx', 'utf-8');
page = page.replace(
  '<FoodSearchSheet\n        isOpen={isSearchOpen}\n        onClose={() => setIsSearchOpen(false)}\n        date={todayDate}\n        defaultMealType={selectedMealType}\n      />',
  '<FoodSearchSheet\n        isOpen={isSearchOpen}\n        onClose={() => setIsSearchOpen(false)}\n        initialMealContext={selectedMealType}\n      />'
);
fs.writeFileSync('src/app/(tabs)/nutrition/page.tsx', page);

// Fix MealRecommendationSheet.tsx
let recSheet = fs.readFileSync('src/features/nutrition/components/MealRecommendationSheet.tsx', 'utf-8');
recSheet = recSheet.replace(
  '<FoodSearchSheet\n        isOpen={true}\n        onClose={() => setPreSelectedFoodId(null)}\n        date={date}\n        defaultMealType={preSelectedMealContext}\n        preSelectedFoodId={preSelectedFoodId}\n      />',
  '<FoodSearchSheet\n        isOpen={true}\n        onClose={() => setPreSelectedFoodId(null)}\n        initialMealContext={preSelectedMealContext}\n        initialFoodId={preSelectedFoodId}\n      />'
);
fs.writeFileSync('src/features/nutrition/components/MealRecommendationSheet.tsx', recSheet);

