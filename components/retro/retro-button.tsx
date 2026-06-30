'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

type RetroButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  pressed?: boolean;
};

const RetroButton = forwardRef<HTMLButtonElement, RetroButtonProps>(
  ({ className, pressed, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'xp-btn inline-flex items-center justify-center font-retro',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0058e6] focus-visible:ring-offset-1',
          pressed && 'shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

RetroButton.displayName = 'RetroButton';

export default RetroButton;
