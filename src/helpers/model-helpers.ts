export const pushUniqueToElements = <T extends Record<string, any>>(
  elements: Array<T>,
  uniqueKey: string,
  elementToBeAdded: T,
): Array<T> => {
  let added = false;
  const elementsCopy = [...elements];

  for (let i = 0; i < elementsCopy.length; i++) {
    if (elementsCopy[i] && elementsCopy[i][uniqueKey] && elementsCopy[i][uniqueKey] === elementToBeAdded[uniqueKey]) {
      elementsCopy[i] = elementToBeAdded;
      added = true;
    }
  }

  if (!added) {
    elementsCopy.push(elementToBeAdded);
  }

  return elementsCopy;
};

export const removeUniqueFromElements = <T extends Record<string, any>>(
  elements: Array<T>,
  uniqueKey: string,
  keyValue: string,
): Array<T> => {
  const elementsCopy = [...elements];
  return elementsCopy.filter((item) => item[uniqueKey] !== keyValue);
};

export const convertElementsToRecord = <T>(elements: Array<T>, uniqueKey: string): Record<string, T> => {
  const result: Record<string, T> = {};
  const elementsCopy = [...elements];
  elementsCopy.map((item) => {
    //@ts-ignore
    result[item[uniqueKey]] = item;
  });

  return result;
};
