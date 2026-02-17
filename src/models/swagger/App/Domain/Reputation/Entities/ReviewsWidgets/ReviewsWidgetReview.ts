export const ReviewsWidgetReviewSource = {
  googleBusinessProfile: 'google-business-profile',
  facebook: 'facebook',
};

export const ReviewsWidgetReviewObjectType = {
  App_Domain_Reputation_Entities_ReviewsWidgets_ReviewsWidgetReview:
    'App\\Domain\\Reputation\\Entities\\ReviewsWidgets\\ReviewsWidgetReview',
};

export type ReviewsWidgetReview = {
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
   * Source of Review, could be Facebook or Google
   *  Allowed Values:
   * -   `google-business-profile`
   * -   `facebook`
   *
   */
  source?: (typeof ReviewsWidgetReviewSource)[keyof typeof ReviewsWidgetReviewSource];
  /**
   * Publication date for review
   */
  publishedAt?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewsWidgetReviewObjectType)[keyof typeof ReviewsWidgetReviewObjectType];
};
