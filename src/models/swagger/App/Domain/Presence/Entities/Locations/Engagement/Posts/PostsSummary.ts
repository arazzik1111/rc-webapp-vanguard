export const PostsSummaryObjectType = {
  App_Domain_Presence_Entities_Locations_Engagement_Posts_PostsSummary:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\Posts\\PostsSummary',
};

export const PostsSummaryObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Engagement_Posts_PostsSummary:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\Posts\\PostsSummary',
} as const;

export type PostsSummary = {
  /**
   * The total number of posts
   */
  totalCount?: number;
  /**
   * The number of scheduled posts
   */
  scheduledCount?: number;
  /**
   * The number of published posts
   */
  publishedCount?: number;
  /**
   * The number of publishing posts
   */
  publishingCount?: number;
  /**
   * The number of not approved posts
   */
  notApprovedCount?: number;
  /**
   * The number of draft posts
   */
  draftCount?: number;
  /**
   * The number of posts with errors
   */
  errorCount?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PostsSummaryObjectType)[keyof typeof PostsSummaryObjectType];
};
