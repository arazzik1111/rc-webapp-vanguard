import { Locale } from '@models/swagger/App/Domain/Common/Entities/Locales/Locale';

export const LocalesObjectType = {
  App_Domain_Common_Entities_Locales_Locales: 'App\\Domain\\Common\\Entities\\Locales\\Locales',
};

export const LocalesObjectTypeStrict = {
  App_Domain_Common_Entities_Locales_Locales: 'App\\Domain\\Common\\Entities\\Locales\\Locales',
} as const;

export type Locales = {
  elements?: Locale[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocalesObjectType)[keyof typeof LocalesObjectType];
};
