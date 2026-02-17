import { useEffect, useRef, useState } from 'react';

/**
 * The idea with this hook is that we want to listen to a dependency
 * but only until a timeout
 * */
export const useEffectWithTimeout = (cb: () => void, dependency: any[], timeout: number = 1000) => {
  const [hasRun, setHasRun] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (hasRun) return; // Avoid running the effect after the first second
    //
    // Set a timeout to mark the first second and stop further execution
    timeoutRef.current = setTimeout(() => {
      setHasRun(true); // Stop listening after 1 second
    }, 1000);

    cb && cb();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [...dependency, hasRun]);

  return hasRun;
};
