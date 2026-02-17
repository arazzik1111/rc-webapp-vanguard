import { getPathId } from '@helpers/get-path-id';

describe('Test helper function: getPathId()', () => {
  test('for an url with no id, should return 0', () => {
    const url = 'https://rankingcoach.com/customer/presence/';
    const generatedNumber = getPathId(url);
    expect(generatedNumber).toBe(-1);
  });

  test('for an url with only id, should return id (number)', () => {
    const url = 'https://rankingcoach.com/customer/presence/index/1964627';
    const generatedNumber = getPathId(url);
    expect(generatedNumber).toBe(1964627);
  });

  test('for an url with id, should return id (number)', () => {
    const url = 'https://rankingcoach.com/customer/presence/index/1964627';
    const generatedNumber = getPathId(url);
    expect(generatedNumber).toBe(1964627);
  });

  test('for an url with id and query params, should return id (number)', () => {
    const url = 'https://rankingcoach.com/customer/presence/index/1964627?language=de';
    const generatedNumber = getPathId(url);
    expect(generatedNumber).toBe(1964627);
  });
});
