'use client';

import type { ReactNode } from 'react';
import { scrollToSection, type SectionId } from '@/lib/data/site-content';

type ScrollNavButtonProps = {
  id: SectionId;
  className?: string;
  children: ReactNode;
};

export default function ScrollNavButton({ id, className, children }: ScrollNavButtonProps) {
  return (
    <button type="button" onClick={() => scrollToSection(id)} className={className}>
      {children}
    </button>
  );
}
