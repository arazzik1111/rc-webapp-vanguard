import { useEffect, useState } from 'react';

type DisabledCondition = boolean | ((filters: any) => boolean);

/**
 * Custom hook to handle debounced disabled state for list page filters
 *
 * @param disabled The filter's disabled condition (boolean or function)
 * @param filters The current filters state from the reducer
 * @param isLoading Whether the items request is loading
 * @param debounceMs Debounce time in milliseconds
 * @returns The debounced disabled state
 */
export const useFilterDisabledState = (
  disabled: DisabledCondition | undefined,
  filters: any,
  isLoading: boolean,
  debounceMs: number = 100,
): boolean => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    // Calculate the current disabled state
    const isDisabledInternal = typeof disabled === 'boolean' ? disabled : disabled && disabled(filters);

    // Use a timeout to avoid flickering due to rapid state changes
    const timeoutId = setTimeout(() => {
      setIsDisabled(isDisabledInternal || isLoading);
    }, debounceMs);

    // Clean up timeout on unmount or when dependencies change
    return () => clearTimeout(timeoutId);
  }, [disabled, filters, isLoading, debounceMs]);

  return isDisabled;
};
