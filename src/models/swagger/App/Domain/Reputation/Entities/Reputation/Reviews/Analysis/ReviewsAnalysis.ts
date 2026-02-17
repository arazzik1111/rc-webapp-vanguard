import { ReputationDimensions } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Dimensions/ReputationDimensions';
import { ReputationTopics } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Topics/ReputationTopics';

export const ReviewsAnalysisObjectType = {
  App_Domain_Reputation_Entities_Reputation_Reviews_Analysis_ReviewsAnalysis:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Reviews\\Analysis\\ReviewsAnalysis',
};

export const ReviewsAnalysisObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Reviews_Analysis_ReviewsAnalysis:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Reviews\\Analysis\\ReviewsAnalysis',
} as const;

export type ReviewsAnalysis = {
  /**
   * Start date of Reviews included in Summary
   */
  startDate?: string;
  /**
   * End date of Reviews included in Summary
   */
  endDate?: string;
  topics?: ReputationTopics;
  dimensions?: ReputationDimensions;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewsAnalysisObjectType)[keyof typeof ReviewsAnalysisObjectType];
};
