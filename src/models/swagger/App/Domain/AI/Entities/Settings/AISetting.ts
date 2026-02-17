import { AIBudgetFeatureFlagSetting } from '@models/swagger/App/Domain/AI/Entities/FeatureFlags/AIBudgetFeatureFlagSetting';

export const AISettingObjectType = {
  App_Domain_AI_Entities_Settings_AISetting: 'App\\Domain\\AI\\Entities\\Settings\\AISetting',
};

export type AISetting = {
  aiBudgetFeatureFlagSetting?: AIBudgetFeatureFlagSetting;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AISettingObjectType)[keyof typeof AISettingObjectType];
};
