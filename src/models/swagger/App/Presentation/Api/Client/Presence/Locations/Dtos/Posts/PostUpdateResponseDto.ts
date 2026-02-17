import { Event } from '@models/swagger/App/Domain/Presence/Entities/Locations/Events/Event';
import { Post } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/Post';

export type PostUpdateResponseDto = {
  /**
   * Location Post
   */
  post: Post | Event;
  /**
   * Listings that allow deleting Posts
   */
  listingsAllowDelete?: any[];
  /**
   * Listings that allow editing Posts
   */
  listingsAllowEdit?: any[];
};
