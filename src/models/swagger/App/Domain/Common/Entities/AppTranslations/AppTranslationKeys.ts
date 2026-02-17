import { AppTranslationKey } from '@models/swagger/App/Domain/Common/Entities/AppTranslations/AppTranslationKey';

export const AppTranslationKeysObjectType = {
  App_Domain_Common_Entities_AppTranslations_AppTranslationKeys:
    'App\\Domain\\Common\\Entities\\AppTranslations\\AppTranslationKeys',
};

export const AppTranslationKeysObjectTypeStrict = {
  App_Domain_Common_Entities_AppTranslations_AppTranslationKeys:
    'App\\Domain\\Common\\Entities\\AppTranslations\\AppTranslationKeys',
} as const;

export type AppTranslationKeys = {
  elements?: AppTranslationKey[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AppTranslationKeysObjectType)[keyof typeof AppTranslationKeysObjectType];
};
