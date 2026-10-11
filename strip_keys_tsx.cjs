const fs = require('fs');

function removeKeys(filePath, regex) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(regex, '');
    fs.writeFileSync(filePath, content);
  } catch(e) {}
}

removeKeys('src/app/(onboarding)/page.tsx', /key=\{step\.id\} /g);
removeKeys('src/app/(tabs)/coach/page.tsx', /key=\{message\.id\} /g);
removeKeys('src/app/(tabs)/journey/page.tsx', /key=\{idx\} /g);

