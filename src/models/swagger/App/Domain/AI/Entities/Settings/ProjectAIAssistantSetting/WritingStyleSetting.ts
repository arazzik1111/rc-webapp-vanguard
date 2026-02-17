export const WritingStyleSettingTone = {
  ADAPTIVE: 'ADAPTIVE',
  FORMAL: 'FORMAL',
  PROFESSIONAL: 'PROFESSIONAL',
  INFORMATIVE: 'INFORMATIVE',
  FRIENDLY: 'FRIENDLY',
  BOLD: 'BOLD',
  WITTY: 'WITTY',
  ADVENTUROUS: 'ADVENTUROUS',
  PERSUASIVE: 'PERSUASIVE',
};

export const WritingStyleSettingCreativity = {
  BALANCED: 'BALANCED',
  CREATIVE: 'CREATIVE',
  SUCCINCT: 'SUCCINCT',
};

export const WritingStyleSettingObjectType = {
  App_Domain_AI_Entities_Settings_ProjectAIAssistantSetting_WritingStyleSetting:
    'App\\Domain\\AI\\Entities\\Settings\\ProjectAIAssistantSetting\\WritingStyleSetting',
};

export type WritingStyleSetting = {
  /**
   * The language which the model will use for generating text
   */
  writingLanguage?: string;
  /**
   * The tone in which the text is generated
   * Allowed Values:
   * -   `ADAPTIVE`: When the response tone is adaptive, the Model adapts the response tone according to the user input tone for the generated text
   * -   `FORMAL`: Formal response tone for the generated text
   * -   `PROFESSIONAL`: Professional response tone for the generated text
   * -   `INFORMATIVE`: Informative response tone for the generated text
   * -   `FRIENDLY`: Friendly response tone for the generated text
   * -   `BOLD`: Bold response tone for the generated text
   * -   `WITTY`: Witty response tone for the generated text
   * -   `ADVENTUROUS`: Adventurous response tone for the generated text
   * -   `PERSUASIVE`: Persuasive response tone for the generated text
   *
   */
  tone?: (typeof WritingStyleSettingTone)[keyof typeof WritingStyleSettingTone];
  /**
   *
   * Allowed Values:
   * -   `BALANCED`: The Model will use a more balanced approach in generating text
   * -   `CREATIVE`: The Model will use a more creative approach in generating text
   * -   `SUCCINCT`: The Model will use a more succinct approach in generating text
   *
   */
  creativity?: (typeof WritingStyleSettingCreativity)[keyof typeof WritingStyleSettingCreativity];
  genderNeutralWriting?: boolean;
  genderNeutralWritingConfiguration?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof WritingStyleSettingObjectType)[keyof typeof WritingStyleSettingObjectType];
};
