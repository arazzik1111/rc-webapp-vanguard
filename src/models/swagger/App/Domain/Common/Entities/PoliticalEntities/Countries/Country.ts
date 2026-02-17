import { Locales } from '@models/swagger/App/Domain/Common/Entities/Locales/Locales';
import { Currency } from '@models/swagger/App/Domain/Common/Entities/Money/Currency';
import { CountryAddressSetting } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/CountryAddressSetting';
import { CountrySetting } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/CountrySetting';

export const CountryType = {
  country: 'country',
  region: 'region',
};

export const CountryTypeStrict = {
  country: 'country',
  region: 'region',
} as const;

export const CountryUnitSystem = {
  imperial: 'imperial',
  metric: 'metric',
};

export const CountryUnitSystemStrict = {
  imperial: 'imperial',
  metric: 'metric',
} as const;

export const CountryTimeSystem = {
  '12hours': '12hours',
  '24hours': '24hours',
};

export const CountryTimeSystemStrict = {
  '12hours': '12hours',
  '24hours': '24hours',
} as const;

export const CountryFirstDayOfWeek = {
  mon: 'mon',
  sun: 'sun',
};

export const CountryFirstDayOfWeekStrict = {
  mon: 'mon',
  sun: 'sun',
} as const;

export const CountryObjectType = {
  App_Domain_Common_Entities_PoliticalEntities_Countries_Country:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\Countries\\Country',
};

export const CountryObjectTypeStrict = {
  App_Domain_Common_Entities_PoliticalEntities_Countries_Country:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\Countries\\Country',
} as const;

export type Country = {
  /**
   * Country name
   */
  name?: string;
  /**
   * Country alias
   */
  alias?: string;
  /**
   * parent country id
   */
  parentCountryId?: number;
  parentCountry?: Country;
  /**
   * Type of country, can be regular or region
   *  Allowed Values:
   * -   `country`: The country type, can be regular or region
   * -   `region`: The country type, can be regular or region
   *
   */
  type?: (typeof CountryType)[keyof typeof CountryType];
  /**
   * Official top level domain
   * , de, us
   */
  tld?: string;
  /**
   * Common top level domain, can be different for some countries as USA has .com or UK uses co.uk
   * , at, co.uk, com
   */
  commonTld?: string;
  /**
   * 2-letter iso code
   * , us
   */
  shortCode?: string;
  /**
   * 3-letter iso code
   * , fra, deu
   */
  isoCode?: string;
  /**
   * international phone prefix without 00 or +
   * , 1, 31
   */
  phonePrefix?: number;
  /**
   * google location name
   * , USA
   */
  googleLocationName?: string;
  currency?: Currency;
  /**
   * Current vat rate
   */
  vatRate?: number;
  /**
   * country is eu member /in Europe
   */
  euMember?: boolean;
  /**
   * Internal Tax key
   */
  taxKey?: string;
  /**
   * Internal account of proceeds
   */
  accountOfProceeds?: string;
  /**
   * ISO-3166 locale code
   * , at_DE
   */
  locale?: string;
  /**
   * The countries default unit system
   *  Allowed Values:
   * -   `imperial`: The Imperial metric system
   * -   `metric`: The Metric metric system
   *
   */
  unitSystem?: (typeof CountryUnitSystem)[keyof typeof CountryUnitSystem];
  /**
   * The countries default time system (12hours is using am & pm)
   *  Allowed Values:
   * -   `12hours`: The 12-hour time system
   * -   `24hours`: The 24-hour time system
   *
   */
  timeSystem?: (typeof CountryTimeSystem)[keyof typeof CountryTimeSystem];
  /**
   * The day, the week starts
   *  Allowed Values:
   * -   `mon`: The first day of the week - monday
   * -   `sun`: The first day of the week - sunday
   *
   */
  firstDayOfWeek?: (typeof CountryFirstDayOfWeek)[keyof typeof CountryFirstDayOfWeek];
  /**
   * The default address format
   */
  addressFormat?: string;
  /**
   * The default language used in app, can differ from native language
   */
  appDefaultLanguageCode?: string;
  /**
   * The native language of this country, e.g. de for German
   */
  nativeLanguageCode?: string;
  /**
   * The default language, that is supported for this country, can be different from native language as we do not support all languages
   */
  languageCode?: string;
  /**
   * Whether country is active or not
   */
  isActive?: boolean;
  /**
   * Priority, the lower the higher
   */
  priority?: number;
  setting?: CountrySetting;
  addressSetting?: CountryAddressSetting;
  supportedLocales?: Locales;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof CountryObjectType)[keyof typeof CountryObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
