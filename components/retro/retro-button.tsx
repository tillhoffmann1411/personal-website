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
          'inline-flex items-center justify-center px-3 py-1 text-[13px] font-retro',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-win-titlebar focus-visible:ring-offset-1',
          pressed ? 'win-inset-dark' : 'win-outset active:win-inset-dark',
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
