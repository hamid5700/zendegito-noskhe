import { useAppStore } from '../../../store';
import { StepContainer, StepTitle, MultiSelectionChip } from './SharedUI';

const TASTES = [
  { id: 'traditional', label: 'غذاهای سنتی' },
  { id: 'fastfood', label: 'فست‌فود' },
  { id: 'seafood', label: 'غذاهای دریایی' },
  { id: 'vegetarian', label: 'گیاهی' },
  { id: 'sweet', label: 'شیرینی‌جات' },
  { id: 'salty', label: 'شور و نمکی' },
  { id: 'spicy', label: 'تند' },
  { id: 'coffee', label: 'قهوه' },
  { id: 'tea', label: 'چای' },
  { id: 'snacks', label: 'تنقلات' },
];

export function TasteStep({ onNext, onBack }: { onNext: () => void, onBack: () => void, key?: string | number }) {
  const { onboardingData, setOnboardingData } = useAppStore();
  const selectedTastes = onboardingData.taste || [];
  
  const toggleTaste = (id: string) => {
    if (selectedTastes.includes(id)) {
      setOnboardingData({ taste: selectedTastes.filter(t => t !== id) });
    } else {
      setOnboardingData({ taste: [...selectedTastes, id] });
    }
  };

  return (
    <StepContainer onNext={onNext} onBack={onBack} canGoNext={selectedTastes.length > 0}>
      <StepTitle 
        title="چی دوست داری بخوری؟" 
        subtitle="طعم‌ها و غذاهایی که بیشتر بهت می‌چسبه رو انتخاب کن." 
      />
      
      <div className="flex flex-wrap gap-3">
        {TASTES.map((taste) => (
          <MultiSelectionChip 
            key={taste.id}
            selected={selectedTastes.includes(taste.id)}
            onClick={() => toggleTaste(taste.id)}
          >
            {taste.label}
          </MultiSelectionChip>
        ))}
      </div>
    </StepContainer>
  );
}
