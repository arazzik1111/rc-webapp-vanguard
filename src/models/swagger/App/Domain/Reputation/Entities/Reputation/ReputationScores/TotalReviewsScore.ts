export const TotalReviewsScoreObjectType = {
  App_Domain_Reputation_Entities_Reputation_ReputationScores_TotalReviewsScore:
    'App\\Domain\\Reputation\\Entities\\Reputation\\ReputationScores\\TotalReviewsScore',
};

export type TotalReviewsScore = {
  /**
   * Total number of reviews
   */
  totalReviews?: number;
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
  objectType: (typeof TotalReviewsScoreObjectType)[keyof typeof TotalReviewsScoreObjectType];
};
