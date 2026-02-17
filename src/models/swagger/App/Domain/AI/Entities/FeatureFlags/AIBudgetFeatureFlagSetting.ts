export const AIBudgetFeatureFlagSettingObjectType = {
  App_Domain_AI_Entities_FeatureFlags_AIBudgetFeatureFlagSetting:
    'App\\Domain\\AI\\Entities\\FeatureFlags\\AIBudgetFeatureFlagSetting',
};

export const AIBudgetFeatureFlagSettingObjectTypeStrict = {
  App_Domain_AI_Entities_FeatureFlags_AIBudgetFeatureFlagSetting:
    'App\\Domain\\AI\\Entities\\FeatureFlags\\AIBudgetFeatureFlagSetting',
} as const;

export type AIBudgetFeatureFlagSetting = {
  /**
   * The amount of monthly available budget for AI operations in USD
   */
  monthlyAIBudgetPerProjectInUSD?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIBudgetFeatureFlagSettingObjectType)[keyof typeof AIBudgetFeatureFlagSettingObjectType];
};
