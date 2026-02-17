export const UberallPerCountryFeatureFlagSettingObjectType = {
  App_Domain_Presence_Entities_ListingServices_Uberall_FeatureFlags_UberallPerCountryFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Uberall\\FeatureFlags\\UberallPerCountryFeatureFlagSetting',
};

export const UberallPerCountryFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Uberall_FeatureFlags_UberallPerCountryFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Uberall\\FeatureFlags\\UberallPerCountryFeatureFlagSetting',
} as const;

export type UberallPerCountryFeatureFlagSetting = {
  /**
   * The the product plan for the particular Country
   */
  productPlan?: string;
  /**
   * The short code for the country, e.g. DE
   */
  countryShortCode?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof UberallPerCountryFeatureFlagSettingObjectType)[keyof typeof UberallPerCountryFeatureFlagSettingObjectType];
};
