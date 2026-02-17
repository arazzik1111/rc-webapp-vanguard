import { BoostAdSetTargetingCountry } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingCountry';

export const BoostAdSetTargetingCountriesObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCountries:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCountries',
};

export const BoostAdSetTargetingCountriesObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCountries:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCountries',
} as const;

export type BoostAdSetTargetingCountries = {
  elements?: BoostAdSetTargetingCountry[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingCountriesObjectType)[keyof typeof BoostAdSetTargetingCountriesObjectType];
};
