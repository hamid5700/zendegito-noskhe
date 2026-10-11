const fs = require('fs');
let content = fs.readFileSync('src/features/life-version/engine.ts', 'utf8');

const oldMovement = `              if (activeMoveMem && activeMoveMem.payload?.activityType) {
                const actName = ACTIVITY_LABELS[activeMoveMem.payload.activityType as keyof typeof ACTIVITY_LABELS] || 'این حرکت';
                return \`این روزها \${actName} بیشتر توی ریتمت بوده؛ می‌تونه امروز هم انتخاب خوبی برات باشه.\`;
              }`;

const newMovement = `              if (activeMoveMem && activeMoveMem.payload?.activityType) {
                const actName = ACTIVITY_LABELS[activeMoveMem.payload.activityType as keyof typeof ACTIVITY_LABELS] || 'این حرکت';
                return \`این روزها \${actName} بیشتر توی ریتمت بوده؛ می‌تونه امروز هم انتخاب خوبی برات باشه.\`;
              }
              
              const movePattern = context.patterns.inferred?.movement;
              if (movePattern && movePattern.mostFrequentType && movePattern.confidence !== 'none' && movePattern.confidence !== 'low') {
                const actName = ACTIVITY_LABELS[movePattern.mostFrequentType as keyof typeof ACTIVITY_LABELS] || movePattern.mostFrequentType;
                return \`چون تو معمولاً \${actName} رو تکرار می‌کنی، امروز هم می‌تونه انتخاب خوبی برات باشه.\`;
              }`;

content = content.replace(oldMovement, newMovement);

fs.writeFileSync('src/features/life-version/engine.ts', content);
