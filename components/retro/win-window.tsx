'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type WinWindowProps = {
  id?: string;
  title: string;
  icon?: string;
  children: ReactNode;
  className?: string;
  active?: boolean;
  offset?: 'none' | 'sm' | 'md' | 'lg';
};

function WindowControls() {
  return (
    <div className="flex gap-1" aria-hidden="true">
      <span className="win-outset flex h-[14px] w-[14px] items-center justify-center text-[9px] leading-none text-black">
        _
      </span>
      <span className="win-outset flex h-[14px] w-[14px] items-center justify-center text-[9px] leading-none text-black">
        □
      </span>
      <span className="win-outset flex h-[14px] w-[14px] items-center justify-center text-[9px] leading-none text-black">
        ×
      </span>
    </div>
  );
}

export default function WinWindow({
  id,
  title,
  icon,
  children,
  className,
  active = true,
  offset = 'none',
}: WinWindowProps) {
  const offsetClass = {
    none: '',
    sm: 'md:ml-4',
    md: 'md:ml-8',
    lg: 'md:ml-12',
  }[offset];

  return (
    <section
      id={id}
      className={cn('win-outset w-full scroll-mt-4', offsetClass, className)}
    >
      <div
        className={cn(
          'win-titlebar',
          !active && 'win-titlebar-inactive',
        )}
      >
        <span className="flex items-center gap-1 truncate pr-2">
          {icon && <span className="text-[11px]">{icon}</span>}
          <span className="truncate">{title}</span>
        </span>
        <WindowControls />
      </div>
      <div className="win-inset m-1 bg-white p-3 md:p-4">{children}</div>
    </section>
  );
}
