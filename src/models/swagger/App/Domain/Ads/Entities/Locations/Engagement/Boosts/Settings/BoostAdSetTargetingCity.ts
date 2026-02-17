export const BoostAdSetTargetingCityObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCity:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCity',
};

export const BoostAdSetTargetingCityObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCity:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCity',
} as const;

export type BoostAdSetTargetingCity = {
  /**
   * City id
   */
  key?: string | number;
  /**
   * City radius
   */
  radius?: number;
  /**
   * City distance unit
   */
  distanceUnit?: string;
  /**
   * the City name
   */
  name?: string;
  /**
   * the Region the city is in
   */
  region?: string;
  /**
   * the Region id
   */
  regionId?: string | number;
  /**
   * The country of the city
   */
  country?: string;
  /**
   * The country code of the city
   */
  countryCode?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingCityObjectType)[keyof typeof BoostAdSetTargetingCityObjectType];
};
