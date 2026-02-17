import { SocialMediaComment } from '@models/swagger/App/Domain/Presence/Entities/Locations/Comments/SocialMediaComment';

export type SocialMediaCommentResponseDto = {
  /**
   * The result of the operation
   */
  success: boolean;
  comment: SocialMediaComment;
};
