import { ReputationDimensionEvaluation } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Dimensions/ReputationDimensionEvaluation';

export const ReputationDimensionObjectType = {
  App_Domain_Reputation_Entities_Reputation_Dimensions_ReputationDimension:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Dimensions\\ReputationDimension',
};

export const ReputationDimensionObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Dimensions_ReputationDimension:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Dimensions\\ReputationDimension',
} as const;

export type ReputationDimension = {
  /**
   * Reputation dimention key for tagging Reviews
   */
  key?: string;
  /**
   * Reputation dimention name
   */
  name?: string;
  /**
   * Reputation dimention description
   */
  description?: string;
  /**
   * Tags describing the dimention
   */
  tags?: any[];
  /**
   * Overall score for current ReputationDimension
   */
  score?: number;
  negative?: ReputationDimensionEvaluation;
  neutral?: ReputationDimensionEvaluation;
  positive?: ReputationDimensionEvaluation;
  /**
   * Summary on Dimension evaluations
   */
  summary?: string;
  /**
   * Suggestions for overall improvements on Reputation issues of current Dimension
   */
  improvementSuggestions?: any[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationDimensionObjectType)[keyof typeof ReputationDimensionObjectType];
};
