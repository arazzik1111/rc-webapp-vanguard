export type NumberCurrencyFormat = {
  currency?: string;
  locale?: string;
  numberOfDecimals?: number;
};

export const formatNumberWithCurrency = (value: number | undefined, config: NumberCurrencyFormat = {}): string => {
  const { locale = 'de-DE', currency = 'EUR', numberOfDecimals = 2 } = config;

  const currencyFormatConfig = {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: numberOfDecimals,
    maximumFractionDigits: numberOfDecimals,
  };

  try {
    //@ts-ignore
    const formatter = new Intl.NumberFormat(locale, currencyFormatConfig);
    return formatter.format(value ?? 0);
  } catch (error) {
    console.error('ERROR | formatNumberWithCurrency wrong locale | Details: ', error);
    //@ts-ignore
    const formatter = new Intl.NumberFormat('de-DE', currencyFormatConfig);
    return formatter.format(value ?? 0);
  }
};
