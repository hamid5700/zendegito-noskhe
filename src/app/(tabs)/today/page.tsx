import { useMemo, useState } from 'react';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { Card } from '../../../components/ui/Card';
import { Motif } from '../../../components/ui/Motif';
import { motion, AnimatePresence } from 'motion/react';
import { useAppStore } from '../../../store';
import { generateDeterministicDailyVersion } from '../../../features/life-version/engine';
import { RecommendationCard } from '../../../features/life-version/components/RecommendationCard';
import { Activity, Leaf, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { usePersonalContext } from '../../../features/context/PersonalContextService';
import { WellnessCheckInSheet } from '../../../features/wellness/components/WellnessCheckInSheet';

export default function TodayPage() {
  const { userProfile } = useAppStore();
  const navigate = useNavigate();
  const personalContext = usePersonalContext();
  const [isWellnessSheetOpen, setIsWellnessSheetOpen] = useState(false);
  
  // Use useMemo to generate the deterministic daily version based on current data
  const dailyVersion = useMemo(() => {
    return generateDeterministicDailyVersion(personalContext);
  }, [personalContext]);
  
  const totalMinutes = personalContext.movement?.todayMinutes || 0;
  const hasWellnessToday = !!personalContext.wellness?.today;

  const currentDate = new Intl.DateTimeFormat('fa-IR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date());

  const easeSpring = [0.22, 1, 0.36, 1];
  
  const initial = userProfile?.firstName ? userProfile.firstName.charAt(0) : 'ز';
  const name = userProfile?.firstName || 'دوست من';

  const handleAction = (actionId: string) => {
    switch (actionId) {
      case 'log_wellness':
        setIsWellnessSheetOpen(true);
        break;
      case 'log_movement':
      case 'start_walk':
        navigate('/movement');
        break;
      case 'log_water':
      case 'what_to_eat':
        navigate('/nutrition', { state: { openRecommendations: true } });
        break;
      case 'log_food':
        navigate('/nutrition', { state: { openSearch: true } });
        break;
      default:
        // Future actions (e.g. set_sleep_reminder) can be handled here or simply navigate home
        break;
    }
  };

  return (
    <div className={cn("min-h-full flex flex-col pt-12 pb-24", tokens.spacing.screenPadding)}>
      
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeSpring }}
        className="flex justify-between items-center mb-10"
      >
        <div>
          <h2 className={cn(tokens.typography.caption, "text-accent-terracotta mb-1.5")}>{currentDate}</h2>
          <h1 className={cn(tokens.typography.h3, "text-primary-800")}>سلام، {name}</h1>
        </div>
        <div className="w-12 h-12 rounded-full bg-surface-100 flex items-center justify-center overflow-hidden border border-surface-200/50 shadow-sm text-primary-900 cursor-pointer hover:bg-surface-200 transition-colors">
          <span className="font-bold text-lg leading-none pt-1">{initial}</span>
        </div>
      </motion.header>

      {/* Hero Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: easeSpring }}
        className="mb-8"
      >
        <h2 className={cn(tokens.typography.display, "text-primary-900 mb-2")}>امروز، نسخه تو چیه؟</h2>
        <p className={cn(tokens.typography.bodyLarge, "text-surface-500")}>
          {personalContext.activeSignals > 0 ? 'نسخه‌ای که با ریتم زندگی تو تنظیم شده.' : 'یک قدم کوچک برای شروع.'}
        </p>
      </motion.div>

      {/* Daily Version Summary */}
      {dailyVersion.status !== 'empty' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeSpring }}
          className="mb-10"
        >
          <Card className="relative overflow-hidden group border border-primary-200/50 shadow-sm" padding="large">
            <div className="absolute top-0 right-0 w-[150%] h-[150%] -translate-y-1/4 translate-x-1/4 opacity-[0.03] text-primary-900 pointer-events-none transition-transform duration-1000 group-hover:rotate-3 group-hover:scale-105">
              <Motif />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 bg-primary-50 border border-primary-100 rounded-full">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-[11px] font-bold text-primary-800 tracking-wide">مخصوص تو</span>
              </div>
              
              <h3 className={cn(tokens.typography.h2, "text-primary-900 leading-relaxed")}>
                {dailyVersion.summary}
              </h3>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Coach Connection */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: easeSpring }}
        className="mb-10"
      >
        <div 
          onClick={() => navigate('/coach')}
          className="bg-primary-50/50 border border-primary-100/50 rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-primary-50 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-white text-primary-600 flex flex-shrink-0 items-center justify-center shadow-sm">
            <Sparkles size={18} />
          </div>
          <div>
            <span className={cn(tokens.typography.label, "text-primary-900 block mb-0.5 font-bold")}>درباره نسخه امروزت سوال داری؟</span>
            <span className={cn(tokens.typography.caption, "text-primary-700/80")}>همین الان از مربی بپرس.</span>
          </div>
        </div>
      </motion.div>

      {/* Contextual Modules Row */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: easeSpring }}
        className="mb-10 grid grid-cols-2 gap-4"
      >
        {/* Wellness Context */}
        <div 
          onClick={() => setIsWellnessSheetOpen(true)}
          className="bg-surface-100 rounded-2xl p-4 border border-surface-200/50 flex flex-col justify-between cursor-pointer hover:bg-surface-200 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-white text-teal-700 flex items-center justify-center shadow-sm mb-3">
            <Leaf size={16} />
          </div>
          <div>
            <span className={cn(tokens.typography.h3, "text-primary-900 block mb-0.5")}>
              {hasWellnessToday ? 'حالت ثبت شد' : 'حال من'}
            </span>
            <span className={cn(tokens.typography.caption, "text-surface-500")}>
              {hasWellnessToday ? 'ویرایش وضعیت امروز' : 'امروز چه حالی داری؟'}
            </span>
          </div>
        </div>

        {/* Movement Context */}
        <div 
          onClick={() => navigate('/movement')}
          className="bg-surface-100 rounded-2xl p-4 border border-surface-200/50 flex flex-col justify-between cursor-pointer hover:bg-surface-200 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-white text-orange-600 flex items-center justify-center shadow-sm mb-3">
            <Activity size={16} />
          </div>
          <div>
            <span className={cn(tokens.typography.h3, "text-primary-900 block mb-0.5")}>
              {totalMinutes > 0 ? `${totalMinutes} دقیقه حرکت` : 'حرکت امروز'}
            </span>
            <span className={cn(tokens.typography.caption, "text-surface-500")}>
              {totalMinutes > 0 ? 'ثبت‌های امروزت رو ببین' : 'چه حرکتی برات مناسبه؟'}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Priorities List */}
      {dailyVersion.priorities.length > 0 && (
        <div className="flex flex-col">
          <div className="mb-8">
            <h3 className={cn(tokens.typography.h3, "text-primary-900 mb-4")}>اولویت امروز</h3>
            <RecommendationCard 
              key={dailyVersion.priorities[0].id} 
              recommendation={dailyVersion.priorities[0]} 
              index={0} 
              onActionClick={handleAction}
            />
          </div>
          
          {dailyVersion.priorities.length > 1 && (
            <div>
              <h3 className={cn(tokens.typography.h3, "text-primary-900 mb-4")}>برای ادامه روز</h3>
              <div className="flex flex-col gap-4">
                {dailyVersion.priorities.slice(1).map((rec, index) => (
                  <RecommendationCard 
                    key={rec.id} 
                    recommendation={rec} 
                    index={index + 1} 
                    onActionClick={handleAction}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {dailyVersion.status === 'empty' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 flex flex-col items-center justify-center text-center mt-12"
        >
          <h3 className={cn(tokens.typography.h3, "text-primary-900 mb-3")}>نسخه زندگی تو از اینجا شروع می‌شه.</h3>
          <p className={cn(tokens.typography.body, "text-surface-500 max-w-[280px]")}>من با کارهای کوچیکی که در طول روز ثبت می‌کنی، یواش یواش متوجه می‌شم چه چیزی برات بهتره.</p>
        </motion.div>
      )}

      <WellnessCheckInSheet 
        isOpen={isWellnessSheetOpen} 
        onClose={() => setIsWellnessSheetOpen(false)} 
      />
    </div>
  );
}
