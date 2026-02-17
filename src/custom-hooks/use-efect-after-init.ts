import { useEffect, useRef } from 'react';

/**
 * The idea with this hook is that we want to listen to a dependency
 * but onlyafter the initial timeout has passed
 * */
export const useEffectAfterInit = (cb: () => void, dependency: any[], timeout: number = 1000) => {
  const isInitialRender = useRef(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Skip the effect on initial render and set up the timeout
    if (isInitialRender.current) {
      isInitialRender.current = false;

      // Set up the timeout to enable dependency tracking after it expires
      timeoutRef.current = setTimeout(() => {
        isInitialRender.current = false;
        // Run the callback after the initial timeout
        // cb();
      }, timeout);

      return;
    }

    if (timeoutRef.current) return;

    // After the initial timeout, run the callback on every dependency change
    cb();

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, dependency);
};
