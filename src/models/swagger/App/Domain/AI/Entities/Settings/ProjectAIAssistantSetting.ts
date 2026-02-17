import { TargetAudienceSetting } from '@models/swagger/App/Domain/AI/Entities/Settings/ProjectAIAssistantSetting/TargetAudienceSetting';
import { WritingStyleSetting } from '@models/swagger/App/Domain/AI/Entities/Settings/ProjectAIAssistantSetting/WritingStyleSetting';

export const ProjectAIAssistantSettingObjectType = {
  App_Domain_AI_Entities_Settings_ProjectAIAssistantSetting:
    'App\\Domain\\AI\\Entities\\Settings\\ProjectAIAssistantSetting',
};

export type ProjectAIAssistantSetting = {
  /**
   * The project's id
   */
  projectId?: number;
  writingStyleSettings?: WritingStyleSetting;
  targetAudience?: TargetAudienceSetting;
  /**
   * The internal identifier of the entity
   */
  id?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProjectAIAssistantSettingObjectType)[keyof typeof ProjectAIAssistantSettingObjectType];
};
