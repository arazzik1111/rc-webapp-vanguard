import { PublicFacebookPost } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Pages/Posts/PublicFacebookPost';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';
import { PaginationCursor } from '@models/swagger/DDD/Domain/Common/Entities/Pagination/PaginationCursor';

export const PublicFacebookPostsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Pages_Posts_PublicFacebookPosts:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Pages\\Posts\\PublicFacebookPosts',
};

export const PublicFacebookPostsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Pages_Posts_PublicFacebookPosts:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Pages\\Posts\\PublicFacebookPosts',
} as const;

export type PublicFacebookPosts = {
  elements?: PublicFacebookPost[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PublicFacebookPostsObjectType)[keyof typeof PublicFacebookPostsObjectType];
  changeHistory?: ChangeHistory;
  paginationCursor?: PaginationCursor;
};
