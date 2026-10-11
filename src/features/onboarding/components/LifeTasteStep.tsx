import { useAppStore } from '../../../store';
import { StepContainer, StepTitle, MultiSelectionChip } from './SharedUI';

const LIFESTYLES = [
  { id: 'morning_person', label: 'صبح‌ها را بیشتر دوست دارم' },
  { id: 'night_owl', label: 'شب‌ها انرژی بیشتری دارم' },
  { id: 'introvert', label: 'تنهایی را ترجیح می‌دهم' },
  { id: 'extrovert', label: 'بودن با آدم‌ها انرژی‌ام را بیشتر می‌کند' },
  { id: 'nature', label: 'طبیعت را دوست دارم' },
  { id: 'walking', label: 'پیاده‌روی را دوست دارم' },
  { id: 'music', label: 'موسیقی' },
  { id: 'movies', label: 'فیلم/سریال' },
  { id: 'reading', label: 'مطالعه' },
  { id: 'resting', label: 'استراحت در خانه' },
];

export function LifeTasteStep({ onNext, onBack }: { onNext: () => void, onBack: () => void, key?: string | number }) {
  const { onboardingData, setOnboardingData } = useAppStore();
  const selectedLifeTastes = onboardingData.lifeTaste || [];
  
  const toggleLifestyle = (id: string) => {
    if (selectedLifeTastes.includes(id)) {
      setOnboardingData({ lifeTaste: selectedLifeTastes.filter(t => t !== id) });
    } else {
      setOnboardingData({ lifeTaste: [...selectedLifeTastes, id] });
    }
  };

  return (
    <StepContainer onNext={onNext} onBack={onBack} canGoNext={selectedLifeTastes.length > 0}>
      <StepTitle 
        title="چه سبکی به تو می‌خوره؟" 
        subtitle="چیزهایی که تو روزمره حالت رو بهتر می‌کنن انتخاب کن." 
      />
      
      <div className="flex flex-wrap gap-3">
        {LIFESTYLES.map((lifestyle) => (
          <MultiSelectionChip 
            key={lifestyle.id}
            selected={selectedLifeTastes.includes(lifestyle.id)}
            onClick={() => toggleLifestyle(lifestyle.id)}
          >
            {lifestyle.label}
          </MultiSelectionChip>
        ))}
      </div>
    </StepContainer>
  );
}
