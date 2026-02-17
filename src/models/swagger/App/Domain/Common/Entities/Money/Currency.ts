export const CurrencyIsoCode = {
  ARS: 'ARS',
  AUD: 'AUD',
  BRL: 'BRL',
  CAD: 'CAD',
  CHF: 'CHF',
  CLP: 'CLP',
  COP: 'COP',
  CZK: 'CZK',
  EUR: 'EUR',
  GBP: 'GBP',
  HUF: 'HUF',
  IDR: 'IDR',
  INR: 'INR',
  JPY: 'JPY',
  MXN: 'MXN',
  NOK: 'NOK',
  RON: 'RON',
  PEN: 'PEN',
  PHP: 'PHP',
  PLN: 'PLN',
  MYR: 'MYR',
  RUB: 'RUB',
  SEK: 'SEK',
  SGD: 'SGD',
  USD: 'USD',
  VEF: 'VEF',
  ZAR: 'ZAR',
  TRY: 'TRY',
  NZD: 'NZD',
  MAD: 'MAD',
  BDT: 'BDT',
  SAR: 'SAR',
  NGN: 'NGN',
  TWD: 'TWD',
  PKR: 'PKR',
  VND: 'VND',
  HKD: 'HKD',
  ILS: 'ILS',
  THB: 'THB',
  EGP: 'EGP',
  KRW: 'KRW',
  KHR: 'KHR',
  DZD: 'DZD',
  KWD: 'KWD',
  GHS: 'GHS',
  KES: 'KES',
  BGN: 'BGN',
  JMD: 'JMD',
};

export const CurrencyIsoCodeStrict = {
  ARS: 'ARS',
  AUD: 'AUD',
  BRL: 'BRL',
  CAD: 'CAD',
  CHF: 'CHF',
  CLP: 'CLP',
  COP: 'COP',
  CZK: 'CZK',
  EUR: 'EUR',
  GBP: 'GBP',
  HUF: 'HUF',
  IDR: 'IDR',
  INR: 'INR',
  JPY: 'JPY',
  MXN: 'MXN',
  NOK: 'NOK',
  RON: 'RON',
  PEN: 'PEN',
  PHP: 'PHP',
  PLN: 'PLN',
  MYR: 'MYR',
  RUB: 'RUB',
  SEK: 'SEK',
  SGD: 'SGD',
  USD: 'USD',
  VEF: 'VEF',
  ZAR: 'ZAR',
  TRY: 'TRY',
  NZD: 'NZD',
  MAD: 'MAD',
  BDT: 'BDT',
  SAR: 'SAR',
  NGN: 'NGN',
  TWD: 'TWD',
  PKR: 'PKR',
  VND: 'VND',
  HKD: 'HKD',
  ILS: 'ILS',
  THB: 'THB',
  EGP: 'EGP',
  KRW: 'KRW',
  KHR: 'KHR',
  DZD: 'DZD',
  KWD: 'KWD',
  GHS: 'GHS',
  KES: 'KES',
  BGN: 'BGN',
  JMD: 'JMD',
} as const;

export const CurrencyObjectType = {
  App_Domain_Common_Entities_Money_Currency: 'App\\Domain\\Common\\Entities\\Money\\Currency',
};

export const CurrencyObjectTypeStrict = {
  App_Domain_Common_Entities_Money_Currency: 'App\\Domain\\Common\\Entities\\Money\\Currency',
} as const;

export type Currency = {
  /**
   * ISO 4217 3-letter currency code
   * , USD
   *  Allowed Values:
   * -   `ARS`
   * -   `AUD`
   * -   `BRL`
   * -   `CAD`
   * -   `CHF`
   * -   `CLP`
   * -   `COP`
   * -   `CZK`
   * -   `EUR`
   * -   `GBP`
   * -   `HUF`
   * -   `IDR`
   * -   `INR`
   * -   `JPY`
   * -   `MXN`
   * -   `NOK`
   * -   `RON`
   * -   `PEN`
   * -   `PHP`
   * -   `PLN`
   * -   `MYR`
   * -   `RUB`
   * -   `SEK`
   * -   `SGD`
   * -   `USD`
   * -   `VEF`
   * -   `ZAR`
   * -   `TRY`
   * -   `NZD`
   * -   `MAD`
   * -   `BDT`
   * -   `SAR`
   * -   `NGN`
   * -   `TWD`
   * -   `PKR`
   * -   `VND`
   * -   `HKD`
   * -   `ILS`
   * -   `THB`
   * -   `EGP`
   * -   `KRW`
   * -   `KHR`
   * -   `DZD`
   * -   `KWD`
   * -   `GHS`
   * -   `KES`
   * -   `BGN`
   * -   `JMD`
   *
   */
  isoCode?: (typeof CurrencyIsoCode)[keyof typeof CurrencyIsoCode];
  /**
   * currency symbol
   * @example $, €
   */
  symbol?: string;
  /**
   * determines if symbol is used before number, e.g. $ 1.0, or 1 €
   */
  displaySymbolBeforeAmount?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof CurrencyObjectType)[keyof typeof CurrencyObjectType];
};
