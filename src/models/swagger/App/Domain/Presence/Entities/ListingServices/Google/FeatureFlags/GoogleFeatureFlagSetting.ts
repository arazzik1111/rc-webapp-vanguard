export const GoogleFeatureFlagSettingListingServiceType = {
  GOOGLE: 'GOOGLE',
};

export const GoogleFeatureFlagSettingListingServiceTypeStrict = {
  GOOGLE: 'GOOGLE',
} as const;

export const GoogleFeatureFlagSettingObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_FeatureFlags_GoogleFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\FeatureFlags\\GoogleFeatureFlagSetting',
};

export const GoogleFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_FeatureFlags_GoogleFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\FeatureFlags\\GoogleFeatureFlagSetting',
} as const;

export type GoogleFeatureFlagSetting = {
  /**
   * The type of ListingService
   *  Allowed Values:
   * -   `GOOGLE`
   *
   */
  listingServiceType?: (typeof GoogleFeatureFlagSettingListingServiceType)[keyof typeof GoogleFeatureFlagSettingListingServiceType];
  /**
   * If true, new subscriptions can be created on ListingService, especially relevant as a ListingService is phased out.
   */
  canCreateNewSubscriptions?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleFeatureFlagSettingObjectType)[keyof typeof GoogleFeatureFlagSettingObjectType];
};
