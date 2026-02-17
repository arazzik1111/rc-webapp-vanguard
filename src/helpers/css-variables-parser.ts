export const parseCssVariable = (color?: string): string => {
  if (!color) {
    return '';
  }
  const firstTwo = color.slice(0, 2);
  if (firstTwo === '--') {
    color = `var(${color})`;
  }

  return color;
};
