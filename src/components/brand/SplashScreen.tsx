import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Volume2, VolumeX } from 'lucide-react';

interface SplashScreenProps {
  onFinish: () => void;
}

/**
 * In-app boot splash experience using the official Noskhe 6-second video.
 * - Non-blocking: Includes a Skip ("رد کردن") button.
 * - Autoplay resilient: Falls back gracefully if video playback fails.
 * - Safety timer: Closes automatically if onEnded doesn't fire.
 * - Respects RTL and mobile container constraints.
 */
export function SplashScreen({ onFinish }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<number | null>(null);

  const handleClose = () => {
    setIsVisible(false);
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    // Allow fade-out animation to complete before unmounting
    setTimeout(() => {
      onFinish();
    }, 400);
  };

  useEffect(() => {
    // Safety fallback: ensure app boots even if video hangs or fails to complete
    timerRef.current = window.setTimeout(() => {
      handleClose();
    }, 6800);

    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay policy restriction or video decode issue:
        // Attempt muted play or fallback gracefully without freezing app
        video.muted = true;
        video.play().catch(() => {
          setHasError(true);
          // If playback is entirely blocked, close swiftly
          setTimeout(handleClose, 800);
        });
      });
    }

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="absolute inset-0 z-[100] bg-[#1a1817] flex flex-col items-center justify-center overflow-hidden select-none"
          dir="rtl"
        >
          {/* Video Container */}
          {!hasError ? (
            <video
              ref={videoRef}
              src="/brand/splash/noskhe-splash.mp4"
              playsInline
              autoPlay
              muted={isMuted}
              onEnded={handleClose}
              onError={() => {
                setHasError(true);
                setTimeout(handleClose, 600);
              }}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-6 text-surface-200">
              <img
                src="/brand/noskhe-icon-192.png"
                alt="زندگیتو: نسخه"
                className="w-24 h-24 rounded-3xl shadow-xl mb-4"
              />
              <h1 className="text-xl font-bold text-white mb-1">زندگیتو: نسخه</h1>
              <p className="text-xs text-white/60">در حال بارگذاری...</p>
            </div>
          )}

          {/* Top Bar Controls (Skip & Audio Toggle) */}
          <div className="absolute top-6 inset-x-6 z-20 flex items-center justify-between pointer-events-auto">
            {/* Skip Button (RTL friendly, top-right in RTL is start, top-left is end) */}
            <button
              type="button"
              onClick={handleClose}
              className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs font-medium border border-white/10 hover:bg-black/60 transition-all flex items-center gap-1 active:scale-95"
            >
              <span>رد کردن</span>
              <ChevronLeft className="w-3.5 h-3.5 text-white/70" />
            </button>

            {/* Mute/Unmute Toggle */}
            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white/90 flex items-center justify-center border border-white/10 hover:bg-black/60 transition-all active:scale-95"
              aria-label={isMuted ? 'پخش با صدا' : 'بی‌صدا'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-white/70" />
              ) : (
                <Volume2 className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
