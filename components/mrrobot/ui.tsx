'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function GlitchText({
  children,
  className,
  as: Tag = 'span',
}: {
  children: ReactNode;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'p';
}) {
  return (
    <Tag className={cn('mr-glitch relative inline-block', className)} data-text={children}>
      {children}
    </Tag>
  );
}

export function Scanlines() {
  return <div className="mr-scanlines pointer-events-none fixed inset-0 z-[40]" aria-hidden="true" />;
}

export function TerminalPanel({
  children,
  className,
  title,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <div className={cn('mr-panel overflow-hidden rounded-sm border border-mr-green/30', className)}>
      {title && (
        <div className="flex items-center gap-2 border-b border-mr-green/20 bg-mr-dark/80 px-3 py-2 text-[11px] text-mr-green/60">
          <span className="h-2 w-2 rounded-full bg-mr-red" />
          <span className="h-2 w-2 rounded-full bg-mr-amber" />
          <span className="h-2 w-2 rounded-full bg-mr-green" />
          <span className="ml-2 truncate">{title}</span>
        </div>
      )}
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}
