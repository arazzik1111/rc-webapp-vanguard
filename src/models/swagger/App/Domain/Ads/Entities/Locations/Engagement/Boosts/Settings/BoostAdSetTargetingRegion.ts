export const BoostAdSetTargetingRegionObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingRegion:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingRegion',
};

export const BoostAdSetTargetingRegionObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingRegion:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingRegion',
} as const;

export type BoostAdSetTargetingRegion = {
  /**
   * Region id
   */
  key?: string | number;
  /**
   * The name of the region
   */
  name?: string;
  /**
   * The country of the region
   */
  country?: string;
  /**
   * The country code of the region
   */
  countryCode?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingRegionObjectType)[keyof typeof BoostAdSetTargetingRegionObjectType];
};
