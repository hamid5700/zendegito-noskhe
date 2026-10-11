const fs = require('fs');
let content = fs.readFileSync('src/features/coach/service.ts', 'utf8');

const oldWhy = `    if (lowerMsg.includes('چرا') && (lowerMsg.includes('پیشنهاد') || lowerMsg.includes('نسخه'))) {
      if (!dailyVersion || dailyVersion.priorities.length === 0) {
        return { text: "چون هنوز اطلاعات زیادی ازت ندارم، این پیشنهادها یکمی کلی هستن." };
      }`;

const newWhy = `    if (lowerMsg.includes('چرا') && (lowerMsg.includes('پیشنهاد') || lowerMsg.includes('نسخه'))) {
      if (!dailyVersion || dailyVersion.priorities.length === 0) {
        return { text: "امروز کار اصلی و ضروری‌ای برای انجام باقی نمونده، برای همین سیستم پیشنهاد خاصی برات نداره و ترجیح داده بهت فرصت استراحت بده." };
      }`;

content = content.replace(oldWhy, newWhy);
fs.writeFileSync('src/features/coach/service.ts', content);
