import { AgeRange } from '@models/swagger/App/Domain/AI/Entities/Settings/ProjectAIAssistantSetting/AgeRange';

export const TargetAudienceSettingObjectType = {
  App_Domain_AI_Entities_Settings_ProjectAIAssistantSetting_TargetAudienceSetting:
    'App\\Domain\\AI\\Entities\\Settings\\ProjectAIAssistantSetting\\TargetAudienceSetting',
};

export type TargetAudienceSetting = {
  ageRange?: AgeRange;
  /**
   * Additional text that better describes the target audience
   */
  audienceDescription?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof TargetAudienceSettingObjectType)[keyof typeof TargetAudienceSettingObjectType];
};
