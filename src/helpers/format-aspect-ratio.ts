export const getAspectRatioFormatted = (aspectRatio: number) => {
  if (aspectRatio === 1) {
    return '1:1';
  }

  if (aspectRatio === 0.8) {
    return '4:5';
  }

  if (aspectRatio === 4 / 3) {
    return '4:3';
  }

  if (aspectRatio === 1.91) {
    return '1.91:1';
  }

  if (aspectRatio === 16 / 9) {
    return '16:9';
  }

  if (aspectRatio === 9 / 16) {
    return '9:16';
  }
};
