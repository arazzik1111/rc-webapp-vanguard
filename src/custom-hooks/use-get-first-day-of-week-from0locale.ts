import moment from 'moment';

export const useGetFirstDayOfWeekFrom0Locale = (stateLocale: string) => {
  const localeFormatted = stateLocale?.replace('_', '-') || '';

  const browserLocale = typeof navigator !== 'undefined' ? navigator.language : '';
  const locale = (localeFormatted || browserLocale).toLowerCase();
  // Default to en-GB which is Monday -> Sunday
  // const dateLocale = Intl ? Intl?.DateTimeFormat()?.resolvedOptions()?.locale : "en-GB";

  try {
    // @ts-ignore .weekInfo exists on all browsers except Firefox.
    const weekInfo = new Intl.Locale(locale)?.weekInfo;
    if (weekInfo?.firstDay !== undefined) {
      return weekInfo.firstDay;
    }

    // Fallback for common locales when weekInfo is not available
    const commonLocaleFirstDays: Record<string, number> = {
      // Sunday first (0)
      'en-us': 0,
      'en-ca': 0,
      'es-us': 0,
      'ar-sa': 0,
      'ar-ae': 0,
      'ar-eg': 0,
      'ja-jp': 0,
      'ko-kr': 0,
      'zh-cn': 0,
      'zh-tw': 0,
      'zh-hk': 0,
      'th-th': 0,
      'vi-vn': 0,
      'fil-ph': 0,

      // Monday first (1)
      'en-gb': 1,
      'fr-fr': 1,
      'de-de': 1,
      'es-es': 1,
      'it-it': 1,
      'pt-pt': 1,
      'ru-ru': 1,
      'nl-nl': 1,
      'sv-se': 1,
      'pl-pl': 1,
      'tr-tr': 1,
      'cs-cz': 1,
      'da-dk': 1,
      'fi-fi': 1,
      'no-no': 1,
      'hu-hu': 1,
      'ro-ro': 1,
    };

    // Try to match by exact locale or just the language part
    const localeKey = locale.toLowerCase();
    const languageKey = locale.split('-')[0].toLowerCase();

    if (localeKey in commonLocaleFirstDays) {
      return commonLocaleFirstDays[localeKey];
    } else if (`${languageKey}-${languageKey}` in commonLocaleFirstDays) {
      // Fallback to language-language format (e.g. "fr" -> "fr-fr")
      return commonLocaleFirstDays[`${languageKey}-${languageKey}`];
    }

    // Use moment.js as another fallback if available
    if (moment && typeof moment.localeData === 'function') {
      try {
        return moment.localeData(locale || undefined).firstDayOfWeek();
      } catch (e) {
        // Ignore moment errors
      }
    }

    return 1; // Default to Monday if all else fails
  } catch (e) {
    return 0; // Default to Sunday on error
  }
};
