import { Directory } from '@models/swagger/App/Domain/Presence/Entities/Directories/Directory';
import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { Review } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Reviews/Review';
import { ReviewAuthor } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Reviews/ReviewAuthor';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const ReviewReplyPublishingStatus = {
  PUBLISHED: 'PUBLISHED',
  PUBLISHING_ERROR: 'PUBLISHING_ERROR',
  DRAFT: 'DRAFT',
};

export const ReviewReplyPublishingStatusStrict = {
  PUBLISHED: 'PUBLISHED',
  PUBLISHING_ERROR: 'PUBLISHING_ERROR',
  DRAFT: 'DRAFT',
} as const;

export const ReviewReplyObjectType = {
  App_Domain_Reputation_Entities_Reputation_Reviews_ReviewReply:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Reviews\\ReviewReply',
};

export const ReviewReplyObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Reviews_ReviewReply:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Reviews\\ReviewReply',
} as const;

export type ReviewReply = {
  /**
   * Review's location id
   */
  locationId?: number;
  location?: Location;
  /**
   * ReviewReply's external id
   */
  externalId?: string;
  /**
   * Review's external id
   */
  reviewExternalId?: string;
  /**
   * Text of the reply
   */
  text?: string;
  /**
   * Original AI generated text of the reply, set, if the reply has been changed
   */
  originalAIGeneratedText?: string;
  review?: Review;
  /**
   * Wheather Account has modified original AI generated øReviewReply before publishing or not
   */
  aiGeneratedReplyHasBeenModified?: boolean;
  author?: ReviewAuthor;
  /**
   * The id of the Directory the review has been created on
   */
  directoryId?: number;
  directory?: Directory;
  /**
   * Wheather Reply has been generated using generative AI or not
   */
  isAIGenerated?: boolean;
  /**
   * Weather editing is allowed or not
   */
  canEdit?: boolean;
  /**
   * Weather deletion is allowed or not
   */
  canDelete?: boolean;
  /**
   * Publishing status of ReviewReply
   *  Allowed Values:
   * -   `PUBLISHED`: ReviewReply has not been published
   * -   `PUBLISHING_ERROR`: ReviewReply has not been published due to errors
   * -   `DRAFT`: ReviewReply has not been published yet and is in draft
   *
   */
  publishingStatus?: (typeof ReviewReplyPublishingStatus)[keyof typeof ReviewReplyPublishingStatus];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewReplyObjectType)[keyof typeof ReviewReplyObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
