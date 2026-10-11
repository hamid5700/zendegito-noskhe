const fs = require('fs');

let content = fs.readFileSync('src/features/nutrition/MealRecommendationService.ts', 'utf8');

const replacement = `    // 2. Goal / Preference adjustments
    const hasTraditional = preferences.taste?.includes('traditional');
    const hasSweet = preferences.taste?.includes('sweet');
    
    if (hasTraditional) {
       recommendations.forEach(rec => {
          if (rec.foodId === 'f_3' || rec.foodId === 'f_6') {
             rec.priority -= 0.6;
             rec.reason = 'چون به غذاهای سنتی علاقه داری، این انتخاب بیشتر بهت می‌چسبه.';
          }
       });
    }

    if (preferences.primaryGoal === 'weight_loss') {
      // Prioritize protein and low calorie
      recommendations.forEach(rec => {
        const food = DEMO_FOOD_DB.find(f => f.id === rec.foodId);
        if (food && food.category === 'protein') {
          rec.priority -= 0.5; // increase priority (lower number)
          if (!hasLoggedCurrentMealContext && !rec.reason) {
            rec.reason = 'این انتخاب با هدف کاهش وزن تو هماهنگه.';
          }
        }
      });
    }

    // Pattern Injection!
    const inferredNut = context.patterns?.inferred?.nutrition;
    if (inferredNut && inferredNut.confidence !== 'none' && inferredNut.confidence !== 'low' && inferredNut.frequentlyLoggedMeals.length > 0) {
       // if frequently logged meal type (breakfast, etc.) matches current context, maybe suggest something
       if (inferredNut.frequentlyLoggedMeals.includes(mealContext)) {
           // We could lower priority for generic recs, but actually this tells us they *often* eat this type of meal.
           // Since we don't store exactly which *food* they eat repeatedly in the basic pattern yet (we store meal *type*),
           // we can just acknowledge their habit.
       }
    }

    const nutritionMemories = context.memories?.filter(m => m.category === 'nutrition');
    if (nutritionMemories && nutritionMemories.length > 0) {
        nutritionMemories.forEach(mem => {
            if (mem.status === 'active' && mem.payload?.foodId) {
                const rec = recommendations.find(r => r.foodId === mem.payload.foodId);
                if (rec) {
                    rec.priority -= 1.0;
                    rec.reason = 'این روزها این انتخاب زیاد توی برنامه‌ات بوده.';
                }
            }
        });
    }`;

content = content.replace(/    \/\/ 2\. Goal \/ Preference adjustments[\s\S]*?(?=    \/\/ If user has not logged anything today)/, replacement + '\n\n');

fs.writeFileSync('src/features/nutrition/MealRecommendationService.ts', content);
