export const PostInsightsObjectType = {
  App_Domain_Presence_Entities_Locations_Posts_PostInsights:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\PostInsights',
};

export const PostInsightsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Posts_PostInsights:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\PostInsights',
} as const;

export type PostInsights = {
  /**
   * The number of times a post was viewed
   */
  views?: number;
  /**
   * The number of likes a post has received
   */
  likes?: number;
  /**
   * The number of times a post was shared
   */
  shares?: number;
  /**
   * The number of clicks a post was clicked
   */
  clicks?: number;
  /**
   * The number of comments a post has received
   */
  comments?: number;
  /**
   * The number of organic clicks, likes, comments, and shares over impressions
   */
  engagement?: number;
  /**
   * The number of retweets a post has received
   */
  retweets?: number;
  /**
   * The number of replies a post has received
   */
  replies?: number;
  /**
   * The number of quotations a post has received
   */
  quotes?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PostInsightsObjectType)[keyof typeof PostInsightsObjectType];
};
