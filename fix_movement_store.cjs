const fs = require('fs');
let content = fs.readFileSync('src/features/movement/store.ts', 'utf8');

const replacement = `  entries: [],`;
content = content.replace(/  entries: \[[\s\S]*?\],/, replacement);

fs.writeFileSync('src/features/movement/store.ts', content);
