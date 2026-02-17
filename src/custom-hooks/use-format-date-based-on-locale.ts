import { formatDateBasedOnLocale } from '@helpers/format-date-based-on-locale';
import moment from 'moment';

export const useFormatDateBasedOnLocale = (): ((
  value?: Date | string,
  type?: 'date' | 'date-time' | 'date-line-chart-xaxis',
  parseUtcToLocal?: boolean,
  locale?: string,
) => string) => {
  return (value, type = 'date', parseUtcToLocal = false, locale) => {
    const formattedLocale = locale ? (locale.includes('_') ? locale.replace('_', '-') : locale) : undefined;
    let dateToFormat: Date | undefined;

    if (typeof value === 'string') {
      const parsed = parseUtcToLocal ? moment.utc(value).local() : moment(value);
      dateToFormat = parsed.isValid() ? parsed.toDate() : undefined;
    } else if (value instanceof Date) {
      dateToFormat = value;
    }

    if (!dateToFormat) {
      dateToFormat = moment.utc().local().toDate(); // fallback if invalid
    }

    return formatDateBasedOnLocale(dateToFormat, { locale: formattedLocale, type });
  };
};
