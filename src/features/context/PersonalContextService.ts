import { getLocalTodayDateString } from '../../utils/date';
import { useAppStore } from '../../store';
import { useBodyStore } from '../body/store';
import { useMovementStore } from '../movement/store';
import { useWellnessStore } from '../wellness/store';
import { useNutritionStore } from '../nutrition/store';
import { BodyTrend } from '../body/models';
import { MovementEntry } from '../movement/models';
import { WellnessCheckIn } from '../wellness/models';
import { DailyNutritionSummary } from '../nutrition/models';
import { PersonalPatternService, PersonalPatterns } from '../patterns/PersonalPatternService';
import { PersonalMemoryService, PersonalMemory } from '../memory/PersonalMemoryService';

export type TodayNeed =
  | 'fuel'
  | 'movement'
  | 'recovery'
  | 'calm'
  | 'connection'
  | 'focus'
  | 'balance';

export interface PersonalContext {
  // Stable / slow-changing context
  preferences: {
    primaryGoal?: string;
    obstacles?: string[];
    taste?: string[];
    lifeTaste?: string[];
    routine?: string[];
    foodExclusions?: string[];
    foodDislikes?: string[];
  };

  // Current State (today)
  current: {
    energy?: number;
    mood?: number;
    sleepQuality?: number;
    wellnessNeed?: string;
    movementMinutes: number;
    hasLoggedFood: boolean;
    loggedMeals: string[];
    hasLoggedWellness: boolean;
  };

  // Recent Patterns
  patterns: {
    bodyTrend: BodyTrend | null;
    movementActiveDaysThisWeek: number;
    wellnessCheckinsThisWeek: number;
    nutritionLoggedDaysThisWeek: number;
    inferred: PersonalPatterns;
  };
  memories: PersonalMemory[];
  
  // Legacy fields (kept for backward compatibility with existing code)
  body: {
    trend: BodyTrend | null;
  } | null;
  movement: {
    todayMinutes: number;
    activeDaysThisWeek: number;
    recentEntries: MovementEntry[];
  } | null;
  wellness: {
    today: WellnessCheckIn | null;
    recent: WellnessCheckIn[];
  } | null;
  nutrition: {
    today: DailyNutritionSummary | null;
  } | null;

  contextConfidence: 'minimal' | 'partial' | 'rich';
  activeSignals: number;
}

export function usePersonalContext(): PersonalContext {
  const onboardingData = useAppStore(state => state.onboardingData);
  const bodyEntries = useBodyStore(state => state.entries);
  const getTrend = useBodyStore(state => state.getTrend);
  const movementEntries = useMovementStore(state => state.entries);
  const getTodaySummary = useMovementStore(state => state.getTodaySummary);
  const getWeeklyConsistency = useMovementStore(state => state.getWeeklyConsistency);
  const wellnessEntries = useWellnessStore(state => state.entries);
  const getTodayWellness = useWellnessStore(state => state.getTodayEntry);
  const getRecentWellness = useWellnessStore(state => state.getRecentEntries);
  const nutritionMeals = useNutritionStore(state => state.mealsByDate);
  const getDailySummary = useNutritionStore(state => state.getDailySummary);

  const bodyTrend = getTrend(30);
  const todayMovement = getTodaySummary();
  const activeDaysThisWeek = getWeeklyConsistency().filter(day => day.entries.length > 0).length;
  
  const todayWellness = getTodayWellness();
  const recentWellness = getRecentWellness(7);
  
  const todayDate = getLocalTodayDateString();
  const todayNutrition = getDailySummary(todayDate);

  let activeSignals = 0;
  if (bodyTrend.direction !== 'insufficient_data') activeSignals++;
  if (movementEntries.length > 0) activeSignals++;
  if (todayWellness) activeSignals++;
  if (onboardingData) activeSignals++;
  if (todayMovement.totalMinutes > 0) activeSignals++; // recent vs today
  if (todayNutrition.meals.length > 0) activeSignals++;

  const contextConfidence = activeSignals >= 4 ? 'rich' : activeSignals >= 2 ? 'partial' : 'minimal';
    
  const inferredPatterns = PersonalPatternService.analyze(movementEntries, wellnessEntries, nutritionMeals);
  const memories = PersonalMemoryService.generateMemories({ primaryGoal: onboardingData?.primaryGoal, obstacles: onboardingData?.obstacles, taste: onboardingData?.taste, lifeTaste: onboardingData?.lifeTaste, routine: (onboardingData as any)?.routine }, movementEntries, wellnessEntries, nutritionMeals);

  const recentNutritionDaysThisWeek = Object.keys(nutritionMeals).filter(date => {
    const diffTime = Math.abs(new Date().getTime() - new Date(date).getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays <= 7;
  }).length;

  return {
    preferences: {
      primaryGoal: onboardingData?.primaryGoal,
      obstacles: onboardingData?.obstacles,
      taste: onboardingData?.taste,
      lifeTaste: onboardingData?.lifeTaste,
      foodExclusions: onboardingData?.foodExclusions,
      foodDislikes: onboardingData?.foodDislikes,
    },
    current: {
      energy: todayWellness?.energy,
      mood: todayWellness?.mood,
      sleepQuality: todayWellness?.sleepQuality,
      wellnessNeed: todayWellness?.need,
      movementMinutes: todayMovement.totalMinutes,
      hasLoggedFood: todayNutrition.meals.length > 0,
      loggedMeals: todayNutrition.meals.map(m => m.type),
      hasLoggedWellness: !!todayWellness
    },
    patterns: {
      bodyTrend: bodyTrend.direction !== 'insufficient_data' ? bodyTrend : null,
      movementActiveDaysThisWeek: activeDaysThisWeek,
      wellnessCheckinsThisWeek: recentWellness.length,
      nutritionLoggedDaysThisWeek: recentNutritionDaysThisWeek,
      inferred: inferredPatterns
    },
    memories,
    // Legacy fields
    body: {
      trend: bodyTrend,
    },
    movement: movementEntries.length > 0 ? {
      todayMinutes: todayMovement.totalMinutes,
      activeDaysThisWeek,
      recentEntries: movementEntries.slice(0, 5),
    } : null,
    wellness: recentWellness.length > 0 ? {
      today: todayWellness,
      recent: recentWellness,
    } : null,
    nutrition: todayNutrition.meals.length > 0 ? {
      today: todayNutrition,
    } : null,
    contextConfidence,
    activeSignals
  };
}
