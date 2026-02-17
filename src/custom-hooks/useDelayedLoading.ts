import { useEffect, useState } from 'react';

/**
 * Custom hook that returns true if isLoading is true for longer than the specified delay.
 * This prevents showing loading indicators for very brief loading operations.
 *
 * @param isLoading Current loading state
 * @param delay Delay in milliseconds before showing loading state (default: 50ms)
 * @returns Delayed loading state (true only if loading takes longer than the delay)
 */
export const useDelayedLoading = (isLoading: boolean, delay: number = 50): boolean => {
  const [delayedLoading, setDelayedLoading] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isLoading) {
      // Set a timeout to show loading state after the delay
      timeoutId = setTimeout(() => {
        setDelayedLoading(true);
      }, delay);
    } else {
      // When loading finishes, immediately reset the delayed state
      setDelayedLoading(false);
    }

    // Clean up timeout if component unmounts or isLoading changes
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isLoading, delay]);

  return delayedLoading;
};
