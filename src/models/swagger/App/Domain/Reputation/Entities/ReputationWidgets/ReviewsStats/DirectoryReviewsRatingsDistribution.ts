export const DirectoryReviewsRatingsDistributionObjectType = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReviewsStats_DirectoryReviewsRatingsDistribution:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReviewsStats\\DirectoryReviewsRatingsDistribution',
};

export const DirectoryReviewsRatingsDistributionObjectTypeStrict = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReviewsStats_DirectoryReviewsRatingsDistribution:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReviewsStats\\DirectoryReviewsRatingsDistribution',
} as const;

export type DirectoryReviewsRatingsDistribution = {
  /**
   * The number of reviews with a rating of 1 star
   */
  oneStar?: number;
  /**
   * The number of reviews with a rating of 2 stars
   */
  twoStars?: number;
  /**
   * The number of reviews with a rating of 3 stars
   */
  threeStars?: number;
  /**
   * The number of reviews with a rating of 4 stars
   */
  fourStars?: number;
  /**
   * The number of reviews with a rating of 5 stars
   */
  fiveStars?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoryReviewsRatingsDistributionObjectType)[keyof typeof DirectoryReviewsRatingsDistributionObjectType];
};
