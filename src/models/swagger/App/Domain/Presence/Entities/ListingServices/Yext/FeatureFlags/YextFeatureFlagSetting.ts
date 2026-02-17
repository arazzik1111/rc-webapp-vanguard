import { YextPerCountryFeatureFlagSettings } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Yext/FeatureFlags/YextPerCountryFeatureFlagSettings';

export const YextFeatureFlagSettingListingServiceType = {
  YEXT: 'YEXT',
};

export const YextFeatureFlagSettingListingServiceTypeStrict = {
  YEXT: 'YEXT',
} as const;

export const YextFeatureFlagSettingObjectType = {
  App_Domain_Presence_Entities_ListingServices_Yext_FeatureFlags_YextFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Yext\\FeatureFlags\\YextFeatureFlagSetting',
};

export const YextFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Yext_FeatureFlags_YextFeatureFlagSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Yext\\FeatureFlags\\YextFeatureFlagSetting',
} as const;

export type YextFeatureFlagSetting = {
  /**
   * The Yext product plan
   *  Allowed Values:
   * -   `YEXT`
   *
   */
  listingServiceType?: (typeof YextFeatureFlagSettingListingServiceType)[keyof typeof YextFeatureFlagSettingListingServiceType];
  /**
   * Default Yext product plan setting
   */
  productPlan?: string;
  /**
   * Yext workspace
   */
  workspaceId?: string;
  perCountrySettings?: YextPerCountryFeatureFlagSettings;
  /**
   * Yext product plan for sandbox environment (for test Accounts)
   */
  sandboxProductPlan?: string;
  /**
   * Yext workspace for sandbox environment (for test Accounts)
   */
  sandboxWorkspaceId?: string;
  /**
   * If true, new subscriptions can be created on ListingService, especially relevant as a ListingService is phased out.
   */
  canCreateNewSubscriptions?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof YextFeatureFlagSettingObjectType)[keyof typeof YextFeatureFlagSettingObjectType];
};
