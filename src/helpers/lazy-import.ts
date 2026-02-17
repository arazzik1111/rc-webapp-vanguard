import { ComponentType, lazy } from 'react';

export const lazyImport = <Props>(
  factory: () => Promise<{ [key: string]: ComponentType<Props> }>,
  name: string = 'default',
  delay: number = 0,
) => {
  return lazy(async () => {
    const resolved = await factory();

    if (!resolved[name]) {
      throw new Error(`Module does not export '${name}'.`);
    }

    return new Promise<{ default: ComponentType<Props> }>((resolve) => {
      setTimeout(() => {
        resolve({ default: resolved[name] });
      }, delay);
    });
  });
};
