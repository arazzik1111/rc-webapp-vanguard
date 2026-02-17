import { useCallback, useEffect, useRef, useState } from 'react';

export const useAsyncState = <T>(initialState: T): [T, (newState: T) => Promise<T>] => {
  const [state, setState] = useState<T>(initialState);
  const resolveState = useRef<T | null>(null);
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (resolveState.current) {
      // @ts-ignore
      resolveState?.current(state);
    }
  }, [state]);

  const setAsyncState: (newState: T) => Promise<T> = useCallback(
    (newState: T | null) =>
      new Promise((resolve) => {
        if (isMounted.current) {
          if (newState) {
            // @ts-ignore
            // resolveState.current = resolve;
            resolve(newState);
            setState(newState);
          }
        }
      }),
    [],
  );

  return [state, setAsyncState];
};
