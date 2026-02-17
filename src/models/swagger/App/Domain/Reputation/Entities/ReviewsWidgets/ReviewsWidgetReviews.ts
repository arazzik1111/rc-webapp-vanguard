import { ReviewsWidgetReview } from '@models/swagger/App/Domain/Reputation/Entities/ReviewsWidgets/ReviewsWidgetReview';

export const ReviewsWidgetReviewsObjectType = {
  App_Domain_Reputation_Entities_ReviewsWidgets_ReviewsWidgetReviews:
    'App\\Domain\\Reputation\\Entities\\ReviewsWidgets\\ReviewsWidgetReviews',
};

export type ReviewsWidgetReviews = {
  elements?: ReviewsWidgetReview[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewsWidgetReviewsObjectType)[keyof typeof ReviewsWidgetReviewsObjectType];
};
