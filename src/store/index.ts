import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProfile, HealthProfile, ActivityProfile, Goal, TasteProfile, LifeTasteProfile, RoutineProfile } from '../types';

export interface OnboardingData {
  firstName?: string;
  age?: number;
  sex?: 'male' | 'female' | 'other';
  heightCm?: number;
  weightKg?: number;
  primaryGoal?: string;
  activityLevel?: string;
  taste?: string[];
  lifeTaste?: string[];
  obstacles?: string[];
  foodExclusions?: string[]; // Allergies/Sensitivities
  foodDislikes?: string[]; // Disliked foods
}

interface AppState {
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile | null) => void;
  
  onboardingData: OnboardingData;
  setOnboardingData: (data: Partial<OnboardingData>) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
  userProfile: null,
  setUserProfile: (profile) => set({ userProfile: profile }),
  
  onboardingData: {},
  setOnboardingData: (data) => set((state) => ({ 
    onboardingData: { ...state.onboardingData, ...data } 
  })),
    }),
    { name: 'zendegito-app-storage' }
  )
);