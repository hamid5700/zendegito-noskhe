// Core Models for Zendegito Ecosystem

export interface User {
  id: string;
  email: string;
  phoneNumber?: string;
  createdAt: string;
}

export interface UserProfile {
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  sex?: 'male' | 'female' | 'other';
  onboardingCompleted: boolean;
}

export interface HealthProfile {
  heightCm?: number;
  bloodType?: string;
}

export interface NutritionProfile {
  dietaryPreferences: string[];
  allergies: string[];
  baseCalorieTarget?: number;
}

export interface BodyProfile {
  currentWeightKg?: number;
  targetWeightKg?: number;
}

export interface ActivityProfile {
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  weeklyWorkoutGoal?: number;
}

export interface WellnessProfile {
  sleepGoalHours?: number;
  primaryStressors: string[];
}

export interface Goal {
  id: string;
  type: 'weight' | 'activity' | 'nutrition' | 'wellness';
  target: number;
  deadline?: string;
  status: 'active' | 'completed' | 'abandoned';
}

export interface Meal {
  id: string;
  name: string;
  timestamp: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  calories?: number;
}

export interface Food {
  id: string;
  name: string;
  caloriesPer100g: number;
  proteinPer100g: number;
  carbsPer100g: number;
  fatPer100g: number;
}

export interface WeightEntry {
  id: string;
  weightKg: number;
  timestamp: string;
}

export interface ActivityEntry {
  id: string;
  type: string;
  durationMinutes: number;
  caloriesBurned?: number;
  timestamp: string;
}

export interface SleepEntry {
  id: string;
  durationHours: number;
  quality: 'poor' | 'fair' | 'good' | 'excellent';
  timestamp: string;
}

export interface MoodEntry {
  id: string;
  mood: 'very_low' | 'low' | 'neutral' | 'good' | 'great';
  energyLevel: number; // 1-10
  timestamp: string;
}

export interface CoachMessage {
  id: string;
  sender: 'coach' | 'user';
  content: string;
  timestamp: string;
}

export interface Insight {
  id: string;
  type: 'pattern' | 'recommendation' | 'alert';
  title: string;
  description: string;
  confidence: number;
}

export interface TasteProfile {
  dietaryPreferences: string[];
  favoriteFoods: string[];
  dislikedFoods: string[];
  sweetOrSavory?: 'sweet' | 'savory' | 'both';
  mealPreferences: string[];
}

export interface LifeTasteProfile {
  chronotype?: 'morning' | 'night' | 'flexible';
  socialPreference?: 'introvert' | 'extrovert' | 'ambivert';
  interests: string[];
}

export interface RoutineProfile {
  schedulePredictability?: 'very_regular' | 'somewhat_regular' | 'irregular';
  commonObstacles: string[];
}
