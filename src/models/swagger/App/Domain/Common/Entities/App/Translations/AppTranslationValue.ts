import { ChangeHistory } from '@models/swagger/App/Domain/Base/Entities/ChangeHistory/ChangeHistory';
import { Account } from '@models/swagger/App/Domain/Common/Entities/Accounts/Account';
import { AppTranslationKey } from '@models/swagger/App/Domain/Common/Entities/App/Translations/AppTranslationKey';
import { Country } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/Country';

export const AppTranslationValueTranslationMode = {
  MANUAL: 'MANUAL',
  AUTOMATIC: 'AUTOMATIC',
};

export const AppTranslationValueContext = {
  ONE: 'ONE',
  MANY: 'MANY',
};

export const AppTranslationValueWritingStyle = {
  FORMAL: 'FORMAL',
  INFORMAL: 'INFORMAL',
};

export const AppTranslationValueObjectType = {
  App_Domain_Common_Entities_App_Translations_AppTranslationValue:
    'App\\Domain\\Common\\Entities\\App\\Translations\\AppTranslationValue',
};

export type AppTranslationValue = {
  /**
   * The language code of the translation
   */
  languageCode?: string;
  /**
   * The way the translation has been created, either manually or automatically
   * Allowed Values:
   * -   `MANUAL`: The translation has been created manually by humans
   * -   `AUTOMATIC`: The translation has been created automatically by an AI
   *
   */
  translationMode?: (typeof AppTranslationValueTranslationMode)[keyof typeof AppTranslationValueTranslationMode];
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
   * Allowed Values:
   * -   `ONE`: The context of the translation is singular
   * -   `MANY`: The context of the translation is plural
   *
   */
  context?: (typeof AppTranslationValueContext)[keyof typeof AppTranslationValueContext];
  /**
   * The writing style of the translation
   * Allowed Values:
   * -   `FORMAL`: Formal writing style
   * -   `INFORMAL`: Informal writing style
   *
   */
  writingStyle?: (typeof AppTranslationValueWritingStyle)[keyof typeof AppTranslationValueWritingStyle];
  /**
   * Id of the Account who created the translation
   */
  adminAccountId?: number;
  adminAccount?: Account;
  /**
   * The internal identifier of the entity
   */
  id?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AppTranslationValueObjectType)[keyof typeof AppTranslationValueObjectType];
  changeHistory?: ChangeHistory;
};
