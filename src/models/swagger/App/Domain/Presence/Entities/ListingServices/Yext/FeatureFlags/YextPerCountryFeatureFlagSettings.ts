import { YextPerCountryFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Yext/FeatureFlags/YextPerCountryFeatureFlagSetting';

export const YextPerCountryFeatureFlagSettingsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Yext_FeatureFlags_YextPerCountryFeatureFlagSettings:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Yext\\FeatureFlags\\YextPerCountryFeatureFlagSettings',
};

export const YextPerCountryFeatureFlagSettingsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Yext_FeatureFlags_YextPerCountryFeatureFlagSettings:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Yext\\FeatureFlags\\YextPerCountryFeatureFlagSettings',
} as const;

export type YextPerCountryFeatureFlagSettings = {
  elements?: YextPerCountryFeatureFlagSetting[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof YextPerCountryFeatureFlagSettingsObjectType)[keyof typeof YextPerCountryFeatureFlagSettingsObjectType];
};
