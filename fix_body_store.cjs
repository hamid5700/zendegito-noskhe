const fs = require('fs');

let content = fs.readFileSync('src/features/body/store.ts', 'utf8');

const replacement = `  entries: [],
  goal: null,`;

content = content.replace(/  entries: \[[\s\S]*?\],[\s\S]*?goal: \{[\s\S]*?\},/, replacement);

fs.writeFileSync('src/features/body/store.ts', content);
