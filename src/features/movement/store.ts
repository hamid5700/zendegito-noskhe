import { getLocalTodayDateString } from '../../utils/date';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MovementEntry } from './models';

interface MovementState {
  entries: MovementEntry[];
  addEntry: (entry: Omit<MovementEntry, 'id'>) => void;
  removeEntry: (id: string) => void;
  getTodaySummary: () => { totalMinutes: number; activitiesCount: number; uniqueTypes: string[] };
  getWeeklyConsistency: () => { date: string; entries: MovementEntry[] }[];
  getInsight: () => string;
}

export const useMovementStore = create<MovementState>()(
  persist(
    (set, get) => ({
  entries: [],
  
  addEntry: (entry) => set((state) => ({
    entries: [{ ...entry, id: `m_${Date.now()}` }, ...state.entries].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  })),
  
  removeEntry: (id) => set((state) => ({
    entries: state.entries.filter(e => e.id !== id)
  })),

  getTodaySummary: () => {
    const { entries } = get();
    const today = getLocalTodayDateString();
    
    const todayEntries = entries.filter(e => e.date.startsWith(today));
    
    const totalMinutes = todayEntries.reduce((acc, curr) => acc + curr.durationMinutes, 0);
    const uniqueTypes = Array.from(new Set(todayEntries.map(e => e.type)));
    
    return {
      totalMinutes,
      activitiesCount: todayEntries.length,
      uniqueTypes
    };
  },

  getWeeklyConsistency: () => {
    const { entries } = get();
    const week = [];
    
    // Generate last 7 days ending today
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      
      week.push({
        date: dateStr,
        entries: entries.filter(e => e.date.startsWith(dateStr))
      });
    }
    
    return week;
  },

  getInsight: () => {
    const { entries } = get();
    if (entries.length === 0) {
      return 'با ثبت اولین فعالیت، تصویر بهتری از الگوی حرکتت پیدا می‌کنیم.';
    }

    const weekly = get().getWeeklyConsistency();
    const activeDays = weekly.filter(day => day.entries.length > 0).length;

    if (activeDays >= 4) {
      return 'این هفته حرکتت منظم‌تر از قبل بوده. عالیه که حرکت رو بخشی از زندگیت کردی.';
    } else if (activeDays > 0 && activeDays < 4) {
      return 'همین که چند روز هفته حرکت داشتی، نشونه خوبیه. یک پیاده‌روی کوتاه می‌تونه این ریتم رو حفظ کنه.';
    } else {
      return 'چند روزه حرکت کمتری داشتی؛ یک فعالیت سبک مثل کشش یا پیاده‌روی می‌تونه شروع خوبی باشه.';
    }
  }
    }),
    { name: 'zendegito-movement-storage' }
  )
);
