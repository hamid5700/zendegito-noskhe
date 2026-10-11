import { useAppStore } from '../../../store';
import { StepContainer } from './SharedUI';
import { Motif } from '../../../components/ui/Motif';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';

export function PersonalizationPromiseStep({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { onboardingData } = useAppStore();

  return (
    <StepContainer 
      onNext={onNext} 
      onBack={onBack} 
      nextLabel="بریم سراغ نسخه من" 
      hideBack={true}
    >
      <div className="flex flex-col items-center justify-center text-center h-full relative">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center">
          <Motif className="w-[150%] h-[150%] animate-[spin_120s_linear_infinite]" />
        </div>
        
        <div className="w-20 h-20 bg-surface-100 rounded-3xl flex items-center justify-center mb-8 border border-surface-200/50 shadow-sm relative z-10 text-primary-900">
          <span className="text-3xl font-bold pt-1">ز</span>
        </div>
        
        <h2 className={cn(tokens.typography.display, "mb-4 relative z-10")}>حالا کمی بیشتر تو رو می‌شناسیم.</h2>
        
        <p className={cn(tokens.typography.bodyLarge, "text-surface-400 leading-relaxed max-w-[280px] mx-auto relative z-10")}>
          از اینجا به بعد، پیشنهادها قرار نیست برای همه یکسان باشن. 
          <br /><br />
          قرارِ <strong>نسخه خودت</strong> رو بسازیم.
        </p>
      </div>
    </StepContainer>
  );
}
