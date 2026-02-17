export const ReviewsRecencyScoreObjectType = {
  App_Domain_Reputation_Entities_Reputation_Scores_ReviewsRecencyScore:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Scores\\ReviewsRecencyScore',
};

export const ReviewsRecencyScoreObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Scores_ReviewsRecencyScore:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Scores\\ReviewsRecencyScore',
} as const;

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
