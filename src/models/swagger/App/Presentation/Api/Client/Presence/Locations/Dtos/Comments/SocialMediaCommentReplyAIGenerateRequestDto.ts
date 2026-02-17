import { SocialMediaComment } from '@models/swagger/App/Domain/Presence/Entities/Locations/Comments/SocialMediaComment';
import { Event } from '@models/swagger/App/Domain/Presence/Entities/Locations/Events/Event';
import { Post } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/Post';

export type SocialMediaCommentReplyAIGenerateRequestDto = {
  comment: SocialMediaComment;
  /**
   * The Post associated with the Comment.
   */
  post?: Post | Event;
};
