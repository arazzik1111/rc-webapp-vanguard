import { BoostAdSetDailyOutcomesCurve } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetDailyOutcomesCurve';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const BoostAdSetReachEstimateObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetReachEstimate:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetReachEstimate',
};

export const BoostAdSetReachEstimateObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetReachEstimate:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetReachEstimate',
} as const;

export type BoostAdSetReachEstimate = {
  /**
   * Lower user bound
   */
  estimateMauLowerBound?: string | number;
  dailyOutcomesCurve?: BoostAdSetDailyOutcomesCurve;
  /**
   * Upper user bound
   */
  estimateMauUpperBound?: string | number;
  /**
   * Estimate Dau
   */
  estimateDau?: string | number;
  /**
   * Estimate is ready
   */
  estimateReady?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetReachEstimateObjectType)[keyof typeof BoostAdSetReachEstimateObjectType];
  changeHistory?: ChangeHistory;
};
