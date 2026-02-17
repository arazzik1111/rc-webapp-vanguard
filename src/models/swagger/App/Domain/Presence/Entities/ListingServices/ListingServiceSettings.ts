import { FacebookFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/FeatureFlags/FacebookFeatureFlagSetting';
import { GoogleFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/FeatureFlags/GoogleFeatureFlagSetting';
import { LinkedInFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/FeatureFlags/LinkedInFeatureFlagSetting';
import { UberallFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Uberall/FeatureFlags/UberallFeatureFlagSetting';
import { XFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/X/FeatureFlags/XFeatureFlagSetting';
import { YextFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Yext/FeatureFlags/YextFeatureFlagSetting';

export const ListingServiceSettingsObjectType = {
  App_Domain_Presence_Entities_ListingServices_ListingServiceSettings:
    'App\\Domain\\Presence\\Entities\\ListingServices\\ListingServiceSettings',
};

export const ListingServiceSettingsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_ListingServiceSettings:
    'App\\Domain\\Presence\\Entities\\ListingServices\\ListingServiceSettings',
} as const;

export type ListingServiceSettings = {
  /**
   * If true, a full listing service is included in features of Account / Project
   */
  hasFullListingService?: boolean;
  elements?: Array<
    | GoogleFeatureFlagSetting
    | UberallFeatureFlagSetting
    | YextFeatureFlagSetting
    | FacebookFeatureFlagSetting
    | XFeatureFlagSetting
    | LinkedInFeatureFlagSetting
  >;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ListingServiceSettingsObjectType)[keyof typeof ListingServiceSettingsObjectType];
};
