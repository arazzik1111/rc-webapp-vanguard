import { AIBudgetFeatureFlagSetting } from '@models/swagger/App/Domain/AI/Entities/FeatureFlags/AIBudgetFeatureFlagSetting';

export const AIBudgetSettingObjectType = {
  App_Domain_AI_Entities_Settings_AIBudgetSetting: 'App\\Domain\\AI\\Entities\\Settings\\AIBudgetSetting',
};

export const AIBudgetSettingObjectTypeStrict = {
  App_Domain_AI_Entities_Settings_AIBudgetSetting: 'App\\Domain\\AI\\Entities\\Settings\\AIBudgetSetting',
} as const;

export type AIBudgetSetting = {
  aiBudgetFeatureFlagSetting?: AIBudgetFeatureFlagSetting;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIBudgetSettingObjectType)[keyof typeof AIBudgetSettingObjectType];
};
