/**
 * DETERMINISTIC FOOD VISUAL RESOLVER
 * Zendegito: Noskhe
 *
 * The canonical relationship is: Food ID <-> Visual Asset.
 * The Food ID is the sole source of truth.
 *
 * This resolver maps Food IDs to assets deterministically without relying on:
 * - array index
 * - sheet position
 * - visual filename guessing
 * - Persian display name
 * - category heuristics
 * - image order
 *
 * Fallback Hierarchy:
 * 1. Specific Asset (625 primary food assets across 25 sheets)
 * 2. Ingredient Fallback (e.g. IR-BASIC-030 Rose Water -> 🌸 native ingredient fallback)
 * 3. Category / Generic Fallback (Context-aware category emoji)
 * 4. Neutral Placeholder ('🍽')
 */

import { ResolvedFoodVisual } from './types';
import {
  CANONICAL_FOOD_VISUAL_MAP,
  SPECIAL_ROSE_WATER_ID,
} from './canonicalVisualMap';
import { getSheetMeta } from './sheetRegistry';

/**
 * Dedicated special visual assets for items outside or overriding sprite sheets.
 * Rose water (IR-ING-ROSEWATER / IR-BASIC-030) maps to its dedicated image.
 */
export const SPECIAL_VISUAL_MAP: Record<string, { imageUrl: string; name: string; category: string }> = {
  'IR-ING-ROSEWATER': {
    imageUrl: '/food-assets/special/IR-ING-ROSEWATER.jpg',
    name: 'گلاب',
    category: 'مواد غذایی پایه',
  },
  'IR-BASIC-030': {
    imageUrl: '/food-assets/special/IR-ING-ROSEWATER.jpg',
    name: 'گلاب',
    category: 'مواد غذایی پایه',
  },
};

/**
  * Fallback emoji dictionary by canonical Persian food categories.
  * Note: Beverages never fall back to tea emojis.
  */
const CATEGORY_FALLBACK_EMOJIS: Record<string, string> = {
  'خورش‌ها': '🍲',
  'غذاهای ایرانی': '🍲',
  'غذاهای محلی ایران': '🍲',
  'پلو و برنج': '🍚',
  'کباب': '🍢',
  'آش و سوپ': '🥣',
  'نان': '🍞',
  'صبحانه': '🍳',
  'تخم مرغ': '🥚',
  'غذاهای نانی': '🥪',
  'غذاهای ترکیبی': '🥪',
  'گوشت': '🥩',
  'مرغ': '🍗',
  'ماهی و غذاهای دریایی': '🐟',
  'حبوبات': '🫘',
  'لبنیات': '🥛',
  'سبزیجات': '🥗',
  'میوه ها': '🍎',
  'میوه‌ها': '🍎',
  'دسرها': '🍰',
  'شیرینی ها': '🍰',
  'شیرینی‌ها': '🍰',
  'آجیل و خشکبار': '🥜',
  'فست فود': '🍔',
  'ماکارونی و پاستا': '🍝',
  'چاشنی و مخلفات': '🥗',
  'ادویه جات': '🧂',
  'مواد غذایی پایه': '🧂',
};

/**
 * Returns a graceful category or name fallback emoji.
 * Does NOT use tea emoji for beverages.
 */
export function getCategoryFallbackEmoji(category?: string, name?: string): string {
  if (name) {
    if (name.includes('قورمه') || name.includes('قیمه') || name.includes('فسنجان')) return '🍲';
    if (name.includes('کباب') || name.includes('جوجه') || name.includes('شیشلیک') || name.includes('کوبیده')) return '🍢';
    if (name.includes('سنگک') || name.includes('بربری') || name.includes('لواش') || name.includes('نان')) return '🍞';
    if (name.includes('پلو') || name.includes('برنج') || name.includes('ته چین')) return '🍚';
    if (name.includes('آش') || name.includes('سوپ') || name.includes('حلیم')) return '🥣';
    if (name.includes('املت') || name.includes('نیمرو') || name.includes('تخم مرغ')) return '🍳';
    if (name.includes('ماهی') || name.includes('میگو')) return '🐟';
    if (name.includes('مرغ')) return '🍗';
    if (name.includes('گوشت') || name.includes('استیک')) return '🥩';
    if (name.includes('ماست') || name.includes('دوغ')) return '🥛';
    if (name.includes('پنیر')) return '🧀';
    if (name.includes('سالاد') || name.includes('سبزی')) return '🥗';
    if (name.includes('کیک') || name.includes('شیرینی') || name.includes('حلوا')) return '🍰';
    if (name.includes('پیتزا') || name.includes('برگر') || name.includes('ساندویچ')) return '🍔';
    if (name.includes('ماکارونی') || name.includes('پاستا')) return '🍝';
  }

  if (category && CATEGORY_FALLBACK_EMOJIS[category]) {
    return CATEGORY_FALLBACK_EMOJIS[category];
  }

  return '🍽';
}

/**
 * Deterministically resolves the visual asset representation for any given Food ID.
 *
 * @param foodId The canonical Food ID (e.g. "IR-KHORESH-001", "IR-ING-ROSEWATER", "IR-BASIC-030")
 * @returns ResolvedFoodVisual
 */
export function resolveFoodVisual(foodId?: string | null): ResolvedFoodVisual {
  if (!foodId) {
    return {
      kind: 'placeholder',
      foodId: '',
      fallbackEmoji: '🍽',
      isDedicated: false,
      isSpecial: false,
    };
  }

  const cleanId = foodId.trim();

  // 1. Dedicated special assets (e.g. Rose Water IR-ING-ROSEWATER / IR-BASIC-030)
  const specialRecord = SPECIAL_VISUAL_MAP[cleanId];
  if (specialRecord) {
    return {
      kind: 'special',
      foodId: cleanId,
      foodName: specialRecord.name,
      category: specialRecord.category,
      imageUrl: specialRecord.imageUrl,
      fallbackEmoji: '',
      isDedicated: true,
      isSpecial: true,
    };
  }

  // 2. Primary Sheet-based Asset (625 canonical foods)
  const canonicalRecord = CANONICAL_FOOD_VISUAL_MAP[cleanId];
  if (canonicalRecord) {
    const sheetMeta = getSheetMeta(canonicalRecord.sheetId);
    return {
      kind: 'sheet',
      foodId: cleanId,
      foodName: canonicalRecord.name,
      category: canonicalRecord.category,
      sheetId: canonicalRecord.sheetId,
      sheetUrl: sheetMeta.url,
      row: canonicalRecord.row,
      column: canonicalRecord.column,
      cellIndex: canonicalRecord.cellIndex,
      focalPoint: canonicalRecord.focalPoint,
      fallbackEmoji: getCategoryFallbackEmoji(canonicalRecord.category, canonicalRecord.name),
      isDedicated: canonicalRecord.visualType === 'dedicated',
      isSpecial: false,
    };
  }

  // 3. Category / Generic Fallback
  const fallbackEmoji = getCategoryFallbackEmoji(undefined, undefined);
  return {
    kind: 'category_fallback',
    foodId: cleanId,
    fallbackEmoji,
    isDedicated: false,
    isSpecial: false,
  };
}

/**
 * Returns true if a given food ID maps directly to one of the 625 primary visual sheet assets.
 */
export function isFoodVisualMapped(foodId: string): boolean {
  return Boolean(CANONICAL_FOOD_VISUAL_MAP[foodId]);
}

/**
 * Returns true if a given food ID is a special asset (e.g. Rose Water).
 */
export function isSpecialFoodVisual(foodId: string): boolean {
  return foodId in SPECIAL_VISUAL_MAP || foodId === SPECIAL_ROSE_WATER_ID;
}
