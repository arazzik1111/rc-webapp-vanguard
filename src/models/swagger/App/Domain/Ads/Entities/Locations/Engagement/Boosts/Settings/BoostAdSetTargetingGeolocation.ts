export const BoostAdSetTargetingGeolocationObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingGeolocation:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingGeolocation',
};

export const BoostAdSetTargetingGeolocationObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingGeolocation:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingGeolocation',
} as const;

export type BoostAdSetTargetingGeolocation = {
  /**
   * The geolocation name
   */
  name?: string;
  /**
   * The geolocation type
   */
  type?: string;
  /**
   * The geolocation country code
   */
  country_code?: string;
  /**
   * The geolocation country name
   */
  country_name?: string;
  /**
   * The geolocation region
   */
  region?: string;
  /**
   * The geolocation region id
   */
  region_id?: number;
  /**
   * whether geolocation supports region
   */
  supports_region?: boolean;
  /**
   * whether geolocation supports city
   */
  supports_city?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingGeolocationObjectType)[keyof typeof BoostAdSetTargetingGeolocationObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
