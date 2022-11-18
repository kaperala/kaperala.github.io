import { useState, useEffect } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

function getScreenDimensions(): Dimensions {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const useWindowDimensions = (): Dimensions => {
  const [screenDimensions, setScreenDimensions] = useState(getScreenDimensions());

  useEffect(() => {
    const handleResize = (): void => {
      setScreenDimensions(getScreenDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenDimensions;
};

export const openNewTab = (url: string): void => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const shuffleThings = (things: string[]): string[] => {
  let index = things.length;
  let randomIndex;

  while (index !== 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;
    [things[index], things[randomIndex]] = [things[randomIndex], things[index]];
  }

  return things;
};

export const getScrollPercent = (): number => {
  const h = document.documentElement;
  const b = document.body;
  const st = 'scrollTop';
  const sh = 'scrollHeight';

  const scrollPercent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);

  return scrollPercent;
};
