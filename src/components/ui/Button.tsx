import React, { ReactNode } from 'react';
import { cn } from '../../design-system/utils';
import { tokens } from '../../design-system/tokens';
import { motion } from 'motion/react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  className?: string;
  onClick?: (e?: any) => void;
  disabled?: boolean;
}

export function Button({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all active:scale-[0.98]";
  
  const variants = {
    primary: cn(tokens.surface.accent, "hover:bg-primary-800 shadow-sm"),
    secondary: cn(tokens.surface.subtle, "hover:bg-surface-200 text-primary-900"),
    outline: "border-2 border-surface-200 bg-transparent text-primary-900 hover:border-primary-300",
    ghost: "bg-transparent text-primary-800 hover:bg-surface-100/50",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs rounded-xl",
    md: "h-12 px-6 text-sm rounded-2xl",
    lg: "h-14 px-8 text-base rounded-2xl",
    icon: "h-12 w-12 rounded-2xl",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
