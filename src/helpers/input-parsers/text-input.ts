export const textInputParser = (value?: string | number): string => {
  switch (typeof value) {
    case 'undefined':
      return '';
    case 'object':
      return '';
    case 'boolean':
      return '';
    case 'number':
      return value.toString();
    case 'string':
      return value;
    case 'function':
      return '';
    case 'symbol':
      return value;
    case 'bigint':
      return BigInt(value).toString();
  }
};
