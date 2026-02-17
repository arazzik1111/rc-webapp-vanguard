export const BoostAdSetTargetingCustomLocationObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCustomLocation:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCustomLocation',
};

export const BoostAdSetTargetingCustomLocationObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCustomLocation:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCustomLocation',
} as const;

export type BoostAdSetTargetingCustomLocation = {
  /**
   * Custom Location address
   */
  addressString?: string;
  /**
   * Custom Location radius
   */
  radius?: number;
  /**
   * Custom Location unit
   */
  distanceUnit?: string;
  /**
   * The latitude of the location
   */
  latitude?: number;
  /**
   * The longitude of the location
   */
  longitude?: number;
  /**
   * Custom Location name
   */
  primaryCityId?: string | number;
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
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingCustomLocationObjectType)[keyof typeof BoostAdSetTargetingCustomLocationObjectType];
};
