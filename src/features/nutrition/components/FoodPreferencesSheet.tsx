import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, ShieldAlert, ThumbsDown, Check } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { tokens } from '../../../design-system/tokens';
import { cn } from '../../../design-system/utils';
import { IngredientService } from '../IngredientService';
import { FoodCatalogService } from '../FoodCatalogService';
import { useAppStore } from '../../../store';

interface FoodPreferencesSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

// Common high-frequency exclusions/dislikes for quick access
const QUICK_ITEMS = [
  'لبنیات',
  'شیر',
  'پنیر',
  'تخم مرغ',
  'بادمجان',
  'گلوتن',
  'گندم',
  'گردو',
  'بادام زمینی',
  'کنجد',
  'ماهی',
  'میگو',
  'گوشت قرمز',
  'گوشت گوسفندی',
  'حبوبات',
  'عدس',
  'لوبیا',
  'قارچ',
  'سیر',
  'پیاز',
  'فلفل'
];

export function FoodPreferencesSheet({ isOpen, onClose }: FoodPreferencesSheetProps) {
  const onboardingData = useAppStore(state => state.onboardingData);
  const setOnboardingData = useAppStore(state => state.setOnboardingData);

  const [exclusions, setExclusions] = useState<string[]>(onboardingData?.foodExclusions || []);
  const [dislikes, setDislikes] = useState<string[]>(onboardingData?.foodDislikes || []);
  
  const [activeTab, setActiveTab] = useState<'exclusions' | 'dislikes'>('exclusions');
  const [query, setQuery] = useState('');

  const handleToggle = (name: string) => {
    if (activeTab === 'exclusions') {
      if (exclusions.includes(name)) {
        setExclusions(exclusions.filter(i => i !== name));
      } else {
        setExclusions([...exclusions, name]);
        // Remove from dislikes if moving to exclusions
        setDislikes(dislikes.filter(i => i !== name));
      }
    } else {
      if (dislikes.includes(name)) {
        setDislikes(dislikes.filter(i => i !== name));
      } else {
        setDislikes([...dislikes, name]);
        // Remove from exclusions if moving to dislikes
        setExclusions(exclusions.filter(i => i !== name));
      }
    }
  };

  const handleSave = () => {
    setOnboardingData({
      foodExclusions: exclusions,
      foodDislikes: dislikes
    });
    onClose();
  };

  // Build searchable list of canonical ingredients and foods
  const options = useMemo(() => {
    const q = query.trim().toLowerCase();
    
    // All 222 canonical ingredients
    const allIngs = IngredientService.getAllIngredients();
    
    if (!q) {
      // When no search query, show quick popular items + currently selected items
      const selected = activeTab === 'exclusions' ? exclusions : dislikes;
      const combined = Array.from(new Set([...selected, ...QUICK_ITEMS]));
      return combined;
    }

    const matched = new Set<string>();

    // 1. Match from 222 canonical ingredients
    for (const ing of allIngs) {
      if (ing.nameFa.toLowerCase().includes(q) || 
          ing.aliasesFa.some(a => a.toLowerCase().includes(q)) ||
          ing.category.toLowerCase().includes(q)) {
        matched.add(ing.nameFa);
      }
    }

    // 2. Match from 626 canonical foods
    const matchedFoods = FoodCatalogService.searchFoods(q);
    for (const f of matchedFoods.slice(0, 30)) {
      matched.add(f.name);
    }

    return Array.from(matched).sort((a, b) => a.localeCompare(b, 'fa'));
  }, [query, activeTab, exclusions, dislikes]);

  const currentSelectedList = activeTab === 'exclusions' ? exclusions : dislikes;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-surface-900/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 top-[10%] bg-surface-50 rounded-t-[32px] z-50 flex flex-col overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 pb-4 bg-surface-50 border-b border-surface-200/50">
              <div>
                <h2 className={cn(tokens.typography.h2, "text-primary-900")}>تنظیمات غذایی من</h2>
                <span className="text-xs text-surface-400 mt-0.5 block">پرهیزها، حساسیت‌ها و غذاهای ناپسند</span>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-200/50 text-surface-600 hover:bg-surface-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pb-safe flex flex-col">
              <div className="p-6 pb-2">
                <p className={cn(tokens.typography.body, "text-surface-500 mb-6 leading-relaxed")}>
                  مواد اولیه یا غذاهایی که مایل نیستی در پیشنهادهای روزانه نمایش داده شوند را مشخص کن تا در پیشنهادها لحاظ شوند.
                </p>

                <div className="flex bg-surface-200/50 p-1 rounded-2xl mb-6">
                  <button
                    onClick={() => setActiveTab('exclusions')}
                    className={cn(
                      "flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2",
                      activeTab === 'exclusions' 
                        ? "bg-white text-red-600 shadow-sm" 
                        : "text-surface-600 hover:bg-surface-200/50"
                    )}
                  >
                    <ShieldAlert size={16} />
                    <span>پرهیز کامل ({exclusions.length})</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('dislikes')}
                    className={cn(
                      "flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2",
                      activeTab === 'dislikes' 
                        ? "bg-white text-orange-600 shadow-sm" 
                        : "text-surface-600 hover:bg-surface-200/50"
                    )}
                  >
                    <ThumbsDown size={16} />
                    <span>دوست ندارم ({dislikes.length})</span>
                  </button>
                </div>

                {/* Active items summary tags */}
                {currentSelectedList.length > 0 && (
                  <div className="mb-4 bg-surface-100/70 p-3.5 rounded-2xl border border-surface-200/60">
                    <span className="block text-xs font-bold text-surface-500 mb-2">
                      {activeTab === 'exclusions' ? 'موارد پرهیز شده (حذف قطعی):' : 'موارد ناپسند (عدم اولویت):'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentSelectedList.map(item => (
                        <span 
                          key={item} 
                          onClick={() => handleToggle(item)}
                          className={cn(
                            "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition-colors",
                            activeTab === 'exclusions'
                              ? "bg-red-100 text-red-800 hover:bg-red-200"
                              : "bg-orange-100 text-orange-800 hover:bg-orange-200"
                          )}
                        >
                          <Check size={12} />
                          {item}
                          <X size={12} className="opacity-60 hover:opacity-100 mr-0.5" />
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="relative mb-6">
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-surface-400">
                    <Search size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="جستجو در ۲۲۲ ماده اولیه و ۶۲۶ غذای کاتالوگ..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full bg-white border border-surface-200 rounded-2xl py-4 pr-12 pl-4 text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-300 font-medium shadow-sm transition-all placeholder:text-surface-400"
                  />
                  {query && (
                    <button 
                      onClick={() => setQuery('')}
                      className="absolute inset-y-0 left-4 flex items-center text-surface-400 hover:text-surface-600"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {options.map(name => {
                    const isExcluded = exclusions.includes(name);
                    const isDisliked = dislikes.includes(name);
                    const isSelected = activeTab === 'exclusions' ? isExcluded : isDisliked;
                    
                    // Don't show in the list if it's selected in the OTHER tab, unless searching
                    if (!query && !isSelected && (activeTab === 'exclusions' ? isDisliked : isExcluded)) return null;

                    return (
                      <button
                        key={name}
                        onClick={() => handleToggle(name)}
                        className={cn(
                          "px-4 py-2.5 rounded-xl text-sm font-bold transition-all border",
                          isSelected
                            ? activeTab === 'exclusions'
                              ? "bg-red-50 text-red-700 border-red-200 shadow-xs"
                              : "bg-orange-50 text-orange-700 border-orange-200 shadow-xs"
                            : "bg-white text-surface-600 border-surface-200 hover:border-surface-300"
                        )}
                      >
                        {name}
                      </button>
                    );
                  })}
                  {options.length === 0 && (
                    <p className="text-surface-400 text-sm font-medium w-full text-center py-4">موردی با این عنوان یافت نشد.</p>
                  )}
                </div>
              </div>

              <div className="p-6 mt-auto">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full text-lg font-bold py-4 rounded-2xl shadow-xl shadow-primary-900/20"
                  onClick={handleSave}
                >
                  ذخیره تنظیمات
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
