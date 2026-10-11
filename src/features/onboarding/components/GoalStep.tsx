import { useAppStore } from '../../../store';
import { StepContainer, StepTitle, SelectionChip } from './SharedUI';

const GOALS = [
  { id: 'weight_loss', label: 'کاهش وزن' },
  { id: 'fitness', label: 'تناسب اندام و فرم‌دهی' },
  { id: 'energy', label: 'انرژی بیشتر در طول روز' },
  { id: 'healthier_life', label: 'سبک زندگی سالم‌تر' },
  { id: 'better_sleep', label: 'خواب و استراحت بهتر' },
  { id: 'better_nutrition', label: 'تغذیه بهتر و آگاهانه‌تر' },
];

export function GoalStep({ onNext, onBack }: { onNext: () => void, onBack: () => void, key?: string | number }) {
  const { onboardingData, setOnboardingData } = useAppStore();
  
  const handleSelect = (goalId: string) => {
    setOnboardingData({ primaryGoal: goalId });
    // Auto-advance for better UX
    setTimeout(onNext, 300);
  };

  return (
    <StepContainer onNext={onNext} onBack={onBack} canGoNext={!!onboardingData.primaryGoal}>
      <StepTitle 
        title="از زندگیتو چی می‌خوای؟" 
        subtitle={`${onboardingData.firstName || ''}، دوست داری بیشتر روی چه چیزی تمرکز کنیم؟`} 
      />
      
      <div className="space-y-3">
        {GOALS.map((goal) => (
          <SelectionChip 
            key={goal.id}
            selected={onboardingData.primaryGoal === goal.id}
            onClick={() => handleSelect(goal.id)}
          >
            {goal.label}
          </SelectionChip>
        ))}
      </div>
    </StepContainer>
  );
}
