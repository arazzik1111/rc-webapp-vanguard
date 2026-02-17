export const LinkedInFeatureFlagSettingListingServiceType = {
  LINKEDIN: 'LINKEDIN',
};

export const LinkedInFeatureFlagSettingListingServiceTypeStrict = {
  LINKEDIN: 'LINKEDIN',
} as const;

export const LinkedInFeatureFlagSettingObjectType = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_FeatureFlags_LinkedInFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\FeatureFlags\\LinkedInFeatureFlagSetting',
};

export const LinkedInFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_FeatureFlags_LinkedInFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\FeatureFlags\\LinkedInFeatureFlagSetting',
} as const;

export type LinkedInFeatureFlagSetting = {
  /**
   * The type of ListingService
   *  Allowed Values:
   * -   `LINKEDIN`
   *
   */
  listingServiceType?: (typeof LinkedInFeatureFlagSettingListingServiceType)[keyof typeof LinkedInFeatureFlagSettingListingServiceType];
  /**
   * If true, new subscriptions can be created on ListingService, especially relevant as a ListingService is phased out.
   */
  canCreateNewSubscriptions?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LinkedInFeatureFlagSettingObjectType)[keyof typeof LinkedInFeatureFlagSettingObjectType];
};
