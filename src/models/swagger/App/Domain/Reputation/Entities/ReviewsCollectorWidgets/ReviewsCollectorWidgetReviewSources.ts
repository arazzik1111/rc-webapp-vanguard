import { ReviewsCollectorWidgetReviewSource } from '@models/swagger/App/Domain/Reputation/Entities/ReviewsCollectorWidgets/ReviewsCollectorWidgetReviewSource';

export const ReviewsCollectorWidgetReviewSourcesObjectType = {
  App_Domain_Reputation_Entities_ReviewsCollectorWidgets_ReviewsCollectorWidgetReviewSources:
    'App\\Domain\\Reputation\\Entities\\ReviewsCollectorWidgets\\ReviewsCollectorWidgetReviewSources',
};

export const ReviewsCollectorWidgetReviewSourcesObjectTypeStrict = {
  App_Domain_Reputation_Entities_ReviewsCollectorWidgets_ReviewsCollectorWidgetReviewSources:
    'App\\Domain\\Reputation\\Entities\\ReviewsCollectorWidgets\\ReviewsCollectorWidgetReviewSources',
} as const;

export type ReviewsCollectorWidgetReviewSources = {
  elements?: ReviewsCollectorWidgetReviewSource[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewsCollectorWidgetReviewSourcesObjectType)[keyof typeof ReviewsCollectorWidgetReviewSourcesObjectType];
};
