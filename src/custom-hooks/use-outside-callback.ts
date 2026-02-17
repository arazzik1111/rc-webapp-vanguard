/**
 * Hook that alerts clicks outside of the passed ref
 */
import { RefObject, useEffect } from 'react';

export const useOutsideCallback = (
  ref: RefObject<HTMLDivElement>,
  cb: ((event: MouseEvent) => void) | (() => void),
): void => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (cb && typeof cb === 'function') {
          cb(event);
        }
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
