import { BoostAdCreative } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostAdCreative';
import { BoostAdSet } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostAdSet';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const BoostAdStatus = {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  DELETED: 'DELETED',
  ARCHIVED: 'ARCHIVED',
};

export const BoostAdStatusStrict = {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  DELETED: 'DELETED',
  ARCHIVED: 'ARCHIVED',
} as const;

export const BoostAdObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAd:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAd',
};

export const BoostAdObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAd:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAd',
} as const;

export type BoostAd = {
  /**
   * The id of the BoostAdSet in which the BoostAd was created
   */
  boostAdSetId?: number;
  boostAdSet?: BoostAdSet;
  /**
   * The id of the creative associated with the Ad
   */
  boostAdCreativeId?: number;
  boostAdCreative?: BoostAdCreative;
  /**
   * The external id of the Ad (in Meta)
   */
  externalId?: string;
  /**
   * The name of the ad
   */
  name?: string;
  /**
   * Status of the Ad
   *  Allowed Values:
   * -   `ACTIVE`
   * -   `PAUSED`
   * -   `DELETED`
   * -   `ARCHIVED`
   *
   */
  status?: (typeof BoostAdStatus)[keyof typeof BoostAdStatus];
  /**
   * Preview Shareble Link
   */
  previewShareableLink?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdObjectType)[keyof typeof BoostAdObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
