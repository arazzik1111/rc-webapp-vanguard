import { AppTranslationValue } from '@models/swagger/App/Domain/Common/Entities/AppTranslations/AppTranslationValue';

export const AppTranslationValuesObjectType = {
  App_Domain_Common_Entities_AppTranslations_AppTranslationValues:
    'App\\Domain\\Common\\Entities\\AppTranslations\\AppTranslationValues',
};

export const AppTranslationValuesObjectTypeStrict = {
  App_Domain_Common_Entities_AppTranslations_AppTranslationValues:
    'App\\Domain\\Common\\Entities\\AppTranslations\\AppTranslationValues',
} as const;

export type AppTranslationValues = {
  elements?: AppTranslationValue[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AppTranslationValuesObjectType)[keyof typeof AppTranslationValuesObjectType];
};
