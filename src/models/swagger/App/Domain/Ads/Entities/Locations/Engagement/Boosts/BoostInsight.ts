import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const BoostInsightObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostInsight:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostInsight',
};

export const BoostInsightObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostInsight:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostInsight',
} as const;

export type BoostInsight = {
  /**
   * The facebook id of the Insight Item
   */
  externalId?: string | number;
  /**
   * The name of the Insight Item
   */
  name?: string;
  /**
   * The number of times your ads were on screen.
   */
  impressions?: string | number;
  /**
   * The estimated total amount of money you've spent on your campaign, ad set or ad during its schedule. This metric is estimated.
   */
  spend?: string | number;
  /**
   * Currency that is used by your ad account.
   */
  accountCurrency?: string;
  /**
   * The number of people who saw your ads at least once. Reach is different from impressions, which may include multiple views of your ads by the same people. This metric is estimated.
   */
  reach?: string | number;
  /**
   * The average cost for each click (all).
   */
  cpc?: string | number;
  /**
   * The percentage of times people saw your ad and performed a click (all).
   */
  ctr?: string | number;
  /**
   * The number of clicks on your ads.
   */
  clicks?: string | number;
  /**
   * The average cost for 1,000 impressions.
   */
  cpm?: string | number;
  /**
   * The average cost to reach 1,000 people. This metric is estimated.
   */
  cpp?: string | number;
  /**
   * The start date for your data. This is controlled by the date range you've selected for your reporting view.
   */
  dateStart?: string;
  /**
   * The end date for your data. This is controlled by the date range you've selected for your reporting view.
   */
  dateStop?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostInsightObjectType)[keyof typeof BoostInsightObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
