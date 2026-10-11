const fs = require('fs');
const content = `import { Food } from './models';

// Minimal demo database with Iranian foods
export const DEMO_FOOD_DB: Food[] = [
  // Breads
  {
    id: 'f_sangak', name: 'نان سنگک', aliases: ['سنگک'], category: 'carb', visualAsset: '🍞',
    defaultPortion: { amount: 1, unit: 'کف دست', gramsPerUnit: 30 },
    availablePortions: [{ amount: 1, unit: 'کف دست', gramsPerUnit: 30 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 260, protein: 8, carbs: 52, fat: 1, fiber: 4 },
    ingredients: ['آرد گندم', 'سبوس'], tags: ['نان', 'صبحانه', 'سنتی', 'کربوهیدرات']
  },
  {
    id: 'f_barbari', name: 'نان بربری', aliases: ['بربری'], category: 'carb', visualAsset: '🥖',
    defaultPortion: { amount: 1, unit: 'کف دست', gramsPerUnit: 30 },
    availablePortions: [{ amount: 1, unit: 'کف دست', gramsPerUnit: 30 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 265, protein: 7, carbs: 54, fat: 1, fiber: 2 },
    ingredients: ['آرد گندم'], tags: ['نان', 'صبحانه', 'سنتی']
  },
  {
    id: 'f_lavash', name: 'نان لواش', aliases: ['لواش'], category: 'carb', visualAsset: '🌯',
    defaultPortion: { amount: 1, unit: 'کف دست', gramsPerUnit: 15 },
    availablePortions: [{ amount: 1, unit: 'کف دست', gramsPerUnit: 15 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 280, protein: 8, carbs: 58, fat: 1, fiber: 2 },
    ingredients: ['آرد گندم'], tags: ['نان', 'سنتی']
  },
  {
    id: 'f_rice', name: 'برنج سفید (پخته)', aliases: ['برنج', 'پلو'], category: 'carb', visualAsset: '🍚',
    defaultPortion: { amount: 1, unit: 'کفگیر', gramsPerUnit: 60 },
    availablePortions: [{ amount: 1, unit: 'کفگیر', gramsPerUnit: 60 }, { amount: 1, unit: 'قاشق', gramsPerUnit: 15 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4 },
    ingredients: ['برنج'], tags: ['اصلی', 'ناهار', 'شام', 'کربوهیدرات']
  },

  // Main Dishes
  {
    id: 'f_ghormeh', name: 'قورمه‌سبزی', aliases: ['خورشت قورمه سبزی', 'قرمه سبزی'], category: 'meal', visualAsset: '🍲',
    defaultPortion: { amount: 1, unit: 'کاسه', gramsPerUnit: 200 },
    availablePortions: [{ amount: 1, unit: 'کاسه', gramsPerUnit: 200 }, { amount: 1, unit: 'قاشق', gramsPerUnit: 20 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 140, protein: 8, carbs: 6, fat: 9, fiber: 3 },
    ingredients: ['گوشت قرمز', 'سبزی', 'لوبیا', 'لیمو عمانی', 'پیاز'], tags: ['خورشت', 'ناهار', 'شام', 'سنتی', 'اصلی']
  },
  {
    id: 'f_gheymeh', name: 'خورشت قیمه', aliases: ['قیمه'], category: 'meal', visualAsset: '🍛',
    defaultPortion: { amount: 1, unit: 'کاسه', gramsPerUnit: 200 },
    availablePortions: [{ amount: 1, unit: 'کاسه', gramsPerUnit: 200 }, { amount: 1, unit: 'قاشق', gramsPerUnit: 20 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 150, protein: 7, carbs: 9, fat: 10, fiber: 2 },
    ingredients: ['گوشت قرمز', 'لپه', 'پیاز', 'رب گوجه‌فرنگی', 'لیمو عمانی', 'سیب‌زمینی'], tags: ['خورشت', 'ناهار', 'شام', 'سنتی']
  },
  {
    id: 'f_fesenjan', name: 'خورشت فسنجان', aliases: ['فسنجون'], category: 'meal', visualAsset: '🥘',
    defaultPortion: { amount: 1, unit: 'کاسه', gramsPerUnit: 200 },
    availablePortions: [{ amount: 1, unit: 'کاسه', gramsPerUnit: 200 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 250, protein: 10, carbs: 12, fat: 18, fiber: 2 },
    ingredients: ['گوشت مرغ', 'گردو', 'رب انار', 'شکر'], tags: ['خورشت', 'ناهار', 'شام', 'سنتی', 'مجلسی']
  },
  {
    id: 'f_adas_polo', name: 'عدس‌پلو', aliases: ['عدس پلو'], category: 'meal', visualAsset: '🍛',
    defaultPortion: { amount: 1, unit: 'بشقاب', gramsPerUnit: 250 },
    availablePortions: [{ amount: 1, unit: 'بشقاب', gramsPerUnit: 250 }, { amount: 1, unit: 'کفگیر', gramsPerUnit: 60 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 160, protein: 5, carbs: 25, fat: 4, fiber: 3 },
    ingredients: ['برنج', 'عدس', 'گوشت چرخ‌کرده', 'کشمش', 'پیاز'], tags: ['پلو', 'ناهار', 'شام', 'سنتی']
  },
  {
    id: 'f_loobia_polo', name: 'لوبیاپلو', aliases: ['لوبیا پلو'], category: 'meal', visualAsset: '🍛',
    defaultPortion: { amount: 1, unit: 'بشقاب', gramsPerUnit: 250 },
    availablePortions: [{ amount: 1, unit: 'بشقاب', gramsPerUnit: 250 }, { amount: 1, unit: 'کفگیر', gramsPerUnit: 60 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 155, protein: 6, carbs: 22, fat: 5, fiber: 2 },
    ingredients: ['برنج', 'گوشت چرخ‌کرده', 'لوبیا سبز', 'رب گوجه‌فرنگی'], tags: ['پلو', 'ناهار', 'شام', 'سنتی']
  },
  {
    id: 'f_jooj', name: 'جوجه‌کباب', aliases: ['جوجه', 'کباب مرغ'], category: 'protein', visualAsset: '🍢',
    defaultPortion: { amount: 1, unit: 'سیخ', gramsPerUnit: 150 },
    availablePortions: [{ amount: 1, unit: 'سیخ', gramsPerUnit: 150 }, { amount: 1, unit: 'تکه', gramsPerUnit: 30 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 180, protein: 22, carbs: 1, fat: 9 },
    ingredients: ['گوشت مرغ', 'پیاز', 'زعفران', 'آبلیمو'], tags: ['کباب', 'پروتئین', 'ناهار', 'شام', 'سنتی']
  },
  {
    id: 'f_koobideh', name: 'کباب کوبیده', aliases: ['کوبیده'], category: 'protein', visualAsset: '🍢',
    defaultPortion: { amount: 1, unit: 'سیخ', gramsPerUnit: 120 },
    availablePortions: [{ amount: 1, unit: 'سیخ', gramsPerUnit: 120 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 250, protein: 18, carbs: 2, fat: 19 },
    ingredients: ['گوشت قرمز', 'پیاز', 'چربی'], tags: ['کباب', 'پروتئین', 'ناهار', 'شام', 'سنتی']
  },
  {
    id: 'f_abgoosht', name: 'آبگوشت (دیزی)', aliases: ['دیزی', 'آبگوشت'], category: 'meal', visualAsset: '🍲',
    defaultPortion: { amount: 1, unit: 'کاسه', gramsPerUnit: 300 },
    availablePortions: [{ amount: 1, unit: 'کاسه', gramsPerUnit: 300 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 160, protein: 9, carbs: 11, fat: 9, fiber: 3 },
    ingredients: ['گوشت گوسفندی', 'نخود', 'لوبیا سفید', 'سیب‌زمینی', 'گوجه‌فرنگی', 'پیاز'], tags: ['سنتی', 'ناهار', 'شام', 'اصلی']
  },

  // Vegetarian / Lighter Meals
  {
    id: 'f_kashk_bademjan', name: 'کشک بادمجان', aliases: ['کشک و بادمجان'], category: 'meal', visualAsset: '🍆',
    defaultPortion: { amount: 1, unit: 'کاسه', gramsPerUnit: 150 },
    availablePortions: [{ amount: 1, unit: 'کاسه', gramsPerUnit: 150 }, { amount: 1, unit: 'قاشق', gramsPerUnit: 20 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 150, protein: 4, carbs: 8, fat: 12, fiber: 3 },
    ingredients: ['بادمجان', 'کشک', 'پیاز', 'نعنا', 'گردو', 'سیر'], tags: ['سنتی', 'پیش‌غذا', 'شام', 'گیاهی']
  },
  {
    id: 'f_mirza', name: 'میرزا قاسمی', category: 'meal', visualAsset: '🍅',
    defaultPortion: { amount: 1, unit: 'کاسه', gramsPerUnit: 150 },
    availablePortions: [{ amount: 1, unit: 'کاسه', gramsPerUnit: 150 }, { amount: 1, unit: 'قاشق', gramsPerUnit: 20 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 110, protein: 3, carbs: 6, fat: 8, fiber: 2 },
    ingredients: ['بادمجان کباب‌شده', 'گوجه‌فرنگی', 'سیر', 'تخم‌مرغ'], tags: ['سنتی', 'پیش‌غذا', 'شام', 'گیاهی']
  },
  {
    id: 'f_omelette', name: 'املت گوجه‌فرنگی', aliases: ['املت'], category: 'meal', visualAsset: '🍳',
    defaultPortion: { amount: 1, unit: 'پرس', gramsPerUnit: 150 },
    availablePortions: [{ amount: 1, unit: 'پرس', gramsPerUnit: 150 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 130, protein: 7, carbs: 4, fat: 10, fiber: 1 },
    ingredients: ['تخم‌مرغ', 'گوجه‌فرنگی', 'روغن'], tags: ['صبحانه', 'شام', 'سریع']
  },
  {
    id: 'f_nimroo', name: 'نیمرو', category: 'protein', visualAsset: '🍳',
    defaultPortion: { amount: 1, unit: 'عدد', gramsPerUnit: 60 },
    availablePortions: [{ amount: 1, unit: 'عدد', gramsPerUnit: 60 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 190, protein: 13, carbs: 1, fat: 15 },
    ingredients: ['تخم‌مرغ', 'روغن'], tags: ['صبحانه', 'شام', 'سریع']
  },
  {
    id: 'f_boiled_egg', name: 'تخم‌مرغ آب‌پز', aliases: ['تخم مرغ'], category: 'protein', visualAsset: '🥚',
    defaultPortion: { amount: 1, unit: 'عدد', gramsPerUnit: 50 },
    availablePortions: [{ amount: 1, unit: 'عدد', gramsPerUnit: 50 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 155, protein: 13, carbs: 1.1, fat: 11 },
    ingredients: ['تخم‌مرغ'], tags: ['صبحانه', 'پروتئین', 'سریع']
  },
  {
    id: 'f_adasi', name: 'عدسی', category: 'meal', visualAsset: '🥣',
    defaultPortion: { amount: 1, unit: 'کاسه', gramsPerUnit: 200 },
    availablePortions: [{ amount: 1, unit: 'کاسه', gramsPerUnit: 200 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 100, protein: 8, carbs: 16, fat: 1, fiber: 6 },
    ingredients: ['عدس', 'پیاز', 'سیب‌زمینی'], tags: ['صبحانه', 'شام', 'گیاهی', 'سالم']
  },

  // Dairy & Sides
  {
    id: 'f_cheese', name: 'پنیر لیقوان (تبریز)', aliases: ['پنیر تبریز', 'پنیر'], category: 'dairy', visualAsset: '🧀',
    defaultPortion: { amount: 1, unit: 'قوطی کبریت', gramsPerUnit: 30 },
    availablePortions: [{ amount: 1, unit: 'قوطی کبریت', gramsPerUnit: 30 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 270, protein: 15, carbs: 2, fat: 22, fiber: 0 },
    ingredients: ['شیر', 'نمک'], tags: ['صبحانه', 'لبنیات', 'سنتی']
  },
  {
    id: 'f_yogurt', name: 'ماست کم‌چرب', aliases: ['ماست'], category: 'dairy', visualAsset: '🥣',
    defaultPortion: { amount: 1, unit: 'کاسه', gramsPerUnit: 150 },
    availablePortions: [{ amount: 1, unit: 'کاسه', gramsPerUnit: 150 }, { amount: 1, unit: 'قاشق', gramsPerUnit: 20 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 45, protein: 4, carbs: 6, fat: 1.5, fiber: 0 },
    ingredients: ['شیر'], tags: ['لبنیات', 'همراه غذا', 'سالم']
  },
  {
    id: 'f_salad_shirazi', name: 'سالاد شیرازی', aliases: ['سالاد'], category: 'vegetable', visualAsset: '🥗',
    defaultPortion: { amount: 1, unit: 'کاسه', gramsPerUnit: 150 },
    availablePortions: [{ amount: 1, unit: 'کاسه', gramsPerUnit: 150 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 35, protein: 1, carbs: 5, fat: 1, fiber: 2 },
    ingredients: ['خیار', 'گوجه‌فرنگی', 'پیاز', 'آبغوره', 'نعنا'], tags: ['سالاد', 'همراه غذا', 'گیاهی', 'سالم']
  },
  {
    id: 'f_sabzi', name: 'سبزی خوردن', aliases: ['سبزی'], category: 'vegetable', visualAsset: '🌿',
    defaultPortion: { amount: 1, unit: 'کاسه', gramsPerUnit: 50 },
    availablePortions: [{ amount: 1, unit: 'کاسه', gramsPerUnit: 50 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 20, protein: 2, carbs: 4, fat: 0, fiber: 3 },
    ingredients: ['تربچه', 'ریحون', 'تره', 'شاهی', 'نعنا'], tags: ['سبزیجات', 'همراه غذا', 'گیاهی', 'سالم']
  },
  {
    id: 'f_walnut', name: 'مغز گردو', aliases: ['گردو'], category: 'fat', visualAsset: '🧆',
    defaultPortion: { amount: 1, unit: 'عدد', gramsPerUnit: 5 },
    availablePortions: [{ amount: 1, unit: 'عدد', gramsPerUnit: 5 }, { amount: 10, unit: 'عدد', gramsPerUnit: 50 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 654, protein: 15, carbs: 14, fat: 65, fiber: 7 },
    ingredients: ['گردو'], tags: ['صبحانه', 'مغزیجات', 'چربی سالم', 'میان‌وعده']
  },

  // Beverages
  {
    id: 'f_doogh', name: 'دوغ', category: 'beverage', visualAsset: '🥛',
    defaultPortion: { amount: 1, unit: 'لیوان', gramsPerUnit: 240 },
    availablePortions: [{ amount: 1, unit: 'لیوان', gramsPerUnit: 240 }, { amount: 100, unit: 'میلی‌لیتر', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 25, protein: 1.5, carbs: 3, fat: 1, fiber: 0 },
    ingredients: ['شیر', 'آب', 'نمک', 'نعنا'], tags: ['نوشیدنی', 'سنتی', 'همراه غذا']
  },
  {
    id: 'f_tea', name: 'چای سیاه (بدون قند)', aliases: ['چای'], category: 'beverage', visualAsset: '☕',
    defaultPortion: { amount: 1, unit: 'لیوان', gramsPerUnit: 240 },
    availablePortions: [{ amount: 1, unit: 'لیوان', gramsPerUnit: 240 }, { amount: 100, unit: 'میلی‌لیتر', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 1, protein: 0, carbs: 0, fat: 0, fiber: 0 },
    ingredients: ['چای', 'آب'], tags: ['نوشیدنی', 'صبحانه', 'میان‌وعده', 'آرامش‌بخش']
  },

  // Fruits
  {
    id: 'f_apple', name: 'سیب', category: 'fruit', visualAsset: '🍎',
    defaultPortion: { amount: 1, unit: 'عدد', gramsPerUnit: 150 },
    availablePortions: [{ amount: 1, unit: 'عدد', gramsPerUnit: 150 }, { amount: 100, unit: 'گرم', gramsPerUnit: 1 }],
    nutritionPer100g: { calories: 52, protein: 0.3, carbs: 14, fat: 0.2, fiber: 2.4 },
    ingredients: ['سیب'], tags: ['میوه', 'میان‌وعده', 'سالم']
  }
];

export function searchFoods(query: string): Food[] {
  if (!query) return [];
  const q = query.toLowerCase();
  return DEMO_FOOD_DB.filter(f => 
    f.name.toLowerCase().includes(q) || 
    (f.aliases && f.aliases.some(a => a.toLowerCase().includes(q))) ||
    (f.tags && f.tags.some(t => t.includes(q)))
  );
}

export function calculateNutrition(food: Food, amount: number, gramsPerUnit: number) {
  const totalGrams = amount * gramsPerUnit;
  const ratio = totalGrams / 100;
  return {
    calories: Math.round(food.nutritionPer100g.calories * ratio),
    protein: Math.round(food.nutritionPer100g.protein * ratio),
    carbs: Math.round(food.nutritionPer100g.carbs * ratio),
    fat: Math.round(food.nutritionPer100g.fat * ratio),
  };
}
`
fs.writeFileSync('src/features/nutrition/seed-data.ts', content);
