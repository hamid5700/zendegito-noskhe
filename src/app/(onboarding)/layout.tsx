import { Outlet } from 'react-router-dom';

export default function OnboardingLayout() {
  return (
    <div className="min-h-screen w-full bg-surface-200 flex items-center justify-center sm:p-6">
      <div className="w-full max-w-[430px] bg-surface-50 min-h-[100dvh] sm:min-h-[850px] sm:max-h-[850px] sm:rounded-[3rem] sm:shadow-[0_24px_80px_-12px_rgba(26,24,23,0.15)] overflow-hidden relative sm:border-[8px] sm:border-white sm:ring-1 sm:ring-surface-200/50 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}
