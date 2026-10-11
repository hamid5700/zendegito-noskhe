export type EnergyLevel = 1 | 2 | 3 | 4 | 5;
export type MoodLevel = 1 | 2 | 3 | 4 | 5;
export type SleepQuality = 1 | 2 | 3 | 4 | 5;

export type WellnessNeed =
  | 'movement'
  | 'calm'
  | 'rest'
  | 'better_food'
  | 'me_time'
  | 'social'
  | 'focus';

export interface WellnessCheckIn {
  id: string;
  date: string;
  energy?: EnergyLevel;
  mood?: MoodLevel;
  sleepQuality?: SleepQuality;
  sleepDurationMinutes?: number;
  need?: WellnessNeed;
}

export const ENERGY_LABELS: Record<EnergyLevel, string> = {
  1: 'خیلی کم',
  2: 'کم',
  3: 'معمولی',
  4: 'خوب',
  5: 'عالی',
};

export const MOOD_LABELS: Record<MoodLevel, string> = {
  1: 'خسته',
  2: 'بی‌حوصله',
  3: 'معمولی',
  4: 'خوب',
  5: 'سرحال',
};

export const SLEEP_QUALITY_LABELS: Record<SleepQuality, string> = {
  1: 'خیلی بد',
  2: 'بد',
  3: 'معمولی',
  4: 'خوب',
  5: 'خیلی خوب',
};

export const WELLNESS_NEED_LABELS: Record<WellnessNeed, string> = {
  movement: 'حرکت',
  calm: 'آرامش',
  rest: 'استراحت',
  better_food: 'غذای بهتر',
  me_time: 'وقت برای خودم',
  social: 'ارتباط با آدم‌ها',
  focus: 'تمرکز',
};
