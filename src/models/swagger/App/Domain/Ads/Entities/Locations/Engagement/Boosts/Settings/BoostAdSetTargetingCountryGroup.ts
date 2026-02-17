export const BoostAdSetTargetingCountryGroupObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCountryGroup:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCountryGroup',
};

export const BoostAdSetTargetingCountryGroupObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCountryGroup:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCountryGroup',
} as const;

export type BoostAdSetTargetingCountryGroup = {
  /**
   * Country group name
   */
  countryGroupName?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingCountryGroupObjectType)[keyof typeof BoostAdSetTargetingCountryGroupObjectType];
};
