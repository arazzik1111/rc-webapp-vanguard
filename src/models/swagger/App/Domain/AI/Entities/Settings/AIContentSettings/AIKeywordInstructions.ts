import { Keywords } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keywords';

export const AIKeywordInstructionsObjectType = {
  App_Domain_AI_Entities_Settings_AIContentSettings_AIKeywordInstructions:
    'App\\Domain\\AI\\Entities\\Settings\\AIContentSettings\\AIKeywordInstructions',
};

export const AIKeywordInstructionsObjectTypeStrict = {
  App_Domain_AI_Entities_Settings_AIContentSettings_AIKeywordInstructions:
    'App\\Domain\\AI\\Entities\\Settings\\AIContentSettings\\AIKeywordInstructions',
} as const;

export type AIKeywordInstructions = {
  keywordsToBeUsedInContent?: Keywords;
  keywordsDescribingBusiness?: Keywords;
  /**
   * The current number of keywords to consider mandatory
   */
  numberOfKeywordsToConsider?: number;
  /**
   * If true, setting is considered, otherwise it is omitted
   */
  considerInPrompt?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIKeywordInstructionsObjectType)[keyof typeof AIKeywordInstructionsObjectType];
};
