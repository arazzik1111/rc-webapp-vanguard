export const AverageRatingScoreObjectType = {
  App_Domain_Reputation_Entities_Reputation_Scores_AverageRatingScore:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Scores\\AverageRatingScore',
};

export const AverageRatingScoreObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Scores_AverageRatingScore:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Scores\\AverageRatingScore',
} as const;

export type AverageRatingScore = {
  /**
   * Average rating in stars
   */
  averageRating?: number;
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
  objectType: (typeof AverageRatingScoreObjectType)[keyof typeof AverageRatingScoreObjectType];
};
