export const CommentInsightObjectType = {
  App_Domain_Presence_Entities_Locations_Comments_CommentInsight:
    'App\\Domain\\Presence\\Entities\\Locations\\Comments\\CommentInsight',
};

export const CommentInsightObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Comments_CommentInsight:
    'App\\Domain\\Presence\\Entities\\Locations\\Comments\\CommentInsight',
} as const;

export type CommentInsight = {
  /**
   * Number of times this comment was liked
   */
  likesCount?: number;
  /**
   * Number of replies to this comment
   */
  commentsCount?: number;
  /**
   * Number of times this comment was shared
   */
  retweetCount?: number;
  /**
   * Number of times this comment was quoted
   */
  quoteCount?: number;
  /**
   * Number of times this comment was bookmarked
   */
  bookmarkCount?: number;
  /**
   * Number of times this comment was viewed
   */
  impressionCount?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof CommentInsightObjectType)[keyof typeof CommentInsightObjectType];
};
