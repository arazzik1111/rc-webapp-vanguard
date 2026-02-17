export const BoostAdSetTargetingZipObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingZip:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingZip',
};

export const BoostAdSetTargetingZipObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingZip:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingZip',
} as const;

export type BoostAdSetTargetingZip = {
  /**
   * Custom Location id
   */
  key?: string | number;
  /**
   * The Zip Code
   */
  name?: string;
  /**
   * The affiliated city of the zip code
   */
  primaryCityId?: string | number;
  /**
   * the Region id
   */
  regionId?: string | number;
  /**
   * The country of the city
   */
  country?: string;
  /**
   * The country code of the zip
   */
  countryCode?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingZipObjectType)[keyof typeof BoostAdSetTargetingZipObjectType];
};
