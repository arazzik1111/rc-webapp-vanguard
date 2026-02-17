import { BoostCampaign } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostCampaign';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const BoostCampaignsObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostCampaigns:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostCampaigns',
};

export const BoostCampaignsObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostCampaigns:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostCampaigns',
} as const;

export type BoostCampaigns = {
  loadedFromArgus?: boolean;
  elements?: BoostCampaign[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostCampaignsObjectType)[keyof typeof BoostCampaignsObjectType];
  changeHistory?: ChangeHistory;
};
