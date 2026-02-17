import { Directory } from '@models/swagger/App/Domain/Presence/Entities/Directories/Directory';
import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { ReviewAuthor } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Reviews/ReviewAuthor';
import { ReviewReplies } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Reviews/ReviewReplies';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const ReviewSentiment = {
  GOOD: 'GOOD',
  NEUTRAL: 'NEUTRAL',
  BAD: 'BAD',
};

export const ReviewSentimentStrict = {
  GOOD: 'GOOD',
  NEUTRAL: 'NEUTRAL',
  BAD: 'BAD',
} as const;

export const ReviewObjectType = {
  App_Domain_Reputation_Entities_Reputation_Reviews_Review:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Reviews\\Review',
};

export const ReviewObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Reviews_Review:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Reviews\\Review',
} as const;

export type Review = {
  location?: Location;
  /**
   * Review's location id
   */
  locationId?: number;
  /**
   * Review's external id
   */
  externalId?: string;
  /**
   * The id of the business on the directory, e.g. Google Business Profile ID or Facebook Page id
   */
  directoryBusinessId?: string | number;
  /**
   * Review's text
   */
  text?: string;
  author?: ReviewAuthor;
  /**
   * Review's external link
   */
  link?: string;
  /**
   * Review's star rating
   */
  rating?: number;
  /**
   * If true, a reply is possible
   */
  canReply?: boolean;
  /**
   * If true, reply generation is possible
   */
  canGenerateReply?: boolean;
  /**
   * The sentiment of the review
   *  Allowed Values:
   * -   `GOOD`: Review Sentiment Good
   * -   `NEUTRAL`: Review Sentiment Neutral
   * -   `BAD`: Review Sentiment Bad
   *
   */
  sentiment?: (typeof ReviewSentiment)[keyof typeof ReviewSentiment];
  /**
   * The id of the Directory the review has been created on
   */
  directoryId?: number;
  directory?: Directory;
  replies?: ReviewReplies;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewObjectType)[keyof typeof ReviewObjectType];
  changeHistory?: ChangeHistory;
};
