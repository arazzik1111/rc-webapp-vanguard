export const AgeRangeObjectType = {
  App_Domain_AI_Entities_Settings_ProjectAIAssistantSetting_AgeRange:
    'App\\Domain\\AI\\Entities\\Settings\\ProjectAIAssistantSetting\\AgeRange',
};

export type AgeRange = {
  minAge?: number;
  maxAge?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AgeRangeObjectType)[keyof typeof AgeRangeObjectType];
};
