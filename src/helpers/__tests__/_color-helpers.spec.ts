import { describe, expect, test } from 'vitest';

import { applyOpacity, generateColorFromInitials, parseColor } from '../color-helpers';

describe('color-helpers', () => {
  describe('generateColorFromInitials', () => {
    test('should generate a color based on initials', () => {
      const result = generateColorFromInitials(['A', 'B']);
      expect(result).toMatch(/^--/);
    });
  });

  describe('parseColor', () => {
    test('should wrap CSS variable starting with -- in var()', () => {
      const result = parseColor('--primary');
      expect(result).toBe('var(--primary)');
    });

    test('should return var() format as is if not resolvable', () => {
      const result = parseColor('var(--secondary)');
      expect(result).toBe('var(--secondary)');
    });

    test('should return hex color as is', () => {
      const result = parseColor('#123456');
      expect(result).toBe('#123456');
    });

    test('should return rgba color as is', () => {
      const result = parseColor('rgba(255, 0, 0, 0.5)');
      expect(result).toBe('rgba(255, 0, 0, 0.5)');
    });

    test('should return rgb color as is', () => {
      const result = parseColor('rgb(255, 0, 0)');
      expect(result).toBe('rgb(255, 0, 0)');
    });

    test('should return named color as is', () => {
      const result = parseColor('red');
      expect(result).toBe('red');
    });
  });

  describe('applyOpacity', () => {
    test('should apply opacity to hex color', () => {
      const result = applyOpacity('#ff0000', 0.5);
      expect(result).toBe('rgba(255, 0, 0,0.5)');
    });

    test('should apply opacity to rgb color', () => {
      const result = applyOpacity('rgb(255, 0, 0)', 0.5);
      expect(result).toBe('rgba(255, 0, 0, 0.5)');
    });

    test('should adjust opacity of rgba color', () => {
      const result = applyOpacity('rgba(255, 0, 0, 0.8)', 0.5);
      expect(result).toBe('rgba(255, 0, 0, 0.5)');
    });

    test('should return CSS variable as is', () => {
      const result = applyOpacity('var(--primary)', 0.5);
      expect(result).toBe('var(--primary)');
    });

    test('should return named color as is', () => {
      const result = applyOpacity('red', 0.5);
      expect(result).toBe('red');
    });
  });
});
