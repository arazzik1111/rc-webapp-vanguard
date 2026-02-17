import { AdAccount } from '@models/swagger/App/Domain/Ads/Entities/AdAccount';
import { BoostInsight } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostInsight';
import { InsightDemographics } from '@models/swagger/App/Domain/Presence/Entities/Locations/Engagement/SocialMediaInsights/InsightDemographics';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const BoostInsightsLevel = {
  account: 'account',
  campaign: 'campaign',
  adset: 'adset',
  ad: 'ad',
};

export const BoostInsightsLevelStrict = {
  account: 'account',
  campaign: 'campaign',
  adset: 'adset',
  ad: 'ad',
} as const;

export const BoostInsightsObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostInsights:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostInsights',
};

export const BoostInsightsObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostInsights:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostInsights',
} as const;

export type BoostInsights = {
  account?: AdAccount;
  /**
   * The level of the Insights. Supports account, campaign, adset and ad
   *  Allowed Values:
   * -   `account`: Used for retrieving data from the entire Account
   * -   `campaign`: Used for retrieving data from a Campaign
   * -   `adset`: Used for retrieving data from an Ad Set
   * -   `ad`: Used for retrieving data from an Ad
   *
   */
  level?: (typeof BoostInsightsLevel)[keyof typeof BoostInsightsLevel];
  /**
   * The start date for your data. This is controlled by the date range you've selected for your reporting view.
   */
  since?: string;
  /**
   * The end date for your data. This is controlled by the date range you've selected for your reporting view.
   */
  until?: string;
  /**
   * The fields being retrieved from Meta. Defined in Argus Class and Boost Insights Config
   */
  fields?: string;
  /**
   * The period between two insights in days. 1 = 1 day, etc. Default = returns one insight with total values per Level Item
   */
  timeIncrement?: string;
  /**
   * Used for retrieving a specific Level Item. Not usable with Level: account
   */
  queryId?: string;
  insightsTotal?: BoostInsight;
  elements?: Array<BoostInsight | InsightDemographics>;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostInsightsObjectType)[keyof typeof BoostInsightsObjectType];
  changeHistory?: ChangeHistory;
};
