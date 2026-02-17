import { AppTranslationKeyUnderstandability } from '@models/swagger/App/Domain/Common/Entities/AppTranslations/AppTranslationKeyUnderstandability';
import { AppTranslationValues } from '@models/swagger/App/Domain/Common/Entities/AppTranslations/AppTranslationValues';

export const AppTranslationKeyScope = {
  JS: 'JS',
  PHP: 'PHP',
};

export const AppTranslationKeyScopeStrict = {
  JS: 'JS',
  PHP: 'PHP',
} as const;

export const AppTranslationKeySource = {
  AUTO: 'AUTO',
  MERGED: 'MERGED',
  MANUAL: 'MANUAL',
};

export const AppTranslationKeySourceStrict = {
  AUTO: 'AUTO',
  MERGED: 'MERGED',
  MANUAL: 'MANUAL',
} as const;

export const AppTranslationKeyObjectType = {
  App_Domain_Common_Entities_AppTranslations_AppTranslationKey:
    'App\\Domain\\Common\\Entities\\AppTranslations\\AppTranslationKey',
};

export const AppTranslationKeyObjectTypeStrict = {
  App_Domain_Common_Entities_AppTranslations_AppTranslationKey:
    'App\\Domain\\Common\\Entities\\AppTranslations\\AppTranslationKey',
} as const;

export type AppTranslationKey = {
  /**
   * Translation key which serves as basis for translations
   */
  key?: string;
  /**
   * The base or template text that serves as the source for translations.
   * This text is used as a placeholder or guide for translating the associated key into different languages.
   * This property is particularly useful for keys that do not contain all the necessary information for translation.
   * By providing a template text, we can ensure that the translations are consistent and accurate across all languages.
   * It is only required on special keys that do not contain the content required to perform a translation
   */
  translationTemplate?: string;
  /**
   * Provides information about the context of the translation and is taken into account on autotranslations.
   * It is especially usefull if the key could be ambiguous and misunderstood without the hint
   */
  translationHint?: string;
  /**
   * The scope in which the translation is used, e.g. PHP views or JS / Typescript
   *  Allowed Values:
   * -   `JS`: The translation key is targeted to be used in scope of JS/TypeScript
   * -   `PHP`: The translation key is targeted to be used in scope of PHP views
   *
   */
  scope?: (typeof AppTranslationKeyScope)[keyof typeof AppTranslationKeyScope];
  /**
   * If true, the main subject of the translation key requires a context, means one and many
   */
  requiresContext?: boolean;
  /**
   * If true, this key shall not be translated automatically
   */
  doNotTranslateAutomatically?: boolean;
  /**
   * If true, this key should be re-translated
   */
  reTranslate?: boolean;
  appTranslationValues?: AppTranslationValues;
  /**
   * The source states if the key was created manually, automatically or if it was been merged from another scope
   *  Allowed Values:
   * -   `AUTO`: The translation key was created automatically
   * -   `MERGED`: The translation key was merged from other scope, e.g. PHP key was merged to JS
   * -   `MANUAL`: The translation key was created manually
   *
   */
  source?: (typeof AppTranslationKeySource)[keyof typeof AppTranslationKeySource];
  appTranslationKeyUnderstandability?: AppTranslationKeyUnderstandability;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AppTranslationKeyObjectType)[keyof typeof AppTranslationKeyObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
