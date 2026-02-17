export const XLocationInsightObjectType = {
  App_Domain_Presence_Entities_ListingServices_X_Locations_Statistics_XLocationInsight:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\Locations\\Statistics\\XLocationInsight',
};

export const XLocationInsightObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_X_Locations_Statistics_XLocationInsight:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\Locations\\Statistics\\XLocationInsight',
} as const;

export type XLocationInsight = {
  /**
   * The number of followers
   */
  followersCount?: number;
  /**
   * The number of following accounts
   */
  followingCount?: number;
  /**
   * The number of x posts(tweets)
   */
  tweetCount?: number;
  /**
   * Number of times the account has been added to lists/mention by other users.
   * - is counted as organic engagement.
   */
  mentionCount?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof XLocationInsightObjectType)[keyof typeof XLocationInsightObjectType];
};
