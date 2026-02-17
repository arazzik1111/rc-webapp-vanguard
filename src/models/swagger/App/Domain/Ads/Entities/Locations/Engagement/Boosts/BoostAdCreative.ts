import { BoostAdCreativeObjectStorySpec } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdCreativeObjectStorySpec';
import { Post } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/Post';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const BoostAdCreativeObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAdCreative:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAdCreative',
};

export const BoostAdCreativeObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAdCreative:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAdCreative',
} as const;

export type BoostAdCreative = {
  objectStorySpec?: BoostAdCreativeObjectStorySpec;
  /**
   * The id of the post that is being used by the Creative
   */
  postId?: number;
  post?: Post;
  /**
   * The name of the AdCreative
   */
  name?: string;
  /**
   * The external id of the AdCreative (in Meta)
   */
  externalId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdCreativeObjectType)[keyof typeof BoostAdCreativeObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
