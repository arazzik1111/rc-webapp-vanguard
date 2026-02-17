import { BoostAdSetTargetingCustomLocation } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingCustomLocation';

export const BoostAdSetTargetingCustomLocationsObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCustomLocations:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCustomLocations',
};

export const BoostAdSetTargetingCustomLocationsObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCustomLocations:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCustomLocations',
} as const;

export type BoostAdSetTargetingCustomLocations = {
  elements?: BoostAdSetTargetingCustomLocation[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingCustomLocationsObjectType)[keyof typeof BoostAdSetTargetingCustomLocationsObjectType];
};
