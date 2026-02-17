export const BoostAdSetTargetingPublisherPlatformPlatformName = {
  facebook: 'facebook',
  instagram: 'instagram',
  messenger: 'messenger',
  audience_network: 'audience_network',
};

export const BoostAdSetTargetingPublisherPlatformPlatformNameStrict = {
  facebook: 'facebook',
  instagram: 'instagram',
  messenger: 'messenger',
  audience_network: 'audience_network',
} as const;

export const BoostAdSetTargetingPublisherPlatformObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingPublisherPlatform:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingPublisherPlatform',
};

export const BoostAdSetTargetingPublisherPlatformObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingPublisherPlatform:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingPublisherPlatform',
} as const;

export type BoostAdSetTargetingPublisherPlatform = {
  /**
   * Publisher platform name
   *  Allowed Values:
   * -   `facebook`: Publish on facebook
   * -   `instagram`: Publish on instagram
   * -   `messenger`: Publish on messenger
   * -   `audience_network`: Publish on messenger
   *
   */
  platformName?: (typeof BoostAdSetTargetingPublisherPlatformPlatformName)[keyof typeof BoostAdSetTargetingPublisherPlatformPlatformName];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingPublisherPlatformObjectType)[keyof typeof BoostAdSetTargetingPublisherPlatformObjectType];
};
