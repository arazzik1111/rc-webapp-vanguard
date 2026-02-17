import { abbreviateNumber } from '@helpers/round-number';

describe('Round Numbers Utils', () => {
  /**
   * FN: roundNumber
   * -------------------------------------------------------------------------------------------------------------------
   */

  // @todo

  /**
   * FN: abbreviateNumber
   * -------------------------------------------------------------------------------------------------------------------
   */
  test('abbreviateNumber: it should abbreviate number from 400 to 400', () => {
    const input = 400;
    const output = abbreviateNumber(input);
    expect(output).toBe('400');
  });

  test('abbreviateNumber: it should abbreviate number from 1123 to 1.1K', () => {
    const input = 1123;
    const output = abbreviateNumber(input);
    expect(output).toBe('1.1K');
  });

  test('abbreviateNumber: it should abbreviate number from 11000 to 11K', () => {
    const input = 11000;
    const output = abbreviateNumber(input);
    expect(output).toBe('11K');
  });

  test('abbreviateNumber: it should abbreviate number from 112123 to 112.1K', () => {
    const input = 112123;
    const output = abbreviateNumber(input);
    expect(output).toBe('112.1K');
  });
});
