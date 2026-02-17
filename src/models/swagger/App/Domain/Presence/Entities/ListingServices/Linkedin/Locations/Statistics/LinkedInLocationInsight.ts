import { TimeInterval } from '@models/swagger/App/Domain/Common/Entities/Charts/TimeInterval';

export const LinkedInLocationInsightObjectType = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Statistics_LinkedInLocationInsight:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Statistics\\LinkedInLocationInsight',
};

export const LinkedInLocationInsightObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Statistics_LinkedInLocationInsight:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Statistics\\LinkedInLocationInsight',
} as const;

export type LinkedInLocationInsight = {
  timeInterval?: TimeInterval;
  /**
   * The number of clicks
   */
  clickCount?: number;
  /**
   * The number of comments
   */
  commentCount?: number;
  /**
   * The number of organic clicks, likes, comments, and shares over impressions
   */
  engagement?: number;
  /**
   * Number of impressions.
   * Impressions are counted each time the organization, post or share appears in someone’s feed,
   * even if not interacting with it. Each scroll over it will count, even if it comes from the same user
   */
  impressionCount?: number;
  /**
   * Number of likes.
   * This field can become negative when members who liked a sponsored share later unlike it.
   * The like is not counted since it is not organic, but the unlike is counted as organic.
   */
  likeCount?: number;
  /**
   * Number of shares. How many times the post/share was shared.
   */
  shareCount?: number;
  /**
   * Number of unique impressions.
   * Same as $impressionCount, but the metric is counted once for each user, even if it scrolls multiple times over it.
   */
  uniqueImpressionsCount?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LinkedInLocationInsightObjectType)[keyof typeof LinkedInLocationInsightObjectType];
};
