export const RepliesRateScoreObjectType = {
  App_Domain_Reputation_Entities_Reputation_ReputationScores_RepliesRateScore:
    'App\\Domain\\Reputation\\Entities\\Reputation\\ReputationScores\\RepliesRateScore',
};

export type RepliesRateScore = {
  /**
   * The percentage of reviews that have a reply between 0 and 1
   */
  reviewsRepliesPercentage?: number;
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
  objectType: (typeof RepliesRateScoreObjectType)[keyof typeof RepliesRateScoreObjectType];
};
