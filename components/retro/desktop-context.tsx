'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { retroContent } from '@/lib/data/retro-content';

export type WindowId = keyof typeof retroContent.sections;

export type WindowState = {
  id: WindowId;
  title: string;
  icon: string;
  x: number;
  y: number;
  width: number;
  minimized: boolean;
  maximized: boolean;
  closed: boolean;
  zIndex: number;
};

const DEFAULT_LAYOUT: Pick<WindowState, 'x' | 'y' | 'width'>[] = [
  { x: 24, y: 24, width: 420 },
  { x: 64, y: 72, width: 400 },
  { x: 104, y: 120, width: 400 },
  { x: 48, y: 168, width: 440 },
  { x: 88, y: 216, width: 380 },
];

function createInitialWindows(): WindowState[] {
  const sections = Object.values(retroContent.sections);
  return sections.map((section, i) => ({
    id: section.id as WindowId,
    title: section.title,
    icon: section.icon,
    ...DEFAULT_LAYOUT[i],
    minimized: false,
    maximized: false,
    closed: false,
    zIndex: i + 1,
  }));
}

type DesktopContextValue = {
  windows: WindowState[];
  activeWindowId: WindowId | null;
  startMenuOpen: boolean;
  setStartMenuOpen: (open: boolean) => void;
  focusWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  restoreWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  openWindow: (id: WindowId) => void;
  toggleMaximize: (id: WindowId) => void;
  toggleMinimize: (id: WindowId) => void;
  moveWindow: (id: WindowId, x: number, y: number) => void;
  taskbarClick: (id: WindowId) => void;
  topZIndex: number;
};

const DesktopContext = createContext<DesktopContextValue | null>(null);

export function DesktopProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>(createInitialWindows);
  const [activeWindowId, setActiveWindowId] = useState<WindowId | null>('about');
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [topZIndex, setTopZIndex] = useState(10);

  const bringToFront = useCallback((id: WindowId) => {
    setTopZIndex((z) => {
      const next = z + 1;
      setWindows((prev) =>
        prev.map((w) => (w.id === id ? { ...w, zIndex: next } : w)),
      );
      return next;
    });
    setActiveWindowId(id);
  }, []);

  const focusWindow = useCallback(
    (id: WindowId) => {
      bringToFront(id);
      setStartMenuOpen(false);
    },
    [bringToFront],
  );

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)),
    );
    setActiveWindowId((current) => (current === id ? null : current));
  }, []);

  const restoreWindow = useCallback(
    (id: WindowId) => {
      setWindows((prev) =>
        prev.map((w) =>
          w.id === id ? { ...w, minimized: false, closed: false } : w,
        ),
      );
      bringToFront(id);
    },
    [bringToFront],
  );

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, closed: true, minimized: false } : w,
      ),
    );
    setActiveWindowId((current) => (current === id ? null : current));
  }, []);

  const openWindow = useCallback(
    (id: WindowId) => {
      setWindows((prev) =>
        prev.map((w) =>
          w.id === id ? { ...w, closed: false, minimized: false } : w,
        ),
      );
      bringToFront(id);
      setStartMenuOpen(false);
    },
    [bringToFront],
  );

  const toggleMaximize = useCallback(
    (id: WindowId) => {
      setWindows((prev) =>
        prev.map((w) =>
          w.id === id ? { ...w, maximized: !w.maximized, minimized: false } : w,
        ),
      );
      bringToFront(id);
    },
    [bringToFront],
  );

  const toggleMinimize = useCallback(
    (id: WindowId) => {
      const win = windows.find((w) => w.id === id);
      if (!win) return;
      if (win.minimized) {
        restoreWindow(id);
      } else {
        minimizeWindow(id);
      }
    },
    [windows, restoreWindow, minimizeWindow],
  );

  const moveWindow = useCallback((id: WindowId, x: number, y: number) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? { ...w, x: Math.max(0, x), y: Math.max(0, y), maximized: false }
          : w,
      ),
    );
  }, []);

  const taskbarClick = useCallback(
    (id: WindowId) => {
      const win = windows.find((w) => w.id === id);
      if (!win || win.closed) {
        openWindow(id);
        return;
      }
      if (win.minimized) {
        restoreWindow(id);
        return;
      }
      if (activeWindowId === id) {
        minimizeWindow(id);
      } else {
        focusWindow(id);
      }
    },
    [windows, activeWindowId, openWindow, restoreWindow, minimizeWindow, focusWindow],
  );

  const value = useMemo(
    () => ({
      windows,
      activeWindowId,
      startMenuOpen,
      setStartMenuOpen,
      focusWindow,
      minimizeWindow,
      restoreWindow,
      closeWindow,
      openWindow,
      toggleMaximize,
      toggleMinimize,
      moveWindow,
      taskbarClick,
      topZIndex,
    }),
    [
      windows,
      activeWindowId,
      startMenuOpen,
      focusWindow,
      minimizeWindow,
      restoreWindow,
      closeWindow,
      openWindow,
      toggleMaximize,
      toggleMinimize,
      moveWindow,
      taskbarClick,
      topZIndex,
    ],
  );

  return (
    <DesktopContext.Provider value={value}>{children}</DesktopContext.Provider>
  );
}

export function useDesktop() {
  const ctx = useContext(DesktopContext);
  if (!ctx) throw new Error('useDesktop must be used within DesktopProvider');
  return ctx;
}
