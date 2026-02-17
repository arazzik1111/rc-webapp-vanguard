import { BoostAdSet } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostAdSet';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const BoostAdSetsObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAdSets:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAdSets',
};

export const BoostAdSetsObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAdSets:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAdSets',
} as const;

export type BoostAdSets = {
  elements?: BoostAdSet[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetsObjectType)[keyof typeof BoostAdSetsObjectType];
  changeHistory?: ChangeHistory;
};
