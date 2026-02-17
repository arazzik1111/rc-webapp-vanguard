export const convertSnakeCaseToTitleCase = (text: string): string => {
  const isAllUppercase = text === text.toUpperCase();

  if (isAllUppercase) {
    const words = text.toLowerCase().split('_');
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  } else {
    return text.replace(/_/g, ' ').replace(/(?:^|_)(\w)/g, (_, letter) => letter.toUpperCase());
  }
};
