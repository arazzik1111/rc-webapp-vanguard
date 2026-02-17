import { AppTranslationValue } from '@models/swagger/App/Domain/Common/Entities/App/Translations/AppTranslationValue';

export const AppTranslationValuesObjectType = {
  App_Domain_Common_Entities_App_Translations_AppTranslationValues:
    'App\\Domain\\Common\\Entities\\App\\Translations\\AppTranslationValues',
};

export type AppTranslationValues = {
  elements?: AppTranslationValue[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AppTranslationValuesObjectType)[keyof typeof AppTranslationValuesObjectType];
};
