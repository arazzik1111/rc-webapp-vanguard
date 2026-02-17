import { BoostAdSetTargetingCity } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingCity';

export const BoostAdSetTargetingCitiesObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCities:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCities',
};

export const BoostAdSetTargetingCitiesObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCities:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCities',
} as const;

export type BoostAdSetTargetingCities = {
  elements?: BoostAdSetTargetingCity[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingCitiesObjectType)[keyof typeof BoostAdSetTargetingCitiesObjectType];
};
