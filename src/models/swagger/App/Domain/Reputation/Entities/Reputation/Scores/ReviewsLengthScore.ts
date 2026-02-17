export const ReviewsLengthScoreObjectType = {
  App_Domain_Reputation_Entities_Reputation_Scores_ReviewsLengthScore:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Scores\\ReviewsLengthScore',
};

export const ReviewsLengthScoreObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Scores_ReviewsLengthScore:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Scores\\ReviewsLengthScore',
} as const;

export type ReviewsLengthScore = {
  /**
   * Average review length in words
   */
  averageReviewsLength?: number;
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
  objectType: (typeof ReviewsLengthScoreObjectType)[keyof typeof ReviewsLengthScoreObjectType];
};
