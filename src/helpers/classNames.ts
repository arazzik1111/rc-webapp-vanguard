export const classNames = (...args: Array<string | undefined>): string => {
  return args.join(' ');
};

export const camelize = (s: any): any => {
  for (const key in s) {
    const camelized = key.replace(/-./g, (x: string) => x[1].toUpperCase());
    if (!s[camelized]) {
      s[camelized] = s[key];
    }
  }
  return s;
};
