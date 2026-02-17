export type DateFormat = {
  locale?: string;
  type?: 'date' | 'date-time' | 'date-line-chart-xaxis';
};

export const formatDateBasedOnLocale = (value: Date | undefined, config: DateFormat = {}): string => {
  const { locale = 'de-DE', type = 'date-time' } = config;

  const dateTimeOpts: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  const dateOpts: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };

  const dateLineChartXAxisOpts: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
  };

  let options: Intl.DateTimeFormatOptions;
  switch (type) {
    case 'date-line-chart-xaxis':
      options = dateLineChartXAxisOpts;
      break;
    case 'date':
      options = dateOpts;
      break;
    default:
      options = dateTimeOpts;
      break;
  }

  try {
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(value ?? 0);
  } catch (error) {
    console.error('ERROR | formatDateBasedOnLocale wrong locale | Details: ', error);
    const fallbackFormatter = new Intl.DateTimeFormat('de-DE', options);
    return fallbackFormatter.format(value ?? 0);
  }
};
