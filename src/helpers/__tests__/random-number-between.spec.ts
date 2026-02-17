import { randomNumberBetween } from '../random-number-between';

describe('test random number utility', () => {
  test('should generate numbers between a range ', () => {
    const MIN = 5;
    const MAX = 15;
    const generatedNumber = randomNumberBetween(MIN, MAX);
    expect(generatedNumber).toBeLessThanOrEqual(MAX);
    expect(generatedNumber).toBeGreaterThanOrEqual(MIN);
  });
});
