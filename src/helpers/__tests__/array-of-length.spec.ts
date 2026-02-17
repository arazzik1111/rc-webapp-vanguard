import { arrayOfLength } from '../array-of-length';

describe('test array length utility', () => {
  test('should return an array of length specified', () => {
    const LENGTH_TO_GEN = 5;
    const generatedArr = arrayOfLength(LENGTH_TO_GEN);
    expect(generatedArr.length).toBe(LENGTH_TO_GEN);
  });
});
