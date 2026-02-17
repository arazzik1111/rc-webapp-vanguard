export const FacebookFeatureFlagSettingListingServiceType = {
  FACEBOOK: 'FACEBOOK',
};

export const FacebookFeatureFlagSettingListingServiceTypeStrict = {
  FACEBOOK: 'FACEBOOK',
} as const;

export const FacebookFeatureFlagSettingObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_FeatureFlags_FacebookFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\FeatureFlags\\FacebookFeatureFlagSetting',
};

export const FacebookFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_FeatureFlags_FacebookFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\FeatureFlags\\FacebookFeatureFlagSetting',
} as const;

export type FacebookFeatureFlagSetting = {
  /**
   * The type of ListingService
   *  Allowed Values:
   * -   `FACEBOOK`
   *
   */
  listingServiceType?: (typeof FacebookFeatureFlagSettingListingServiceType)[keyof typeof FacebookFeatureFlagSettingListingServiceType];
  /**
   * If true, new subscriptions can be created on ListingService, especially relevant as a ListingService is phased out.
   */
  canCreateNewSubscriptions?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FacebookFeatureFlagSettingObjectType)[keyof typeof FacebookFeatureFlagSettingObjectType];
};
