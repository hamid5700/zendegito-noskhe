export type CoachActionType = 
  | 'log_food' 
  | 'log_weight' 
  | 'log_movement' 
  | 'check_in' 
  | 'open_daily_version'
  | 'what_to_eat';

export interface CoachAction {
  type: CoachActionType;
  label: string;
}

export interface CoachMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  action?: CoachAction;
  contextSnapshot?: string; // Optional metadata about the context at the time
}

export interface CoachResponse {
  text: string;
  action?: CoachAction;
}
