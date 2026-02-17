import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const BoostAdAccountReachEstimateObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdAccountReachEstimate:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdAccountReachEstimate',
};

export const BoostAdAccountReachEstimateObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdAccountReachEstimate:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdAccountReachEstimate',
} as const;

export type BoostAdAccountReachEstimate = {
  /**
   * Lower user bound
   */
  usersLowerBound?: string | number;
  /**
   * Upper user bound
   */
  usersUpperBound?: string | number;
  /**
   * Estimate is ready
   */
  estimateReady?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdAccountReachEstimateObjectType)[keyof typeof BoostAdAccountReachEstimateObjectType];
  changeHistory?: ChangeHistory;
};
