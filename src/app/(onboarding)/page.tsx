import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store';
import { Button } from '../../components/ui/Button';
import { Motif } from '../../components/ui/Motif';
import { cn } from '../../design-system/utils';
import { tokens } from '../../design-system/tokens';
import { motion, AnimatePresence } from 'motion/react';

import { BasicProfileStep } from '../../features/onboarding/components/BasicProfileStep';
import { GoalStep } from '../../features/onboarding/components/GoalStep';
import { ActivityStep } from '../../features/onboarding/components/ActivityStep';
import { TasteStep } from '../../features/onboarding/components/TasteStep';
import { LifeTasteStep } from '../../features/onboarding/components/LifeTasteStep';
import { ObstaclesStep } from '../../features/onboarding/components/ObstaclesStep';
import { PersonalizationPromiseStep } from '../../features/onboarding/components/PersonalizationPromiseStep';

// Welcome step component inside the page for simplicity
function WelcomeStep({ onNext }: { onNext: () => void }) {
  const easeSpring = [0.22, 1, 0.36, 1];
  return (
    <div className="flex-1 flex flex-col p-8 items-center justify-center text-center relative overflow-hidden bg-surface-50 h-full w-full">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center">
        <Motif className="w-[200%] h-[200%] animate-[spin_120s_linear_infinite]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: easeSpring }}
        className="w-24 h-24 bg-surface-100 rounded-3xl flex items-center justify-center mb-10 border border-surface-200/50 shadow-sm relative z-10"
      >
        <span className="text-primary-900 text-4xl font-bold pt-1">ز</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: easeSpring }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        <h1 className={cn(tokens.typography.display, "mb-4")}>نسخه زندگی تو</h1>
        <p className={cn(tokens.typography.bodyLarge, "text-surface-400 mb-12 max-w-[280px] mx-auto")}>
          برای اینکه نسخه مناسب خودت رو بسازیم، باید کمی بیشتر با هم آشنا بشیم.
        </p>

        <Button
          onClick={onNext}
          size="lg"
          className="w-full max-w-[280px]"
        >
          شروع کنیم
        </Button>
      </motion.div>
    </div>
  );
}

const STEPS = [
  'welcome',
  'basic_profile',
  'goal',
  'activity',
  'taste',
  'life_taste',
  'obstacles',
  'promise'
];

export default function OnboardingPage() {
  const navigate = useNavigate();
  const { setUserProfile, onboardingData } = useAppStore();
  
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const nextStep = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      // Finalize
      setUserProfile({
        userId: 'user-123',
        firstName: onboardingData.firstName || 'کاربر',
        lastName: '',
        onboardingCompleted: true,
      });
      navigate('/');
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const stepId = STEPS[currentStepIndex];

  return (
    <div className="flex-1 flex flex-col w-full h-full bg-surface-50 relative overflow-hidden">
      {/* Progress Bar (hidden on welcome and promise) */}
      {currentStepIndex > 0 && currentStepIndex < STEPS.length - 1 && (
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-surface-100 z-50">
          <motion.div 
            className="h-full bg-primary-800"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStepIndex) / (STEPS.length - 2)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        {stepId === 'welcome' && <WelcomeStep onNext={nextStep} />}
        {stepId === 'basic_profile' && <BasicProfileStep onNext={nextStep} onBack={prevStep} />}
        {stepId === 'goal' && <GoalStep onNext={nextStep} onBack={prevStep} />}
        {stepId === 'activity' && <ActivityStep onNext={nextStep} onBack={prevStep} />}
        {stepId === 'taste' && <TasteStep onNext={nextStep} onBack={prevStep} />}
        {stepId === 'life_taste' && <LifeTasteStep onNext={nextStep} onBack={prevStep} />}
        {stepId === 'obstacles' && <ObstaclesStep onNext={nextStep} onBack={prevStep} />}
        {stepId === 'promise' && <PersonalizationPromiseStep onNext={nextStep} onBack={prevStep} />}
      </AnimatePresence>
    </div>
  );
}
