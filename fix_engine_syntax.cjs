const fs = require('fs');
let content = fs.readFileSync('src/features/life-version/engine.ts', 'utf8');

content = content.replace(/\\`/g, '`').replace(/\\\$/g, '$');

fs.writeFileSync('src/features/life-version/engine.ts', content);
