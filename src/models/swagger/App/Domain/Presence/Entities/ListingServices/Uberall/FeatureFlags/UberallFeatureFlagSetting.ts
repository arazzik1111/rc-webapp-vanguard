import { UberallPerCountryFeatureFlagSettings } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Uberall/FeatureFlags/UberallPerCountryFeatureFlagSettings';

export const UberallFeatureFlagSettingListingServiceType = {
  UBERALL: 'UBERALL',
};

export const UberallFeatureFlagSettingListingServiceTypeStrict = {
  UBERALL: 'UBERALL',
} as const;

export const UberallFeatureFlagSettingObjectType = {
  App_Domain_Presence_Entities_ListingServices_Uberall_FeatureFlags_UberallFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Uberall\\FeatureFlags\\UberallFeatureFlagSetting',
};

export const UberallFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Uberall_FeatureFlags_UberallFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Uberall\\FeatureFlags\\UberallFeatureFlagSetting',
} as const;

export type UberallFeatureFlagSetting = {
  /**
   * The type of ListingService
   *  Allowed Values:
   * -   `UBERALL`
   *
   */
  listingServiceType?: (typeof UberallFeatureFlagSettingListingServiceType)[keyof typeof UberallFeatureFlagSettingListingServiceType];
  /**
   * default Uberall product plan
   */
  productPlan?: string;
  /**
   * Uberall ListingService is beeing phased out, creation of new Subscriptions is disabled.
   * Sync of ongoing subscriptions is though possible, until contract expires.
   */
  canCreateNewSubscriptions?: boolean;
  perCountrySettings?: UberallPerCountryFeatureFlagSettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof UberallFeatureFlagSettingObjectType)[keyof typeof UberallFeatureFlagSettingObjectType];
};
