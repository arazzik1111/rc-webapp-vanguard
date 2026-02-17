export const ReviewsCollectorWidgetReviewSourceObjectType = {
  App_Domain_Reputation_Entities_ReviewsCollectorWidgets_ReviewsCollectorWidgetReviewSource:
    'App\\Domain\\Reputation\\Entities\\ReviewsCollectorWidgets\\ReviewsCollectorWidgetReviewSource',
};

export const ReviewsCollectorWidgetReviewSourceObjectTypeStrict = {
  App_Domain_Reputation_Entities_ReviewsCollectorWidgets_ReviewsCollectorWidgetReviewSource:
    'App\\Domain\\Reputation\\Entities\\ReviewsCollectorWidgets\\ReviewsCollectorWidgetReviewSource',
} as const;

export type ReviewsCollectorWidgetReviewSource = {
  /**
   * The review source platform
   */
  platform?: string;
  /**
   * The review source URL
   */
  url?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewsCollectorWidgetReviewSourceObjectType)[keyof typeof ReviewsCollectorWidgetReviewSourceObjectType];
};
