import { Event } from '@models/swagger/App/Domain/Presence/Entities/Locations/Events/Event';
import { Post } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/Post';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';
import { PaginationCursor } from '@models/swagger/DDD/Domain/Common/Entities/Pagination/PaginationCursor';

export const PostsObjectType = {
  App_Domain_Presence_Entities_Locations_Posts_Posts: 'App\\Domain\\Presence\\Entities\\Locations\\Posts\\Posts',
};

export const PostsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Posts_Posts: 'App\\Domain\\Presence\\Entities\\Locations\\Posts\\Posts',
} as const;

export type Posts = {
  elements?: Array<Post | Event>;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PostsObjectType)[keyof typeof PostsObjectType];
  changeHistory?: ChangeHistory;
  paginationCursor?: PaginationCursor;
};
