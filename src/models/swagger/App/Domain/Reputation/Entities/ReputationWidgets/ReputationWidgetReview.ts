export const ReputationWidgetReviewObjectType = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReputationWidgetReview:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReputationWidgetReview',
};

export const ReputationWidgetReviewObjectTypeStrict = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReputationWidgetReview:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReputationWidgetReview',
} as const;

export type ReputationWidgetReview = {
  /**
   * Review's description
   */
  description?: string;
  /**
   * The author's name, null if it's anonymous
   */
  authorName?: string;
  rating?: number;
  /**
   * Name of the source
   */
  sourceName?: string;
  /**
   * Source alias of the Review
   */
  source?: string;
  /**
   * Publication date for review
   */
  publishedAt?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationWidgetReviewObjectType)[keyof typeof ReputationWidgetReviewObjectType];
};
