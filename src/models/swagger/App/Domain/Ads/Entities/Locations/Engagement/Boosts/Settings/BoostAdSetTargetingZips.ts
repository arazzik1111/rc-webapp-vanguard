import { BoostAdSetTargetingZip } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingZip';

export const BoostAdSetTargetingZipsObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingZips:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingZips',
};

export const BoostAdSetTargetingZipsObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingZips:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingZips',
} as const;

export type BoostAdSetTargetingZips = {
  elements?: BoostAdSetTargetingZip[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingZipsObjectType)[keyof typeof BoostAdSetTargetingZipsObjectType];
};
