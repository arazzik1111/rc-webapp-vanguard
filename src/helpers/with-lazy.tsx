import { ComponentType,lazy, Suspense } from 'react';

export function withLazy<T extends ComponentType<any>>(importFn: () => Promise<{ default: T }>): T {
  const LazyComponent = lazy(importFn);

  const WrappedComponent = (props: any) => (
    <Suspense fallback={null}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return WrappedComponent as T;
}
