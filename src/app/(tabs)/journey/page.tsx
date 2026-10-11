import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Activity, Apple, Leaf, Scale, CheckCircle2, ChevronLeft, Target } from 'lucide-react';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { Button } from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { usePersonalContext } from '../../../features/context/PersonalContextService';
import { generateDeterministicDailyVersion } from '../../../features/life-version/engine';
import { generateJourneyInsights, TimeWindow } from '../../../features/journey/services/JourneyInsightService';
import { JourneyInsightCard } from '../../../features/journey/components/JourneyInsightCard';

import { WeightEntrySheet } from '../../../features/body/components/WeightEntrySheet';
import { WellnessCheckInSheet } from '../../../features/wellness/components/WellnessCheckInSheet';
import { BodyHistory } from '../../../features/body/components/BodyHistory';

export default function JourneyPage() {
  const [timeWindow, setTimeWindow] = useState<TimeWindow>(7);
  const [isWeightOpen, setIsWeightOpen] = useState(false);
  const [isWellnessOpen, setIsWellnessOpen] = useState(false);
  const navigate = useNavigate();
  
  const context = usePersonalContext();
  const currentVersion = useMemo(() => generateDeterministicDailyVersion(context), [context]);
  
  const insights = useMemo(() => {
    return generateJourneyInsights(timeWindow, context, currentVersion);
  }, [timeWindow, context, currentVersion]);

  const handleAction = (route: string) => {
    if (route === '/wellness') setIsWellnessOpen(true);
    else navigate(route);
  };

  return (
    <div className={cn("min-h-full flex flex-col pt-12 pb-24 relative", tokens.spacing.screenPadding)}>
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1 className={cn(tokens.typography.display, "mb-2")}>مسیر من</h1>
          <p className={cn(tokens.typography.body, "text-surface-400")}>ببین در چه مسیری قرار داری.</p>
        </div>
      </header>
      
      {/* Time Window Selector */}
      <div className="flex gap-2 mb-8 bg-surface-100 p-1 rounded-2xl w-fit">
        {[7, 30, 90].map((days) => (
          <button
            key={days}
            onClick={() => setTimeWindow(days as TimeWindow)}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium transition-colors",
              timeWindow === days 
                ? "bg-white text-primary-900 shadow-sm" 
                : "text-surface-500 hover:text-surface-700 hover:bg-surface-200/50"
            )}
          >
            {days} روز
          </button>
        ))}
      </div>

      <motion.div
        key={`insights-${timeWindow}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 flex flex-col gap-6"
      >
        {/* Hero Summary */}
        <div className="bg-primary-50 rounded-3xl p-6 border border-primary-100">
          <h2 className={cn(tokens.typography.h2, "text-primary-900 mb-2 leading-tight")}>
            {insights.heroSummary}
          </h2>
        </div>

        {/* Current Focus (Connection to DailyVersion) */}
        {currentVersion && currentVersion.priorities.length > 0 && (
          <div 
            onClick={() => navigate('/today')}
            className="bg-white rounded-3xl p-5 border border-surface-200 shadow-sm cursor-pointer hover:border-primary-300 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-sand-light text-primary-700 flex items-center justify-center">
                <Target size={24} />
              </div>
              <div>
                <span className={cn(tokens.typography.label, "text-surface-400 block mb-1")}>تمرکز امروزت</span>
                <span className={cn(tokens.typography.body, "font-bold text-primary-900 block")}>
                  {currentVersion.priorities[0].title}
                </span>
              </div>
            </div>
            <ChevronLeft size={20} className="text-surface-300 group-hover:text-primary-600 transition-colors" />
          </div>
        )}

        {/* Positive Patterns & Changes */}
        {insights.hasData && (insights.positivePatterns.length > 0 || insights.changes.length > 0) && (
          <div className="bg-white rounded-3xl p-6 border border-surface-200/50 shadow-sm">
            {insights.positivePatterns.length > 0 && (
              <div className="mb-6 last:mb-0">
                <h3 className={cn(tokens.typography.h3, "text-green-800 mb-3 flex items-center gap-2")}>
                  <CheckCircle2 size={18} />
                  چه چیزی خوب پیش رفته؟
                </h3>
                <ul className="space-y-3">
                  {insights.positivePatterns.map((pattern, idx) => (
                    <li key={idx} className={cn(tokens.typography.body, "text-surface-600 flex items-start gap-2 before:content-['•'] before:text-green-500 before:font-bold")}>
                      {pattern}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {insights.changes.length > 0 && (
              <div className="last:mb-0">
                <h3 className={cn(tokens.typography.h3, "text-primary-900 mb-3 flex items-center gap-2")}>
                  <Activity size={18} />
                  چه چیزی تغییر کرده؟
                </h3>
                <ul className="space-y-3">
                  {insights.changes.map((change, idx) => (
                    <li key={idx} className={cn(tokens.typography.body, "text-surface-600 flex items-start gap-2 before:content-['•'] before:text-primary-400 before:font-bold")}>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Insight Cards */}
        {insights.cards.length > 0 && (
          <div className="grid grid-cols-1 gap-4">
            {insights.cards.map(card => (
              <JourneyInsightCard key={card.id} card={card} onAction={handleAction} />
            ))}
          </div>
        )}
        
        {/* Quick Links if sparse */}
        {!insights.hasData && (
          <div className="grid grid-cols-2 gap-4 mt-2">
             <div 
              onClick={() => setIsWellnessOpen(true)}
              className="bg-surface-100 rounded-2xl p-4 border border-surface-200/50 flex flex-col justify-between cursor-pointer hover:bg-surface-200 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-white text-teal-700 flex items-center justify-center shadow-sm mb-3">
                <Leaf size={16} />
              </div>
              <div>
                <span className={cn(tokens.typography.h3, "text-primary-900 block mb-0.5")}>حال من</span>
                <span className={cn(tokens.typography.caption, "text-surface-500")}>امروز چه حالی داری؟</span>
              </div>
            </div>
            
            <div 
              onClick={() => navigate('/movement')}
              className="bg-surface-100 rounded-2xl p-4 border border-surface-200/50 flex flex-col justify-between cursor-pointer hover:bg-surface-200 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-white text-orange-600 flex items-center justify-center shadow-sm mb-3">
                <Activity size={16} />
              </div>
              <div>
                <span className={cn(tokens.typography.h3, "text-primary-900 block mb-0.5")}>حرکت من</span>
                <span className={cn(tokens.typography.caption, "text-surface-500")}>ثبت حرکت</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Legacy Body History hook - keeping it at the bottom to preserve existing architecture */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className={cn(tokens.typography.h2, "text-primary-900")}>تاریخچه وزن</h2>
            <Button variant="ghost" size="sm" onClick={() => setIsWeightOpen(true)}>
              ثبت وزن
            </Button>
          </div>
          <BodyHistory />
        </div>
        
      </motion.div>

      <WeightEntrySheet 
        isOpen={isWeightOpen} 
        onClose={() => setIsWeightOpen(false)} 
      />
      
      <WellnessCheckInSheet
        isOpen={isWellnessOpen}
        onClose={() => setIsWellnessOpen(false)}
      />
    </div>
  );
}
