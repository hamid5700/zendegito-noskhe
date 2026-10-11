const fs = require('fs');
let content = fs.readFileSync('src/features/coach/service.ts', 'utf8');

const oldWhy2 = `      const topPriority = dailyVersion.priorities[0];
      if (topPriority.reason) {
        return {
          text: \`در مورد پیشنهاد «\${topPriority.title}»: \${topPriority.reason} به طور کلی، سعی کردم نسخه امروزت رو دقیقاً روی نیاز اصلی امروزت متمرکز کنم.\`
        };
      }`;

const newWhy2 = `      const topPriority = dailyVersion.priorities[0];
      if (topPriority.description) {
        return {
          text: \`در مورد پیشنهاد «\${topPriority.title}»: \${topPriority.description} به طور کلی، سعی کردم نسخه امروزت رو دقیقاً روی نیاز اصلی امروزت متمرکز کنم.\`
        };
      }`;

content = content.replace(oldWhy2, newWhy2);
fs.writeFileSync('src/features/coach/service.ts', content);
