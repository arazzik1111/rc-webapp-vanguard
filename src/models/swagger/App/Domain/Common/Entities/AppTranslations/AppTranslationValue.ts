import { Account } from '@models/swagger/App/Domain/Common/Entities/Accounts/Account';
import { AppTranslationKey } from '@models/swagger/App/Domain/Common/Entities/AppTranslations/AppTranslationKey';
import { Country } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/Country';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const AppTranslationValueTranslationSource = {
  MANUAL: 'MANUAL',
  AUTO: 'AUTO',
};

export const AppTranslationValueTranslationSourceStrict = {
  MANUAL: 'MANUAL',
  AUTO: 'AUTO',
} as const;

export const AppTranslationValueContext = {
  ONE: 'ONE',
  MANY: 'MANY',
};

export const AppTranslationValueContextStrict = {
  ONE: 'ONE',
  MANY: 'MANY',
} as const;

export const AppTranslationValueWritingStyle = {
  FORMAL: 'FORMAL',
  INFORMAL: 'INFORMAL',
};

export const AppTranslationValueWritingStyleStrict = {
  FORMAL: 'FORMAL',
  INFORMAL: 'INFORMAL',
} as const;

export const AppTranslationValueObjectType = {
  App_Domain_Common_Entities_AppTranslations_AppTranslationValue:
    'App\\Domain\\Common\\Entities\\AppTranslations\\AppTranslationValue',
};

export const AppTranslationValueObjectTypeStrict = {
  App_Domain_Common_Entities_AppTranslations_AppTranslationValue:
    'App\\Domain\\Common\\Entities\\AppTranslations\\AppTranslationValue',
} as const;

export type AppTranslationValue = {
  /**
   * The language code of the translation
   */
  languageCode?: string;
  /**
   * The way the translation has been created, either manually or automatically
   *  Allowed Values:
   * -   `MANUAL`: The translation has been created manually by humans
   * -   `AUTO`: The translation has been created automatically by an AI
   *
   */
  translationSource?: (typeof AppTranslationValueTranslationSource)[keyof typeof AppTranslationValueTranslationSource];
  /**
   * The id of the associated AppTranslationKey
   */
  appTranslationKeyId?: number;
  appTranslationKey?: AppTranslationKey;
  /**
   * The translated content
   */
  translation?: string;
  country?: Country;
  /**
   * Individual Country id for translation
   */
  countryId?: number;
  /**
   * The translation context, one or many for singular and plural differentiation (e.g. for Project, Projects depending on number)
   *  Allowed Values:
   * -   `ONE`
   * -   `MANY`
   *
   */
  context?: (typeof AppTranslationValueContext)[keyof typeof AppTranslationValueContext];
  /**
   * The writing style of the translation
   *  Allowed Values:
   * -   `FORMAL`
   * -   `INFORMAL`
   *
   */
  writingStyle?: (typeof AppTranslationValueWritingStyle)[keyof typeof AppTranslationValueWritingStyle];
  /**
   * Id of the Account who created the translation
   */
  adminAccountId?: number;
  adminAccount?: Account;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AppTranslationValueObjectType)[keyof typeof AppTranslationValueObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
