export const ListingServiceFeatureFlagSettingListingServiceType = {
  GOOGLE: 'GOOGLE',
  UBERALL: 'UBERALL',
  FACEBOOK: 'FACEBOOK',
  YEXT: 'YEXT',
  LINKEDIN: 'LINKEDIN',
  X: 'X',
};

export const ListingServiceFeatureFlagSettingListingServiceTypeStrict = {
  GOOGLE: 'GOOGLE',
  UBERALL: 'UBERALL',
  FACEBOOK: 'FACEBOOK',
  YEXT: 'YEXT',
  LINKEDIN: 'LINKEDIN',
  X: 'X',
} as const;

export const ListingServiceFeatureFlagSettingObjectType = {
  App_Domain_Presence_Entities_FeatureFlags_ListingServiceFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\FeatureFlags\\ListingServiceFeatureFlagSetting',
};

export const ListingServiceFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_FeatureFlags_ListingServiceFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\FeatureFlags\\ListingServiceFeatureFlagSetting',
} as const;

export type ListingServiceFeatureFlagSetting = {
  /**
   * The type of ListingService
   *  Allowed Values:
   * -   `GOOGLE`
   * -   `UBERALL`
   * -   `FACEBOOK`
   * -   `YEXT`
   * -   `LINKEDIN`
   * -   `X`
   *
   */
  listingServiceType?: (typeof ListingServiceFeatureFlagSettingListingServiceType)[keyof typeof ListingServiceFeatureFlagSettingListingServiceType];
  /**
   * If true, new subscriptions can be created on ListingService, especially relevant as a ListingService is phased out.
   */
  canCreateNewSubscriptions?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ListingServiceFeatureFlagSettingObjectType)[keyof typeof ListingServiceFeatureFlagSettingObjectType];
};
