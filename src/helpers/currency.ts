import { Currency } from '@models/swagger/App/Domain/Common/Entities/Money/Currency';

export const getCurrencyInfoByIsoCode = (isoCode: string, number: number | string) => {
  type CurrencyInfo = {
    symbol: string;
    placement: 'before' | 'after';
  };

  const currencySymbols: Record<string, CurrencyInfo> = {
    USD: { symbol: '$', placement: 'before' },
    EUR: { symbol: '€', placement: 'before' },
    GBP: { symbol: '£', placement: 'before' },
    JPY: { symbol: '¥', placement: 'before' },
    CNY: { symbol: '¥', placement: 'before' },
    INR: { symbol: '₹', placement: 'before' },
    RUB: { symbol: '₽', placement: 'after' },
    AUD: { symbol: '$', placement: 'before' },
    CAD: { symbol: '$', placement: 'before' },
    CHF: { symbol: 'CHF', placement: 'before' },
    HKD: { symbol: '$', placement: 'before' },
    NZD: { symbol: '$', placement: 'before' },
    SEK: { symbol: 'kr', placement: 'after' },
    KRW: { symbol: '₩', placement: 'after' },
    SGD: { symbol: '$', placement: 'before' },
    NOK: { symbol: 'kr', placement: 'after' },
    MXN: { symbol: '$', placement: 'before' },
    ZAR: { symbol: 'R', placement: 'before' },
    TRY: { symbol: '₺', placement: 'before' },
    BRL: { symbol: 'R$', placement: 'before' },
    TWD: { symbol: 'NT$', placement: 'after' },
    // add more currency symbols and placements as needed
  };

  if (currencySymbols[isoCode]) {
    if (currencySymbols[isoCode].placement == 'before') {
      return currencySymbols[isoCode].symbol + number;
    }
    if (currencySymbols[isoCode].placement == 'after') {
      return number + currencySymbols[isoCode].symbol;
    }
  } else {
    console.error('Error | getCurrencyInfo | Unhandled ISO code: ', isoCode);
  }

  return number;
};

export const formatPriceByCurrency = (price: number, currency: Currency) => {
  const symbol = currency.symbol;
  if (!symbol) {
    console.warn('Warning | formatPriceByCurrency | Symbol not provided, price: ', price);
    return price;
  }

  if (currency.displaySymbolBeforeAmount) {
    return symbol + price;
  }

  return price + symbol;
};
