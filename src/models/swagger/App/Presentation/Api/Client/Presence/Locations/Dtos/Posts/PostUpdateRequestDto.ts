import { Event } from '@models/swagger/App/Domain/Presence/Entities/Locations/Events/Event';
import { Post } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/Post';

export type PostUpdateRequestDto = {
  /**
   * Post
   */
  post: Post | Event;
};
