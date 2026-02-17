export const ReviewsDistributionObjectType = {
  App_Domain_Reputation_Entities_Reputation_ReviewsDistribution:
    'App\\Domain\\Reputation\\Entities\\Reputation\\ReviewsDistribution',
};

export const ReviewsDistributionObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_ReviewsDistribution:
    'App\\Domain\\Reputation\\Entities\\Reputation\\ReviewsDistribution',
} as const;

export type ReviewsDistribution = {
  reviewsWithOneStar?: number;
  reviewsWithTwoStars?: number;
  reviewsWithThreeStars?: number;
  reviewsWithFourStars?: number;
  reviewsWithFiveStars?: number;
  badReviews?: number;
  neutralReviews?: number;
  goodReviews?: number;
  totalReviews?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewsDistributionObjectType)[keyof typeof ReviewsDistributionObjectType];
};
