import { getLocalTodayDateString } from '../../utils/date';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WellnessCheckIn, EnergyLevel, MoodLevel, SleepQuality, WellnessNeed } from './models';

interface WellnessState {
  entries: WellnessCheckIn[];
  addOrUpdateEntry: (entry: Omit<WellnessCheckIn, 'id'>) => void;
  getTodayEntry: () => WellnessCheckIn | null;
  getRecentEntries: (days: number) => WellnessCheckIn[];
}

export const useWellnessStore = create<WellnessState>()(
  persist(
    (set, get) => ({
  entries: [],
  
  addOrUpdateEntry: (entry) => set((state) => {
    const today = new Date(entry.date).toISOString().split('T')[0];
    const existingIndex = state.entries.findIndex(e => e.date.startsWith(today));
    
    if (existingIndex >= 0) {
      const updatedEntries = [...state.entries];
      updatedEntries[existingIndex] = { ...updatedEntries[existingIndex], ...entry };
      return { entries: updatedEntries };
    }
    
    const newEntry = { ...entry, id: `well_${Date.now()}` };
    const newEntries = [...state.entries, newEntry].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return { entries: newEntries };
  }),

  getTodayEntry: () => {
    const today = getLocalTodayDateString();
    const { entries } = get();
    return entries.find(e => e.date.startsWith(today)) || null;
  },

  getRecentEntries: (days: number) => {
    const { entries } = get();
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    return entries.filter(e => new Date(e.date) >= cutoff).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }
    }),
    { name: 'zendegito-wellness-storage' }
  )
);
