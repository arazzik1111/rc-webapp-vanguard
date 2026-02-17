export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

type DebounceFn<T extends any[], R> = (...args: T) => Promise<R>;

export const debouncePromise = <T extends any[], R>(callback: DebounceFn<T, R>, delay: number): DebounceFn<T, R> => {
  let timeoutId: NodeJS.Timeout;

  return (...args: T) => {
    clearTimeout(timeoutId);

    return new Promise<R>((resolve) => {
      timeoutId = setTimeout(async () => {
        const result = await callback(...args);
        resolve(result);
      }, delay);
    });
  };
};

// Assuming debounce is using a timeout-based delay mechanism
export function debounceWithCancel<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timer: NodeJS.Timeout | null;

  const debouncedFunc = (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };

  debouncedFunc.cancel = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  return debouncedFunc as T & { cancel: () => void };
}
