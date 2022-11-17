import { useEffect, useState } from 'react';
import useWindowDimensions from './utils/GetScreenDimensions';

const DrawPath = (): React.ReactElement => {
  const { height } = useWindowDimensions();
  const [pathOffset, setPathOffset] = useState<number>(0);

  const getScrollPercent = (): number => {
    const h = document.documentElement;
    const b = document.body;
    const st = 'scrollTop';
    const sh = 'scrollHeight';

    const scrollPercent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);

    return scrollPercent;
  };

  const handleScroll = (): void => {
    const scrollPercent = getScrollPercent();
    const length = height * 1.5;
    const drawLength = length * scrollPercent;
    const offset = length - drawLength;

    setPathOffset(offset < length ? offset : length);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);
  return (
    <svg
      className='hidden lg:block'
      width='6'
      height={height * 1.5}
      preserveAspectRatio='xMidYMid meet'
    >
      <path
        className='path'
        d={'M1 0.5V' + (height * 1.5).toString()}
        stroke='#101010'
        strokeWidth='6'
        strokeDasharray={height * 1.5}
      />
      <path
        className='path'
        d={'M1 0.5V' + (height * 1.5).toString()}
        stroke='#5eb1fa'
        strokeWidth='6'
        strokeDashoffset={pathOffset}
        strokeDasharray={height * 1.5}
      />
    </svg>
  );
};

export default DrawPath;
