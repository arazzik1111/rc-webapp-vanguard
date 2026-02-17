export const SetupCommonFeatureFlagSettingObjectType = {
  App_Domain_Setup_Entities_FeatureFlags_SetupCommonFeatureFlagSetting:
    'App\\Domain\\Setup\\Entities\\FeatureFlags\\SetupCommonFeatureFlagSetting',
};

export const SetupCommonFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Setup_Entities_FeatureFlags_SetupCommonFeatureFlagSetting:
    'App\\Domain\\Setup\\Entities\\FeatureFlags\\SetupCommonFeatureFlagSetting',
} as const;

export type SetupCommonFeatureFlagSetting = {
  /**
   * whitelist of allowed country short codes to select from during setup
   */
  allowedCountryShortCodes?: string[];
  /**
   * if true, country selection will be disabled once a country is selected for a project and setup is completed
   */
  lockCountrySelectionAfterSetup?: boolean;
  /**
   * if true, prefilling of projects through reseller API is permitted
   */
  allowProjectPrefill?: boolean;
  /**
   * a list of setups steps to hide
   */
  stepsToHide?: string[];
  /**
   * list of upgrade types to block all upsells
   */
  notAllowAnyUpsellTriggersForType?: string[];
  /**
   * if true user is allowed to change domain
   */
  allowUserToChangeDomain?: boolean;
  /**
   * if true user is not allowed to delete project
   */
  restrictUserToDeleteProject?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SetupCommonFeatureFlagSettingObjectType)[keyof typeof SetupCommonFeatureFlagSettingObjectType];
};
