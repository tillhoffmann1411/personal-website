import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, [])

  return scrollPosition;
}

export function useWindowHeight() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', updateHeight)

    updateHeight()

    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return height;
};