// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';

import { useGetFirstDayOfWeekFrom0Locale } from './use-get-first-day-of-week-from0locale';

describe('useGetFirstDayOfWeekFrom0Locale', () => {
  // This type represents various locales and their expected first day of the week (0 = Sunday, 1 = Monday, etc.)
  type LocaleTestCase = {
    locale: string;
    expectedFirstDay: number;
    description: string;
  };

  // A comprehensive list of locale test cases
  const localeTestCases: LocaleTestCase[] = [
    { locale: 'de-AT', expectedFirstDay: 1, description: 'Austria' },
    { locale: 'de-DE', expectedFirstDay: 1, description: 'Germany' },
    { locale: 'en-IE', expectedFirstDay: 1, description: 'Ireland' },
    { locale: 'es-ES', expectedFirstDay: 1, description: 'Spain' },
    { locale: 'en-US', expectedFirstDay: 7, description: 'US' },
    { locale: 'fr-FR', expectedFirstDay: 1, description: 'France' },
    { locale: 'ja-JP', expectedFirstDay: 7, description: 'Japan' },
  ];

  // Test with various locales
  localeTestCases.forEach(({ locale, expectedFirstDay, description }) => {
    it(`should return ${expectedFirstDay} for ${description} (${locale})`, () => {
      const result = useGetFirstDayOfWeekFrom0Locale(locale);
      expect(result).toBe(expectedFirstDay);
    });
  });

  // Test with empty locale (should use browser locale or default)
  it('should handle empty locale string', () => {
    const result = useGetFirstDayOfWeekFrom0Locale('');
    // Should return browser locale value
    expect(result).toBe(7);
  });

  // Test with null/undefined locale
  it('should handle null locale', () => {
    const result = useGetFirstDayOfWeekFrom0Locale(null as any);
    expect(result).toBe(7);
  });

  // Test with invalid locale
  it('should handle invalid locale gracefully', () => {
    const result = useGetFirstDayOfWeekFrom0Locale('invalid-locale');
    expect(result).toBe(1); // Should default to 1 on error
  });
});
