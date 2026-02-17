import { AdAccount } from '@models/swagger/App/Domain/Ads/Entities/AdAccount';
import { BoostAudience } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostAudience';

export const BoostAudiencesObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAudiences:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAudiences',
};

export const BoostAudiencesObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAudiences:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAudiences',
} as const;

export type BoostAudiences = {
  adAccount?: AdAccount;
  elements?: BoostAudience[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAudiencesObjectType)[keyof typeof BoostAudiencesObjectType];
};
