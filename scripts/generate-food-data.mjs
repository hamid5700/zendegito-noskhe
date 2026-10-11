import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const FOOD_DATA_DIR = path.join(ROOT_DIR, 'food-data');
const OUTPUT_FILE = path.join(ROOT_DIR, 'src/features/nutrition/data/canonical-data.generated.ts');

function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.trim().split(/\r?\n/);
  const header = lines[0].split(',');
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    let inQuote = false;
    let token = '';
    const row = [];
    for (let j = 0; j < line.length; j++) {
      const c = line[j];
      if (c === '"') {
        inQuote = !inQuote;
      } else if (c === ',' && !inQuote) {
        row.push(token.trim());
        token = '';
      } else {
        token += c;
      }
    }
    row.push(token.trim());
    rows.push(row);
  }

  return { header, rows };
}

console.log('Parsing canonical food datasets from food-data/ ...');

const masterCat = parseCSV(path.join(FOOD_DATA_DIR, 'Master-Food-Catalog-FINAL.csv'));
const ingMaster = parseCSV(path.join(FOOD_DATA_DIR, 'Ingredient-Master-FINAL.csv'));
const mapping = parseCSV(path.join(FOOD_DATA_DIR, 'Food-Ingredient-Mapping-FINAL.csv'));
const visualSel = parseCSV(path.join(FOOD_DATA_DIR, 'Visual-Selection-FINAL.csv'));

console.log(`Loaded ${masterCat.rows.length} foods, ${ingMaster.rows.length} ingredients, ${mapping.rows.length} mappings, ${visualSel.rows.length} visuals.`);

if (masterCat.rows.length !== 626) throw new Error(`Expected 626 foods, got ${masterCat.rows.length}`);
if (ingMaster.rows.length !== 222) throw new Error(`Expected 222 ingredients, got ${ingMaster.rows.length}`);
if (mapping.rows.length !== 1748) throw new Error(`Expected 1748 mappings, got ${mapping.rows.length}`);
if (visualSel.rows.length !== 626) throw new Error(`Expected 626 visuals, got ${visualSel.rows.length}`);

// Build mappings foodId -> ingredientIds[]
const foodToIngMap = new Map();
for (const [fid, iid] of mapping.rows) {
  if (!foodToIngMap.has(fid)) {
    foodToIngMap.set(fid, []);
  }
  foodToIngMap.get(fid).push(iid);
}

// Build visual map foodId -> visual info
const visualMap = new Map();
for (const [fid, nameFa, vp, vt] of visualSel.rows) {
  visualMap.set(fid, { visualPriority: vp, visualType: vt });
}

// Visual asset (emoji / fallback) resolver
function resolveVisualAsset(cat, subcat, foodType, name) {
  // Specific dish emojis
  if (name.includes('قورمه')) return '🍲';
  if (name.includes('قیمه')) return '🍲';
  if (name.includes('فسنجان')) return '🍲';
  if (name.includes('کباب') || name.includes('جوجه') || name.includes('شیشلیک') || name.includes('چنجه') || name.includes('کوبیده')) return '🍢';
  if (name.includes('سنگک') || name.includes('بربری') || name.includes('لواش') || name.includes('تافتون') || name.includes('نان')) return '🍞';
  if (name.includes('پلو') || name.includes('برنج') || name.includes('ته‌دیگ') || name.includes('ته چین')) return '🍚';
  if (name.includes('آش') || name.includes('سوپ') || name.includes('حلیم')) return '🥣';
  if (name.includes('املت') || name.includes('نیمرو') || name.includes('تخم مرغ')) return '🍳';
  if (name.includes('ماهی') || name.includes('میگو') || name.includes('قزل‌آلا')) return '🐟';
  if (name.includes('مرغ') || name.includes('بوقلمون') || name.includes('بلدرچین')) return '🍗';
  if (name.includes('گوشت') || name.includes('استیک') || name.includes('راسته')) return '🥩';
  if (name.includes('ماست') || name.includes('دوغ') || name.includes('کشک')) return '🥛';
  if (name.includes('پنیر')) return '🧀';
  if (name.includes('سالاد') || name.includes('سبزی خوردن') || name.includes('خیار') || name.includes('گوجه')) return '🥗';
  if (name.includes('چای') || name.includes('قهوه') || name.includes('دمنوش') || name.includes('شربت') || name.includes('آبمیوه')) return '☕';
  if (name.includes('گردو') || name.includes('بادام') || name.includes('پسته') || name.includes('فندق')) return '🥜';
  if (name.includes('سیب') || name.includes('پرتقال') || name.includes('موز') || name.includes('انار') || name.includes('انگور')) return '🍎';
  if (name.includes('کیک') || name.includes('شیرینی') || name.includes('باقلوا') || name.includes('حلوا')) return '🍰';
  if (name.includes('پیتزا') || name.includes('برگر') || name.includes('ساندویچ') || name.includes('سیب زمینی سرخ')) return '🍔';
  if (name.includes('ماکارونی') || name.includes('پاستا') || name.includes('لازانیا')) return '🍝';
  if (name.includes('عدس') || name.includes('لوبیا') || name.includes('نخود')) return '🫘';

  // Category fallbacks
  switch (cat) {
    case 'خورش‌ها':
    case 'غذاهای ایرانی':
    case 'غذاهای محلی ایران':
      return '🍲';
    case 'پلو و برنج':
      return '🍚';
    case 'کباب':
      return '🍢';
    case 'آش و سوپ':
      return '🥣';
    case 'نان':
      return '🍞';
    case 'صبحانه':
      return '🍳';
    case 'تخم مرغ':
      return '🥚';
    case 'غذاهای نانی':
    case 'غذاهای ترکیبی':
      return '🥪';
    case 'گوشت':
      return '🥩';
    case 'مرغ':
      return '🍗';
    case 'ماهی و غذاهای دریایی':
      return '🐟';
    case 'حبوبات':
      return '🫘';
    case 'غلات':
      return '🌾';
    case 'سبزیجات':
      return '🥗';
    case 'میوه ها':
      return '🍎';
    case 'لبنیات':
      return '🧀';
    case 'مغزها و دانه ها':
      return '🥜';
    case 'میوه خشک':
      return '🍇';
    case 'تنقلات':
      return '🍿';
    case 'نوشیدنی ها':
      return '☕';
    case 'دسرها':
    case 'شیرینی ها':
      return '🍰';
    case 'فست فود':
      return '🍔';
    case 'غذاهای بین المللی':
      return '🍝';
    case 'سس و چاشنی':
      return '🧂';
    default:
      return '🍽';
  }
}

// Portions and Nutrition generator by category
function resolvePortionsAndNutrition(cat, subcat, foodType, name) {
  // Baseline macros and portions
  if (cat === 'خورش‌ها' || name.includes('خورش')) {
    const isHeavy = name.includes('فسنجان') || name.includes('مسمی');
    return {
      defaultPortion: { amount: 1, unit: 'کاسه', gramsPerUnit: 200 },
      availablePortions: [
        { amount: 1, unit: 'کاسه', gramsPerUnit: 200 },
        { amount: 1, unit: 'ملاقه', gramsPerUnit: 100 },
        { amount: 1, unit: 'قاشق', gramsPerUnit: 20 },
        { amount: 100, unit: 'گرم', gramsPerUnit: 1 },
      ],
      nutritionPer100g: {
        calories: isHeavy ? 245 : 155,
        protein: isHeavy ? 7 : 9,
        carbs: isHeavy ? 14 : 7,
        fat: isHeavy ? 18 : 10,
        fiber: 2.5
      }
    };
  }

  if (cat === 'پلو و برنج' || name.includes('پلو') || name.includes('چلو')) {
    const hasMeat = name.includes('مرغ') || name.includes('گوشت') || name.includes('کباب');
    return {
      defaultPortion: { amount: 1, unit: 'کفگیر', gramsPerUnit: 60 },
      availablePortions: [
        { amount: 1, unit: 'کفگیر', gramsPerUnit: 60 },
        { amount: 1, unit: 'بشقاب', gramsPerUnit: 250 },
        { amount: 1, unit: 'قاشق', gramsPerUnit: 20 },
        { amount: 100, unit: 'گرم', gramsPerUnit: 1 },
      ],
      nutritionPer100g: {
        calories: hasMeat ? 185 : 150,
        protein: hasMeat ? 8 : 3.5,
        carbs: hasMeat ? 26 : 30,
        fat: hasMeat ? 6 : 2,
        fiber: 1
      }
    };
  }

  if (cat === 'کباب' || name.includes('کباب') || name.includes('جوجه')) {
    const isChicken = name.includes('جوجه') || name.includes('مرغ');
    return {
      defaultPortion: { amount: 1, unit: 'سیخ', gramsPerUnit: 120 },
      availablePortions: [
        { amount: 1, unit: 'سیخ', gramsPerUnit: 120 },
        { amount: 1, unit: 'تکه', gramsPerUnit: 35 },
        { amount: 100, unit: 'گرم', gramsPerUnit: 1 },
      ],
      nutritionPer100g: {
        calories: isChicken ? 175 : 230,
        protein: isChicken ? 24 : 19,
        carbs: 1,
        fat: isChicken ? 8 : 16,
        fiber: 0
      }
    };
  }

  if (cat === 'نان' || name.includes('نان')) {
    return {
      defaultPortion: { amount: 1, unit: 'کف دست', gramsPerUnit: 30 },
      availablePortions: [
        { amount: 1, unit: 'کف دست', gramsPerUnit: 30 },
        { amount: 100, unit: 'گرم', gramsPerUnit: 1 },
        { amount: 1, unit: 'تکه', gramsPerUnit: 50 },
      ],
      nutritionPer100g: {
        calories: 265,
        protein: 8.5,
        carbs: 53,
        fat: 1.5,
        fiber: 3
      }
    };
  }

  if (cat === 'آش و سوپ' || name.includes('آش') || name.includes('سوپ')) {
    const isAsh = name.includes('آش');
    return {
      defaultPortion: { amount: 1, unit: 'کاسه', gramsPerUnit: 250 },
      availablePortions: [
        { amount: 1, unit: 'کاسه', gramsPerUnit: 250 },
        { amount: 1, unit: 'ملاقه', gramsPerUnit: 100 },
        { amount: 100, unit: 'گرم', gramsPerUnit: 1 },
      ],
      nutritionPer100g: {
        calories: isAsh ? 135 : 75,
        protein: isAsh ? 5 : 3.5,
        carbs: isAsh ? 18 : 10,
        fat: isAsh ? 4.5 : 2,
        fiber: 2.8
      }
    };
  }

  if (cat === 'صبحانه' || cat === 'تخم مرغ') {
    if (name.includes('تخم مرغ آب پز') || name.includes('اب پز')) {
      return {
        defaultPortion: { amount: 1, unit: 'عدد', gramsPerUnit: 55 },
        availablePortions: [
          { amount: 1, unit: 'عدد', gramsPerUnit: 55 },
          { amount: 100, unit: 'گرم', gramsPerUnit: 1 },
        ],
        nutritionPer100g: { calories: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0 }
      };
    }
    return {
      defaultPortion: { amount: 1, unit: 'پرس', gramsPerUnit: 150 },
      availablePortions: [
        { amount: 1, unit: 'پرس', gramsPerUnit: 150 },
        { amount: 1, unit: 'عدد', gramsPerUnit: 60 },
        { amount: 100, unit: 'گرم', gramsPerUnit: 1 },
      ],
      nutritionPer100g: { calories: 180, protein: 9, carbs: 12, fat: 11, fiber: 1.5 }
    };
  }

  if (cat === 'لبنیات') {
    if (name.includes('پنیر')) {
      return {
        defaultPortion: { amount: 1, unit: 'قوطی کبریت', gramsPerUnit: 30 },
        availablePortions: [
          { amount: 1, unit: 'قوطی کبریت', gramsPerUnit: 30 },
          { amount: 100, unit: 'گرم', gramsPerUnit: 1 },
        ],
        nutritionPer100g: { calories: 250, protein: 17, carbs: 2, fat: 20, fiber: 0 }
      };
    }
    if (name.includes('دوغ') || name.includes('شیر')) {
      return {
        defaultPortion: { amount: 1, unit: 'لیوان', gramsPerUnit: 240 },
        availablePortions: [
          { amount: 1, unit: 'لیوان', gramsPerUnit: 240 },
          { amount: 100, unit: 'میلی‌لیتر', gramsPerUnit: 1 },
        ],
        nutritionPer100g: { calories: name.includes('دوغ') ? 35 : 60, protein: 2.5, carbs: 3.5, fat: 2, fiber: 0 }
      };
    }
    return {
      defaultPortion: { amount: 1, unit: 'کاسه', gramsPerUnit: 150 },
      availablePortions: [
        { amount: 1, unit: 'کاسه', gramsPerUnit: 150 },
        { amount: 1, unit: 'قاشق', gramsPerUnit: 25 },
        { amount: 100, unit: 'گرم', gramsPerUnit: 1 },
      ],
      nutritionPer100g: { calories: 65, protein: 4, carbs: 5, fat: 3.5, fiber: 0 }
    };
  }

  if (cat === 'نوشیدنی ها') {
    const isTeaOrWater = name.includes('چای') || name.includes('آب') || name.includes('دمنوش');
    return {
      defaultPortion: { amount: 1, unit: 'لیوان', gramsPerUnit: 240 },
      availablePortions: [
        { amount: 1, unit: 'لیوان', gramsPerUnit: 240 },
        { amount: 1, unit: 'فنجان', gramsPerUnit: 150 },
        { amount: 100, unit: 'میلی‌لیتر', gramsPerUnit: 1 },
      ],
      nutritionPer100g: {
        calories: isTeaOrWater ? 2 : 45,
        protein: 0.1,
        carbs: isTeaOrWater ? 0.3 : 11,
        fat: 0,
        fiber: 0
      }
    };
  }

  if (cat === 'سبزیجات') {
    return {
      defaultPortion: { amount: 1, unit: 'کاسه', gramsPerUnit: 100 },
      availablePortions: [
        { amount: 1, unit: 'کاسه', gramsPerUnit: 100 },
        { amount: 1, unit: 'عدد', gramsPerUnit: 80 },
        { amount: 100, unit: 'گرم', gramsPerUnit: 1 },
      ],
      nutritionPer100g: { calories: 30, protein: 1.8, carbs: 5.5, fat: 0.4, fiber: 2.5 }
    };
  }

  if (cat === 'میوه ها' || cat === 'میوه خشک') {
    const isDry = cat === 'میوه خشک';
    return {
      defaultPortion: { amount: 1, unit: 'عدد', gramsPerUnit: isDry ? 15 : 120 },
      availablePortions: [
        { amount: 1, unit: 'عدد', gramsPerUnit: isDry ? 15 : 120 },
        { amount: 100, unit: 'گرم', gramsPerUnit: 1 },
      ],
      nutritionPer100g: {
        calories: isDry ? 280 : 55,
        protein: isDry ? 2.5 : 0.8,
        carbs: isDry ? 68 : 14,
        fat: isDry ? 0.5 : 0.2,
        fiber: isDry ? 5 : 2.4
      }
    };
  }

  if (cat === 'مغزها و دانه ها') {
    return {
      defaultPortion: { amount: 1, unit: 'مشت', gramsPerUnit: 30 },
      availablePortions: [
        { amount: 1, unit: 'مشت', gramsPerUnit: 30 },
        { amount: 10, unit: 'عدد', gramsPerUnit: 25 },
        { amount: 100, unit: 'گرم', gramsPerUnit: 1 },
      ],
      nutritionPer100g: { calories: 630, protein: 18, carbs: 16, fat: 58, fiber: 7 }
    };
  }

  // Default fallback for meals, fastfood, composite, meat, poultry, etc.
  return {
    defaultPortion: { amount: 1, unit: 'پرس', gramsPerUnit: 200 },
    availablePortions: [
      { amount: 1, unit: 'پرس', gramsPerUnit: 200 },
      { amount: 1, unit: 'تکه', gramsPerUnit: 80 },
      { amount: 100, unit: 'گرم', gramsPerUnit: 1 },
    ],
    nutritionPer100g: { calories: 190, protein: 11, carbs: 16, fat: 9, fiber: 2 }
  };
}

// Generate foods data
const foods = masterCat.rows.map(row => {
  const [fid, nameFa, aliasesFa, cat, subcat, foodType, ingsFa, tagsFa] = row;
  const aliases = aliasesFa ? aliasesFa.split('|').map(s => s.trim()).filter(Boolean) : [];
  const ings = ingsFa ? ingsFa.split('|').map(s => s.trim()).filter(Boolean) : [];
  const tags = tagsFa ? tagsFa.split('|').map(s => s.trim()).filter(Boolean) : [];
  const ingIds = foodToIngMap.get(fid) || [];
  const visual = visualMap.get(fid) || { visualPriority: 'B', visualType: 'generic' };
  const visualAsset = resolveVisualAsset(cat, subcat, foodType, nameFa);
  const { defaultPortion, availablePortions, nutritionPer100g } = resolvePortionsAndNutrition(cat, subcat, foodType, nameFa);

  return {
    id: fid,
    name: nameFa,
    aliases,
    category: cat,
    subcategory: subcat,
    foodType: foodType || 'main_dish',
    visualAsset,
    visualPriority: visual.visualPriority,
    visualType: visual.visualType,
    defaultPortion,
    availablePortions,
    nutritionPer100g,
    ingredients: ings,
    ingredientIds: ingIds,
    tags
  };
});

// Generate ingredients data
const ingredients = ingMaster.rows.map(row => {
  const [iid, nameFa, aliasesFa, cat] = row;
  const aliases = aliasesFa ? aliasesFa.split('|').map(s => s.trim()).filter(Boolean) : [];
  return {
    id: iid,
    nameFa,
    aliasesFa: aliases,
    category: cat
  };
});

// Write generated file
const fileContent = `/**
 * AUTO-GENERATED FROM food-data/ CANONICAL DATASETS.
 * DO NOT EDIT DIRECTLY.
 * Source of Truth:
 * - food-data/Master-Food-Catalog-FINAL.csv (626 foods)
 * - food-data/Ingredient-Master-FINAL.csv (222 ingredients)
 * - food-data/Food-Ingredient-Mapping-FINAL.csv (1748 mappings)
 * - food-data/Visual-Selection-FINAL.csv (626 visual entries)
 */

import { Food } from '../models';

export interface CanonicalIngredient {
  id: string;
  nameFa: string;
  aliasesFa: string[];
  category: string;
}

export interface CanonicalVisualSelection {
  foodId: string;
  visualPriority: 'A' | 'B' | 'C';
  visualType: 'dedicated' | 'generic';
}

export const CANONICAL_FOOD_COUNT = ${foods.length};
export const CANONICAL_INGREDIENT_COUNT = ${ingredients.length};
export const CANONICAL_MAPPING_COUNT = ${mapping.rows.length};

export const CANONICAL_INGREDIENTS: CanonicalIngredient[] = ${JSON.stringify(ingredients, null, 2)};

export const CANONICAL_FOODS: Food[] = ${JSON.stringify(foods, null, 2)};
`;

fs.writeFileSync(OUTPUT_FILE, fileContent, 'utf8');
console.log(`Successfully generated ${OUTPUT_FILE} (${foods.length} foods, ${ingredients.length} ingredients)!`);
