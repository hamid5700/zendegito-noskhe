import fs from 'fs';
import { DEMO_FOOD_DB } from './src/features/nutrition/seed-data.ts';

console.log(`Total items: ${DEMO_FOOD_DB.length}\n`);
console.log('food_id | name | category | aliases | ingredients | tags | visualAsset');
DEMO_FOOD_DB.forEach(i => {
  const aliases = (i.aliases || []).join(', ');
  const ingredients = (i.ingredients || []).join(', ');
  const tags = (i.tags || []).join(', ');
  console.log(`${i.id} | ${i.name} | ${i.category || ''} | ${aliases} | ${ingredients} | ${tags} | ${i.visualAsset || ''}`);
});
