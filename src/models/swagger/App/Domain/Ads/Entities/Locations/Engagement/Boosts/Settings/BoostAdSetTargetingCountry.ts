export const BoostAdSetTargetingCountryObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCountry:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCountry',
};

export const BoostAdSetTargetingCountryObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCountry:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCountry',
} as const;

export type BoostAdSetTargetingCountry = {
  /**
   * Country code
   */
  countryCode?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingCountryObjectType)[keyof typeof BoostAdSetTargetingCountryObjectType];
};
