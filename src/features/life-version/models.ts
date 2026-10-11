export interface Recommendation {
  id: string;
  category: 'nutrition' | 'movement' | 'wellness' | 'lifestyle' | 'sleep';
  title: string;
  description: string;
  reason?: string;
  action?: {
    label: string;
    actionId: string;
  };
  priority: 'high' | 'medium' | 'low';
}

export interface DailyVersion {
  id: string;
  date: string;
  summary: string;
  priorities: Recommendation[];
  status: 'empty' | 'loading' | 'generated' | 'error';
  generatedAt?: string;
}

