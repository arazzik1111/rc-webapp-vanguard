import { BoostAdSetTargetingPlace } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingPlace';

export const BoostAdSetTargetingPlacesObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingPlaces:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingPlaces',
};

export const BoostAdSetTargetingPlacesObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingPlaces:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingPlaces',
} as const;

export type BoostAdSetTargetingPlaces = {
  elements?: BoostAdSetTargetingPlace[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingPlacesObjectType)[keyof typeof BoostAdSetTargetingPlacesObjectType];
};
