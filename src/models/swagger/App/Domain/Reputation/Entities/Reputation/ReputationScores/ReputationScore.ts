export const ReputationScoreObjectType = {
  App_Domain_Reputation_Entities_Reputation_ReputationScores_ReputationScore:
    'App\\Domain\\Reputation\\Entities\\Reputation\\ReputationScores\\ReputationScore',
};

export type ReputationScore = {
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
  objectType: (typeof ReputationScoreObjectType)[keyof typeof ReputationScoreObjectType];
};
