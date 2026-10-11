// Centralized Design System Tokens
// To be expanded as the UI system grows

export const tokens = {
  spacing: {
    screenPadding: 'px-5 sm:px-6 md:px-8',
    sectionGap: 'space-y-10',
    cardPadding: 'p-6 sm:p-8',
  },
  radius: {
    card: 'rounded-3xl',
    button: 'rounded-2xl',
    pill: 'rounded-full',
    input: 'rounded-2xl',
    chip: 'rounded-xl',
  },
  elevation: {
    subtle: 'shadow-[0_2px_12px_-4px_rgba(26,24,23,0.03)]',
    card: 'shadow-[0_8px_32px_-8px_rgba(26,24,23,0.05)]',
    floating: 'shadow-[0_16px_48px_-12px_rgba(26,24,23,0.08)]',
  },
  surface: {
    base: 'bg-surface-50',
    card: 'bg-card border border-surface-200/40',
    elevated: 'bg-white',
    accent: 'bg-primary-900 text-surface-50',
    subtle: 'bg-surface-100 text-primary-800',
  },
  typography: {
    display: 'text-3xl sm:text-4xl font-bold tracking-tight text-primary-900 leading-tight',
    h1: 'text-2xl font-bold tracking-tight text-primary-900 leading-snug',
    h2: 'text-xl font-semibold text-primary-900 leading-snug',
    h3: 'text-lg font-medium text-primary-900 leading-normal',
    bodyLarge: 'text-base sm:text-lg font-medium text-primary-800 leading-relaxed',
    body: 'text-sm sm:text-base font-normal text-primary-800 leading-relaxed',
    bodySmall: 'text-[13px] sm:text-sm font-normal text-primary-600 leading-relaxed',
    caption: 'text-[11px] sm:text-xs font-medium text-surface-400 tracking-wide',
    label: 'text-sm font-semibold tracking-wide',
  }
};
