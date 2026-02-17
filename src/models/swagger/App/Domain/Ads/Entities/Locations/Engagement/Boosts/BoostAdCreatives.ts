import { BoostAdCreative } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostAdCreative';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const BoostAdCreativesObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAdCreatives:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAdCreatives',
};

export const BoostAdCreativesObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAdCreatives:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAdCreatives',
} as const;

export type BoostAdCreatives = {
  elements?: BoostAdCreative[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdCreativesObjectType)[keyof typeof BoostAdCreativesObjectType];
  changeHistory?: ChangeHistory;
};
