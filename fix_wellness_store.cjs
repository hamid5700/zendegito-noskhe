const fs = require('fs');
let content = fs.readFileSync('src/features/wellness/store.ts', 'utf8');

const replacement = `  entries: [],`;
content = content.replace(/  entries: \[[\s\S]*?\],/, replacement);

fs.writeFileSync('src/features/wellness/store.ts', content);
