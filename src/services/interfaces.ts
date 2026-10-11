// Service Interfaces Placeholders

export interface ApiClient {
  get: <T>(url: string) => Promise<T>;
  post: <T>(url: string, data: any) => Promise<T>;
}

export interface AuthService {
  login: () => Promise<void>;
  logout: () => Promise<void>;
  getCurrentUser: () => Promise<any>;
}

export interface AiService {
  generateDailyVersion: (context: any) => Promise<any>;
  chatWithCoach: (message: string, history: any[]) => Promise<any>;
}

export interface NutritionService {
  searchFood: (query: string) => Promise<any[]>;
  logMeal: (mealData: any) => Promise<void>;
}

export interface HealthDataService {
  syncHealthKit: () => Promise<void>;
  syncGoogleFit: () => Promise<void>;
}
