export function splitStringToArray(inputString: string | undefined): string[] {
  if (inputString === undefined) {
    return [];
  }

  return inputString.split(',');
}
