import { ReputationTopics } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Topics/ReputationTopics';

export const ReputationDimensionEvaluationObjectType = {
  App_Domain_Reputation_Entities_Reputation_Dimensions_ReputationDimensionEvaluation:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Dimensions\\ReputationDimensionEvaluation',
};

export const ReputationDimensionEvaluationObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Dimensions_ReputationDimensionEvaluation:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Dimensions\\ReputationDimensionEvaluation',
} as const;

export type ReputationDimensionEvaluation = {
  relatedTopics?: ReputationTopics;
  /**
   * Examples backing up the stated topic
   */
  examples?: any[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationDimensionEvaluationObjectType)[keyof typeof ReputationDimensionEvaluationObjectType];
};
