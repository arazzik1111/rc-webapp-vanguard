export const mapStorybookActionToProps = <T extends Record<string, any>>(
  props?: Partial<T> | null,
  replacements?: T,
): T => {
  const newObj: Record<keyof T, any> = {} as any;
  if (!replacements) {
    return props as T;
  }
  for (const key in replacements) {
    newObj[key] = replacements[key];
  }
  for (const key in props) {
    newObj[key] = props[key] ?? replacements[key];
  }

  return newObj;
};
