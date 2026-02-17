export const AgeRangeObjectType = {
  App_Domain_AI_Entities_Settings_AIContentSettings_AgeRange:
    'App\\Domain\\AI\\Entities\\Settings\\AIContentSettings\\AgeRange',
};

export const AgeRangeObjectTypeStrict = {
  App_Domain_AI_Entities_Settings_AIContentSettings_AgeRange:
    'App\\Domain\\AI\\Entities\\Settings\\AIContentSettings\\AgeRange',
} as const;

export type AgeRange = {
  /**
   * The minimum age used for range
   */
  minAge?: number;
  /**
   * The maximum age used for range
   */
  maxAge?: number;
  /**
   * If true, setting is considered, otherwise it is omitted
   */
  considerInPrompt?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AgeRangeObjectType)[keyof typeof AgeRangeObjectType];
};
