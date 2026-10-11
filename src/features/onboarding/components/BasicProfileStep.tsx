import { useAppStore } from '../../../store';
import { StepContainer, StepTitle, SelectionChip, MultiSelectionChip } from './SharedUI';
import { useState } from 'react';

export function BasicProfileStep({ onNext, onBack }: { onNext: () => void, onBack: () => void, key?: string | number }) {
  const { onboardingData, setOnboardingData } = useAppStore();
  const [name, setName] = useState(onboardingData.firstName || '');
  const [age, setAge] = useState(onboardingData.age?.toString() || '');
  
  const canGoNext = name.length > 1;

  const handleNext = () => {
    setOnboardingData({ firstName: name, age: parseInt(age) || undefined });
    onNext();
  };

  return (
    <StepContainer onNext={handleNext} onBack={onBack} canGoNext={canGoNext}>
      <StepTitle 
        title="کمی درباره تو" 
        subtitle="برای شروع، اسم کوچیکت رو بهم بگو تا راحت‌تر با هم صحبت کنیم." 
      />
      
      <div className="space-y-6 mt-8">
        <div>
          <label className="block text-sm font-medium text-primary-800 mb-2">نام تو</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white border border-surface-200/80 rounded-2xl px-5 py-4 text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition-all font-medium text-lg placeholder:text-surface-300"
            placeholder="مثلاً: سارا"
            autoFocus
          />
        </div>
        
        {/* Optional age field for now to keep it lightweight */}
        <div>
          <label className="block text-sm font-medium text-primary-800 mb-2 mt-4 text-surface-400">سن (اختیاری)</label>
          <input 
            type="number" 
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full bg-white border border-surface-200/80 rounded-2xl px-5 py-4 text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition-all font-medium text-lg placeholder:text-surface-300"
            placeholder="مثلاً: ۲۸"
          />
        </div>
      </div>
    </StepContainer>
  );
}
