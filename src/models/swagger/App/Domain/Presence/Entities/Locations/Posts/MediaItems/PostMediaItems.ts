import { Event } from '@models/swagger/App/Domain/Presence/Entities/Locations/Events/Event';
import { PostMediaItem } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/MediaItems/PostMediaItem';
import { Post } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/Post';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const PostMediaItemsObjectType = {
  App_Domain_Presence_Entities_Locations_Posts_MediaItems_PostMediaItems:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\MediaItems\\PostMediaItems',
};

export const PostMediaItemsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Posts_MediaItems_PostMediaItems:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\MediaItems\\PostMediaItems',
} as const;

export type PostMediaItems = {
  /**
   * The Post ID
   */
  postId?: number;
  post?: Post | Event;
  elements?: PostMediaItem[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PostMediaItemsObjectType)[keyof typeof PostMediaItemsObjectType];
  changeHistory?: ChangeHistory;
};
