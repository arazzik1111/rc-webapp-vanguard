/**
 * Hook that alerts clicks inside of the passed ref
 */
import { RefObject, useEffect } from 'react';

export const useInsideClickCallback = (ref: RefObject<HTMLDivElement>, cb: () => void): void => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleCLickInside(event: MouseEvent) {
      if (ref.current) {
        if (cb && typeof cb === 'function') {
          cb();
        }
      }
    }

    // Bind the event listener
    ref.current?.addEventListener('mousedown', handleCLickInside);
    return () => {
      // Unbind the event listener on clean up
      ref.current?.removeEventListener('mousedown', handleCLickInside);
    };
  }, [ref, ref.current]);
};
