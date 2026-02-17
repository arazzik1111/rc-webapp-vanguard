import { Country } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/Country';

export const LocaleObjectType = {
  App_Domain_Common_Entities_Locales_Locale: 'App\\Domain\\Common\\Entities\\Locales\\Locale',
};

export const LocaleObjectTypeStrict = {
  App_Domain_Common_Entities_Locales_Locale: 'App\\Domain\\Common\\Entities\\Locales\\Locale',
} as const;

export type Locale = {
  /**
   * The lanugage code of the locale
   */
  languageCode?: string;
  /**
   * The id of the Locale's Language
   */
  languageId?: number;
  country?: Country;
  /**
   * The shortCode of the Locale's Country
   */
  countryShortCode?: string;
  /**
   * The id of the Locale's Country
   */
  countryId?: number;
  /**
   * If true, this is the defaultLcoaleFor language
   */
  isDefaultLocaleForLanguage?: boolean;
  /**
   * If true, the Locale is supported and active
   */
  isActive?: boolean;
  /**
   * If true, the Locale is supported on direct channel customers
   */
  isActiveForDCCustomers?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocaleObjectType)[keyof typeof LocaleObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
