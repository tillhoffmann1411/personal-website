'use client';

import { useEffect, useState } from 'react';
import { scrollToSection, type SectionId } from '@/lib/data/site-content';

type NavItem = { id: SectionId; label: string };

type SiteNavProps = {
  items: NavItem[];
  className: string;
  linkClassName: string;
  activeLinkClassName: string;
};

export default function SiteNav({
  items,
  className,
  linkClassName,
  activeLinkClassName,
}: SiteNavProps) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: '-72px 0px -55% 0px', threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className={className} aria-label="Hauptnavigation">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => scrollToSection(item.id)}
          className={`${linkClassName} ${active === item.id ? activeLinkClassName : 'border-transparent'}`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
