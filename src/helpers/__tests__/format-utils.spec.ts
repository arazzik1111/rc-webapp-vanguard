import { formatHours, getHourFormat } from '../format-utils';

describe('Test format utils', () => {
  test('it should format from 24h format to AM/PM', () => {
    const input = '00:00';
    const output = formatHours(input, true);
    expect(output).toBe('12:00 AM');
  });

  test('it should format from AM/PM to 24h before 12AM', () => {
    const AMPM = '08:00 AM';
    const H24 = formatHours(AMPM);
    expect(H24).toBe('08:00');
  });

  test('it should format from AM/PM to 24h after 12AM', () => {
    const AMPM = '08:00 PM';
    const H24 = formatHours(AMPM);
    expect(H24).toBe('20:00');
  });

  test('it should format from 24h to AP/PM before 12AM', () => {
    const H24 = '08:00';
    const AMPM = formatHours(H24, true);
    expect(AMPM).toBe('08:00 AM');
  });

  test('it should format from 24h to AP/PM after 12AM', () => {
    const H24 = '20:23';
    const AMPM = formatHours(H24, true);
    expect(AMPM).toBe('08:23 PM');
  });

  test('it should format from 24h to 24h before 12AM', () => {
    const H24 = '08:00';
    const h24_converted = formatHours(H24);
    expect(h24_converted).toBe('08:00');
  });

  test('it should format from 24h to 24h after 12AM', () => {
    const H24 = '20:00';
    const h24_converted = formatHours(H24);
    expect(h24_converted).toBe('20:00');
  });

  test('it should format from 24h to 24h before 12AM', () => {
    const H24 = '08:00 AM';
    const H24_converted = formatHours(H24, true);
    expect(H24_converted).toBe('08:00 AM');
  });

  test('it should format from AM/PM to 24h after 12AM', () => {
    const H24 = '08:00 PM';
    const H24_converted = formatHours(H24, true);
    expect(H24_converted).toBe('08:00 PM');
  });

  test('it should format throw an error, if a non-string is given', () => {
    const H24 = 256;
    expect(() => formatHours(H24)).toThrow(new Error('Argument must be a string'));
  });

  test(' should return empty string if string has only spaces in it ', () => {
    const input = '                ';
    const output = formatHours(input);
    expect(output).toBe('');
  });

  test('return correct format if no param is given  ', () => {
    const param = getHourFormat();
    expect(param).toEqual('HH:mm');
  });
});
