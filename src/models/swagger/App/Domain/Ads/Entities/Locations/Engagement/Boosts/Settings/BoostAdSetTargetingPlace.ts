export const BoostAdSetTargetingPlaceObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingPlace:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingPlace',
};

export const BoostAdSetTargetingPlaceObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingPlace:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingPlace',
} as const;

export type BoostAdSetTargetingPlace = {
  /**
   * the Place id
   */
  key?: string | number;
  /**
   * Place's distance unit
   */
  distanceUnit?: string;
  /**
   * The name of the Place
   */
  name?: string;
  /**
   * The latitude of the Place
   */
  latitude?: number;
  /**
   * The longitude of the Place
   */
  longitude?: number;
  /**
   * Place's radius
   */
  radius?: number;
  /**
   * The city associated with the Place
   */
  primaryCityId?: string | number;
  /**
   * the Region id of the Place
   */
  regionId?: string | number;
  /**
   * The country of the place
   */
  country?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingPlaceObjectType)[keyof typeof BoostAdSetTargetingPlaceObjectType];
};
