import { formatNumberWithCurrency, NumberCurrencyFormat } from '@helpers/format-number-with-currency';
// import { BaseState } from "src/rootReducer";

export const useFormatNumberWithCurrency = (
  locale: string,
  currencyISO: string,
): ((value?: number, config?: NumberCurrencyFormat, returnCurrency?: boolean) => string) => {
  // const { currencyISO, locale } = useSelector((state: BaseState) => state.Slices.Location);

  const formattedLocale = locale ? (locale.includes('_') ? locale.replace('_', '-') : locale) : undefined;

  return (value, config, returnCurrency: boolean = false) => {
    return !returnCurrency
      ? formatNumberWithCurrency(value, { currency: currencyISO, locale: formattedLocale, ...config })
      : formatNumberWithCurrency(value, {
          currency: currencyISO,
          locale: formattedLocale,
          ...config,
        }).replace(/\d+(?:,\d+)?(?:\.\d+)?/g, '');
  };
};
