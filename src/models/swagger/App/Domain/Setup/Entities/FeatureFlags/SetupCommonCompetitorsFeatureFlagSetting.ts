export const SetupCommonCompetitorsFeatureFlagSettingObjectType = {
  App_Domain_Setup_Entities_FeatureFlags_SetupCommonCompetitorsFeatureFlagSetting:
    'App\\Domain\\Setup\\Entities\\FeatureFlags\\SetupCommonCompetitorsFeatureFlagSetting',
};

export const SetupCommonCompetitorsFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Setup_Entities_FeatureFlags_SetupCommonCompetitorsFeatureFlagSetting:
    'App\\Domain\\Setup\\Entities\\FeatureFlags\\SetupCommonCompetitorsFeatureFlagSetting',
} as const;

export type SetupCommonCompetitorsFeatureFlagSetting = {
  /**
   * The number of competitors permitted to add
   */
  competitorsAvailable?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SetupCommonCompetitorsFeatureFlagSettingObjectType)[keyof typeof SetupCommonCompetitorsFeatureFlagSettingObjectType];
};
