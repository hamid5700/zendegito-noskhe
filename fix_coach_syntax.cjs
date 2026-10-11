const fs = require('fs');
let content = fs.readFileSync('src/features/coach/service.ts', 'utf8');

content = content.replace(`       } else {
         return {
            text: 'با توجه به ثبت‌های امروزت و شرایط فعلی، نیازی به انجام کار خاصی نیست. می‌تونی استراحت کنی یا به کارهای روزمره‌ت برسی.'
         };
       };
       }`, `       } else {
         return {
            text: 'با توجه به ثبت‌های امروزت و شرایط فعلی، نیازی به انجام کار خاصی نیست. می‌تونی استراحت کنی یا به کارهای روزمره‌ت برسی.'
         };
       }`);

fs.writeFileSync('src/features/coach/service.ts', content);
