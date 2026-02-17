import { AppTranslationKey } from '@models/swagger/App/Domain/Common/Entities/App/Translations/AppTranslationKey';

export const AppTranslationKeysObjectType = {
  App_Domain_Common_Entities_App_Translations_AppTranslationKeys:
    'App\\Domain\\Common\\Entities\\App\\Translations\\AppTranslationKeys',
};

export type AppTranslationKeys = {
  elements?: AppTranslationKey[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AppTranslationKeysObjectType)[keyof typeof AppTranslationKeysObjectType];
};
