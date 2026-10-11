import { PersonalContext } from '../context/PersonalContextService';
import { DailyVersion } from '../life-version/models';
import { CoachResponse, CoachMessage } from './models';
import { MealRecommendationService } from '../nutrition/MealRecommendationService';
import { generateJourneyInsights } from '../journey/services/JourneyInsightService';
import { ACTIVITY_LABELS } from '../movement/models';

export interface ICoachService {
  sendMessage(
    message: string,
    context: PersonalContext,
    dailyVersion?: DailyVersion,
    history?: CoachMessage[]
  ): Promise<CoachResponse>;
}

export class LocalCoachService implements ICoachService {
  async sendMessage(
    message: string,
    context: PersonalContext,
    dailyVersion?: DailyVersion,
    history?: CoachMessage[]
  ): Promise<CoachResponse> {
    
    // Fake network delay for a natural feel
    await new Promise(resolve => setTimeout(resolve, 800));

    const lowerMsg = message.toLowerCase();

    // 1. Movement Intent
    if (lowerMsg.includes('ورزش') || lowerMsg.includes('حرکت')) {
      if (context.current.energy === undefined) {
        return {
          text: 'برای اینکه پیشنهاد دقیقی بدم، اول بهم بگو امروز انرژیت چطوره؟ دیشب خوابت خوب بود؟',
          action: { type: 'check_in', label: 'ثبت حال من' }
        };
      }
      
      const energy = context.current.energy;
      
      if (energy === 1 || energy === 2) {
        return {
          text: 'با توجه به اینکه امروز انرژیت رو پایین ثبت کردی، اگر بخوای با حال امروزت هماهنگ باشی، حرکت سبک انتخاب مناسب‌تریه؛ مثلاً یک پیاده‌روی کوتاه یا چند دقیقه کشش.',
          action: { type: 'log_movement', label: 'ثبت حرکت سبک' }
        };
      } else {
        return {
          text: 'امروز انرژی خوبی داری! زمان مناسبیه که یک تمرین کامل‌تر یا حرکت با شدت بیشتر رو وارد برنامه‌ات کنی. آماده‌ای؟',
          action: { type: 'log_movement', label: 'شروع حرکت' }
        };
      }
    }

    // 2. Nutrition Intent ("الان چی بخورم؟")
    if (lowerMsg.includes('غذا') || lowerMsg.includes('بخورم') || lowerMsg.includes('چی بخورم') || lowerMsg.includes('ناهار') || lowerMsg.includes('شام') || lowerMsg.includes('صبحانه')) {
      const recommendations = MealRecommendationService.getRecommendations(context);
      
      if (recommendations.length > 0) {
        const top = recommendations[0];
        let text = `با توجه به ساعت روز و چیزهایی که درباره‌ات می‌دونم، «${top.title}» می‌تونه انتخاب خوبی باشه.`;
        if (top.reason) {
          text += ` ${top.reason}`;
        }
        text += ' چند پیشنهاد دیگه هم برات آماده کردم.';
        
        return {
          text,
          action: { type: 'what_to_eat', label: 'دیدن پیشنهادها' }
        };
      }

      return {
        text: 'برای اینکه انرژی امروزت حفظ بشه، سعی کن وعده‌ات خیلی سنگین نباشه. اگه مایلی می‌تونیم غذایی که می‌خوری رو همین الان ثبت کنیم.',
        action: { type: 'log_food', label: 'ثبت وعده غذایی' }
      };
    }

    // 3. Why this daily version?
    if (lowerMsg.includes('چرا') && (lowerMsg.includes('پیشنهاد') || lowerMsg.includes('نسخه'))) {
      if (!dailyVersion || dailyVersion.priorities.length === 0) {
        return { text: "امروز کارهای اصلی و ضروری‌ت رو انجام دادی، برای همین پیشنهاد دیگه‌ای ندارم و ترجیح می‌دم بهت فرصت استراحت بدم." };
      }
      
      const topPriority = dailyVersion.priorities[0];
      if (topPriority.description) {
        return {
          text: `در مورد پیشنهاد «${topPriority.title}»: ${topPriority.description} به طور کلی، سعی کردم نسخه امروزت رو دقیقاً روی نیاز اصلی امروزت متمرکز کنم.`
        };
      }
      return { text: "من این پیشنهاد رو دقیقاً از روی وضعیت امروزت (مثل خواب، حرکت و انرژیت) ساختم تا تعادل بیشتری داشته باشی." };
    }

    // 4. Weekly Summary Intent
    if (lowerMsg.includes('این هفته') || lowerMsg.includes('چطور') || lowerMsg.includes('روند')) {
      const insights = generateJourneyInsights(7, context, dailyVersion);
      
      if (!insights.hasData) {
        return { text: 'هنوز چیز زیادی از این هفته ثبت نکردی که بتونم برات خلاصه‌ش کنم. با ثبت حرکت، تغذیه یا حال روزانه‌ت، من هم بهتر در جریان قرار می‌گیرم.' };
      }
      
      let response = `برای این هفته: ${insights.heroSummary} `;
      
      if (insights.positivePatterns.length > 0) {
        response += `مثلاً ${insights.positivePatterns[0]} `;
      }
      
      if (insights.changes.length > 0) {
        response += `همچنین ${insights.changes[0]}`;
      }
      
      return { text: response.trim() };
    }
    
    // 5. Wellness / Mood Intent
    if (lowerMsg.includes('حال') || lowerMsg.includes('خوب نیست') || lowerMsg.includes('خسته') || lowerMsg.includes('بد')) {
      if (context.current.energy === undefined) {
         return {
            text: 'شنیدم که شاید امروز خیلی روبه‌راه نیستی. می‌خوای اول حال و انرژیت رو ثبت کنی تا ببینیم چی برات بهتره؟',
            action: { type: 'check_in', label: 'ثبت حال امروز' }
         };
      }
      return { text: 'وقتی حس می‌کنی خیلی روبه‌راه نیستی، بهترین کار اینه که به بدنت گوش بدی. امروز اصلاً به خودت فشار نیار.' };
    }

    // 5.5 Memory & Pattern Query Intent
    if (lowerMsg.includes('معمولا') || lowerMsg.includes('الگو') || lowerMsg.includes('بیشتر چه') || lowerMsg.includes('دوست دارم') || lowerMsg.includes('عادت') || lowerMsg.includes('تکرار')) {
      
      if (lowerMsg.includes('حرکت') || lowerMsg.includes('ورزش')) {
        const pattern = context.patterns.inferred?.movement;
        if (pattern && pattern.confidence !== 'none' && pattern.confidence !== 'low') {
           let response = 'توی روزهای اخیر متوجه شدم که ';
           if (pattern.mostFrequentType) {
             const actName = ACTIVITY_LABELS[pattern.mostFrequentType as keyof typeof ACTIVITY_LABELS] || pattern.mostFrequentType;
             response += `«${actName}» بیشترین حرکتیه که انجام میدی. `;
           }
           if (pattern.recurringDuration) {
             response += `معمولاً تمریناتت حدود ${pattern.recurringDuration} دقیقه طول می‌کشه. `;
           }
           const timingMap = { morning: 'صبح‌ها', afternoon: 'عصرها', evening: 'عصر تا شب', night: 'آخر شب' };
           if (pattern.typicalTiming) {
             response += `و بیشتر ${timingMap[pattern.typicalTiming]} حرکت می‌کنی. `;
           }
           return { text: response.trim() };
        }
        return { text: 'هنوز اونقدر از حرکت‌هات ثبت نکردی که بتونم الگوی دقیقی پیدا کنم. کم‌کم متوجه می‌شم.' };
      }
      
      if (lowerMsg.includes('غذا') || lowerMsg.includes('می‌خورم') || lowerMsg.includes('میخورم')) {
         const pattern = context.patterns.inferred?.nutrition;
         if (pattern && pattern.confidence !== 'none' && pattern.confidence !== 'low' && pattern.frequentlyLoggedMeals.length > 0) {
            const mealMap: Record<string, string> = { breakfast: 'صبحانه', lunch: 'ناهار', dinner: 'شام', snack_morning: 'میان‌وعده صبح', snack_afternoon: 'میان‌وعده عصر' };
            const names = pattern.frequentlyLoggedMeals.map(m => mealMap[m] || m).join(' و ');
            return { text: `بیشتر وعده‌هایی که ثبت کردی شامل «${names}» بوده.` };
         }
         return { text: 'هنوز اونقدر از وعده‌هات ثبت نکردی که بتونم الگوی دقیقی پیدا کنم.' };
      }

      if (lowerMsg.includes('انرژی') || lowerMsg.includes('خواب') || lowerMsg.includes('حال')) {
         const pattern = context.patterns.inferred?.wellness;
         if (pattern && pattern.confidence !== 'none' && pattern.confidence !== 'low') {
            let response = 'با توجه به ثبت‌های اخیرت: ';
            if (pattern.typicalEnergy === 'low') response += 'معمولاً انرژیت رو پایین ثبت کردی. ';
            else if (pattern.typicalEnergy === 'high') response += 'معمولاً انرژی بالایی داشتی. ';
            
            if (pattern.typicalSleepQuality === 'low') response += 'کیفیت خوابت هم بیشتر پایین بوده. ';
            else if (pattern.typicalSleepQuality === 'high') response += 'کیفیت خواب خوبی داشتی. ';
            
            return { text: response.trim() };
         }
         return { text: 'هنوز اونقدر ثبت نکردی که بتونم الگوی دقیقی پیدا کنم.' };
      }

      // General taste / preferences
      if (lowerMsg.includes('دوست دارم') || lowerMsg.includes('سلیقه')) {
         const tastes = context.memories?.filter(m => m.category === 'taste' && m.source === 'explicit_preference') || [];
         if (tastes.length > 0) {
           const tasteStrings = tastes.map(t => t.payload).join('، ');
           return { text: `تو قبلاً بهم گفتی که به مواردی مثل «${tasteStrings}» علاقه داری. من هم سعی می‌کنم اینا رو تو پیشنهادام در نظر بگیرم.` };
         }
      }

      // Generic pattern request
      return { text: 'می‌تونی از من در مورد الگوی «حرکت»، «تغذیه» یا «انرژی» بپرسی.' };
    }

    // 6. General Needs
    if (lowerMsg.includes('نیاز')) {
      if (context.current.wellnessNeed) {
        return { text: `امروز گفتی بیشتر به «${context.current.wellnessNeed}» نیاز داری. می‌خوای برای رسیدن بهش یه قدم کوچیک بهت پیشنهاد بدم؟` };
      } else {
        return { 
          text: 'امروز هنوز نگفتی به چی نیاز داری. اگر دوست داری می‌تونیم با هم یه بررسی کوتاه داشته باشیم.',
          action: { type: 'check_in', label: 'امروز به چی نیاز داری؟' }
        };
      }
    }

    const hour = new Date().getHours();
    const isNight = hour >= 22 || hour < 5;
    
    // 7. Ambiguous Task Intent
    if (lowerMsg.includes('چی کار کنم') || lowerMsg.includes('چیکار کنم')) {
       if (isNight && context.current.movementMinutes === 0 && !context.current.hasLoggedFood && !context.current.hasLoggedWellness) {
         return {
           text: 'با توجه به اینکه دیروقته، پیشنهاد می‌کنم روزت رو همینجا آروم ببندی و برای فردا آماده بشی.'
         };
       }
       if (context.current.energy === undefined) {
         return { 
           text: 'برای اینکه پیشنهاد دقیقی بدم، اول بهم بگو امروز انرژیت چطوره؟', 
           action: { type: 'check_in', label: 'ثبت حال من' } 
         };
       }
       if (dailyVersion && dailyVersion.priorities.length > 0) {
         return {
            text: `با توجه به حالت، پیشنهاد اولم اینه که امروز به «${dailyVersion.priorities[0].title}» توجه کنی.`
         };
       } else {
         return {
            text: 'با توجه به ثبت‌های امروزت و شرایط فعلی، نیازی به انجام کار خاصی نیست. می‌تونی استراحت کنی یا به کارهای روزمره‌ت برسی.'
         };
       }
    }

    // Default Fallback
    return {
      text: 'من همیشه اینجا هستم تا با توجه به چیزهایی که ازت می‌دونم راهنماییت کنم. می‌تونی درباره نسخه امروزت، تغذیه یا حرکتت ازم بپرسی.'
    };
  }
}

// Instantiate the singleton service
export const coachService = new LocalCoachService();
