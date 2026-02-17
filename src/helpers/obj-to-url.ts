export const objToUrl = (obj: Record<string, string | number | boolean>): string => {
  let str = '';
  for (const key in obj) {
    if (str != '') {
      str += '&';
    }
    str += `${key}=${encodeURIComponent(obj[key])}`;
  }

  return str;
};
