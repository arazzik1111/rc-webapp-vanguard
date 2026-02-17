import { BoostAdSetTargetingRegion } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingRegion';

export const BoostAdSetTargetingRegionsObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingRegions:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingRegions',
};

export const BoostAdSetTargetingRegionsObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingRegions:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingRegions',
} as const;

export type BoostAdSetTargetingRegions = {
  elements?: BoostAdSetTargetingRegion[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingRegionsObjectType)[keyof typeof BoostAdSetTargetingRegionsObjectType];
};
