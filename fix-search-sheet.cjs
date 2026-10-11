const fs = require('fs');
let content = fs.readFileSync('src/features/nutrition/components/FoodSearchSheet.tsx', 'utf-8');

// Fix addFood -> addFoodLog
content = content.replace(
  'const addFood = useNutritionStore(state => state.addFood);',
  'const addFoodLog = useNutritionStore(state => state.addFoodLog);'
);

// Fix handleSave
content = content.replace(
  'addFood(date, mealType, selectedFood, amount, selectedPortion.gramsPerUnit, selectedPortion.unit);',
  `addFoodLog(date, mealType, {
      id: \`log_\${Date.now()}\`,
      foodId: selectedFood.id,
      foodName: selectedFood.name,
      portionAmount: amount,
      portionUnit: selectedPortion.unit,
      nutrition: calculateNutrition(selectedFood, amount, selectedPortion.gramsPerUnit),
      loggedAt: new Date().toISOString()
    });`
);

// Fix frequency map
content = content.replace(
  'const allLogs = Object.values(mealsByDate).flatMap(m => m.entries);',
  'const allLogs = Object.values(mealsByDate).flat().flatMap(m => m.entries);'
);

fs.writeFileSync('src/features/nutrition/components/FoodSearchSheet.tsx', content);
