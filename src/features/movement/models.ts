export type ActivityType =
  | 'walking'
  | 'running'
  | 'cycling'
  | 'hiking'
  | 'gym'
  | 'home_workout'
  | 'stretching'
  | 'yoga'
  | 'sport'
  | 'dance'
  | 'daily_activity'
  | 'other';

export type MovementIntensity = 'light' | 'moderate' | 'vigorous';

export interface MovementEntry {
  id: string;
  type: ActivityType;
  durationMinutes: number;
  intensity?: MovementIntensity;
  date: string;
  note?: string;
}

export const ACTIVITY_LABELS: Record<ActivityType, string> = {
  walking: 'پیاده‌روی',
  running: 'دویدن',
  cycling: 'دوچرخه',
  hiking: 'کوهنوردی',
  gym: 'باشگاه',
  home_workout: 'تمرین در خانه',
  stretching: 'کشش',
  yoga: 'یوگا',
  sport: 'ورزش',
  dance: 'رقص',
  daily_activity: 'فعالیت روزمره',
  other: 'سایر'
};

export const INTENSITY_LABELS: Record<MovementIntensity, string> = {
  light: 'سبک',
  moderate: 'متوسط',
  vigorous: 'شدید'
};
