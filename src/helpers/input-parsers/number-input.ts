export const numberInputParser = (value?: string | number): number | null => {
  switch (typeof value) {
    case 'undefined':
      return null;
    case 'object':
      return null;
    case 'boolean':
      return null;
    case 'number':
      return null;
    case 'string':
      const parsed = parseInt(value);
      if (isNaN(parsed)) return null;
      return parsed;
    case 'function':
      return null;
    case 'symbol':
      return value;
    case 'bigint':
      return value;
  }
};
