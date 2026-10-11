import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import { ZendegitoLogo } from './ZendegitoLogo';
import { Motif } from '../ui/Motif';
import { cn } from '../../design-system/utils';
import { tokens } from '../../design-system/tokens';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * About Zendegito ("درباره زندگیتو")
 * A calm, human, Persian minimalist presentation of the Zendegito ecosystem
 * and the "Noskhe" daily intelligence companion.
 */
export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary-950/40 backdrop-blur-sm transition-opacity"
          />

          {/* Modal / Bottom Sheet */}
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className={cn(
              'relative w-full max-w-md bg-surface-50 max-h-[90vh] overflow-y-auto z-10',
              'rounded-t-[2.5rem] sm:rounded-3xl shadow-2xl border border-surface-200/60',
              'flex flex-col text-right'
            )}
            dir="rtl"
          >
            {/* Background Geometric Motif */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 pointer-events-none opacity-40 text-primary-300">
              <Motif className="w-48 h-48" />
            </div>

            {/* Header & Close Action */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 pt-5 pb-3 bg-surface-50/90 backdrop-blur-md border-b border-surface-200/30">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-200/70 text-primary-800">
                  درباره ما
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-surface-100 hover:bg-surface-200 flex items-center justify-center text-primary-700 transition-colors active:scale-95"
                aria-label="بستن"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-7">
              {/* Mother Brand Showcase */}
              <div className="flex flex-col items-center text-center pt-2 pb-1">
                <div className="mb-3">
                  <ZendegitoLogo size="lg" />
                </div>
                <h2 className="text-xl font-bold text-primary-950">
                  درباره زندگیتو
                </h2>
                <p className="text-xs text-primary-600 mt-1 font-medium">
                  اکوسیستم سبک زندگی آگاهانه
                </p>
              </div>

              {/* Mother Brand Manifesto */}
              <div className="bg-surface-100/70 rounded-2xl p-5 border border-surface-200/50 space-y-3.5 leading-relaxed text-sm text-primary-800">
                <p>
                  زندگیتو یک مجموعه از ابزارها برای کمک به ساختن یک زندگی آگاهانه‌تر، منظم‌تر و سالم‌تر است.
                </p>
                <p className="text-primary-700">
                  ما باور داریم زندگی خوب فقط به یک عدد، یک رژیم یا یک برنامه محدود نمی‌شود؛ گاهی یک انتخاب کوچک، یک عادت ساده یا حتی کمی استراحت می‌تواند بخشی از نسخه‌ی بهتر امروز ما باشد.
                </p>
              </div>

              {/* Product Card: "زندگیتو: نسخه" */}
              <div className="bg-white rounded-2xl p-5 border border-surface-200/70 shadow-sm relative overflow-hidden">
                <div className="flex items-start gap-4 mb-3.5">
                  <img
                    src="/brand/noskhe-icon-128.png"
                    alt="آیکون نسخه"
                    className="w-14 h-14 rounded-2xl shadow-md border border-surface-200/50 object-contain shrink-0"
                  />
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs text-amber-800 font-semibold mb-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>محصول هوشمند روزانه</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary-950">
                      زندگیتو: نسخه
                    </h3>
                    <p className="text-xs text-surface-400 font-medium">
                      Zendegito: Noskhe
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-primary-800 leading-relaxed">
                  نسخه برای شناخت بهتر وضعیت روزانه، تغذیه، حرکت و حال تو ساخته شده است تا به جای قضاوت کردن، کمک کند ببینی امروز چه چیزی بیشتر به کارت می‌آید.
                </p>
              </div>

              {/* Closing Philosophy Line */}
              <div className="text-center py-2 px-4">
                <p className="text-sm font-semibold text-primary-900 italic">
                  «نسخه‌ی زندگی تو، هر روز می‌تواند کمی متفاوت باشد.»
                </p>
              </div>

              {/* Version & Identity Footer */}
              <div className="pt-4 border-t border-surface-200/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-surface-400">
                <span>نسخه ۱.۰.۰ (نسخه نهایی)</span>
                <span>زندگیتو © تمامی حقوق محفوظ است</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
