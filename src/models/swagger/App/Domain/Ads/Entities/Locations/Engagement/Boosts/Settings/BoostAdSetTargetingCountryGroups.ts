import { BoostAdSetTargetingCountryGroup } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingCountryGroup';

export const BoostAdSetTargetingCountryGroupsObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCountryGroups:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCountryGroups',
};

export const BoostAdSetTargetingCountryGroupsObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetTargetingCountryGroups:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetTargetingCountryGroups',
} as const;

export type BoostAdSetTargetingCountryGroups = {
  elements?: BoostAdSetTargetingCountryGroup[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingCountryGroupsObjectType)[keyof typeof BoostAdSetTargetingCountryGroupsObjectType];
};
