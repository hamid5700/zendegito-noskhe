const fs = require('fs');
let content = fs.readFileSync('src/app/(tabs)/today/page.tsx', 'utf8');

// Subtitle under "امروز، نسخه تو چیه؟"
content = content.replace(
  /\{personalContext\.activeSignals > 0[\s\S]*?: 'یک نسخه اولیه، تا بیشتر بشناسیمت\.'\}/m,
  "{personalContext.activeSignals > 0 ? 'نسخه‌ای که با ریتم زندگی تو تنظیم شده.' : 'یک قدم کوچک برای شروع.'}"
);

// Summary empty state fallback
content = content.replace(
  /<h3 className=\{cn\(tokens\.typography\.h3, "text-primary-900 mb-3"\)\}>برای ساخت نسخه دقیق‌تر، کمی بیشتر تو رو بشناسیم\.<\/h3>/m,
  '<h3 className={cn(tokens.typography.h3, "text-primary-900 mb-3")}>نسخه زندگی تو از اینجا شروع می‌شه.</h3>'
);

fs.writeFileSync('src/app/(tabs)/today/page.tsx', content);
