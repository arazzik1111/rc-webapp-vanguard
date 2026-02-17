export const XFeatureFlagSettingListingServiceType = {
  X: 'X',
};

export const XFeatureFlagSettingListingServiceTypeStrict = {
  X: 'X',
} as const;

export const XFeatureFlagSettingObjectType = {
  App_Domain_Presence_Entities_ListingServices_X_FeatureFlags_XFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\FeatureFlags\\XFeatureFlagSetting',
};

export const XFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_X_FeatureFlags_XFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\FeatureFlags\\XFeatureFlagSetting',
} as const;

export type XFeatureFlagSetting = {
  /**
   * The type of ListingService
   *  Allowed Values:
   * -   `X`
   *
   */
  listingServiceType?: (typeof XFeatureFlagSettingListingServiceType)[keyof typeof XFeatureFlagSettingListingServiceType];
  /**
   * If true, new subscriptions can be created on ListingService, especially relevant as a ListingService is phased out.
   */
  canCreateNewSubscriptions?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof XFeatureFlagSettingObjectType)[keyof typeof XFeatureFlagSettingObjectType];
};
