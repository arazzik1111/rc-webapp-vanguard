export const arrayDuplicates = <T>(list: T[]) => {
  return list.filter((e, i, a) => a.indexOf(e) !== i);
};

export const sortArray = <S extends Record<string, any>>(list: S[], order: Record<string, any>, property: string) => {
  return (
    list.sort((itemList1: S, itemList2: S) => {
      if (itemList1[property] && itemList2[property]) {
        return order[itemList1[property]] - order[itemList2[property]];
      }
      return 0;
    }) ?? []
  );
};

export const formatList = (items: string[], separator = ', ', lastSeparator = ' & '): string => {
  switch (items.length) {
    case 0:
      return '';
    case 1:
      return items[0];
    case 2:
      return items.join(lastSeparator);
    default:
      return items.slice(0, -1).join(separator) + lastSeparator + items[items.length - 1];
  }
};

export type NonEmptyArray<T> = [T, ...T[]];
