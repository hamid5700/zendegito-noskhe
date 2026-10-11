const fs = require('fs');

let content = fs.readFileSync('src/features/journey/services/JourneyInsightService.ts', 'utf8');

const injectionPoint = `  // 1. Movement Insights`;

const newInsights = `  // More Pattern Injection
  const inferred = context.patterns.inferred;
  if (inferred) {
    if (inferred.wellness.typicalSleepQuality === 'high' && inferred.wellness.confidence !== 'low' && inferred.wellness.confidence !== 'none') {
      positivePatterns.push('کیفیت خوابت تو روزهای اخیر خوب و پایدار بوده.');
    } else if (inferred.wellness.typicalEnergy === 'high' && inferred.wellness.confidence !== 'low' && inferred.wellness.confidence !== 'none') {
      positivePatterns.push('در این بازه، بیشتر روزها انرژی بالایی داشتی.');
    }
  }

  // 1. Movement Insights`;

content = content.replace(injectionPoint, newInsights);

fs.writeFileSync('src/features/journey/services/JourneyInsightService.ts', content);
