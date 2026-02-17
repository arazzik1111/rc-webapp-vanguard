import { useEffect, useState } from 'react';

/**
 * Use Window Resize Hook - gets device width while resizing the window
 *
 * Notes:
 *    - Consider using "deviceService": html/react/src/services/device.service.ts, if no real-time data needed
 */

export const useWindowResize = (debounceTime: number = 0) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const debouncedHandleResize = debounceTime
      ? debounce(() => setWidth(window.innerWidth), debounceTime)
      : () => setWidth(window.innerWidth);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [debounceTime]);

  return width;
};

function debounce(func: (...args: any[]) => void, timeout: number = 300): (...args: any[]) => void {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
