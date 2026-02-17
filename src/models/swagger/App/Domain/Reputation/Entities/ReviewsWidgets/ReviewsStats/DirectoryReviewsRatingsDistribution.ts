export const DirectoryReviewsRatingsDistributionObjectType = {
  App_Domain_Reputation_Entities_ReviewsWidgets_ReviewsStats_DirectoryReviewsRatingsDistribution:
    'App\\Domain\\Reputation\\Entities\\ReviewsWidgets\\ReviewsStats\\DirectoryReviewsRatingsDistribution',
};

export type DirectoryReviewsRatingsDistribution = {
  oneStar?: number;
  twoStars?: number;
  threeStars?: number;
  fourStars?: number;
  fiveStars?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoryReviewsRatingsDistributionObjectType)[keyof typeof DirectoryReviewsRatingsDistributionObjectType];
};
