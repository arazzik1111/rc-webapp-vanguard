export const TranslationsSettingWritingStyle = {
  FORMAL: 'FORMAL',
  INFORMAL: 'INFORMAL',
};

export const TranslationsSettingWritingStyleStrict = {
  FORMAL: 'FORMAL',
  INFORMAL: 'INFORMAL',
} as const;

export const TranslationsSettingObjectType = {
  App_Domain_Common_Entities_Settings_TranslationsSetting:
    'App\\Domain\\Common\\Entities\\Settings\\TranslationsSetting',
};

export const TranslationsSettingObjectTypeStrict = {
  App_Domain_Common_Entities_Settings_TranslationsSetting:
    'App\\Domain\\Common\\Entities\\Settings\\TranslationsSetting',
} as const;

export type TranslationsSetting = {
  /**
   *
   *  Allowed Values:
   * -   `FORMAL`
   * -   `INFORMAL`
   *
   */
  writingStyle?: (typeof TranslationsSettingWritingStyle)[keyof typeof TranslationsSettingWritingStyle];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof TranslationsSettingObjectType)[keyof typeof TranslationsSettingObjectType];
};
