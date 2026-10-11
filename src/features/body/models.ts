export type WeightEntry = {
  id: string;
  weight: number;
  unit: 'kg';
  date: string;
  note?: string;
};

export type BodyGoal = {
  type: 'weight' | 'fitness' | 'energy' | 'health' | 'lifestyle';
  targetWeight?: number;
  startWeight?: number;
};

export type BodyTrend = {
  period: '7d' | '30d' | '90d';
  startWeight?: number;
  endWeight?: number;
  change?: number;
  direction: 'up' | 'down' | 'stable' | 'insufficient_data';
};

export type BodyInsight = {
  id: string;
  type: 'trend' | 'consistency' | 'change';
  text: string;
};
