const fs = require('fs');
let code = fs.readFileSync('src/features/life-version/engine.ts', 'utf8');

const oldLogic = `  if (recommendations.length === 0) {
      recommendations.push({
        id: 'rec_fallback',
        category: 'wellness',
        title: 'یک روز برای خودت',
        description: 'امروز رو همونطوری که بدنت نیاز داره و حس می‌کنی درسته، پیش ببر.',
        priority: 'low'
      });
  }`;

code = code.replace(oldLogic, '');

fs.writeFileSync('src/features/life-version/engine.ts', code);
