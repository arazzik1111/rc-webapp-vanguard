import { describe, expect, it } from 'vitest';

import { isValidHexColor, normalizeHexColor } from './hex-color';

describe('hex-color validators', () => {
  describe('isValidHexColor', () => {
    it('should return true for valid 6-digit hex colors with #', () => {
      expect(isValidHexColor('#ff0000')).toBe(true);
      expect(isValidHexColor('#00FF00')).toBe(true);
      expect(isValidHexColor('#0000ff')).toBe(true);
      expect(isValidHexColor('#123456')).toBe(true);
      expect(isValidHexColor('#ABCDEF')).toBe(true);
    });

    it('should return true for valid 6-digit hex colors without #', () => {
      expect(isValidHexColor('ff0000')).toBe(true);
      expect(isValidHexColor('00FF00')).toBe(true);
      expect(isValidHexColor('0000ff')).toBe(true);
      expect(isValidHexColor('123456')).toBe(true);
      expect(isValidHexColor('ABCDEF')).toBe(true);
    });

    it('should return true for valid 3-digit hex colors with #', () => {
      expect(isValidHexColor('#f00')).toBe(true);
      expect(isValidHexColor('#0F0')).toBe(true);
      expect(isValidHexColor('#00f')).toBe(true);
      expect(isValidHexColor('#123')).toBe(true);
      expect(isValidHexColor('#ABC')).toBe(true);
    });

    it('should return true for valid 3-digit hex colors without #', () => {
      expect(isValidHexColor('f00')).toBe(true);
      expect(isValidHexColor('0F0')).toBe(true);
      expect(isValidHexColor('00f')).toBe(true);
      expect(isValidHexColor('123')).toBe(true);
      expect(isValidHexColor('ABC')).toBe(true);
    });

    it('should return false for invalid hex colors', () => {
      expect(isValidHexColor('invalid')).toBe(false);
      expect(isValidHexColor('#gg0000')).toBe(false);
      expect(isValidHexColor('#12345')).toBe(false);
      expect(isValidHexColor('#1234567')).toBe(false);
      expect(isValidHexColor('##ff0000')).toBe(false);
      expect(isValidHexColor('')).toBe(false);
      expect(isValidHexColor('#')).toBe(false);
      expect(isValidHexColor('#12')).toBe(false);
      expect(isValidHexColor('#1234')).toBe(false);
    });

    it('should return false for null, undefined, or non-string values', () => {
      expect(isValidHexColor(null as any)).toBe(false);
      expect(isValidHexColor(undefined as any)).toBe(false);
      expect(isValidHexColor(123 as any)).toBe(false);
      expect(isValidHexColor({} as any)).toBe(false);
    });

    it('should handle whitespace', () => {
      expect(isValidHexColor(' #ff0000 ')).toBe(true);
      expect(isValidHexColor(' ff0000 ')).toBe(true);
      expect(isValidHexColor(' #f00 ')).toBe(true);
    });
  });

  describe('normalizeHexColor', () => {
    it('should normalize valid 6-digit hex colors', () => {
      expect(normalizeHexColor('#FF0000')).toBe('#ff0000');
      expect(normalizeHexColor('FF0000')).toBe('#ff0000');
      expect(normalizeHexColor('#00ff00')).toBe('#00ff00');
      expect(normalizeHexColor('00FF00')).toBe('#00ff00');
    });

    it('should expand 3-digit hex colors to 6-digit', () => {
      expect(normalizeHexColor('#f00')).toBe('#ff0000');
      expect(normalizeHexColor('f00')).toBe('#ff0000');
      expect(normalizeHexColor('#0F0')).toBe('#00ff00');
      expect(normalizeHexColor('0F0')).toBe('#00ff00');
      expect(normalizeHexColor('#00f')).toBe('#0000ff');
      expect(normalizeHexColor('ABC')).toBe('#aabbcc');
    });

    it('should return empty string for invalid hex colors', () => {
      expect(normalizeHexColor('invalid')).toBe('');
      expect(normalizeHexColor('#gg0000')).toBe('');
      expect(normalizeHexColor('#12345')).toBe('');
      expect(normalizeHexColor('')).toBe('');
      expect(normalizeHexColor(null as any)).toBe('');
      expect(normalizeHexColor(undefined as any)).toBe('');
    });

    it('should handle whitespace', () => {
      expect(normalizeHexColor(' #FF0000 ')).toBe('#ff0000');
      expect(normalizeHexColor(' f00 ')).toBe('#ff0000');
    });
  });
});
