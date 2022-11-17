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

export default function useWindowDimensions(): Dimensions {
  const [screenDimensions, setScreenDimensions] = useState(getScreenDimensions());

  useEffect(() => {
    function handleResize(): void {
      setScreenDimensions(getScreenDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenDimensions;
}
