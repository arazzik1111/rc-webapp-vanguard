import { AIBusinessContext } from '@models/swagger/App/Domain/AI/Entities/Settings/AIContentSettings/AIBusinessContext';
import { AIKeywordInstructions } from '@models/swagger/App/Domain/AI/Entities/Settings/AIContentSettings/AIKeywordInstructions';
import { AITargetAudience } from '@models/swagger/App/Domain/AI/Entities/Settings/AIContentSettings/AITargetAudience';
import { AIWritingStyle } from '@models/swagger/App/Domain/AI/Entities/Settings/AIContentSettings/AIWritingStyle';

export const AIContentSettingsObjectType = {
  App_Domain_AI_Entities_Settings_AIContentSettings_AIContentSettings:
    'App\\Domain\\AI\\Entities\\Settings\\AIContentSettings\\AIContentSettings',
};

export const AIContentSettingsObjectTypeStrict = {
  App_Domain_AI_Entities_Settings_AIContentSettings_AIContentSettings:
    'App\\Domain\\AI\\Entities\\Settings\\AIContentSettings\\AIContentSettings',
} as const;

export type AIContentSettings = {
  businessContext?: AIBusinessContext;
  keywordInstructions?: AIKeywordInstructions;
  targetAudience?: AITargetAudience;
  writingStyle?: AIWritingStyle;
  /**
   * If true, setting is considered, otherwise it is omitted
   */
  considerInPrompt?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIContentSettingsObjectType)[keyof typeof AIContentSettingsObjectType];
};
