import { DailyVersion, Recommendation } from './models';
import { PersonalContext } from '../context/PersonalContextService';
import { ACTIVITY_LABELS } from '../movement/models';

export function generateDeterministicDailyVersion(context: PersonalContext): DailyVersion {
  if (!context.preferences.primaryGoal) {
    return {
      id: 'empty',
      date: new Date().toISOString(),
      summary: '',
      priorities: [],
      status: 'empty'
    };
  }

  const recommendations: Recommendation[] = [];
  const { preferences, current, patterns, contextConfidence } = context;
  const hour = new Date().getHours();
  
  const isMorning = hour >= 5 && hour < 12;
  const isAfternoon = hour >= 12 && hour < 18;
  const isEvening = hour >= 18 && hour < 22;
  const isNight = hour >= 22 || hour < 5;
  
  const isEnergyLow = current.energy === 1 || current.energy === 2;
  const isEnergyHigh = current.energy === 4 || current.energy === 5;
  const isSleepPoor = current.sleepQuality === 1 || current.sleepQuality === 2;
  
  const hasTimeObstacle = preferences.obstacles?.includes('lack_of_time') || preferences.obstacles?.includes('overwork');
  const prefersIntenseMovement = preferences.taste?.includes('intense_workout');
  const prefersNature = preferences.taste?.includes('nature');
  const prefersSocial = preferences.lifeTaste?.includes('social_connection');
  
  const goalWeightLoss = preferences.primaryGoal === 'weight_loss' || preferences.primaryGoal === 'fitness';
  const goalEnergy = preferences.primaryGoal === 'energy' || preferences.primaryGoal === 'better_sleep';
  
  // COMPLETION AWARENESS
  const hasMoved = current.movementMinutes > 0;
  const hasLoggedBreakfast = current.loggedMeals.includes('breakfast');
  const hasLoggedLunch = current.loggedMeals.includes('lunch');
  const hasLoggedDinner = current.loggedMeals.includes('dinner');
  const hasCompletedMajorActions = hasMoved && current.hasLoggedFood && current.hasLoggedWellness;

  const isLateStart = (isEvening || isNight) && !hasMoved && !current.hasLoggedFood && !current.hasLoggedWellness;

  // LATE START GRACEFUL DEGRADATION
  if (isLateStart) {
    recommendations.push({
      id: 'rec_late_start',
      category: 'lifestyle',
      title: 'شروع دیرهنگام',
      description: 'برای امشب لازم نیست روزت رو از اول شروع کنی. یک قدم ساده برای جمع کردن امشب کافیه.',
      action: { label: 'ثبت حال', actionId: 'log_wellness' },
      priority: 'high'
    });
  } else {
    // 1. Core Wellness / Context Overrides 
    // If not already checked in today OR if it's explicitly low and they haven't moved yet
    if ((isEnergyLow || isSleepPoor) && !current.hasLoggedWellness && !hasCompletedMajorActions) {
      recommendations.push({
        id: 'rec_wellness_low',
        category: 'wellness',
        title: 'شروع آرام‌تر',
        description: 'انرژیت رو پایین ثبت کردی. امروز رو کمی با ملایمت بیشتری پیش ببر.',
        action: { label: 'ثبت یک مکث', actionId: 'log_wellness' },
        priority: 'high'
      });
    } else if (isEnergyHigh && !hasMoved && (isMorning || isAfternoon)) {
      recommendations.push({
        id: 'rec_wellness_high',
        category: 'movement',
        title: 'استفاده از انرژی امروز',
        description: prefersIntenseMovement 
          ? 'انرژیت بالاست! امروز بهترین فرصته برای یک تمرین پرفشارتر.' 
          : 'انرژیت بالاست! وقت خوبیه که یک حرکت کامل‌تر رو به امروزت اضافه کنی.',
        action: { label: 'شروع حرکت', actionId: 'log_movement' },
        priority: 'high'
      });
    }

    // 2. Goal vs Routine vs State Conflicts
    if (goalEnergy && preferences.routine?.includes('late_night') && (isEvening || isNight) && !hasCompletedMajorActions) {
      recommendations.push({
        id: 'rec_sleep_prep',
        category: 'sleep',
        title: 'آماده شدن برای فردا',
        description: 'امشب فقط ۳۰ دقیقه زودتر از عادت معمولت برای خواب آماده بشو تا فردا انرژی بیشتری داشته باشی.',
        priority: 'medium'
      });
    }

    // 3. Movement Context (ADAPTIVE)
    if (!hasMoved) {
      // Is movement appropriate right now? (Skip if night time and energy is low)
      if (!(isNight && isEnergyLow)) {
        if (patterns.movementActiveDaysThisWeek < 3 && !isNight) {
          if (isEnergyLow) {
            recommendations.push({
              id: 'rec_move_low_energy',
              category: 'movement',
              title: 'فقط کمی حرکت',
              description: 'با توجه به خستگی امروزت، لازم نیست به خودت فشار بیاری. ۱۰ دقیقه کشش ملایم کافیه.',
              action: { label: 'ثبت حرکت', actionId: 'log_movement' },
              priority: 'medium'
            });
          } else {
            recommendations.push({
              id: 'rec_move_general',
              category: 'movement',
              title: 'برگشتن به ریتم',
              description: (() => {
                const activeMoveMem = context.memories?.find(m => m.category === 'movement' && m.status === 'active' && m.confidence !== 'low');
                const decliningMoveMem = context.memories?.find(m => m.category === 'movement' && m.status === 'declining');
                
                if (decliningMoveMem && decliningMoveMem.payload?.activityType) {
                  const actName = ACTIVITY_LABELS[decliningMoveMem.payload.activityType as keyof typeof ACTIVITY_LABELS] || 'این حرکت';
                  return `قبلاً ${actName} بیشتر تو برنامه‌ات بود اما اخیراً کمتر شده. دوست داری امروز دوباره امتحانش کنی؟`;
                }
                
                if (activeMoveMem && activeMoveMem.payload?.activityType) {
                  const actName = ACTIVITY_LABELS[activeMoveMem.payload.activityType as keyof typeof ACTIVITY_LABELS] || 'این حرکت';
                  return `این روزها ${actName} بیشتر توی ریتمت بوده؛ می‌تونه امروز هم انتخاب خوبی برات باشه.`;
                }
                
                const movePattern = context.patterns.inferred?.movement;
                if (movePattern && movePattern.mostFrequentType && movePattern.confidence !== 'none' && movePattern.confidence !== 'low') {
                  const actName = ACTIVITY_LABELS[movePattern.mostFrequentType as keyof typeof ACTIVITY_LABELS] || movePattern.mostFrequentType;
                  return `امروز هنوز حرکتی ثبت نکردی و ${actName} هم یکی از حرکت‌های پرتکرار تو بوده؛ برای همین این گزینه رو در نظر گرفتم.`;
                }
                
                if (prefersNature) return 'امروز اگر فرصت داری، یه پیاده‌روی بیرون می‌تونه بیشتر بهت بچسبه.';
                if (prefersSocial) return 'امروز اگر دوست داری، یه حرکت یا پیاده‌روی رو با یک همراه انجام بده.';
                
                return 'امروز هنوز فرصت هست تا یک ربع وقت بذاری و حرکت کنی.';
              })(),
              action: { label: 'ثبت حرکت', actionId: 'log_movement' },
              priority: 'high'
            });
          }
        }
      }
    } else {
      // ALREADY MOVED. Do not suggest movement again unless it's a small recovery at night.
      // E.g., if goal is weight loss and they pushed hard, maybe suggest hydration.
      // But if no urgent need, WE DO NOTHING (No Action).
    }

    // 4. Nutrition Context (Time Aware & Adaptive)
    // Only suggest if they HAVEN'T logged it AND it's the correct time
    if (isMorning && !hasLoggedBreakfast) {
      recommendations.push({
          id: 'rec_nutrition_morning',
          category: 'nutrition',
          title: 'شروع با یک صبحانه',
          description: 'صبحانه‌ای انتخاب کن که با هدفت و سلیقه‌ات جور باشه.',
          action: { label: 'مشاهده پیشنهادها', actionId: 'what_to_eat' },
          priority: 'medium'
      });
    } else if (isAfternoon && !hasLoggedLunch) {
       recommendations.push({
          id: 'rec_nutrition_afternoon',
          category: 'nutrition',
          title: 'وقت ناهار',
          description: 'یک وعده اصلی می‌تونه انرژی عصرت رو تامین کنه.',
          action: { label: 'مشاهده پیشنهادها', actionId: 'what_to_eat' },
          priority: 'medium'
      });
    } else if (isEvening && !hasLoggedDinner) {
       recommendations.push({
          id: 'rec_nutrition_evening',
          category: 'nutrition',
          title: 'یک شام سبک',
          description: 'برای پایان روز، می‌تونی از پیشنهادهای سبک ما ایده بگیری.',
          action: { label: 'مشاهده پیشنهادها', actionId: 'what_to_eat' },
          priority: 'medium'
      });
    }

    // 5. Body Context (Pattern-aware)
    if (goalWeightLoss && patterns.bodyTrend) {
      if (patterns.bodyTrend.direction === 'down' && !hasCompletedMajorActions && !isNight) {
        recommendations.push({
          id: 'rec_body_down',
          category: 'lifestyle',
          title: 'حفظ مسیر فعلی',
          description: 'روند تغییراتت عالیه. فقط روی حفظ همین ریتم تمرکز کن، نه کمتر نه بیشتر.',
          priority: 'low'
        });
      } else if (patterns.bodyTrend.direction === 'stable' && !isEnergyLow && !hasMoved && (isMorning || isAfternoon)) {
        recommendations.push({
          id: 'rec_body_stable',
          category: 'movement',
          title: 'یک تغییر کوچک',
          description: 'روندت کمی ثابت شده. امروز ۱۰ دقیقه پیاده‌روی سریع‌تر از معمول داشته باش.',
          priority: 'medium'
        });
      }
    }
    
    // 6. Time Obstacle (Only if we haven't already packed the list)
    if (hasTimeObstacle && recommendations.length < 2 && !hasCompletedMajorActions && !isNight) {
      recommendations.push({
        id: 'rec_time',
        category: 'lifestyle',
        title: 'مکثِ پنج دقیقه‌ای',
        description: 'وسط شلوغی‌های امروز، فقط ۵ دقیقه هیچ کاری نکن. به صفحه گوشی هم نگاه نکن.',
        priority: 'low'
      });
    }
  }

  // Sort by priority
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  
  const filteredRecs: Recommendation[] = [];
  const seenCategories = new Set();
  
  const sortedRecs = recommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  
  for (const rec of sortedRecs) {
    if (!seenCategories.has(rec.category)) {
       filteredRecs.push(rec);
       seenCategories.add(rec.category);
    }
  }

  // Keep it concise: 1 primary + 2 supporting
  const finalRecs = filteredRecs.slice(0, 3);

  // Determine Coherent Summary based on current completion
  let summary = '';
  
  if (hasCompletedMajorActions) {
    summary = isNight ? 'امروزت رو عالی جمع کردی. شب آرومی داشته باشی.' : 'کارهای اصلی امروزت رو انجام دادی.';
  } else if (isLateStart) {
    summary = 'برای امشب، قدم‌های ساده بهترن.';
  } else if (isNight) {
    summary = 'امشب بیشتر از هر چیزی، آروم کردن روز مهمه.';
  } else if (contextConfidence === 'minimal') {
    summary = 'امروز هنوز موردی ثبت نکردی. می‌تونی از یک قدم کوچک شروع کنی.';
  } else if (isEnergyLow) {
    summary = 'نسخه امروزت روی آرامش و بازیابی تمرکز داره.';
  } else if (isEnergyHigh && !hasMoved) {
    summary = 'روز پرانرژی و خوبیه برای تمرکز روی اهدافت.';
  } else if (hasMoved) {
    summary = 'حرکت امروزت ثبت شد. حالا نسخه امروزت روی قدم بعدی تمرکز داره.';
  } else if (isMorning) {
    summary = 'نسخه امروزت از اینجا شروع می‌شه.';
  } else {
    summary = 'نسخه‌ای برای همراهی تو در ادامه روز.';
  }

  return {
    id: `dv_${Date.now()}`,
    date: new Date().toISOString(),
    summary,
    priorities: finalRecs,
    status: 'generated',
    generatedAt: new Date().toISOString()
  };
}
