import { BoostAdSetTargetingGeolocation } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingGeolocation';

export const BoostAdSetTargetingGeolocationsObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingGeolocations:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingGeolocations',
};

export const BoostAdSetTargetingGeolocationsObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingGeolocations:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingGeolocations',
} as const;

export type BoostAdSetTargetingGeolocations = {
  elements?: BoostAdSetTargetingGeolocation[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingGeolocationsObjectType)[keyof typeof BoostAdSetTargetingGeolocationsObjectType];
};
