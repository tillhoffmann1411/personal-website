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

export function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateWidth)

    updateWidth()

    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return width;
}