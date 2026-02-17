import { AdsGoogleCampaignBudgetFeatureFlagSetting } from '@models/swagger/App/Domain/Ads/Entities/FeatureFlags/AdsGoogleCampaignBudgetFeatureFlagSetting';
import { MetaBoostCampaignBudgetFeatureFlagSetting } from '@models/swagger/App/Domain/Ads/Entities/FeatureFlags/MetaBoostCampaignBudgetFeatureFlagSetting';
import { ListingServiceFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/FeatureFlags/ListingServiceFeatureFlagSetting';
import { FacebookFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/FeatureFlags/FacebookFeatureFlagSetting';
import { GoogleFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/FeatureFlags/GoogleFeatureFlagSetting';
import { LinkedInFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/FeatureFlags/LinkedInFeatureFlagSetting';
import { UberallFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Uberall/FeatureFlags/UberallFeatureFlagSetting';
import { XFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/X/FeatureFlags/XFeatureFlagSetting';
import { YextFeatureFlagSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Yext/FeatureFlags/YextFeatureFlagSetting';
import { FeatureFlag } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlags/FeatureFlag';
import { FeatureFlagsBundle } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlagsBundles/FeatureFlagsBundle';
import { RadarFeedFeatureFlagSetting } from '@models/swagger/App/Domain/Radar/Entities/FeatureFlags/RadarFeedFeatureFlagSetting';
import { SeoRankingsFeatureFlagSetting } from '@models/swagger/App/Domain/Seo/Entities/FeatureFlags/SeoRankingsFeatureFlagSetting';
import { SetupCommonCompetitorsFeatureFlagSetting } from '@models/swagger/App/Domain/Setup/Entities/FeatureFlags/SetupCommonCompetitorsFeatureFlagSetting';
import { SetupCommonFeatureFlagSetting } from '@models/swagger/App/Domain/Setup/Entities/FeatureFlags/SetupCommonFeatureFlagSetting';
import { SetupCommonKeywordsFeatureFlagSetting } from '@models/swagger/App/Domain/Setup/Entities/FeatureFlags/SetupCommonKeywordsFeatureFlagSetting';
import { SetupCommonLocationsFeatureFlagSetting } from '@models/swagger/App/Domain/Setup/Entities/FeatureFlags/SetupCommonLocationsFeatureFlagSetting';

export const FeatureFlagsBundleFeatureFlagObjectType = {
  App_Domain_Product_Entities_Products_FeatureFlagsBundles_FeatureFlagsBundleFeatureFlag:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlagsBundles\\FeatureFlagsBundleFeatureFlag',
};

export const FeatureFlagsBundleFeatureFlagObjectTypeStrict = {
  App_Domain_Product_Entities_Products_FeatureFlagsBundles_FeatureFlagsBundleFeatureFlag:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlagsBundles\\FeatureFlagsBundleFeatureFlag',
} as const;

export type FeatureFlagsBundleFeatureFlag = {
  /**
   * The id of the associated FeatureFlag
   */
  featureFlagId?: number;
  featureFlag?: FeatureFlag;
  /**
   * The id of the associated FeatureFlagsBundle
   */
  featureFlagsBundleId?: number;
  featureFlagsBundle?: FeatureFlagsBundle;
  /**
   * Wheather the FeatureFlag is available or not, overrides available state from FeatureFlag
   */
  available?: boolean;
  setting?:
    | AdsGoogleCampaignBudgetFeatureFlagSetting
    | MetaBoostCampaignBudgetFeatureFlagSetting
    | ListingServiceFeatureFlagSetting
    | FacebookFeatureFlagSetting
    | GoogleFeatureFlagSetting
    | UberallFeatureFlagSetting
    | YextFeatureFlagSetting
    | LinkedInFeatureFlagSetting
    | XFeatureFlagSetting
    | RadarFeedFeatureFlagSetting
    | SeoRankingsFeatureFlagSetting
    | SetupCommonCompetitorsFeatureFlagSetting
    | SetupCommonFeatureFlagSetting
    | SetupCommonKeywordsFeatureFlagSetting
    | SetupCommonLocationsFeatureFlagSetting;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FeatureFlagsBundleFeatureFlagObjectType)[keyof typeof FeatureFlagsBundleFeatureFlagObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
