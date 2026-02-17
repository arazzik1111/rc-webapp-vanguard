import { UberallPerCountryFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Uberall/FeatureFlags/UberallPerCountryFeatureFlagSetting';

export const UberallPerCountryFeatureFlagSettingsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Uberall_FeatureFlags_UberallPerCountryFeatureFlagSettings:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Uberall\\FeatureFlags\\UberallPerCountryFeatureFlagSettings',
};

export const UberallPerCountryFeatureFlagSettingsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Uberall_FeatureFlags_UberallPerCountryFeatureFlagSettings:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Uberall\\FeatureFlags\\UberallPerCountryFeatureFlagSettings',
} as const;

export type UberallPerCountryFeatureFlagSettings = {
  elements?: UberallPerCountryFeatureFlagSetting[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof UberallPerCountryFeatureFlagSettingsObjectType)[keyof typeof UberallPerCountryFeatureFlagSettingsObjectType];
};
