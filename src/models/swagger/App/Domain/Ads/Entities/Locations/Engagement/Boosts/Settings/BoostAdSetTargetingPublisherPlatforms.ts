import { BoostAdSetTargetingPublisherPlatform } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingPublisherPlatform';

export const BoostAdSetTargetingPublisherPlatformsObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingPublisherPlatforms:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingPublisherPlatforms',
};

export const BoostAdSetTargetingPublisherPlatformsObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingPublisherPlatforms:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingPublisherPlatforms',
} as const;

export type BoostAdSetTargetingPublisherPlatforms = {
  elements?: BoostAdSetTargetingPublisherPlatform[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingPublisherPlatformsObjectType)[keyof typeof BoostAdSetTargetingPublisherPlatformsObjectType];
};
