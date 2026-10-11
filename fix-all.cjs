const fs = require('fs');

// Fix MealRecommendationService.ts
let mrc = fs.readFileSync('src/features/nutrition/MealRecommendationService.ts', 'utf-8');
mrc = mrc.replace("context.current.energy === 'low' || ", "");
fs.writeFileSync('src/features/nutrition/MealRecommendationService.ts', mrc);

// Fix page.tsx
let page = fs.readFileSync('src/app/(tabs)/nutrition/page.tsx', 'utf-8');
page = page.replace(/date=\{todayDate\}\s*defaultMealType=\{selectedMealType\}/g, 'initialMealContext={selectedMealType}');
fs.writeFileSync('src/app/(tabs)/nutrition/page.tsx', page);

// Fix MealRecommendationSheet.tsx
let recSheet = fs.readFileSync('src/features/nutrition/components/MealRecommendationSheet.tsx', 'utf-8');
recSheet = recSheet.replace(/date=\{date\}\s*defaultMealType=\{preSelectedMealContext\}\s*preSelectedFoodId=\{preSelectedFoodId\}/g, 'initialMealContext={preSelectedMealContext} initialFoodId={preSelectedFoodId}');
fs.writeFileSync('src/features/nutrition/components/MealRecommendationSheet.tsx', recSheet);

