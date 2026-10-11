import { useState } from 'react';
import { 
  User, 
  Sparkles, 
  Info, 
  ChevronLeft, 
  Play, 
  ShieldCheck, 
  Target,
  Activity,
  Heart
} from 'lucide-react';
import { useAppStore } from '../../../store';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { ZendegitoLogo } from '../../../components/brand/ZendegitoLogo';
import { AboutModal } from '../../../components/brand/AboutModal';
import { SplashScreen } from '../../../components/brand/SplashScreen';

const GOAL_LABELS: Record<string, string> = {
  weight_loss: 'کاهش وزن',
  fitness: 'تناسب اندام و فرم‌دهی',
  energy: 'انرژی بیشتر در طول روز',
  healthier_life: 'سبک زندگی سالم‌تر',
  better_sleep: 'خواب و استراحت بهتر',
  better_nutrition: 'تغذیه بهتر و آگاهانه‌تر',
};

const ACTIVITY_LABELS: Record<string, string> = {
  sedentary: 'بیشتر روز نشسته',
  light: 'فعالیت سبک روزانه',
  moderate: 'معمولاً فعال و با تحرک',
  active: 'فعالیت بدنی بالا',
};

export default function ProfilePage() {
  const { userProfile, onboardingData } = useAppStore();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [showSplashReplay, setShowSplashReplay] = useState(false);

  const displayName = userProfile?.firstName || onboardingData?.firstName || 'همراه گرامی';
  const goalLabel = onboardingData?.primaryGoal ? GOAL_LABELS[onboardingData.primaryGoal] || onboardingData.primaryGoal : null;
  const activityLabel = onboardingData?.activityLevel ? ACTIVITY_LABELS[onboardingData.activityLevel] || onboardingData.activityLevel : null;

  return (
    <div className={cn("min-h-full flex flex-col pt-8 pb-28", tokens.spacing.screenPadding)} dir="rtl">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className={cn(tokens.typography.display, "text-2xl sm:text-3xl mb-1")}>پروفایل</h1>
          <p className={cn(tokens.typography.bodySmall, "text-surface-400")}>اطلاعات شخصی، تنظیمات و درباره زندگیتو</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-surface-100 border border-surface-200/60 flex items-center justify-center text-primary-800 shadow-sm">
          <User className="w-6 h-6 stroke-[1.75]" />
        </div>
      </header>

      {/* User Greeting Card */}
      <div className="bg-white rounded-3xl p-5 border border-surface-200/70 shadow-sm mb-6 relative overflow-hidden">
        <div className="flex items-center gap-3.5 mb-2">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold text-base border border-amber-200/50">
            {displayName.charAt(0)}
          </div>
          <div>
            <h2 className="text-base font-bold text-primary-950">{displayName}</h2>
            <p className="text-xs text-primary-600 font-medium">همراه فعال اکوسیستم زندگیتو</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Section 1: اطلاعات و تنظیمات شخصی (Personal Context) */}
        <section className="space-y-2.5">
          <div className="flex items-center gap-1.5 px-1">
            <Heart className="w-4 h-4 text-primary-600" />
            <h3 className="text-xs font-semibold text-primary-800 tracking-wide">اطلاعات و تنظیمات شخصی</h3>
          </div>

          <div className="bg-white rounded-2xl border border-surface-200/70 divide-y divide-surface-100 overflow-hidden shadow-sm text-sm">
            {/* Age / Sex */}
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-surface-400 text-xs">سن و وضعیت</span>
              <span className="font-medium text-primary-900 text-xs">
                {onboardingData?.age ? `${onboardingData.age} سال` : 'ثبت شده در راه‌اندازی'}
                {userProfile?.sex === 'female' ? ' • خانم' : userProfile?.sex === 'male' ? ' • آقا' : ''}
              </span>
            </div>

            {/* Height / Weight */}
            {(onboardingData?.heightCm || onboardingData?.weightKg) && (
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-surface-400 text-xs">قد و وزن کنونی</span>
                <span className="font-medium text-primary-900 text-xs">
                  {onboardingData.heightCm ? `${onboardingData.heightCm} سانتی‌متر` : ''}
                  {onboardingData.heightCm && onboardingData.weightKg ? ' • ' : ''}
                  {onboardingData.weightKg ? `${onboardingData.weightKg} کیلوگرم` : ''}
                </span>
              </div>
            )}

            {/* Primary Goal */}
            {goalLabel && (
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-surface-400" />
                  <span className="text-surface-400 text-xs">تمرکز و هدف اصلی</span>
                </div>
                <span className="font-medium text-primary-900 text-xs">{goalLabel}</span>
              </div>
            )}

            {/* Activity Level */}
            {activityLabel && (
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-surface-400" />
                  <span className="text-surface-400 text-xs">سطح تحرک روزانه</span>
                </div>
                <span className="font-medium text-primary-900 text-xs">{activityLabel}</span>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: تنظیمات برنامه (App Settings & Experience) */}
        <section className="space-y-2.5">
          <div className="flex items-center gap-1.5 px-1">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <h3 className="text-xs font-semibold text-primary-800 tracking-wide">تنظیمات و تجربه برنامه</h3>
          </div>

          <div className="bg-white rounded-2xl border border-surface-200/70 divide-y divide-surface-100 overflow-hidden shadow-sm">
            {/* Replay Splash Video */}
            <button
              type="button"
              onClick={() => setShowSplashReplay(true)}
              className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-surface-50 transition-colors text-right active:bg-surface-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-surface-100 text-primary-700 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary-900">مشاهده مجدد انیمیشن آغازین</div>
                  <div className="text-[11px] text-surface-400">پخش ویدیوی رسمی معرفی نسخه</div>
                </div>
              </div>
              <ChevronLeft className="w-4 h-4 text-surface-400" />
            </button>

            {/* Privacy & Storage Guarantee */}
            <div className="px-4 py-3 flex items-center gap-3 text-xs text-surface-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>داده‌های شما به‌صورت محلی و آفلاین در دستگاه شما ذخیره می‌شوند.</span>
            </div>
          </div>
        </section>

        {/* Section 3: درباره زندگیتو و نسخه (About Zendegito & Noskhe) */}
        <section className="space-y-2.5">
          <div className="flex items-center gap-1.5 px-1">
            <Info className="w-4 h-4 text-primary-600" />
            <h3 className="text-xs font-semibold text-primary-800 tracking-wide">هویت و درباره ما</h3>
          </div>

          {/* About Zendegito Trigger Card */}
          <button
            type="button"
            onClick={() => setIsAboutOpen(true)}
            className="w-full bg-white rounded-2xl p-4 border border-surface-200/70 shadow-sm hover:border-surface-300 transition-all text-right flex items-center justify-between group active:scale-[0.99]"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-surface-100 flex items-center justify-center p-2 border border-surface-200/60 group-hover:bg-surface-200/60 transition-colors">
                <ZendegitoLogo size="sm" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary-950 flex items-center gap-1.5">
                  <span>درباره زندگیتو</span>
                </div>
                <div className="text-xs text-surface-400 mt-0.5">
                  بیانیه مأموریت و چشم‌انداز اکوسیستم زندگیتو
                </div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-surface-50 flex items-center justify-center text-surface-400 group-hover:text-primary-800 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </div>
          </button>

          {/* Product Identity Card: "درباره نسخه" */}
          <div className="bg-surface-100/60 rounded-2xl p-4 border border-surface-200/50 flex items-center gap-3.5">
            <img
              src="/brand/noskhe-icon-64.png"
              alt="زندگیتو: نسخه"
              className="w-12 h-12 rounded-2xl shadow-sm border border-surface-200/60 object-contain shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-primary-950">زندگیتو: نسخه</h4>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-surface-200 text-primary-800">
                  نگارش ۱.۰.۰
                </span>
              </div>
              <p className="text-[11px] text-surface-400 mt-0.5 truncate">
                Zendegito: Noskhe — نسخه امروز من
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* About Zendegito Modal / Sheet */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      {/* Splash Replay Overlay */}
      {showSplashReplay && (
        <SplashScreen onFinish={() => setShowSplashReplay(false)} />
      )}
    </div>
  );
}
