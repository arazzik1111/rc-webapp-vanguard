import { BoostAd } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostAd';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const BoostAdsObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAds:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAds',
};

export const BoostAdsObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAds:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAds',
} as const;

export type BoostAds = {
  elements?: BoostAd[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdsObjectType)[keyof typeof BoostAdsObjectType];
  changeHistory?: ChangeHistory;
};
