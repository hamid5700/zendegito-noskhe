/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AppRouter } from './app/router';
import { SplashScreen } from './components/brand/SplashScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(() => {
    // Only auto-play splash on fresh session boots
    try {
      const seen = sessionStorage.getItem('noskhe_splash_seen');
      return !seen;
    } catch {
      return false;
    }
  });

  const handleSplashFinish = () => {
    setShowSplash(false);
    try {
      sessionStorage.setItem('noskhe_splash_seen', 'true');
    } catch {
      // ignore storage error
    }
  };

  return (
    <div className="bg-surface-200 min-h-screen flex items-center justify-center sm:p-6">
      {/* Container simulating a mobile device for desktop preview */}
      <div className="w-full max-w-[430px] bg-surface-50 min-h-[100dvh] sm:min-h-[850px] sm:max-h-[850px] sm:rounded-[3rem] sm:shadow-[0_24px_80px_-12px_rgba(26,24,23,0.15)] sm:overflow-hidden relative sm:border-[8px] sm:border-white sm:ring-1 sm:ring-surface-200/50">
        <AppRouter />
        {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      </div>
    </div>
  );
}
