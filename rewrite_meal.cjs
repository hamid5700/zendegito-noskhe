const fs = require('fs');

let content = fs.readFileSync('src/features/nutrition/MealRecommendationService.ts', 'utf8');

const replacement = `    // If the user already logged a primary meal for this context, don't recommend more heavy food
    if (hasLoggedCurrentMealContext && ['breakfast', 'lunch', 'dinner'].includes(mealContext)) {
        return [];
    }

    // 1. Time-based generic recommendations`;

content = content.replace('    // 1. Time-based generic recommendations', replacement);

fs.writeFileSync('src/features/nutrition/MealRecommendationService.ts', content);
