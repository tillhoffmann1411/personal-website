'use client';

import { ReactNode, useCallback, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useDesktop, type WindowId } from './desktop-context';
import { useIsMobile } from './use-is-mobile';

type XpWindowProps = {
  id: WindowId;
  children: ReactNode;
  className?: string;
};

function WindowControls({
  id,
  maximized,
}: {
  id: WindowId;
  maximized: boolean;
}) {
  const { minimizeWindow, toggleMaximize, closeWindow } = useDesktop();

  return (
    <div className="flex items-center gap-[2px]">
      <button
        type="button"
        className="xp-ctrl-btn xp-ctrl-minimize"
        aria-label="Minimieren"
        onClick={(e) => {
          e.stopPropagation();
          minimizeWindow(id);
        }}
      >
        <span aria-hidden="true" className="mt-[6px] block h-[2px] w-[8px] bg-white" />
      </button>
      <button
        type="button"
        className="xp-ctrl-btn xp-ctrl-maximize"
        aria-label={maximized ? 'Wiederherstellen' : 'Maximieren'}
        onClick={(e) => {
          e.stopPropagation();
          toggleMaximize(id);
        }}
      >
        <span aria-hidden="true" className="text-[10px] leading-none">
          {maximized ? '❐' : '□'}
        </span>
      </button>
      <button
        type="button"
        className="xp-ctrl-btn xp-ctrl-close"
        aria-label="Schließen"
        onClick={(e) => {
          e.stopPropagation();
          closeWindow(id);
        }}
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
}

export default function XpWindow({ id, children, className }: XpWindowProps) {
  const { windows, activeWindowId, focusWindow, moveWindow } = useDesktop();
  const isMobile = useIsMobile();
  const dragRef = useRef<{ startX: number; startY: number; winX: number; winY: number } | null>(null);

  const win = windows.find((w) => w.id === id);

  const handleTitlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!win || win.maximized || isMobile) return;
      e.preventDefault();
      focusWindow(id);
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        winX: win.x,
        winY: win.y,
      };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);

      const onMove = (ev: PointerEvent) => {
        if (!dragRef.current) return;
        const dx = ev.clientX - dragRef.current.startX;
        const dy = ev.clientY - dragRef.current.startY;
        moveWindow(id, dragRef.current.winX + dx, dragRef.current.winY + dy);
      };

      const onUp = () => {
        dragRef.current = null;
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
      };

      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    },
    [id, win, focusWindow, moveWindow, isMobile],
  );

  if (!win || win.closed || win.minimized) return null;

  const isActive = activeWindowId === id;

  if (isMobile) {
    return (
      <section
        id={id}
        className={cn('xp-window relative mb-4 w-full', className)}
        onMouseDown={() => focusWindow(id)}
      >
        <div
          className={cn(
            'xp-titlebar',
            !isActive && 'xp-titlebar-inactive',
          )}
        >
          <span className="xp-titlebar-text flex min-w-0 items-center gap-1.5 truncate pr-2">
            <span className="text-sm">{win.icon}</span>
            <span className="truncate">{win.title}</span>
          </span>
          <WindowControls id={id} maximized={false} />
        </div>
        <div className="xp-window-body">{children}</div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={cn(
        'xp-window absolute',
        win.maximized && 'xp-window-maximized !left-0 !top-0 !w-full',
        className,
      )}
      style={
        win.maximized
          ? { zIndex: win.zIndex, bottom: '40px' }
          : {
              left: win.x,
              top: win.y,
              width: win.width,
              zIndex: win.zIndex,
            }
      }
      onMouseDown={() => focusWindow(id)}
    >
      <div
        className={cn(
          'xp-titlebar',
          !isActive && 'xp-titlebar-inactive',
        )}
        onPointerDown={handleTitlePointerDown}
      >
        <span className="xp-titlebar-text flex min-w-0 items-center gap-1.5 truncate pr-2">
          <span className="text-sm">{win.icon}</span>
          <span className="truncate">{win.title}</span>
        </span>
        <WindowControls id={id} maximized={win.maximized} />
      </div>
      <div
        className={cn(
          'xp-window-body overflow-y-auto',
          win.maximized && 'h-full',
        )}
        style={win.maximized ? { maxHeight: 'calc(100vh - 70px)' } : { maxHeight: '360px' }}
      >
        {children}
      </div>
    </section>
  );
}
