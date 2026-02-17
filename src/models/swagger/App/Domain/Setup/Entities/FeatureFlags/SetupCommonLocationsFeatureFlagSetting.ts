export const SetupCommonLocationsFeatureFlagSettingObjectType = {
  App_Domain_Setup_Entities_FeatureFlags_SetupCommonLocationsFeatureFlagSetting:
    'App\\Domain\\Setup\\Entities\\FeatureFlags\\SetupCommonLocationsFeatureFlagSetting',
};

export const SetupCommonLocationsFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Setup_Entities_FeatureFlags_SetupCommonLocationsFeatureFlagSetting:
    'App\\Domain\\Setup\\Entities\\FeatureFlags\\SetupCommonLocationsFeatureFlagSetting',
} as const;

export type SetupCommonLocationsFeatureFlagSetting = {
  /**
   * The number of Locations permitted to add
   */
  locationsAvailable?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SetupCommonLocationsFeatureFlagSettingObjectType)[keyof typeof SetupCommonLocationsFeatureFlagSettingObjectType];
};
