export const getValueEvolutionInPercentsAsString = (
  actual: number,
  previous: number,
  prependPositiveSign: boolean = true,
  caseNoChange: string = 'no change',
): string => {
  /**
   * Difference
   */
  let difference: number;

  if (previous === 0) {
    difference = 100;
  } else {
    difference = Math.round(((actual - previous) / previous) * 100);
  }

  let result = `${difference}%`;

  /**
   * Prepend "+" sign
   */
  if (prependPositiveSign && difference > 0) {
    result = `+${result}`;
  }

  /**
   * No Evolution
   */
  if (result === '0%') {
    result = caseNoChange;
  }

  return result;
};

export const calculatePercentage = (value: number, total: number): number => {
  if (total === 0) {
    return 0;
  }
  const percentage = (value / total) * 100;
  return Math.round(percentage);
};
