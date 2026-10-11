import { MealType, Portion } from './models';
import { FoodCatalogService } from './FoodCatalogService';
import { IngredientService } from './IngredientService';
import { PersonalContext } from '../context/PersonalContextService';

export type MealContextType = 'breakfast' | 'snack_morning' | 'lunch' | 'snack_afternoon' | 'dinner' | 'snack_night';

export interface MealRecommendationAction {
  label: string;
  actionId: string;
  payload?: any;
}

export type MealRecommendation = {
  id: string;
  foodId: string; // Canonical Food ID (e.g. "IR-KHORESH-001")
  title: string;
  description?: string;
  suggestedPortion?: Portion;
  
  // "نسخه وعده" additions
  sideFoodId?: string;
  beverageId?: string;
  musicMood?: string;
  lifestyleTip?: string;
  
  mealContext?: MealContextType;
  priority: number;
  reason?: string;
  action?: MealRecommendationAction;

  alternativeFoodId?: string;
};

export class MealRecommendationService {
  static determineMealContext(hour: number): MealContextType {
    if (hour >= 5 && hour < 10) return 'breakfast';
    if (hour >= 10 && hour < 12) return 'snack_morning';
    if (hour >= 12 && hour < 16) return 'lunch';
    if (hour >= 16 && hour < 19) return 'snack_afternoon';
    if (hour >= 19 && hour < 22) return 'dinner';
    return 'snack_night';
  }

  // --- PHASE 5: HARD EXCLUSION SAFETY FILTER ---
  // Operates through canonical Ingredient Master + Food-Ingredient Mapping
  static isSafe(foodId: string, context: PersonalContext): boolean {
    const exclusions = context.preferences.foodExclusions || [];
    if (exclusions.length === 0) return true;
    
    const food = FoodCatalogService.getFoodById(foodId);
    if (!food) return false;

    // Hard exclusion: Food -> Ingredient IDs -> Ingredient Master
    return !IngredientService.isFoodExcluded(food, exclusions);
  }

  // --- PHASE 6: SOFT DISLIKE FILTER ---
  static isDisliked(foodId: string, context: PersonalContext): boolean {
    const dislikes = context.preferences.foodDislikes || [];
    if (dislikes.length === 0) return false;
    
    const food = FoodCatalogService.getFoodById(foodId);
    if (!food) return false;

    return IngredientService.isFoodDisliked(food, dislikes);
  }

  static getRecommendations(context: PersonalContext, currentHour: number = new Date().getHours()): MealRecommendation[] {
    const mealContext = this.determineMealContext(currentHour);
    const recommendations: MealRecommendation[] = [];
    const { preferences, nutrition } = context;

    const hasLoggedCurrentMealContext = nutrition?.today?.meals.some(m => m.type === mealContext);
    if (hasLoggedCurrentMealContext && ['breakfast', 'lunch', 'dinner'].includes(mealContext)) {
      return [];
    }

    // Canonical baseline options based on time of day
    let primaryOptions: string[] = [];
    let sideOptions: string[] = [];
    let beverageOptions: string[] = [];

    if (mealContext === 'breakfast') {
      primaryOptions = [
        'IR-BREAKFAST-001', // املت
        'IR-BREAKFAST-006', // نیمرو
        'IR-BREAKFAST-007', // تخم مرغ آب پز
        'IR-BREAKFAST-013', // عدسی
        'IR-BREAD-001',      // نان سنگک
        'IR-BREAD-002',      // نان بربری
        'IR-NANI-002',       // نان و پنیر و گردو
        'IR-NANI-003',       // نان و پنیر و سبزی
        'IR-BREAKFAST-003', // کوکو سیب زمینی
        'IR-BREAKFAST-004', // کوکو سبزی
        'IR-BREAKFAST-009'  // پنیر و گردو
      ];
      sideOptions = [
        'IR-DAIRY-006', // پنیر لیقوان
        'IR-DAIRY-005', // پنیر سفید
        'IR-NUT-001',   // گردو
        'IR-VEG-018',   // سبزی خوردن
        'IR-COMP-003'   // پنیر و خرما
      ];
      beverageOptions = [
        'IR-DRINK-002', // چای
        'IR-DRINK-003', // چای سبز
        'IR-DAIRY-001'  // شیر
      ];
    } else if (mealContext === 'lunch') {
      primaryOptions = [
        'IR-KHORESH-001', // قورمه سبزی
        'IR-KHORESH-002', // قیمه
        'IR-KHORESH-004', // خورش فسنجان
        'IR-RICE-006',    // عدس پلو
        'IR-RICE-005',    // لوبیا پلو
        'IR-KABAB-004',   // جوجه کباب
        'IR-KABAB-001',   // کباب کوبیده
        'IR-MEAL-001',    // آبگوشت
        'IR-RICE-003',    // زرشک پلو با مرغ
        'IR-RICE-004',    // باقالی پلو با مرغ
        'IR-RICE-012',    // سبزی پلو با ماهی
        'IR-KHORESH-003', // قیمه بادمجان
        'IR-RICE-011'     // کلم پلو
      ];
      sideOptions = [
        'IR-COMP-001',  // ماست و خیار
        'IR-VEG-018',   // سبزی خوردن
        'IR-DAIRY-002', // ماست
        'IR-INTL-017',  // سالاد فصل
        'IR-COMP-002'   // ماست و موسیر
      ];
      beverageOptions = [
        'IR-DAIRY-014', // دوغ
        'IR-DRINK-002'  // چای
      ];
    } else if (mealContext === 'dinner') {
      primaryOptions = [
        'IR-MEAL-013',      // میرزا قاسمی
        'IR-MEAL-022',      // حلیم بادمجان
        'IR-BREAKFAST-001', // املت
        'IR-BREAKFAST-013', // عدسی
        'IR-ASH-001',       // آش رشته
        'IR-SOUP-001',      // سوپ جو
        'IR-SOUP-002',      // سوپ مرغ
        'IR-NANI-012',      // نان و املت
        'IR-MEAL-011',      // کتلت گوشت
        'IR-MEAL-012',      // کتلت سیب زمینی
        'IR-KABAB-004',     // جوجه کباب
        'IR-BREAD-001'      // نان سنگک
      ];
      sideOptions = [
        'IR-VEG-018',   // سبزی خوردن
        'IR-COMP-001',  // ماست و خیار
        'IR-DAIRY-002', // ماست
        'IR-INTL-017'   // سالاد فصل
      ];
      beverageOptions = [
        'IR-DAIRY-014', // دوغ
        'IR-DRINK-002', // چای
        'IR-DRINK-008'  // دمنوش بابونه
      ];
    } else {
      primaryOptions = [
        'IR-NUT-001',   // گردو
        'IR-FRUIT-001', // سیب
        'IR-FRUIT-002', // پرتقال
        'IR-FRUIT-003', // موز
        'IR-NUT-002',   // بادام
        'IR-DAIRY-006', // پنیر لیقوان
        'IR-DRIED-001', // کشمش
        'IR-DRIED-002', // خرما
        'IR-DAIRY-002', // ماست
        'IR-VEG-018'    // سبزی خوردن
      ];
      sideOptions = [];
      beverageOptions = [
        'IR-DRINK-002', // چای
        'IR-DRINK-003', // چای سبز
        'IR-DRINK-008'  // دمنوش بابونه
      ];
    }

    // PHASE 5: Hard exclusions must NEVER appear in primary recommendations or alternatives
    primaryOptions = primaryOptions.filter(id => this.isSafe(id, context));
    sideOptions = sideOptions.filter(id => this.isSafe(id, context));
    beverageOptions = beverageOptions.filter(id => this.isSafe(id, context));

    if (primaryOptions.length === 0) return []; // All options excluded by user's hard exclusions

    // PHASE 6: Soft dislike handling.
    // Disliked foods should normally be excluded or heavily deprioritized.
    // Do NOT allow disliked foods to silently become primary recommendations merely because they score well.
    const nonDislikedPrimaries = primaryOptions.filter(id => !this.isDisliked(id, context));
    const candidatePrimaries = nonDislikedPrimaries.length > 0 ? nonDislikedPrimaries : [];

    // If all suitable options are disliked by the user, we honestly do not recommend a disliked food as primary
    if (candidatePrimaries.length === 0) {
      return [];
    }

    // Helper to score options deterministically based on context
    const scoreOption = (id: string): number => {
      let priority = 5; // Default middle priority
      const food = FoodCatalogService.getFoodById(id);
      if (!food) return priority;

      // Primary goal alignment
      if (preferences.primaryGoal === 'weight_loss' && (food.category === 'سبزیجات' || food.category === 'تخم مرغ' || food.category === 'حبوبات')) {
        priority -= 1;
      }
      
      const hasTraditional = preferences.taste?.includes('traditional');
      if (hasTraditional && (food.tags?.includes('سنتی') || food.category === 'خورش‌ها' || food.category === 'غذاهای سنتی')) {
        priority -= 1;
      }

      // Repetition avoidance: if logged today
      const loggedToday = nutrition?.today?.meals.some(m => m.entries.some(e => e.foodId === id));
      if (loggedToday) {
        priority += 5; // Penalty for repetition today
      }

      return priority;
    };

    // Sort candidates by priority (lower number is higher priority)
    candidatePrimaries.sort((a, b) => scoreOption(a) - scoreOption(b));
    
    // Build recommendation
    const bestPrimary = candidatePrimaries[0];
    const safeSides = sideOptions.filter(id => !this.isDisliked(id, context));
    const bestSide = safeSides.length > 0 ? safeSides.sort((a, b) => scoreOption(a) - scoreOption(b))[0] : undefined;

    const safeBevs = beverageOptions.filter(id => !this.isDisliked(id, context));
    const bestBev = safeBevs.length > 0 ? safeBevs.sort((a, b) => scoreOption(a) - scoreOption(b))[0] : undefined;
    
    // Find non-disliked alternative
    const altPrimary = candidatePrimaries.find(id => id !== bestPrimary);

    let musicMood = 'موسیقی بی‌کلام آرام';
    let lifestyleTip = '۱۰ تا ۱۵ دقیقه قدم زدن در صورت امکان';
    let reason = 'بر اساس شرایط الانت و زمان فعلی روز';

    if (context.current.energy !== undefined && context.current.energy < 5) {
      musicMood = 'موسیقی ملایم و آرام‌بخش';
      lifestyleTip = 'کمی استراحت و تنفس عمیق بعد از این وعده';
      reason = 'چون به نظر می‌رسه امروز کمی خسته‌ای، این انتخاب سبک و انرژی‌بخش می‌تونه مناسب باشه.';
    } else if (preferences.primaryGoal === 'weight_loss') {
      reason = 'این ترکیب سبک‌تره و با اهداف تناسب اندامت هماهنگه.';
    }

    if (bestPrimary) {
      const mainFood = FoodCatalogService.getFoodById(bestPrimary)!;
      recommendations.push({
        id: `rec_${bestPrimary}_${Date.now()}`,
        foodId: bestPrimary,
        title: mainFood.name,
        description: 'نسخه پیشنهادی امروزت',
        suggestedPortion: mainFood.defaultPortion,
        sideFoodId: bestSide,
        beverageId: bestBev,
        musicMood,
        lifestyleTip,
        mealContext,
        priority: scoreOption(bestPrimary),
        reason,
        alternativeFoodId: altPrimary,
        action: {
          label: 'انتخاب این نسخه',
          actionId: 'select_food',
          payload: { foodId: bestPrimary }
        }
      });
    }

    return recommendations;
  }
}
