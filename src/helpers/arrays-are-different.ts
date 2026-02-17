export const arraysAreDifferent = <S>(
  arr1: S[] | undefined,
  arr2: S[] | undefined,
  sortingFunction: (a: S, b: S) => number,
) => {
  // Check if any of the arrays are undefined
  if (!arr1 || !arr2) {
    return true;
  }
  // Check if arrays have the same length
  if (arr1.length !== arr2.length) {
    return true;
  }

  // Sort both arrays based on the provided sorting function
  const sortedArr1 = arr1.slice().sort(sortingFunction);
  const sortedArr2 = arr2.slice().sort(sortingFunction);

  // Iterate over each object in the sorted arrays
  for (let i = 0; i < sortedArr1.length; i++) {
    // Check if the objects are different
    if (JSON.stringify(sortedArr1[i]) !== JSON.stringify(sortedArr2[i])) {
      return true;
    }
  }

  // If all objects are equal, return false
  return false;
};
