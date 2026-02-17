import { AIContentSettings } from '@models/swagger/App/Domain/AI/Entities/Settings/AIContentSettings/AIContentSettings';
import { AISocialMediaContentSettings } from '@models/swagger/App/Domain/AI/Entities/Settings/AIEngagementSettings/AISocialMediaContentSettings';
import { AIReviewsSettings } from '@models/swagger/App/Domain/AI/Entities/Settings/AIReviewsSettings/AIReviewsSettings';

export const AIAssistantSettingObjectType = {
  App_Domain_AI_Entities_Settings_AIAssistantSetting: 'App\\Domain\\AI\\Entities\\Settings\\AIAssistantSetting',
};

export const AIAssistantSettingObjectTypeStrict = {
  App_Domain_AI_Entities_Settings_AIAssistantSetting: 'App\\Domain\\AI\\Entities\\Settings\\AIAssistantSetting',
} as const;

export type AIAssistantSetting = {
  /**
   * The project's id
   */
  projectId?: number;
  aiContentSettings?: AIContentSettings;
  aiReviewsSettings?: AIReviewsSettings;
  aiSocialMediaContentSettings?: AISocialMediaContentSettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIAssistantSettingObjectType)[keyof typeof AIAssistantSettingObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
