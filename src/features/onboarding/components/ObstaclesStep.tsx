import { useAppStore } from '../../../store';
import { StepContainer, StepTitle, MultiSelectionChip } from './SharedUI';

const OBSTACLES = [
  { id: 'lack_of_time', label: 'کمبود وقت' },
  { id: 'boredom', label: 'بی‌حوصلگی' },
  { id: 'intense_hunger', label: 'گرسنگی شدید' },
  { id: 'sweet_cravings', label: 'هوس شیرینی' },
  { id: 'irregular_schedule', label: 'برنامه نامنظم' },
  { id: 'overwork', label: 'کار زیاد' },
  { id: 'irregular_sleep', label: 'خواب نامنظم' },
  { id: 'parties', label: 'مهمانی و دورهمی' },
  { id: 'eating_out', label: 'غذاهای بیرون' },
  { id: 'dont_know_what_to_eat', label: 'نمی‌دانم چه بخورم' },
];

export function ObstaclesStep({ onNext, onBack }: { onNext: () => void, onBack: () => void, key?: string | number }) {
  const { onboardingData, setOnboardingData } = useAppStore();
  const selectedObstacles = onboardingData.obstacles || [];
  
  const toggleObstacle = (id: string) => {
    if (selectedObstacles.includes(id)) {
      setOnboardingData({ obstacles: selectedObstacles.filter(t => t !== id) });
    } else {
      setOnboardingData({ obstacles: [...selectedObstacles, id] });
    }
  };

  return (
    <StepContainer onNext={onNext} onBack={onBack} canGoNext={selectedObstacles.length > 0}>
      <StepTitle 
        title="چالش‌های روزمره تو" 
        subtitle="چه چیزهایی معمولاً باعث می‌شن نتونی اونطوری که دوست داری به خودت برسی؟" 
      />
      
      <div className="flex flex-wrap gap-3">
        {OBSTACLES.map((obstacle) => (
          <MultiSelectionChip 
            key={obstacle.id}
            selected={selectedObstacles.includes(obstacle.id)}
            onClick={() => toggleObstacle(obstacle.id)}
          >
            {obstacle.label}
          </MultiSelectionChip>
        ))}
      </div>
    </StepContainer>
  );
}
