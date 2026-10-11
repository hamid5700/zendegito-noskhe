const fs = require('fs');

let content = fs.readFileSync('src/features/coach/service.ts', 'utf8');

const oldMemoryIntent = `    // 5.5 Memory Query Intent
    if (lowerMsg.includes('معمولا') || lowerMsg.includes('الگو') || lowerMsg.includes('بیشتر چه') || lowerMsg.includes('دوست دارم') || lowerMsg.includes('عادت')) {
      if (lowerMsg.includes('حرکت') || lowerMsg.includes('ورزش')) {
        const activeMoves = context.memories?.filter(m => m.category === 'movement' && m.status === 'active' && m.confidence !== 'low') || [];
        const decliningMoves = context.memories?.filter(m => m.category === 'movement' && m.status === 'declining') || [];
        
        if (activeMoves.length > 0) {
          const names = activeMoves.map(m => ACTIVITY_LABELS[m.payload?.activityType as keyof typeof ACTIVITY_LABELS] || m.payload?.activityType).join(' و ');
          return { text: \`در ثبت‌های اخیرت، «\${names}» بیشتر از بقیه حرکت‌ها دیده شده.\` };
        }
        
        if (decliningMoves.length > 0) {
          const names = decliningMoves.map(m => ACTIVITY_LABELS[m.payload?.activityType as keyof typeof ACTIVITY_LABELS] || m.payload?.activityType).join(' و ');
          return { text: \`قبلاً «\${names}» یکی از حرکت‌های پرتکرارت بوده، اما در داده‌های اخیر کمتر دیده شده.\` };
        }
        
        return { text: 'هنوز داده کافی ندارم که بگم کدوم حرکت بیشتر توی ریتمت تکرار میشه. کمی بیشتر حرکت‌هات رو ثبت کن تا متوجه بشم.' };
      }
      
      // General taste
      if (lowerMsg.includes('دوست دارم') || lowerMsg.includes('سلیقه')) {
         const tastes = context.memories?.filter(m => m.category === 'taste' && m.source === 'explicit_preference') || [];
         if (tastes.length > 0) {
           const tasteStrings = tastes.map(t => t.payload).join('، ');
           return { text: \`تو قبلاً بهم گفتی که به مواردی مثل «\${tasteStrings}» علاقه داری. من هم سعی می‌کنم اینا رو تو پیشنهادام در نظر بگیرم.\` };
         }
      }
    }`;

const newMemoryIntent = `    // 5.5 Memory & Pattern Query Intent
    if (lowerMsg.includes('معمولا') || lowerMsg.includes('الگو') || lowerMsg.includes('بیشتر چه') || lowerMsg.includes('دوست دارم') || lowerMsg.includes('عادت') || lowerMsg.includes('تکرار')) {
      
      if (lowerMsg.includes('حرکت') || lowerMsg.includes('ورزش')) {
        const pattern = context.patterns.inferred?.movement;
        if (pattern && pattern.confidence !== 'none' && pattern.confidence !== 'low') {
           let response = 'در داده‌های اخیرت متوجه شدم که ';
           if (pattern.mostFrequentType) {
             const actName = ACTIVITY_LABELS[pattern.mostFrequentType as keyof typeof ACTIVITY_LABELS] || pattern.mostFrequentType;
             response += \`«\${actName}» بیشترین حرکتیه که انجام میدی. \`;
           }
           if (pattern.recurringDuration) {
             response += \`معمولاً تمریناتت حدود \${pattern.recurringDuration} دقیقه طول می‌کشه. \`;
           }
           const timingMap = { morning: 'صبح‌ها', afternoon: 'عصرها', evening: 'عصر تا شب', night: 'آخر شب' };
           if (pattern.typicalTiming) {
             response += \`و بیشتر \${timingMap[pattern.typicalTiming]} حرکت می‌کنی. \`;
           }
           return { text: response.trim() };
        }
        return { text: 'هنوز داده کافی ندارم که یک الگوی مشخص برات پیدا کنم. کمی بیشتر حرکت‌هات رو ثبت کن تا متوجه بشم.' };
      }
      
      if (lowerMsg.includes('غذا') || lowerMsg.includes('می‌خورم') || lowerMsg.includes('میخورم')) {
         const pattern = context.patterns.inferred?.nutrition;
         if (pattern && pattern.confidence !== 'none' && pattern.confidence !== 'low' && pattern.frequentlyLoggedMeals.length > 0) {
            const mealMap: Record<string, string> = { breakfast: 'صبحانه', lunch: 'ناهار', dinner: 'شام', snack_morning: 'میان‌وعده صبح', snack_afternoon: 'میان‌وعده عصر' };
            const names = pattern.frequentlyLoggedMeals.map(m => mealMap[m] || m).join(' و ');
            return { text: \`بیشتر وعده‌هایی که ثبت کردی شامل «\${names}» بوده.\` };
         }
         return { text: 'هنوز داده کافی ندارم که یک الگوی مشخص برات پیدا کنم. وعده‌های بیشتری رو ثبت کن.' };
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
         return { text: 'هنوز داده کافی ندارم که یک الگوی مشخص برات پیدا کنم.' };
      }

      // General taste / preferences
      if (lowerMsg.includes('دوست دارم') || lowerMsg.includes('سلیقه')) {
         const tastes = context.memories?.filter(m => m.category === 'taste' && m.source === 'explicit_preference') || [];
         if (tastes.length > 0) {
           const tasteStrings = tastes.map(t => t.payload).join('، ');
           return { text: \`تو قبلاً بهم گفتی که به مواردی مثل «\${tasteStrings}» علاقه داری. من هم سعی می‌کنم اینا رو تو پیشنهادام در نظر بگیرم.\` };
         }
      }

      // Generic pattern request
      return { text: 'می‌تونی از من در مورد الگوی «حرکت»، «تغذیه» یا «انرژی» بپرسی.' };
    }`;

content = content.replace(oldMemoryIntent, newMemoryIntent);
fs.writeFileSync('src/features/coach/service.ts', content);
