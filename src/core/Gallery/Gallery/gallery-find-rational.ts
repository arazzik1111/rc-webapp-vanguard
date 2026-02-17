export const galleryFindRational = (value: number, maxdenom?: number) => {
  console.clear();
  console.log(`Looking up: ${value}`);
  const best = { numerator: 1, denominator: 1, error: Math.abs(value - 1) };
  if (!maxdenom) maxdenom = 10000;
  for (let denominator = 1; best.error > 0 && denominator <= maxdenom; denominator++) {
    const numerator = Math.round(value * denominator);
    const error = Math.abs(value - numerator / denominator);
    if (error >= best.error) continue;
    best.numerator = numerator;
    best.denominator = denominator;
    best.error = error;
    console.log(
      `Intermediate result: ${best.numerator}/${best.denominator} (${best.numerator / best.denominator} error ${
        best.error
      } )`,
    );
  }
  console.log(`Final result: ${JSON.stringify(best)}`);
  return best;
};
