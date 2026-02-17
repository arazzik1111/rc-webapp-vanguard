export const LinkedinPostDistributionFeedDistributionType = {
  MAIN_FEED: 'MAIN_FEED',
  NONE: 'NONE',
};

export const LinkedinPostDistributionFeedDistributionTypeStrict = {
  MAIN_FEED: 'MAIN_FEED',
  NONE: 'NONE',
} as const;

export const LinkedinPostDistributionObjectType = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Posts_LinkedinPostDistribution:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Posts\\LinkedinPostDistribution',
};

export const LinkedinPostDistributionObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Posts_LinkedinPostDistribution:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Posts\\LinkedinPostDistribution',
} as const;

export type LinkedinPostDistribution = {
  /**
   * The type of distribution
   *  Allowed Values:
   * -   `MAIN_FEED`: The type of distribution - distribute to the flagship feed, and container entity feed if applicable.
   * -   `NONE`: The type of distribution - do not distribute within LinkedIn via feed.
   *
   */
  feedDistributionType?: (typeof LinkedinPostDistributionFeedDistributionType)[keyof typeof LinkedinPostDistributionFeedDistributionType];
  /**
   * Intended audience for this post.
   */
  targetEntities?: string;
  /**
   * The distribution channels - External distribution channels that this post is distributed to (e.g., Twitter, Tencent, Weibo). Empty array indicates the post is not externally distributed.
   */
  thirdPartyDistributionChannels?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LinkedinPostDistributionObjectType)[keyof typeof LinkedinPostDistributionObjectType];
};
