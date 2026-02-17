export const ReviewsRecencyScoreObjectType = {
  App_Domain_Reputation_Entities_Reputation_ReputationScores_ReviewsRecencyScore:
    'App\\Domain\\Reputation\\Entities\\Reputation\\ReputationScores\\ReviewsRecencyScore',
};

export type ReviewsRecencyScore = {
  /**
   * Average review recency in months
   */
  averageReviewsRecency?: number;
  /**
   * Weight used for calculation of reputationScore
   */
  weight?: number;
  /**
   * Score of this particular scoring component between 0 and 1
   */
  score?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewsRecencyScoreObjectType)[keyof typeof ReviewsRecencyScoreObjectType];
};
