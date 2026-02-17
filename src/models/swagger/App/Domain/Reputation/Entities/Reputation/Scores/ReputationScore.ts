export const ReputationScoreObjectType = {
  App_Domain_Reputation_Entities_Reputation_Scores_ReputationScore:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Scores\\ReputationScore',
};

export const ReputationScoreObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Scores_ReputationScore:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Scores\\ReputationScore',
} as const;

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
