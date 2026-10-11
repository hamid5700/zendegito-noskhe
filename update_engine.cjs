const fs = require('fs');

let content = fs.readFileSync('src/features/life-version/engine.ts', 'utf8');

// I will overwrite the whole engine to refine the copy and logic
content = `import { DailyVersion, Recommendation } from './models';
import { PersonalContext } from '../context/PersonalContextService';

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
  
  // 1. Core Wellness / Context Overrides
  if (isEnergyLow || isSleepPoor) {
    recommendations.push({
      id: 'rec_wellness_low',
      category: 'wellness',
      title: 'شروع آرام‌تر',
      description: 'انرژیت رو پایین ثبت کردی. امروز رو کمی با ملایمت بیشتری پیش ببر.',
      reason: 'بدن تو امروز به بازیابی نیاز داره.',
      action: { label: 'ثبت یک مکث', actionId: 'log_wellness' },
      priority: 'high'
    });
  } else if (isEnergyHigh) {
    if (current.movementMinutes === 0) {
      recommendations.push({
        id: 'rec_wellness_high',
        category: 'movement',
        title: 'استفاده از انرژی امروز',
        description: prefersIntenseMovement 
          ? 'انرژیت بالاست! امروز بهترین فرصته برای یک تمرین پرفشارتر.' 
          : 'انرژیت بالاست! وقت خوبیه که یک حرکت کامل‌تر رو به امروزت اضافه کنی.',
        reason: 'وقتی انرژی خوبی داری، حرکت می‌تونه این حس رو موندگارتر کنه.',
        action: { label: 'شروع حرکت', actionId: 'log_movement' },
        priority: 'high'
      });
    }
  }

  // 2. Goal vs Routine vs State Conflicts
  if (goalEnergy && preferences.routine?.includes('late_night') && (isEvening || isNight)) {
    recommendations.push({
      id: 'rec_routine_sleep',
      category: 'sleep',
      title: 'آماده شدن برای فردا',
      description: 'امشب فقط ۳۰ دقیقه زودتر از عادت معمولت برای خواب آماده بشو.',
      reason: 'برای اینکه فردا انرژی بیشتری داشته باشی، این تغییر کوچیک خیلی کمک می‌کنه.',
      action: { label: 'تنظیم یادآور', actionId: 'set_sleep_reminder' },
      priority: 'medium'
    });
  }

  // 3. Movement Context
  if (current.movementMinutes === 0) {
    if (patterns.movementActiveDaysThisWeek < 3) {
      if (isEnergyLow) {
        recommendations.push({
          id: 'rec_move_low_energy',
          category: 'movement',
          title: 'فقط کمی حرکت',
          description: 'با توجه به خستگی امروزت، لازم نیست به خودت فشار بیاری. ۱۰ دقیقه کشش ملایم کافیه.',
          reason: 'حتی در روزهای کم‌انرژی، یک حرکت خیلی سبک به جریان خونت کمک می‌کنه.',
          action: { label: 'ثبت حرکت', actionId: 'log_movement' },
          priority: 'high'
        });
      } else {
        recommendations.push({
          id: 'rec_move_general',
          category: 'movement',
          title: 'برگشتن به ریتم',
          description: prefersNature 
            ? 'امروز اگر فرصت داری، یه پیاده‌روی بیرون می‌تونه بیشتر بهت بچسبه.' 
            : prefersSocial 
              ? 'امروز اگر دوست داری، یه حرکت یا پیاده‌روی رو با یک همراه انجام بده.'
              : 'چند روزه حرکتت کمتر شده. امروز فقط یک ربع وقت بذار و حرکت کن.',
          reason: 'برای حفظ پیوستگی، امروز بهترین زمان برای یک حرکت ساده است.',
          action: { label: 'ثبت حرکت', actionId: 'log_movement' },
          priority: 'high'
        });
      }
    }
  } else if (current.movementMinutes > 0) {
    recommendations.push({
      id: 'rec_move_done',
      category: 'wellness',
      title: 'ریکاوریِ بعد از حرکت',
      description: 'امروز حرکت خوبی داشتی. حتماً آب کافی بنوش و بدنت رو سرد کن.',
      reason: 'چون بدنت امروز فعالیت داشته، به توجه بعد از تمرین نیاز داره.',
      priority: 'medium'
    });
  }

  // 4. Nutrition Context
  if (!current.hasLoggedFood && (isMorning || isAfternoon)) {
    recommendations.push({
        id: 'rec_nutrition_empty',
        category: 'nutrition',
        title: 'الان چی بخورم؟',
        description: 'امروز هنوز وعده‌ای ثبت نکردی. می‌تونی از پیشنهادهای ما ایده بگیری.',
        reason: 'تغذیه درست، سوخت اصلی روز توئه.',
        action: { label: 'مشاهده پیشنهادها', actionId: 'what_to_eat' },
        priority: 'high'
    });
  }

  // 5. Body Context
  if (goalWeightLoss && patterns.bodyTrend) {
    if (patterns.bodyTrend.direction === 'down') {
      recommendations.push({
        id: 'rec_body_down',
        category: 'lifestyle',
        title: 'حفظ مسیر فعلی',
        description: 'روند تغییراتت عالیه. فقط روی حفظ همین ریتم تمرکز کن، نه کمتر نه بیشتر.',
        reason: 'بدن تو در مسیر درست قرار گرفته و نیاز به شوک جدیدی نداره.',
        priority: 'medium'
      });
    } else if (patterns.bodyTrend.direction === 'stable' && !isEnergyLow) {
      recommendations.push({
        id: 'rec_body_stable',
        category: 'movement',
        title: 'یک تغییر کوچک',
        description: 'روندت کمی ثابت شده. امروز ۱۰ دقیقه پیاده‌روی سریع‌تر از معمول داشته باش.',
        reason: 'یک تغییر کوچیک می‌تونه بدن رو از حالت عادت خارج کنه.',
        priority: 'medium'
      });
    }
  }

  // 6. Preferences / Fallbacks
  if (hasTimeObstacle && recommendations.length < 3) {
    recommendations.push({
      id: 'rec_time',
      category: 'lifestyle',
      title: 'مکثِ پنج دقیقه‌ای',
      description: 'وسط شلوغی‌های امروز، فقط ۵ دقیقه هیچ کاری نکن. به صفحه گوشی هم نگاه نکن.',
      reason: 'چون گفتی معمولاً وقت کم میاری، این مکث کوتاه ذهنت رو آروم می‌کنه.',
      priority: 'low'
    });
  }

  if (recommendations.length === 0) {
      recommendations.push({
        id: 'rec_fallback',
        category: 'wellness',
        title: 'یک روز برای خودت',
        description: 'امروز رو همونطوری که بدنت نیاز داره و حس می‌کنی درسته، پیش ببر.',
        priority: 'low'
      });
  }

  // Sort by priority
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  
  const filteredRecs: Recommendation[] = [];
  const seenCategories = new Set();
  
  const sortedRecs = recommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  
  for (const rec of sortedRecs) {
    if (!seenCategories.has(rec.category) || rec.priority === 'high') { 
       filteredRecs.push(rec);
       seenCategories.add(rec.category);
    }
  }

  // Keep it concise: 1 primary + 2 supporting
  const finalRecs = filteredRecs.slice(0, 3);

  // Determine Coherent Summary
  let summary = '';
  if (contextConfidence === 'minimal') {
    summary = 'یک نسخه اولیه، تا بیشتر بشناسیمت.';
  } else if (isEnergyLow) {
    summary = 'نسخه امروزت روی آرامش و بازیابی تمرکز داره.';
  } else if (isEnergyHigh) {
    summary = 'روز پرانرژی و خوبیه برای تمرکز روی اهدافت.';
  } else if (current.movementMinutes > 0) {
    summary = 'حرکت خوبی داشتی؛ حالا وقت تمرکز روی ریکاوریه.';
  } else if (isNight) {
    summary = 'امشب بیشتر از هر چیزی، آروم کردن روز مهمه.';
  } else if (isMorning) {
    summary = 'نسخه امروزت از اینجا شروع می‌شه.';
  } else {
    summary = 'یک روز خوب برای قدم‌های کوچیک و مستمر.';
  }

  return {
    id: \`dv_\${Date.now()}\`,
    date: new Date().toISOString(),
    summary,
    priorities: finalRecs,
    status: 'generated',
    generatedAt: new Date().toISOString()
  };
}
`;
fs.writeFileSync('src/features/life-version/engine.ts', content);
