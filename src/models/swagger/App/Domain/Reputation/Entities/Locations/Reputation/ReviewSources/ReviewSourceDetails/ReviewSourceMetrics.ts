export const ReviewSourceMetricsObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewSources_ReviewSourceDetails_ReviewSourceMetrics:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewSources\\ReviewSourceDetails\\ReviewSourceMetrics',
};

export const ReviewSourceMetricsObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewSources_ReviewSourceDetails_ReviewSourceMetrics:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewSources\\ReviewSourceDetails\\ReviewSourceMetrics',
} as const;

export type ReviewSourceMetrics = {
  /**
   * The average rating from the reviews
   */
  averageRating?: number;
  /**
   * The total number of reviews
   */
  totalReviews?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewSourceMetricsObjectType)[keyof typeof ReviewSourceMetricsObjectType];
};
