const fs = require('fs');
let content = fs.readFileSync('src/features/coach/service.ts', 'utf8');

const replacement = `       if (dailyVersion && dailyVersion.priorities.length > 0) {
         return {
            text: \`با توجه به حالت، پیشنهاد اولم اینه که امروز به «\${dailyVersion.priorities[0].title}» توجه کنی.\`
         };
       } else {
         return {
            text: 'با توجه به ثبت‌های امروزت و شرایط فعلی، نیازی به انجام کار خاصی نیست. می‌تونی استراحت کنی یا به کارهای روزمره‌ت برسی.'
         };
       }`;

content = content.replace(/       if \(dailyVersion && dailyVersion\.priorities\.length > 0\) \{[\s\S]*?       \}/, replacement);
fs.writeFileSync('src/features/coach/service.ts', content);
