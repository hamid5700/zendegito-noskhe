import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, User, Activity, Plus } from 'lucide-react';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { Button } from '../../../components/ui/Button';
import { useCoachStore } from '../../../features/coach/store';
import { CoachMessageBubble } from '../../../features/coach/components/CoachMessageBubble';
import { usePersonalContext } from '../../../features/context/PersonalContextService';
import { generateDeterministicDailyVersion } from '../../../features/life-version/engine';
import { CoachAction } from '../../../features/coach/models';
import { useNavigate } from 'react-router-dom';

const SUGGESTED_QUESTIONS = [
  'امروز چی بخورم؟',
  'امروز چقدر حرکت کنم؟',
  'چرا این نسخه رو بهم دادی؟',
  'این هفته چطور بودم؟'
];

export default function CoachPage() {
  const { messages, isTyping, sendMessage, clearHistory } = useCoachStore();
  const personalContext = usePersonalContext();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Derive DailyVersion cleanly based on current context
  const dailyVersion = generateDeterministicDailyVersion(personalContext);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim() || isTyping) return;
    const text = inputValue.trim();
    setInputValue('');
    sendMessage(text, personalContext, dailyVersion);
  };

  const handleActionClick = (action: CoachAction) => {
    switch (action.type) {
      case 'log_food':
        navigate('/nutrition', { state: { openSearch: true } });
        break;
      case 'log_movement':
        navigate('/movement');
        break;
      case 'log_weight':
        navigate('/journey');
        break;
      case 'open_daily_version':
        navigate('/today');
        break;
      case 'check_in':
        // Ideally we'd pop a global bottom sheet, but routing to journey covers it
        navigate('/journey'); 
        break;
      case 'what_to_eat':
        // Navigating to nutrition with state to auto-open the sheet
        navigate('/nutrition', { state: { openRecommendations: true } });
        break;
    }
  };

  return (
    <div className="h-full flex flex-col bg-surface-50 relative">
      
      {/* Header */}
      <header className={cn("pt-12 pb-4 bg-surface-50/90 backdrop-blur-md sticky top-0 z-20 border-b border-surface-200/50", tokens.spacing.screenPadding)}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className={cn(tokens.typography.display, "mb-1 text-primary-900")}>مربی من</h1>
            <p className={cn(tokens.typography.label, "text-surface-500")}>هر چیزی درباره امروزت خواستی، از من بپرس.</p>
          </div>
          {messages.length > 0 && (
            <button 
              onClick={clearHistory}
              className="text-xs text-surface-400 font-bold hover:text-accent-terracotta transition-colors"
            >
              پاک کردن تاریخچه
            </button>
          )}
        </div>
        
        <div 
          onClick={() => navigate('/today')}
          className="flex items-center gap-2 bg-primary-50/50 text-primary-800 px-3 py-2 rounded-xl text-xs font-bold border border-primary-100/50 cursor-pointer hover:bg-primary-50 transition-colors w-fit"
        >
          <Sparkles size={14} className="text-primary-500" />
          <span>امروزت رو بر اساس حال، غذا و حرکتت می‌بینیم.</span>
        </div>
      </header>
      
      {/* Messages Area */}
      <div className={cn("flex-1 overflow-y-auto py-6", tokens.spacing.screenPadding)}>
        {messages.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col h-full items-center justify-center text-center mt-12"
          >
            <div className="w-16 h-16 rounded-full bg-surface-100 flex items-center justify-center text-surface-300 mb-6 border border-surface-200/50">
              <Sparkles size={28} />
            </div>
            <p className={cn(tokens.typography.body, "text-surface-500 max-w-[280px] mb-8 leading-relaxed")}>
              من از چیزهایی که درباره خودت ثبت می‌کنی کمک می‌گیرم تا پیشنهادهای متناسب‌تری بهت بدم.
            </p>
            
            <div className="flex flex-col gap-3 w-full max-w-[300px]">
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(q, personalContext, dailyVersion)}
                  className="bg-white border border-surface-200/50 rounded-xl px-4 py-3 text-sm font-medium text-primary-800 hover:bg-primary-50 hover:border-primary-200 transition-colors text-right"
                >
                  {q}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col">
            {messages.map((msg) => (
              <CoachMessageBubble 
                key={msg.id} 
                message={msg} 
                onActionClick={handleActionClick} 
              />
            ))}
            
            {isTyping && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-1 bg-white border border-surface-200/60 rounded-2xl rounded-tr-none px-4 py-3.5 w-fit shadow-sm mt-2 mb-6 items-center h-[46px]"
              >
                <div className="w-1.5 h-1.5 bg-surface-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 bg-surface-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 bg-surface-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </motion.div>
            )}
            
            <div ref={messagesEndRef} className="h-4" />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className={cn("p-4 pb-safe bg-surface-50 border-t border-surface-200/50 sticky bottom-0", tokens.spacing.screenPadding)}>
        <div className="relative flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="سوالت رو بپرس..."
            disabled={isTyping}
            className="w-full bg-white border border-surface-200/80 rounded-full py-3.5 pr-5 pl-14 text-sm font-medium text-primary-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-200 shadow-sm disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isTyping}
            className="absolute left-2 w-10 h-10 rounded-full bg-primary-900 text-white flex items-center justify-center disabled:opacity-30 disabled:bg-surface-300 transition-all hover:bg-primary-800"
          >
            <Send size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
