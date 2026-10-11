import { getDaysAgoDate } from '../../../utils/date';
import { PersonalContext } from '../../context/PersonalContextService';
import { useBodyStore } from '../../body/store';
import { useMovementStore } from '../../movement/store';
import { useWellnessStore } from '../../wellness/store';
import { useNutritionStore } from '../../nutrition/store';
import { DailyVersion } from '../../life-version/models';
import { ACTIVITY_LABELS } from '../../movement/models';

export type TimeWindow = 7 | 30 | 90;

export interface InsightCard {
  id: string;
  category: 'body' | 'movement' | 'nutrition' | 'wellness' | 'general';
  title: string;
  description: string;
  action?: {
    label: string;
    route: string;
  };
}

export interface JourneyInsights {
  heroSummary: string;
  changes: string[];
  positivePatterns: string[];
  cards: InsightCard[];
  hasData: boolean;
}

export function generateJourneyInsights(
  timeWindow: TimeWindow,
  context: PersonalContext,
  currentVersion?: DailyVersion
): JourneyInsights {
  const bodyEntries = useBodyStore.getState().entries;
  const movementEntries = useMovementStore.getState().entries;
  const wellnessEntries = useWellnessStore.getState().entries;
  const nutritionMeals = useNutritionStore.getState().mealsByDate;

  // Filter for the requested time window
  const cutoffDate = getDaysAgoDate(timeWindow);
  
  const recentBody = bodyEntries.filter(e => new Date(e.date) >= cutoffDate);
  const recentMovement = movementEntries.filter(e => new Date(e.date) >= cutoffDate);
  const recentWellness = wellnessEntries.filter(e => new Date(e.date) >= cutoffDate);
  
  const recentNutritionDays = Object.keys(nutritionMeals).filter(dateStr => new Date(dateStr) >= cutoffDate);
  
  const hasData = recentBody.length > 0 || recentMovement.length > 0 || recentWellness.length > 0 || recentNutritionDays.length > 0;

  const changes: string[] = [];
  const positivePatterns: string[] = [];
  const cards: InsightCard[] = [];

  if (!hasData) {
    return {
      heroSummary: 'مسیرت از همین امروز شروع می‌شه.',
      changes: [],
      positivePatterns: [],
      cards: [
        {
          id: 'start_movement',
          category: 'movement',
          title: 'اولین قدم',
          description: 'می‌تونی با ثبت یک حرکت کوتاه شروع کنی.',
          action: { label: 'ثبت حرکت', route: '/movement' }
        },
        {
          id: 'start_wellness',
          category: 'wellness',
          title: 'حال امروز',
          description: 'ثبت حال امروزت به ما کمک می‌کنه بیشتر بشناسیمت.',
          action: { label: 'ثبت حال', route: '/wellness' } // Actually handled via sheet, will adjust in UI
        }
      ],
      hasData: false
    };
  }


  // Pattern Injection
  if (context.memories) {
    const activeMoves = context.memories.filter(m => m.category === 'movement' && m.status === 'active' && m.confidence !== 'low');
    if (activeMoves.length > 0) {
      const names = activeMoves.map(m => ACTIVITY_LABELS[m.payload?.activityType as keyof typeof ACTIVITY_LABELS] || m.payload?.activityType).join(' و ');
      positivePatterns.push(`در هفته‌های اخیر، ثبت ${names} در مسیرت بیشتر تکرار شده.`);
    }

    const decliningMoves = context.memories.filter(m => m.category === 'movement' && m.status === 'declining');
    if (decliningMoves.length > 0) {
      const names = decliningMoves.map(m => ACTIVITY_LABELS[m.payload?.activityType as keyof typeof ACTIVITY_LABELS] || m.payload?.activityType).join(' و ');
      changes.push(`${names} قبلاً یکی از حرکت‌های پرتکرارت بوده، اما اخیراً کمتر ثبتش کردی.`);
    }
  }

  // More Pattern Injection
  const inferred = context.patterns.inferred;
  if (inferred) {
    if (inferred.wellness.typicalSleepQuality === 'high' && inferred.wellness.confidence !== 'low' && inferred.wellness.confidence !== 'none') {
      positivePatterns.push('کیفیت خوابت تو روزهای اخیر خوب و پایدار بوده.');
    } else if (inferred.wellness.typicalEnergy === 'high' && inferred.wellness.confidence !== 'low' && inferred.wellness.confidence !== 'none') {
      positivePatterns.push('در این بازه، بیشتر روزها انرژی بالایی داشتی.');
    }
  }

  // 1. Movement Insights
  if (recentMovement.length > 0) {
    const activeDaysCount = new Set(recentMovement.map(m => m.date.split('T')[0])).size;
    if (activeDaysCount >= Math.floor(timeWindow * 0.4)) { // active ~40% of the time
      positivePatterns.push(`در ${timeWindow} روز گذشته، ${activeDaysCount} روز حرکت داشتی.`);
    }
    cards.push({
      id: 'move_card',
      category: 'movement',
      title: 'روند حرکت',
      description: `در ${timeWindow} روز گذشته، ${activeDaysCount} روز رو به حرکت اختصاص دادی.`,
    });
  }

  // 2. Nutrition Insights
  if (recentNutritionDays.length > 0) {
    const mealCount = recentNutritionDays.reduce((acc, date) => acc + nutritionMeals[date].length, 0);
    if (recentNutritionDays.length > Math.floor(timeWindow * 0.5)) {
      positivePatterns.push(`ثبت غذا در این بازه منظم بوده (${recentNutritionDays.length} روز).`);
    }
    cards.push({
      id: 'nut_card',
      category: 'nutrition',
      title: 'روند تغذیه',
      description: `در ${timeWindow} روز اخیر، وعده‌های ${recentNutritionDays.length} روز رو ثبت کردی.`,
    });
  }

  // 3. Wellness Insights
  if (recentWellness.length > 0) {
    const checkinDays = recentWellness.length;
    if (checkinDays >= Math.floor(timeWindow * 0.5)) {
      positivePatterns.push(`ارتباطت با احوالات درونی‌ات پیوسته بوده (${checkinDays} روز ثبت حال).`);
    }
    cards.push({
      id: 'well_card',
      category: 'wellness',
      title: 'ثبت احوالات',
      description: `در ${timeWindow} روز گذشته، ${checkinDays} روز حال امروزت رو ثبت کردی.`,
    });
  }

  // 4. Body Insights
  if (recentBody.length >= 2) {
    const trend = useBodyStore.getState().getTrend(timeWindow);
    if (trend.direction !== 'insufficient_data') {
      const changeText = trend.direction === 'down' ? 'کاهشی' : trend.direction === 'up' ? 'افزایشی' : 'تقریباً ثابت';
      changes.push(`روند وزنت در این مدت ${changeText} بوده.`);
      
      cards.push({
        id: 'body_card',
        category: 'body',
        title: 'روند تغییرات بدن',
        description: `وزنت در ${timeWindow} روز اخیر روندی ${changeText} داشته.`,
      });
    }
  }

  // Determine Hero Summary
  let heroSummary = 'این روزها داری بیشتر حواست به خودت هست.';
  if (positivePatterns.length >= 2) {
    heroSummary = 'این روزها داری ریتم خوب و پایداری رو طی می‌کنی.';
  } else if (recentMovement.length > 0 && recentMovement.length < 3) {
    heroSummary = 'این روزها تازه داری ریتم حرکتت رو پیدا می‌کنی.';
  } else if (recentBody.length > 0 && !recentMovement.length && !recentNutritionDays.length) {
    heroSummary = 'تمرکزت بیشتر روی تغییرات وزنه. اضافه کردن حرکت می‌تونه مسیر رو کامل‌تر کنه.';
  }

  return {
    heroSummary,
    changes,
    positivePatterns,
    cards,
    hasData: true
  };
}
