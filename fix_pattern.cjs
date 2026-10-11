const fs = require('fs');

const code = `import { MovementEntry } from '../movement/models';
import { WellnessCheckIn } from '../wellness/models';
import { Meal } from '../nutrition/models';
import { getDaysAgoDate } from '../../utils/date';

export type PatternConfidence = 'none' | 'low' | 'medium' | 'high';

export interface MovementPattern {
  mostFrequentType: string | null;
  recurringDuration: number | null;
  typicalTiming: 'morning' | 'afternoon' | 'evening' | 'night' | null;
  recentFrequency: number;
  confidence: PatternConfidence;
}

export interface WellnessPattern {
  typicalEnergy: 'low' | 'medium' | 'high' | null;
  typicalMood: 'low' | 'medium' | 'high' | null;
  typicalSleepQuality: 'low' | 'medium' | 'high' | null;
  confidence: PatternConfidence;
}

export interface NutritionPattern {
  frequentlyLoggedMeals: string[];
  confidence: PatternConfidence;
}

export interface PersonalPatterns {
  movement: MovementPattern;
  wellness: WellnessPattern;
  nutrition: NutritionPattern;
}

export class PersonalPatternService {
  /**
   * Analyzes factual historical data and derives deterministic patterns.
   * Focuses on recent history (e.g., last 30 days).
   */
  static analyze(
    movementEntries: MovementEntry[],
    wellnessEntries: WellnessCheckIn[],
    nutritionMealsByDate: Record<string, Meal[]>
  ): PersonalPatterns {
    const cutoff30Days = getDaysAgoDate(30).getTime();
    
    return {
      movement: this.analyzeMovement(movementEntries, cutoff30Days),
      wellness: this.analyzeWellness(wellnessEntries, cutoff30Days),
      nutrition: this.analyzeNutrition(nutritionMealsByDate, cutoff30Days)
    };
  }

  private static analyzeMovement(entries: MovementEntry[], cutoffTime: number): MovementPattern {
    const recentEntries = entries.filter(e => new Date(e.date).getTime() >= cutoffTime);
    
    if (recentEntries.length === 0) {
      return { mostFrequentType: null, recurringDuration: null, typicalTiming: null, recentFrequency: 0, confidence: 'none' };
    }

    const typeCounts: Record<string, number> = {};
    const durationCounts: Record<number, number> = {};
    const timingCounts: Record<string, number> = { morning: 0, afternoon: 0, evening: 0, night: 0 };

    recentEntries.forEach(e => {
      typeCounts[e.type] = (typeCounts[e.type] || 0) + 1;
      
      // Round duration to nearest 10 for grouping
      const roundedDuration = Math.round(e.durationMinutes / 10) * 10;
      durationCounts[roundedDuration] = (durationCounts[roundedDuration] || 0) + 1;
      
      const hour = new Date(e.date).getHours();
      if (hour >= 5 && hour < 12) timingCounts.morning++;
      else if (hour >= 12 && hour < 17) timingCounts.afternoon++;
      else if (hour >= 17 && hour < 21) timingCounts.evening++;
      else timingCounts.night++;
    });

    let mostFrequentType: string | null = null;
    let maxTypeCount = 0;
    Object.entries(typeCounts).forEach(([type, count]) => {
      if (count > maxTypeCount) {
        maxTypeCount = count;
        mostFrequentType = type;
      }
    });

    let recurringDuration: number | null = null;
    let maxDurationCount = 0;
    Object.entries(durationCounts).forEach(([durationStr, count]) => {
      if (count > maxDurationCount && count >= 2) {
        maxDurationCount = count;
        recurringDuration = parseInt(durationStr);
      }
    });

    let typicalTiming: 'morning' | 'afternoon' | 'evening' | 'night' | null = null;
    let maxTimingCount = 0;
    Object.entries(timingCounts).forEach(([timing, count]) => {
      if (count > maxTimingCount && count >= 3) {
        maxTimingCount = count;
        typicalTiming = timing as any;
      }
    });

    let confidence: PatternConfidence = 'none';
    if (maxTypeCount >= 5) confidence = 'high';
    else if (maxTypeCount >= 3) confidence = 'medium';
    else if (maxTypeCount >= 2) confidence = 'low';

    return {
      mostFrequentType,
      recurringDuration,
      typicalTiming,
      recentFrequency: maxTypeCount,
      confidence
    };
  }

  private static analyzeWellness(entries: WellnessCheckIn[], cutoffTime: number): WellnessPattern {
    const recentEntries = entries.filter(e => new Date(e.date).getTime() >= cutoffTime);
    
    if (recentEntries.length === 0) {
      return { typicalEnergy: null, typicalMood: null, typicalSleepQuality: null, confidence: 'none' };
    }

    const energyEntries = recentEntries.filter(e => e.energy !== undefined);
    const moodEntries = recentEntries.filter(e => e.mood !== undefined);
    const sleepEntries = recentEntries.filter(e => e.sleepQuality !== undefined);

    const getTypical = (items: number[]): 'low' | 'medium' | 'high' | null => {
      if (items.length < 2) return null;
      const avg = items.reduce((a, b) => a + b, 0) / items.length;
      if (avg <= 2.5) return 'low';
      if (avg >= 3.5) return 'high';
      return 'medium';
    };

    const typicalEnergy = getTypical(energyEntries.map(e => e.energy as number));
    const typicalMood = getTypical(moodEntries.map(e => e.mood as number));
    const typicalSleepQuality = getTypical(sleepEntries.map(e => e.sleepQuality as number));

    const maxEntries = Math.max(energyEntries.length, moodEntries.length, sleepEntries.length);
    
    let confidence: PatternConfidence = 'none';
    if (maxEntries >= 7) confidence = 'high';
    else if (maxEntries >= 4) confidence = 'medium';
    else if (maxEntries >= 2) confidence = 'low';

    return {
      typicalEnergy,
      typicalMood,
      typicalSleepQuality,
      confidence
    };
  }

  private static analyzeNutrition(mealsByDate: Record<string, Meal[]>, cutoffTime: number): NutritionPattern {
    const recentMeals: string[] = [];
    
    Object.entries(mealsByDate).forEach(([dateStr, meals]) => {
      if (new Date(dateStr).getTime() >= cutoffTime) {
        meals.forEach(m => recentMeals.push(m.type));
      }
    });

    if (recentMeals.length === 0) {
      return { frequentlyLoggedMeals: [], confidence: 'none' };
    }

    const mealCounts: Record<string, number> = {};
    recentMeals.forEach(m => {
      mealCounts[m] = (mealCounts[m] || 0) + 1;
    });

    const frequentMeals = Object.entries(mealCounts)
      .filter(([_, count]) => count >= 3)
      .map(([type]) => type);

    let confidence: PatternConfidence = 'none';
    if (recentMeals.length >= 10 && frequentMeals.length > 0) confidence = 'high';
    else if (recentMeals.length >= 5 && frequentMeals.length > 0) confidence = 'medium';
    else if (recentMeals.length >= 2) confidence = 'low';

    return {
      frequentlyLoggedMeals: frequentMeals,
      confidence
    };
  }
}
`;
fs.writeFileSync('src/features/patterns/PersonalPatternService.ts', code);
