import { MovementEntry } from '../movement/models';
import { WellnessCheckIn } from '../wellness/models';
import { Meal } from '../nutrition/models';
import { PersonalContext } from '../context/PersonalContextService';
import { getDaysAgoDate } from '../../utils/date';

export type MemorySource = 'explicit_preference' | 'observed_pattern' | 'recent_behavior';
export type MemoryStatus = 'active' | 'declining' | 'insufficient';
export type MemoryConfidence = 'low' | 'medium' | 'high';

export interface PersonalMemory {
  id: string;
  category: 'movement' | 'nutrition' | 'wellness' | 'taste' | 'routine' | 'goal';
  statement: string;
  source: MemorySource;
  evidenceCount: number;
  firstObservedAt?: string;
  lastObservedAt?: string;
  status: MemoryStatus;
  confidence: MemoryConfidence;
  payload?: any;
}

export class PersonalMemoryService {
  static generateMemories(
    preferences: PersonalContext['preferences'],
    movementEntries: MovementEntry[],
    wellnessEntries: WellnessCheckIn[],
    nutritionMealsByDate: Record<string, Meal[]>
  ): PersonalMemory[] {
    const memories: PersonalMemory[] = [];
    
    this.extractExplicitPreferences(preferences, memories);
    this.extractMovementMemories(movementEntries, memories);
    this.extractWellnessMemories(wellnessEntries, memories);
    this.extractNutritionMemories(nutritionMealsByDate, memories);

    return memories;
  }

  private static extractExplicitPreferences(preferences: PersonalContext['preferences'], memories: PersonalMemory[]) {
    const addMemory = (category: PersonalMemory['category'], statement: string, payload: any) => {
      memories.push({
        id: `pref_${category}_${payload}`,
        category,
        statement,
        source: 'explicit_preference',
        evidenceCount: 1, 
        status: 'active',
        confidence: 'high',
        payload
      });
    };

    if (preferences.primaryGoal) {
      addMemory('goal', `هدف اصلی تو ${preferences.primaryGoal} است`, preferences.primaryGoal);
    }

    if (preferences.taste) {
      preferences.taste.forEach(t => {
        addMemory('taste', `علاقه به ${t}`, t);
      });
    }

    if (preferences.lifeTaste) {
      preferences.lifeTaste.forEach(t => {
        addMemory('taste', `علاقه به ${t} در سبک زندگی`, t);
      });
    }

    if (preferences.routine) {
      preferences.routine.forEach(r => {
        addMemory('routine', `عادت روتین: ${r}`, r);
      });
    }
  }

  private static extractMovementMemories(entries: MovementEntry[], memories: PersonalMemory[]) {
    if (entries.length === 0) return;

    const recentCutoff = getDaysAgoDate(14).getTime();
    const activityStats: Record<string, { count: number; recentCount: number; firstAt: string; lastAt: string }> = {};

    entries.forEach(e => {
      const eTime = new Date(e.date).getTime();
      const isRecent = eTime >= recentCutoff;
      
      if (!activityStats[e.type]) {
        activityStats[e.type] = { count: 0, recentCount: 0, firstAt: e.date, lastAt: e.date };
      }
      
      const stats = activityStats[e.type];
      stats.count += 1;
      if (isRecent) stats.recentCount += 1;
      
      if (eTime < new Date(stats.firstAt).getTime()) stats.firstAt = e.date;
      if (eTime > new Date(stats.lastAt).getTime()) stats.lastAt = e.date;
    });

    Object.entries(activityStats).forEach(([type, stats]) => {
      let source: MemorySource = 'observed_pattern';
      let status: MemoryStatus = 'active';
      let confidence: MemoryConfidence = 'low';

      if (stats.count === 1) {
        source = 'recent_behavior';
        status = 'active'; 
        confidence = 'low';
      } else if (stats.count >= 5) {
        confidence = 'high';
      } else if (stats.count >= 3) {
        confidence = 'medium';
      }

      if (stats.count >= 3 && stats.recentCount === 0) {
        status = 'declining';
      }

      if (stats.count >= 2 || (stats.count === 1 && stats.recentCount === 1)) {
        memories.push({
          id: `mem_move_${type}`,
          category: 'movement',
          statement: `فعالیت ${type} ${stats.count} بار ثبت شده`,
          source: stats.count < 3 && stats.recentCount > 0 ? 'recent_behavior' : 'observed_pattern',
          evidenceCount: stats.count,
          firstObservedAt: stats.firstAt,
          lastObservedAt: stats.lastAt,
          status,
          confidence,
          payload: { activityType: type }
        });
      }
    });
  }

  private static extractWellnessMemories(entries: WellnessCheckIn[], memories: PersonalMemory[]) {
    const recentCutoff = getDaysAgoDate(14).getTime();
    const lowEnergyEntries = entries.filter(e => (e.energy || 5) <= 2);
    
    if (lowEnergyEntries.length > 0) {
      const count = lowEnergyEntries.length;
      const recentCount = lowEnergyEntries.filter(e => new Date(e.date).getTime() >= recentCutoff).length;
      
      let status: MemoryStatus = count >= 3 && recentCount === 0 ? 'declining' : 'active';
      let confidence: MemoryConfidence = count >= 5 ? 'high' : count >= 3 ? 'medium' : 'low';
      
      if (count >= 2) {
        memories.push({
          id: `mem_well_low_energy`,
          category: 'wellness',
          statement: `انرژی پایین ${count} بار ثبت شده`,
          source: count < 3 && recentCount > 0 ? 'recent_behavior' : 'observed_pattern',
          evidenceCount: count,
          status,
          confidence,
          payload: { typicalEnergy: 'low' }
        });
      }
    }
  }

  private static extractNutritionMemories(mealsByDate: Record<string, Meal[]>, memories: PersonalMemory[]) {
    const recentCutoff = getDaysAgoDate(14).getTime();
    const mealStats: Record<string, { count: number; recentCount: number; lastAt: string }> = {};

    Object.entries(mealsByDate).forEach(([dateStr, meals]) => {
      const eTime = new Date(dateStr).getTime();
      const isRecent = eTime >= recentCutoff;
      
      meals.forEach(m => {
        if (!mealStats[m.type]) {
          mealStats[m.type] = { count: 0, recentCount: 0, lastAt: dateStr };
        }
        mealStats[m.type].count += 1;
        if (isRecent) mealStats[m.type].recentCount += 1;
        if (eTime > new Date(mealStats[m.type].lastAt).getTime()) mealStats[m.type].lastAt = dateStr;
      });
    });

    Object.entries(mealStats).forEach(([type, stats]) => {
      let status: MemoryStatus = stats.count >= 3 && stats.recentCount === 0 ? 'declining' : 'active';
      let confidence: MemoryConfidence = stats.count >= 10 ? 'high' : stats.count >= 5 ? 'medium' : 'low';
      
      if (stats.count >= 3) {
        memories.push({
          id: `mem_nut_${type}`,
          category: 'nutrition',
          statement: `وعده ${type} مرتباً ثبت می‌شود`,
          source: stats.count < 5 && stats.recentCount > 0 ? 'recent_behavior' : 'observed_pattern',
          evidenceCount: stats.count,
          lastObservedAt: stats.lastAt,
          status,
          confidence,
          payload: { mealType: type }
        });
      }
    });
  }
}
