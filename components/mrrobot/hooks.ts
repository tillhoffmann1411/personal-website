'use client';

import { useCallback, useEffect, useState } from 'react';

export function useTypewriter(text: string, speed = 45, enabled = true) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setDisplayed('');
      setDone(false);
      return;
    }

    setDisplayed('');
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, enabled]);

  return { displayed, done };
}

export function useBootComplete() {
  const [bootComplete, setBootComplete] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const skip = sessionStorage.getItem('mrrobot-boot-complete') === '1';
    if (skip) setBootComplete(true);
    setHydrated(true);
  }, []);

  const completeBoot = useCallback(() => {
    sessionStorage.setItem('mrrobot-boot-complete', '1');
    setBootComplete(true);
  }, []);

  const reboot = useCallback(() => {
    sessionStorage.removeItem('mrrobot-boot-complete');
    setBootComplete(false);
  }, []);

  return { bootComplete, completeBoot, reboot, hydrated };
}
