import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WeightEntry, BodyGoal, BodyTrend, BodyInsight } from './models';

interface BodyState {
  entries: WeightEntry[];
  goal: BodyGoal | null;
  addEntry: (entry: Omit<WeightEntry, 'id'>) => void;
  removeEntry: (id: string) => void;
  setGoal: (goal: BodyGoal) => void;
  getTrend: (periodDays: number) => BodyTrend;
  getInsight: () => BodyInsight | null;
}

export const useBodyStore = create<BodyState>()(
  persist(
    (set, get) => ({
  entries: [],
  goal: null,
  
  addEntry: (entry) => set((state) => {
    const newEntry = { ...entry, id: `w_${Date.now()}` };
    const newEntries = [...state.entries, newEntry].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return { entries: newEntries };
  }),
  
  removeEntry: (id) => set((state) => ({
    entries: state.entries.filter(e => e.id !== id)
  })),
  
  setGoal: (goal) => set({ goal }),

  getTrend: (periodDays: number): BodyTrend => {
    const { entries } = get();
    if (entries.length < 2) {
      return { period: periodDays === 7 ? '7d' : periodDays === 30 ? '30d' : '90d', direction: 'insufficient_data' };
    }

    const sorted = [...entries].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const latest = sorted[0];
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - periodDays);

    let startEntry = sorted.find(e => new Date(e.date) <= cutoffDate);
    
    // If no exact match before cutoff, take the oldest available if it's somewhat meaningful
    if (!startEntry) {
      startEntry = sorted[sorted.length - 1];
    }

    // Still not enough context if latest is startEntry
    if (startEntry.id === latest.id) {
      return { period: periodDays === 7 ? '7d' : periodDays === 30 ? '30d' : '90d', direction: 'insufficient_data' };
    }

    const change = Number((latest.weight - startEntry.weight).toFixed(1));
    const direction = change < -0.2 ? 'down' : change > 0.2 ? 'up' : 'stable';

    return {
      period: periodDays === 7 ? '7d' : periodDays === 30 ? '30d' : '90d',
      startWeight: startEntry.weight,
      endWeight: latest.weight,
      change,
      direction
    };
  },

  getInsight: () => {
    const { entries, getTrend } = get();
    if (entries.length < 2) {
      return {
        id: 'ins_1',
        type: 'change',
        text: 'برای تحلیل روند، چند ثبت دیگر لازم داریم.'
      };
    }

    const trend30 = getTrend(30);

    if (trend30.direction === 'insufficient_data') {
      return {
        id: 'ins_2',
        type: 'change',
        text: 'ثبت‌های بیشتری نیاز است تا تصویر واضح‌تری داشته باشیم.'
      };
    }

    if (trend30.direction === 'down') {
      return {
        id: 'ins_3',
        type: 'trend',
        text: 'در این بازه روند وزنت رو به کاهش بوده.'
      };
    } else if (trend30.direction === 'up') {
      return {
        id: 'ins_4',
        type: 'trend',
        text: 'در این بازه روند وزنت کمی افزایشی بوده.'
      };
    } else {
      return {
        id: 'ins_5',
        type: 'consistency',
        text: 'وزنت در این بازه تقریباً ثابت و پایدار بوده.'
      };
    }
  }
    }),
    { name: 'zendegito-body-storage' }
  )
);
