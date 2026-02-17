export const EventsSummaryObjectType = {
  App_Domain_Presence_Entities_Locations_Engagement_Events_EventsSummary:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\Events\\EventsSummary',
};

export const EventsSummaryObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Engagement_Events_EventsSummary:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\Events\\EventsSummary',
} as const;

export type EventsSummary = {
  /**
   * The total number of pending verification Events
   */
  pendingVerificationCount?: number;
  /**
   * The total number of past Events
   */
  pastCount?: number;
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
  objectType: (typeof EventsSummaryObjectType)[keyof typeof EventsSummaryObjectType];
};
