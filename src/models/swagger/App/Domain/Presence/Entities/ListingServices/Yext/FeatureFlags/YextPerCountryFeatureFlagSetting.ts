export const YextPerCountryFeatureFlagSettingObjectType = {
  App_Domain_Presence_Entities_ListingServices_Yext_FeatureFlags_YextPerCountryFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Yext\\FeatureFlags\\YextPerCountryFeatureFlagSetting',
};

export const YextPerCountryFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Yext_FeatureFlags_YextPerCountryFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Yext\\FeatureFlags\\YextPerCountryFeatureFlagSetting',
} as const;

export type YextPerCountryFeatureFlagSetting = {
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
  objectType: (typeof YextPerCountryFeatureFlagSettingObjectType)[keyof typeof YextPerCountryFeatureFlagSettingObjectType];
};
