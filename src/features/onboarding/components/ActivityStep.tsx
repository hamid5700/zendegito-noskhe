import { useAppStore } from '../../../store';
import { StepContainer, StepTitle, SelectionChip } from './SharedUI';

const ACTIVITIES = [
  { id: 'sedentary', label: 'بیشتر روز می‌نشینم' },
  { id: 'light', label: 'کمی فعال هستم' },
  { id: 'moderate', label: 'معمولاً فعال هستم' },
  { id: 'active', label: 'خیلی فعال هستم' },
];

export function ActivityStep({ onNext, onBack }: { onNext: () => void, onBack: () => void, key?: string | number }) {
  const { onboardingData, setOnboardingData } = useAppStore();
  
  const handleSelect = (levelId: string) => {
    setOnboardingData({ activityLevel: levelId });
    setTimeout(onNext, 300);
  };

  return (
    <StepContainer onNext={onNext} onBack={onBack} canGoNext={!!onboardingData.activityLevel}>
      <StepTitle 
        title="چقدر حرکت می‌کنی؟" 
        subtitle="در یک روز معمولی چقدر فعالیت بدنی داری؟" 
      />
      
      <div className="space-y-3">
        {ACTIVITIES.map((activity) => (
          <SelectionChip 
            key={activity.id}
            selected={onboardingData.activityLevel === activity.id}
            onClick={() => handleSelect(activity.id)}
          >
            {activity.label}
          </SelectionChip>
        ))}
      </div>
    </StepContainer>
  );
}
