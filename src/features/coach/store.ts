import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CoachMessage, CoachResponse } from './models';
import { PersonalContext } from '../context/PersonalContextService';
import { DailyVersion } from '../life-version/models';
import { coachService } from './service';

interface CoachState {
  messages: CoachMessage[];
  isTyping: boolean;
  clearHistory: () => void;
  sendMessage: (
    text: string, 
    context: PersonalContext, 
    dailyVersion?: DailyVersion
  ) => Promise<void>;
}

export const useCoachStore = create<CoachState>()(
  persist(
    (set, get) => ({
      messages: [],
      isTyping: false,
      
      clearHistory: () => set({ messages: [] }),
      
      sendMessage: async (text: string, context: PersonalContext, dailyVersion?: DailyVersion) => {
        const userMessage: CoachMessage = {
          id: `msg_u_${Date.now()}`,
          role: 'user',
          text,
          timestamp: new Date().toISOString()
        };
        
        set((state) => ({ 
          messages: [...state.messages, userMessage],
          isTyping: true 
        }));

        try {
          const response: CoachResponse = await coachService.sendMessage(
            text, 
            context, 
            dailyVersion, 
            get().messages
          );
          
          const assistantMessage: CoachMessage = {
            id: `msg_a_${Date.now()}`,
            role: 'assistant',
            text: response.text,
            action: response.action,
            timestamp: new Date().toISOString()
          };
          
          set((state) => ({ 
            messages: [...state.messages, assistantMessage],
            isTyping: false
          }));
        } catch (error) {
          const errorMessage: CoachMessage = {
            id: `msg_e_${Date.now()}`,
            role: 'assistant',
            text: 'فعلاً نتونستم جواب کاملت رو آماده کنم. دوباره امتحان کن.',
            timestamp: new Date().toISOString()
          };
          set((state) => ({ 
            messages: [...state.messages, errorMessage],
            isTyping: false
          }));
        }
      }
    }),
    {
      name: 'coach-storage'
    }
  )
);
