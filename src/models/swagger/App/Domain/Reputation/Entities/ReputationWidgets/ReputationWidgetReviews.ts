import { ReputationWidgetReview } from '@models/swagger/App/Domain/Reputation/Entities/ReputationWidgets/ReputationWidgetReview';

export const ReputationWidgetReviewsObjectType = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReputationWidgetReviews:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReputationWidgetReviews',
};

export const ReputationWidgetReviewsObjectTypeStrict = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReputationWidgetReviews:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReputationWidgetReviews',
} as const;

export type ReputationWidgetReviews = {
  elements?: ReputationWidgetReview[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationWidgetReviewsObjectType)[keyof typeof ReputationWidgetReviewsObjectType];
};
