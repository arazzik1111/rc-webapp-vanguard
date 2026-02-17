export const SetupCommonKeywordsFeatureFlagSettingObjectType = {
  App_Domain_Setup_Entities_FeatureFlags_SetupCommonKeywordsFeatureFlagSetting:
    'App\\Domain\\Setup\\Entities\\FeatureFlags\\SetupCommonKeywordsFeatureFlagSetting',
};

export const SetupCommonKeywordsFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Setup_Entities_FeatureFlags_SetupCommonKeywordsFeatureFlagSetting:
    'App\\Domain\\Setup\\Entities\\FeatureFlags\\SetupCommonKeywordsFeatureFlagSetting',
} as const;

export type SetupCommonKeywordsFeatureFlagSetting = {
  /**
   * The number of Keywords permitted to add
   */
  keywordsAvailable?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SetupCommonKeywordsFeatureFlagSettingObjectType)[keyof typeof SetupCommonKeywordsFeatureFlagSettingObjectType];
};
